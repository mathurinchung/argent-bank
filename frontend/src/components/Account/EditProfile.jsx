import PropTypes from 'prop-types';
import { EditProfileForm } from '../Forms';

/**
 * A functional component that renders a form to edit user profile information.
 *
 * @param { Function } submit - The function to call when the form is submitted.
 * @param { Function } change - The function to call when the value of an input field changes.
 * @param { Function } click - The function to call when a button is clicked.
 * @returns { JSX.Element } The JSX element for the edit profile form.
 */
function EditProfile({ submit, change, click }) {
  return (
    <div className="header edit-profile">
      <h1>Welcome back</h1>

      <EditProfileForm onHandle={{ submit, change, click }} />
    </div>
  );
}

EditProfile.propTypes = {
  submit: PropTypes.func.isRequired, // The function to call when the form is submitted.
  change: PropTypes.func.isRequired, // The function to call when the value of an input field changes.
  click: PropTypes.func.isRequired   // The function to call when a button is clicked.
};

export default EditProfile;
