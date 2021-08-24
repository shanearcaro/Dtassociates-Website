import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';

const App = () => {
  return (
    <Router>
      <Navbar mobileView={false}/>
      <Hero />
    </Router>
  );
}

export default App;
