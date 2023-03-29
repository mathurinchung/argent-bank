import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute() {
  const success = useSelector(state => state.user.success);

  return (!success) ? (<Navigate to="/login" />) : (<Outlet />);
}

export default PrivateRoute;