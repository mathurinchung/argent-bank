import { Routes, Route } from 'react-router-dom';
import { Home, Signin, User } from '../../pages';

function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/signin" element={ <Signin /> } />
      <Route path="/user" element={ <User /> } />
    </Routes>
  );
}

export default Router;
