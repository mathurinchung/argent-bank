import PropTypes from 'prop-types';

/**
 * A functional component that renders a header for the user profile page.
 *
 * @param { Object } userProfile - An object representing the user's profile.
 * @param { String } userProfile.firstName - The first name of the user.
 * @param { String } userProfile.lastName - The last name of the user.
 * @param { Function } click - The function to call when the Edit Name button is clicked.
 * @returns { JSX.Element } The JSX element for the profile header.
 */
function ProfileHeader({ userProfile, click }) {
  return (
    <div className="header">
      <h1>Welcome back<br />{`${ userProfile.firstName } ${ userProfile.lastName }!`}</h1>
      <button className="edit-button" onClick={ click }>Edit Name</button>
    </div>
  );
}

ProfileHeader.propTypes = {
  // An object representing the user's profile.
  userProfile: PropTypes.shape({
    firstName: PropTypes.string.isRequired, // The first name of the user.
    lastName: PropTypes.string.isRequired   // The last name of the user.
  }).isRequired,
  click: PropTypes.func.isRequired // The function to call when the Edit Name button is clicked.
};

export default ProfileHeader;
