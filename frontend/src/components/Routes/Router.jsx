import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { Errors } from '@/pages/Errors';
import AuthRoute from './AuthRoute';
import { Login, Logout } from '@/pages/Auth';
import PrivateRoute from './PrivateRoute';
import { Profile } from '@/pages/Profile';

/**
 * A React component that defines the application's routing hierarchy using Routes, Route, and Navigate components from react-router-dom. The component specifies routes for the home page, error pages, authentication, and protected pages.
 *
 * @returns { JSX.Element } A JSX element representing the application's routing hierarchy.
 */
function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />

      <Route path="/error/:errorParams" element={ <Errors /> } />
      <Route path="*" element={ <Navigate to="/error/notfound" /> } />

      <Route element={ <AuthRoute /> }>
        <Route path="/login" element={ <Login /> } />
      </Route>

      <Route element={ <PrivateRoute /> }>
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/logout" element={ <Logout /> } />
      </Route>
    </Routes>
  );
}

export default Router;
