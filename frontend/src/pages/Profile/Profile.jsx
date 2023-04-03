import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useUpdateUserProfile, useErrorsHandling } from '@/hooks';
import { Main } from '@/components/Layout';
import { ProfileHeader, EditProfile, AccountSection } from '@/components/Account';
import accounts from '@/data/accounts.json';

function Profile() {
  const { errorsHandling } = useErrorsHandling();
  const { firstName, lastName } = useSelector(state => state.user.current);

  const [ edit, setEdit ] = useState(false);
  const [ userProfile, setUserProfile ] = useState({ firstName, lastName });

  const { updateUser } = useUpdateUserProfile();

  const handleClick = event => {
    setEdit(!edit);
    setUserProfile({ firstName, lastName });
  };

  const handleChange = ({ currentTarget }) => {
    const { id, value } = currentTarget;

    setUserProfile((value.trim() === '') ? { ...userProfile } : { ...userProfile, [ id ]: value });
  };
  
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

  return (
    <Main className="main bg-dark">
      { (!edit) ? <ProfileHeader userProfile={{ firstName, lastName }} click={ handleClick } /> : <EditProfile submit={ handleSubmit } change={ handleChange } click={ handleClick } /> }

      <h2 className="sr-only">Accounts</h2>
      { accounts.map((account, index) => <AccountSection key={ index } account={ account } />) }
    </Main>
  );
}

export default Profile;
