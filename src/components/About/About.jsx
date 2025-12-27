import './About.css';

function About() {
  const qualifications = [
    {
      degree: "Master of Science in Mathematics",
      university: "Rockview University",
      year: "2020-2022",
      description: "Specialized in Advanced Mathematical Analysis, Numerical Methods, and Applied Mathematics. Published research on computational algorithms.",
      icon: "🎓",
      achievements: ["Published 2 research papers", "Graduated with Distinction", "Teaching Assistant Award"]
    },
    {
      degree: "Bachelor of Science in Mathematics",
      university: "University of Zambia",
      year: "2015-2019",
      description: "Graduated with First Class Honors (GPA: 4.8/5.0). Majored in Pure Mathematics with minors in Statistics and Computer Science.",
      icon: "📚",
      achievements: ["Valedictorian", "Mathematics Department Award", "Student Research Grant"]
    },
    {
      degree: "Certified Mathematics Educator",
      university: "International Teaching Council",
      year: "2021",
      description: "Advanced certification in modern pedagogical techniques and student-centered learning methodologies.",
      icon: "🏅",
      achievements: ["Active Learning Specialist", "Digital Teaching Tools Certified", "Assessment Design Expert"]
    }
  ];

  const specializations = [
    { name: "Calculus & Analysis", icon: "∫", level: "Advanced" },
    { name: "Linear Algebra", icon: "⎡⎣⎤⎦", level: "Expert" },
    { name: "Statistics & Probability", icon: "📊", level: "Advanced" },
    { name: "Differential Equations", icon: "∂", level: "Expert" },
    { name: "Number Theory", icon: "#", level: "Intermediate" },
    { name: "Mathematical Modeling", icon: "📈", level: "Advanced" }
  ];

  const successStories = [
    {
      student: "Sarah K. (Grade 12)",
      result: "Improved from 45% to 92%",
      testimonial: "From failing mathematics to being the top student in my class!",
      icon: "⭐"
    },
    {
      student: "James M. (University)",
      result: "Aced Calculus III",
      testimonial: "His explanations made complex concepts incredibly simple.",
      icon: "🎯"
    },
    {
      student: "Parents of Lisa",
      result: "Full Scholarship",
      testimonial: "Our daughter got a full scholarship thanks to her improved grades.",
      icon: "🏆"
    }
  ];

  const teachingPrinciples = [
    {
      title: "Conceptual Understanding",
      description: "Focus on 'why' before 'how' to build strong foundations",
      icon: "🧠"
    },
    {
      title: "Real-World Applications",
      description: "Connect abstract concepts to practical situations",
      icon: "🌍"
    },
    {
      title: "Personalized Approach",
      description: "Custom lessons based on learning style and goals",
      icon: "🎯"
    },
    {
      title: "Growth Mindset",
      description: "Build confidence and resilience in problem-solving",
      icon: "📈"
    }
  ];

  const handleBookAssessment = () => {
    // Scroll to contact section and open booking
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // You can trigger booking modal here if implemented
    }
  };

  return (
    <section className="about" id="about">
      {/* Animated Background Elements */}
      <div className="math-background">
        <div className="math-symbol">π</div>
        <div className="math-symbol">∞</div>
        <div className="math-symbol">∑</div>
        <div className="math-symbol">∫</div>
      </div>

      <div className="container">
        {/* Hero Header */}
        <div className="about-hero">
          <div className="badge">🔬 MSc Mathematics Expert</div>
          <h1 className="about-title">
            Transform Your Mathematics Journey with  
            <span className="title-highlight"> MathMaster Tutor </span> 
          </h1>
          <p className="hero-subtitle">
            8+ years transforming students' relationship with mathematics — from anxiety to excellence
          </p>
        </div>

        {/* Quick Stats Banner */}
        <div className="stats-banner">
          <div className="stat-card">
            <div className="stat-number">500+</div>
            <div className="stat-label">Hours of Tutoring</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">98%</div>
            <div className="stat-label">Student Satisfaction</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">45</div>
            <div className="stat-label">Exam Distinctions</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Study Support</div>
          </div>
        </div>

        <div className="about-content">
          {/* Left Column: Qualifications & Specializations */}
          <div className="about-column">
            {/* Academic Journey */}
            <div className="section-card">
              <div className="section-header">
                <h2 className="section-title">
                  <span className="title-icon">🎓</span>
                  Academic Journey
                </h2>
                <p className="section-subtitle">From University of Zambia to Rockview University</p>
              </div>
              
              <div className="qualifications-timeline">
                {qualifications.map((qual, index) => (
                  <div className="timeline-item" key={index}>
                    <div className="timeline-marker">
                      <div className="marker-icon">{qual.icon}</div>
                      {index < qualifications.length - 1 && <div className="timeline-line"></div>}
                    </div>
                    <div className="timeline-content">
                      <h3>{qual.degree}</h3>
                      <div className="timeline-meta">
                        <span className="institution">{qual.university}</span>
                        <span className="timeline-year">{qual.year}</span>
                      </div>
                      <p>{qual.description}</p>
                      <div className="achievements">
                        {qual.achievements.map((achievement, i) => (
                          <span className="achievement-badge" key={i}>✓ {achievement}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mathematical Specializations */}
            <div className="section-card">
              <h2 className="section-title">
                <span className="title-icon">⚡</span>
                Mathematical Specializations
              </h2>
              <div className="specializations-grid">
                {specializations.map((spec, index) => (
                  <div className="specialization-card" key={index}>
                    <div className="spec-icon">{spec.icon}</div>
                    <div className="spec-content">
                      <h4>{spec.name}</h4>
                      <div className="spec-level">{spec.level}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Philosophy & Success */}
          <div className="about-column">
            {/* Teaching Philosophy */}
            <div className="section-card philosophy-card">
              <h2 className="section-title">
                <span className="title-icon">💡</span>
                Teaching Philosophy
              </h2>
              <p className="philosophy-quote">
                "Mathematics is not about memorizing formulas; it's about understanding patterns, 
                developing logical thinking, and building problem-solving skills that last a lifetime."
              </p>
              
              <div className="principles-grid">
                {teachingPrinciples.map((principle, index) => (
                  <div className="principle-item" key={index}>
                    <div className="principle-icon">{principle.icon}</div>
                    <div className="principle-content">
                      <h4>{principle.title}</h4>
                      <p>{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Stories */}
            <div className="section-card success-card">
              <h2 className="section-title">
                <span className="title-icon">🏆</span>
                Success Stories
              </h2>
              <div className="success-stories">
                {successStories.map((story, index) => (
                  <div className="story-card" key={index}>
                    <div className="story-icon">{story.icon}</div>
                    <div className="story-content">
                      <h4>{story.student}</h4>
                      <div className="story-result">{story.result}</div>
                      <p className="story-testimonial">"{story.testimonial}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unique Value Proposition */}
            <div className="value-proposition">
              <div className="value-item">
                <div className="value-icon">🎯</div>
                <div className="value-content">
                  <h4>Custom Learning Plans</h4>
                  <p>Personalized curriculum based on your goals and learning style</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon">⏱️</div>
                <div className="value-content">
                  <h4>Flexible Scheduling</h4>
                  <p>Available weekdays, weekends, and even late-night sessions</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon">💻</div>
                <div className="value-content">
                  <h4>Digital Tools</h4>
                  <p>Interactive whiteboard, screen sharing, and digital resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>

       {/* Why Choose Me Section */}
<div className="why-choose-section">
  <div className="section-header">
    <h2>Why Choose Me as Your Mathematics Tutor?</h2>
    <p>Beyond just teaching mathematics, I transform how you think about problem-solving</p>
  </div>
  
  <div className="reasons-grid-single-row">
    <div className="reason-card">
      <div className="reason-number">01</div>
      <h3>Advanced Academic Credentials</h3>
      <p>MSc from Rockview University with research experience in computational mathematics</p>
    </div>
    <div className="reason-card">
      <div className="reason-number">02</div>
      <h3>Proven Track Record</h3>
      <p>Consistent 95%+ improvement rate among students within 3 months</p>
    </div>
    <div className="reason-card">
      <div className="reason-number">03</div>
      <h3>Comprehensive Support</h3>
      <p>Homework help, exam prep, assignment assistance, and conceptual clarification</p>
    </div>
    <div className="reason-card">
      <div className="reason-number">04</div>
      <h3>Modern Teaching Methods</h3>
      <p>Blend of traditional teaching with interactive digital tools and real-world examples</p>
    </div>
  </div>
</div>

        {/* CTA Section */}
        <div className="about-cta">
          <div className="cta-content">
            <div className="guarantee-badge">✅ 100% Satisfaction Guarantee</div>
            <h2>Ready to Excel in Mathematics?</h2>
            <p className="cta-subtitle">
              Book a <strong>FREE 30-minute assessment session</strong> where we'll:
            </p>
            <ul className="cta-benefits">
              <li>✓ Identify your current mathematics level and challenges</li>
              <li>✓ Create a personalized learning roadmap</li>
              <li>✓ Experience my teaching approach firsthand</li>
              <li>✓ Discuss your academic goals and timeline</li>
            </ul>
            
            <div className="cta-buttons">
              <button className="btn-primary" onClick={handleBookAssessment}>
                📅 Book Free Assessment
              </button>
              <a href="#contact" className="btn-secondary">
                📞 Contact Me Directly
              </a>
            </div>
            
            <div className="cta-note">
              <span className="note-icon">⏰</span>
              <span>Limited spots available. Book now to secure your preferred time slot.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;