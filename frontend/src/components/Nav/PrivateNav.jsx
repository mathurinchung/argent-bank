import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * A React component that renders a private navigation bar using the NavLink component from react-router-dom.
 *
 * @param { String } firstName - The first name of the authenticated user.
 * @returns { JSX.Element } A JSX element representing the private navigation bar.
 */
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
  firstName: PropTypes.string // The first name of the authenticated user.
};

export default PrivateNav;