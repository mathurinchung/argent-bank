import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AuthRoute() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (isLoggedIn) ? (<Navigate to="/profile" />) : (<Outlet />);
}

export default AuthRoute;

