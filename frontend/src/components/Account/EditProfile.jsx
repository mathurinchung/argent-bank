import PropTypes from 'prop-types';
import { EditProfileForm } from '../Forms';

function EditProfile({ submit, change, click }) {
  return (
    <div className="header edit-profile">
      <h1>Welcome back</h1>

      <EditProfileForm onHandle={{ submit, change, click }} />
    </div>
  );
}

EditProfile.propTypes = {
  submit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  click: PropTypes.func.isRequired
};

export default EditProfile;
