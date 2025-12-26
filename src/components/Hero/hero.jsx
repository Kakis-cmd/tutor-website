import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Master <span className="highlight">Mathematics</span> with MSc Expert
          </h1>
          <p className="hero-subtitle">
            8+ years tutoring experience. Specializing in Advanced Calculus, 
            Statistics, Physics, and University-level Mathematics.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">
              📚 Book Free Assessment
            </button>
            <button className="btn btn-secondary">
              📞 +260 97 XXX XXXX
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;