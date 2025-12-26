import './About.css';

function About() {
  const qualifications = [
    {
      degree: "Master of Science in Mathematics",
      university: "Rockview University",
      year: "2020-2022",
      description: "Specialized in Advanced Mathematical Analysis and Computational Mathematics. Thesis on 'Non-linear Differential Equations in Quantum Mechanics'.",
      icon: "🎓"
    },
    {
      degree: "Bachelor of Science in Mathematics",
      university: "University of Zambia",
      year: "2015-2019",
      description: "Graduated with First Degree. Majored in Pure Mathematics with minors in Civic Education.",
      icon: "📚"
    },
    {
      certification: "Certified Mathematics Educator",
      institution: "International Math Teaching Association",
      year: "2021",
      description: "Advanced teaching methodologies for mathematics education across different learning styles.",
      icon: "🏆"
    }
  ];

  const teachingPhilosophy = [
    "Every student has unique learning patterns - I adapt my teaching style accordingly",
    "Mathematics is not about memorization, but understanding fundamental concepts",
    "Real-world applications make abstract concepts tangible and memorable",
    "Building confidence is as important as building competence",
    "Patience and repetition are key to mastering complex topics"
  ];

  const expertiseAreas = [
    { name: "Advanced Calculus", level: "Expert", icon: "∫" },
    { name: "Statistical Analysis", level: "Expert", icon: "📊" },
    { name: "Linear Algebra", level: "Expert", icon: "⎡⎣⎤⎦" },
    { name: "Mathematical Physics", level: "Advanced", icon: "⚛️" },
    { name: "Research Methodology", level: "Advanced", icon: "🔬" },
    { name: "Academic Writing", level: "Expert", icon: "✍️" }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-header">
          <h2 className="about-title">About Your Tutor</h2>
          <p className="about-subtitle">
            MSc Mathematics Expert with 8+ years of teaching experience, 
            dedicated to helping students master mathematical concepts at all levels.
          </p>
        </div>

        <div className="about-content">
          {/* Left Column - Qualifications */}
          <div className="qualifications-section">
            <h3 className="section-title">
              <span className="title-icon">🎓</span> Academic Qualifications
            </h3>
            
            <div className="qualifications-grid">
              {qualifications.map((qual, index) => (
                <div className="qualification-card" key={index}>
                  <div className="qual-icon">{qual.icon}</div>
                  <div className="qual-content">
                    <h4>{qual.degree || qual.certification}</h4>
                    <div className="qual-meta">
                      <span className="university">{qual.university || qual.institution}</span>
                      <span className="year">{qual.year}</span>
                    </div>
                    <p className="qual-description">{qual.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience Stats */}
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
              <div className="stat-item">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Tutoring Hours</div>
              </div>
            </div>
          </div>

          {/* Right Column - Philosophy & Expertise */}
          <div className="philosophy-section">
            {/* Teaching Philosophy */}
            <div className="philosophy-card">
              <h3 className="section-title">
                <span className="title-icon">💡</span> Teaching Philosophy
              </h3>
              <ul className="philosophy-list">
                {teachingPhilosophy.map((point, index) => (
                  <li key={index} className="philosophy-point">
                    <span className="check-icon">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas of Expertise */}
            <div className="expertise-card">
              <h3 className="section-title">
                <span className="title-icon">⭐</span> Areas of Expertise
              </h3>
              <div className="expertise-grid">
                {expertiseAreas.map((area, index) => (
                  <div className="expertise-item" key={index}>
                    <span className="expertise-icon">{area.icon}</span>
                    <div className="expertise-details">
                      <h4>{area.name}</h4>
                      <div className="expertise-level">
                        <span className="level-dot" style={{ 
                          backgroundColor: area.level === 'Expert' ? '#10B981' : '#3B82F6' 
                        }}></span>
                        {area.level}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Note */}
            <div className="personal-note">
              <h3 className="section-title">
                <span className="title-icon">👨‍🏫</span> A Personal Note
              </h3>
              <p className="note-content">
                "My journey from the University of Zambia to Rockview University taught me that 
                mathematics is a universal language. I'm passionate about making this language 
                accessible to everyone, whether you're struggling with basic algebra or tackling 
                advanced calculus. My goal is not just to help you pass exams, but to develop 
                genuine mathematical intuition that will serve you throughout your academic 
                and professional career."
              </p>
              <div className="signature">
                <strong>— MSc Mathematics Tutor</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="about-cta">
          <h3>Ready to Master Mathematics?</h3>
          <p>Book a free assessment session to discuss your learning goals</p>
          <div className="cta-buttons">
            <button className="btn-primary">
              📞 Book Free Assessment
            </button>
            <button className="btn-outline">
              📧 View Full CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;