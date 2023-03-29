import { NavLink } from 'react-router-dom';

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

export default PrivateNav;