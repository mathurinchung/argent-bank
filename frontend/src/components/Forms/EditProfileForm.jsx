import PropTypes from 'prop-types';

/**
 * A functional component that renders a form for editing user profile information.
 *
 * @param { Object } onHandle - An object containing callback functions for handling form events.
 * @param { Function } onHandle.submit - The callback function to handle form submission.
 * @param { Function } onHandle.change - The callback function to handle changes to form inputs.
 * @param { Function } onHandle.click - The callback function to handle the cancel button click.
 * @returns { JSX.Element } The JSX element for the edit profile form.
 */
function EditProfileForm({ onHandle }) {
  const { submit, change, click } = onHandle;

  return (
    <form onSubmit={ submit }>
      <input id="firstName" type="text" placeholder="Firstname" onChange={ change } />
      <input id="lastName" type="text" placeholder="Lastname" onChange={ change } />

      <button className="edit-button" type="submit">Save</button>
      <button className="edit-button" type="button" onClick={ click }>Cancel</button>
    </form>
  );
}

EditProfileForm.propTypes = {
  // The callback function to handle form submission.
  onHandle: PropTypes.shape({
    submit: PropTypes.func.isRequired, // The callback function to handle form submission.
    change: PropTypes.func.isRequired, // The callback function to handle changes to form inputs.
    click: PropTypes.func.isRequired   // The callback function to handle the cancel button click.
  }).isRequired
};

export default EditProfileForm;