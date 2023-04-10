import { NavLink } from 'react-router-dom';

/**
 * A React component that renders an authenticated navigation link using the NavLink component from react-router-dom.
 *
 * @returns { JSX.Element } A JSX element representing the authenticated navigation link.
 */
function AuthNav() {
  return (
    <NavLink className="main-nav-item" to="/login">
      <i className="fa fa-user-circle"></i> Sign In
    </NavLink>
  );
}

export default AuthNav;
