import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetUserProfile, useExpiresIn } from './hooks';
import { Nav, Footer } from './components/Layout';
import { Router } from './components/Routes';

function App() {
  const location = useLocation();
  const { getExpiresIn } = useExpiresIn();
  const { getUser } = useGetUserProfile();

  useEffect(() => {
    getExpiresIn();
  }, [ location.pathname ]);

  useEffect(() => { getUser(); }, []);

  return (
    <div className="App">
      <Nav />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
