import { EditProfileForm } from '../Forms';

function EditProfile({ onHandle }) {
  return (
    <div className="header edit-profile">
      <h1>Welcome back</h1>

      <EditProfileForm onHandle={ onHandle } />
    </div>
  );
}

export default EditProfile;
