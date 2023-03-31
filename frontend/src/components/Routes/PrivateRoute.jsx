import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (!isLoggedIn) ? (<Navigate to="/login" />) : (<Outlet />);
}

export default PrivateRoute;
