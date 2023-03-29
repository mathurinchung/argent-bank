import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useUpdateUserProfile } from '../../hooks';
import { Main } from '../../components/Layout';
import { ProfileHeader, EditProfile, AccountSection } from '../../components/Account';
import accounts from '../../data/accounts.json';

function Profile() {
  const { firstName, lastName } = useSelector(state => state.user.current);
  const currentUser = { firstName, lastName };

  const [ edit, setEdit ] = useState(false)
  const [ userProfile, setUserProfile ] = useState({ firstName, lastName });
  const { updateUser } = useUpdateUserProfile();

  const handleClick = event => {
    event.preventDefault();

    setEdit(!edit);
  };

  const handleChange = ({ currentTarget }) => {
    const { id, value } = currentTarget;

    return (value.trim() === '') ? setUserProfile({ ...currentUser }) : setUserProfile({ ...userProfile, [ id ]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    updateUser(userProfile);
    setEdit(false);
  };

  return (
    <Main className="main bg-dark">
      { (!edit) ? <ProfileHeader userProfile={{ firstName, lastName }} click={ handleClick } /> : <EditProfile onHandle={{ submit: handleSubmit, change: handleChange, click: handleClick }} /> }

      <h2 className="sr-only">Accounts</h2>
      { accounts.map((account, index) => <AccountSection key={ index } account={ account } />) }
    </Main>
  );
}

export default Profile;