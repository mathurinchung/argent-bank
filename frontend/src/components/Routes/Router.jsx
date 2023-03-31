import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../../pages/Home';
import AuthRoute from './AuthRoute';
import { Login, Logout } from '../../pages/Auth';
import PrivateRoute from './PrivateRoute';
import { Profile } from '../../pages/Profile';

function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />

      <Route path="/notfound" element={ <p>404</p> } />
      <Route path="*" element={ <Navigate to="/notfound" /> } />

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
