import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useUpdateUserProfile, useErrorsHandling } from '@/hooks';
import { Main } from '@/components/Layout';
import { ProfileHeader, EditProfile, AccountSection } from '@/components/Account';
import accounts from '@/data/accounts.json';

/**
 * React component that displays a user's profile information and allows the user to edit their profile.
 *
 * @returns JSX element
 */
function Profile() {
  const { errorsHandling } = useErrorsHandling();
  const { firstName, lastName } = useSelector(state => state.user.current);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  const [ edit, setEdit ] = useState(false);
  const [ userProfile, setUserProfile ] = useState({ firstName, lastName });

  const { updateUser } = useUpdateUserProfile();

  /**
   * Toggles the edit mode for the profile.
   */
  const handleClick = event => {
    setEdit(!edit);
    setUserProfile({ firstName, lastName });
  };

  /**
   * Handles changes in the form inputs.
   *
   * @param { Object } event - The event object.
   */
  const handleChange = ({ currentTarget }) => {
    const { id, value } = currentTarget;

    setUserProfile((value.trim() === '') ? { ...userProfile } : { ...userProfile, [ id ]: value });
  };

  /**
   * Handles the form submission.
   *
   * @param { Object } event - The event object.
   */
  const handleSubmit = async event => {
    event.preventDefault();

    try {
      if (userProfile.firstName.trim() === '') setUserProfile({ ...userProfile, firstName });
      if (userProfile.lastName.trim() === '') setUserProfile({ ...userProfile, lastName });

      await updateUser(userProfile);

      setEdit(false);
    } catch(error) {
      console.log(error);
      errorsHandling(error);
    }
  };

  if (!isLoggedIn) return <Navigate to="/error/unauthorized" /> 

  return (
    <Main className="main bg-dark">
      { (!edit) ? <ProfileHeader userProfile={{ firstName, lastName }} click={ handleClick } /> : <EditProfile submit={ handleSubmit } change={ handleChange } click={ handleClick } /> }

      <h2 className="sr-only">Accounts</h2>
      { accounts.map((account, index) => <AccountSection key={ index } account={ account } />) }
    </Main>
  );
}

export default Profile;
