import { useGetUserProfile } from './hooks';
import { Nav, Footer } from './components/Layout';
import { Router } from './components/Routes';

function App() {
  const { getUser } = useGetUserProfile();
  getUser();

  return (
    <div className="App">
      <Nav />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
