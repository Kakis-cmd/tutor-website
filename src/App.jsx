import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Services from './components/Services/Services.jsx';
import About from './components/About/About.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Contact from './components/Contact/Contact.jsx';
// REMOVED: import Blog from './components/Blog/Blog.jsx';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Add scroll listener to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;
    
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Function to handle navigation clicks
  const handleNavClick = (section) => {
    setActiveSection(section);
    
    // Scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar 
        activeSection={activeSection} 
        onNavClick={handleNavClick} 
      />
      
      <Hero id="home" />
      <Services id="services" />
      <About id="about" />
      <Testimonials id="testimonials" />
      <Contact id="contact" />
      
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