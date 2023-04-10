import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * A React component that conditionally renders either a redirect to an unauthorized error page or the child routes using Outlet component from react-router-dom based on whether the user is authenticated.
 *
 * @returns { JSX.Element } A JSX element representing the private route.
 */
function PrivateRoute() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (!isLoggedIn ? <Navigate to="/error/unauthorized" /> : <Outlet />);
}

export default PrivateRoute;
