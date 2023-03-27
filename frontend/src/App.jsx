import { Nav, Footer } from './components/Layout';
import { Router } from './components/Routes';
// import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
