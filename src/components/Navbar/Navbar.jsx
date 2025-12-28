import './Navbar.css';

function Navbar({ onNavClick, activeSection }) {
  const handleNavClick = (sectionId, e) => {
    e.preventDefault();
    onNavClick(sectionId);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>🎓 MathMasters</h2>
        <p className="tagline">MSc Mathematics | Expert Tutor</p>
      </div>
      <div className="nav-links">
        <a 
          href="#home" 
          className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
          onClick={(e) => handleNavClick('home', e)}
        >
          Home
        </a>
        <a 
          href="#services" 
          className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
          onClick={(e) => handleNavClick('services', e)}
        >
          Services
        </a>
        <a 
          href="#about" 
          className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          onClick={(e) => handleNavClick('about', e)}
        >
          About
        </a>
        <a 
          href="#contact" 
          className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={(e) => handleNavClick('contact', e)}
        >
          Contact
        </a>
        <button className="nav-button">Book Session</button>
      </div>
    </nav>
  );
}

export default Navbar;