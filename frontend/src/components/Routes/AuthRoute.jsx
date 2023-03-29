import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AuthRoute() {
  const success = useSelector(state => state.user.success);

  return (success) ? (<Navigate to="/profile" />) : (<Outlet />);
}

export default AuthRoute;