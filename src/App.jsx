import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Services from './components/Services/Services.jsx';
import About from './components/About/About.jsx';  

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <About /> 
    </div>
  );
}

export default App;