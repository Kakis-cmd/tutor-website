import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Services from './components/Services/Services.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';  // Add this import

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />  {/* Add this line */}
      
      <footer className="footer">
        <div className="footer-content">
          <p>📞 Contact: +260 97 XXX XXXX</p>
          <p>✉️ Email: math.expert@example.com</p>
          <p className="copyright">© {new Date().getFullYear()} MathMasters Tutoring. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;