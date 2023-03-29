import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import AuthNav from './AuthNav';
import PrivateNav from './PrivateNav';
import logo from '../../assets/img/argentBankLogo.png';

function Nav() {
  const success = useSelector(state => state.user.success);
  const { firstName } = useSelector(state => state.user.current);

  return (
    <nav id="nav" className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={ logo } alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>

      <div>
      { (!success) ? <AuthNav /> : <PrivateNav firstName={ firstName } /> }
      </div>
    </nav>
  );
}

export default Nav;
