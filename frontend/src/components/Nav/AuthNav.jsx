import { NavLink } from 'react-router-dom';

function AuthNav() {
  return (
    <NavLink className="main-nav-item" to="/login">
      <i className="fa fa-user-circle"></i> Sign In
    </NavLink>
  );
}

export default AuthNav;
