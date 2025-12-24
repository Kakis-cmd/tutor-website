// Open src/components/Navbar/Navbar.jsx
// Replace with this code:

import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>🎓 MathMasters</h2>
        <p className="tagline">MSc Mathematics Expert</p>
      </div>
      <div className="nav-links">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#contact" className="nav-link">Contact</a>
        <button className="nav-button">Book Session</button>
      </div>
    </nav>
  );
}

export default Navbar;