import { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const features = [
    { icon: '🎯', text: 'Personalized Learning Plans' },
    { icon: '📊', text: 'Data-Driven Progress Tracking' },
    { icon: '⚡', text: 'Fast Results Guaranteed' },
    { icon: '🏆', text: '95% Student Success Rate' }
  ];

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  const stats = [
    { number: '8+', label: 'Years Experience' },
    { number: '200+', label: 'Students Taught' },
    { number: '5000+', label: 'Hours Tutoring' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="bg-pattern-1"></div>
        <div className="bg-pattern-2"></div>
        <div className="floating-math-icon">∫</div>
        <div className="floating-math-icon">∑</div>
        <div className="floating-math-icon">∞</div>
      </div>
      
      <div className="hero-container">
        {/* Left Column */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🏆</span>
            <span className="badge-text">Top-Rated Mathematics Tutor</span>
          </div>
          
          <h1 className="hero-title">
            Transform Your 
            <span className="title-highlight"> Math Grades</span> 
            with Expert Tutoring
          </h1>
          
          <p className="hero-subtitle">
            MSc Mathematics Expert helping students from <strong>High School to PhD level</strong> 
            master complex concepts, ace exams, and build lasting mathematical confidence.
          </p>
          
          {/* Rotating Features */}
          <div className="features-slider">
            <div className="feature-display">
              <span className="feature-icon">{features[currentFeature].icon}</span>
              <span className="feature-text">{features[currentFeature].text}</span>
            </div>
            <div className="feature-dots">
              {features.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentFeature ? 'active' : ''}`}
                  onClick={() => setCurrentFeature(index)}
                />
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="hero-cta">
            <button className="cta-primary">
              <span className="cta-icon">🎯</span>
              <span className="cta-text">Book Free Assessment</span>
            </button>
            <button className="cta-secondary">
              <span className="cta-icon">📞</span>
              <span className="cta-text">+260 97 XXX XXXX</span>
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="trust-indicators">
            <div className="trust-item">
              <span className="trust-icon">✅</span>
              <span className="trust-text">No-Risk 100% Satisfaction Guarantee</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✅</span>
              <span className="trust-text">Free First Session Assessment</span>
            </div>
          </div>
        </div>
        
        {/* Right Column - Stats & Visual */}
        <div className="hero-sidebar">
          {/* Stats Cards */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Student Testimonial Preview */}
          <div className="testimonial-preview">
            <div className="quote-mark">"</div>
            <p className="testimonial-text">
              Went from failing calculus to top of my class in 3 months!
            </p>
            <div className="student-info">
              <div className="student-avatar">👨‍🎓</div>
              <div className="student-details">
                <div className="student-name">James T.</div>
                <div className="student-course">University Mathematics</div>
              </div>
              <div className="rating">★★★★★</div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="quick-links">
            <h3 className="quick-links-title">Popular Services:</h3>
            <div className="links-grid">
              <a href="#services" className="quick-link">
                <span className="link-icon">📈</span>
                <span className="link-text">Calculus Tutoring</span>
              </a>
              <a href="#services" className="quick-link">
                <span className="link-icon">📊</span>
                <span className="link-text">Statistics Help</span>
              </a>
              <a href="#services" className="quick-link">
                <span className="link-icon">🎓</span>
                <span className="link-text">Thesis Writing</span>
              </a>
              <a href="#services" className="quick-link">
                <span className="link-icon">📝</span>
                <span className="link-text">Exam Prep</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span className="scroll-text">Explore More</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
}

export default Hero;