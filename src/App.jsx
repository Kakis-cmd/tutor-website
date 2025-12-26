import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Services from './components/Services/Services.jsx';  // Add this import

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />  {/* Add this line - This renders the Services section */}
    </div>
  );
}

export default App;