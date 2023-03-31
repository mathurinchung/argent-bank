import PropTypes from 'prop-types';

function ProfileHeader({ userProfile, click }) {
  return (
    <div className="header">
      <h1>Welcome back<br />{`${userProfile.firstName} ${userProfile.lastName}!`}</h1>
      <button className="edit-button" onClick={ click }>Edit Name</button>
    </div>
  );
}

ProfileHeader.propTypes = {
  userProfile: PropTypes.object.isRequired,
  click: PropTypes.func.isRequired
};

export default ProfileHeader;
