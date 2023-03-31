import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateNav({ firstName }) {
  return (
    <>
      <NavLink className="main-nav-item" to="/profile">
        <i className="fa fa-user-circle"></i>
        { firstName }
      </NavLink>
      <NavLink className="main-nav-item" to="/logout">
        <i className="fa fa-sign-out"></i>
        Sign Out
      </NavLink>
    </>
  );
}

PrivateNav.propTypes = {
  firstName: PropTypes.string
};

export default PrivateNav;