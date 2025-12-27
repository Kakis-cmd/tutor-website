import './Navbar.css';

function Navbar() {
  const scrollToBooking = (e) => {
    e.preventDefault();
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div 
        className="logo" 
        onClick={(e) => scrollToSection(e, 'home')}
        style={{ cursor: 'pointer' }}
      >
        <h2>🎓 MathMasters</h2>
        <p className="tagline">MSc Mathematics Expert</p>
      </div>
      <div className="nav-links">
        <a 
          href="#home" 
          className="nav-link" 
          onClick={(e) => scrollToSection(e, 'home')}
        >
          Home
        </a>
        <a 
          href="#services" 
          className="nav-link" 
          onClick={(e) => scrollToSection(e, 'services')}
        >
          Services
        </a>
        <a 
          href="#about" 
          className="nav-link" 
          onClick={(e) => scrollToSection(e, 'about')}
        >
          About
        </a>
        <a 
          href="#testimonials" 
          className="nav-link" 
          onClick={(e) => scrollToSection(e, 'testimonials')}
        >
          Testimonials
        </a>
        <a 
          href="#blog" 
          className="nav-link" 
          onClick={(e) => scrollToSection(e, 'blog')}
        >
          Blog
        </a>
        <a 
          href="#contact" 
          className="nav-link" 
          onClick={(e) => scrollToSection(e, 'contact')}
        >
          Contact
        </a>

      </div>
    </nav>
  );
}

export default Navbar;