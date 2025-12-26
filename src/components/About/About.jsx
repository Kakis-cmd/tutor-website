import './About.css';

function About() {
  const qualifications = [
    {
      degree: "Master of Science in Mathematics",
      university: "Royalview University",
      year: "2020-2022",
      description: "Specialized in Advanced Mathematical Analysis and Computational Mathematics.",
      icon: "🎓"
    },
    {
      degree: "Bachelor of Science in Mathematics",
      university: "University of Zambia",
      year: "2015-2019",
      description: "Graduated with First Class Honors. Majored in Pure Mathematics.",
      icon: "📚"
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-header">
          <h2 className="about-title">About Your Tutor</h2>
          <p className="about-subtitle">
            MSc Mathematics Expert with 8+ years of teaching experience.
          </p>
        </div>

        <div className="about-content">
          <div className="qualifications-section">
            <h3 className="section-title">Academic Qualifications</h3>
            
            <div className="qualifications-grid">
              {qualifications.map((qual, index) => (
                <div className="qualification-card" key={index}>
                  <div className="qual-icon">{qual.icon}</div>
                  <div className="qual-content">
                    <h4>{qual.degree}</h4>
                    <div className="qual-meta">
                      <span className="university">{qual.university}</span>
                      <span className="year">{qual.year}</span>
                    </div>
                    <p className="qual-description">{qual.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="experience-stats">
              <div className="stat-item">
                <div className="stat-number">8+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">200+</div>
                <div className="stat-label">Students Taught</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="personal-note">
            <h3 className="section-title">A Personal Note</h3>
            <p className="note-content">
              "My journey from the University of Zambia to Royalview University taught me that 
              mathematics is a universal language. I'm passionate about making this language 
              accessible to everyone."
            </p>
            <div className="signature">
              <strong>— MSc Mathematics Tutor</strong>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <h3>Ready to Master Mathematics?</h3>
          <p>Book a free assessment session to discuss your learning goals</p>
          <button className="btn-primary">
            📞 Book Free Assessment
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;