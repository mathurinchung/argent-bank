import PropTypes from 'prop-types';

function EditProfileForm({ onHandle }) {
  const { submit, change, click } = onHandle;

  return (
    <form onSubmit={ submit }>
      <input id="firstName" type="text" placeholder="Tony" onChange={ change } />
      <input id="lastName" type="text" placeholder="Jarvis" onChange={ change } />

      <button className="edit-button" type="submit">Save</button>
      <button className="edit-button" type="button" onClick={ click }>Cancel</button>
    </form>
  );
}

EditProfileForm.propTypes = {
  onHandle: PropTypes.object.isRequired
};

export default EditProfileForm;