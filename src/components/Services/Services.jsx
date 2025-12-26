import './Services.css';

function Services() {
  const services = [
    {
      title: "Advanced Calculus",
      description: "Differentiation, integration, multivariable calculus, differential equations for university-level students.",
      icon: "📈",
      level: "University Level",
      duration: "1-2 hour sessions",
      color: "#3B82F6"
    },
    {
      title: "Statistics & Probability",
      description: "Descriptive statistics, hypothesis testing, regression analysis, probability distributions.",
      icon: "📊",
      level: "College/University",
      duration: "1-2 hour sessions",
      color: "#10B981"
    },
    {
      title: "Linear Algebra",
      description: "Vectors, matrices, eigenvalues, eigenvectors, linear transformations, and applications.",
      icon: "🔢",
      level: "University Level",
      duration: "1-2 hour sessions",
      color: "#8B5CF6"
    },
    {
      title: "Physics Tutoring",
      description: "Mechanics, electromagnetism, thermodynamics, modern physics for science students.",
      icon: "⚛️",
      level: "High School/University",
      duration: "1-2 hour sessions",
      color: "#EF4444"
    },
    {
      title: "Master's Thesis Writing",
      description: "Comprehensive assistance with Master's thesis from proposal to final submission.",
      icon: "🎓",
      level: "Master's Level",
      duration: "Custom packages",
      color: "#EC4899"
    },
    {
      title: "Research Paper Writing",
      description: "Academic paper writing for journals, conferences. APA/MLA formatting, peer-review preparation.",
      icon: "📝",
      level: "Undergrad to PhD",
      duration: "Per paper basis",
      color: "#F59E0B"
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">What I Teach</h2>
          <p className="services-subtitle">
            8+ years of experience teaching mathematics and physics at various levels.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon" style={{ backgroundColor: `${service.color}15` }}>
                <span style={{ fontSize: '2rem' }}>{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-details">
                <span className="service-level">
                  <strong>Level:</strong> {service.level}
                </span>
                <span className="service-duration">
                  <strong>Duration:</strong> {service.duration}
                </span>
              </div>
              
              <button className="service-button" style={{ backgroundColor: service.color }}>
                Learn More
              </button>
            </div>
          ))}
        </div>
        
        <div className="services-footer">
          <p className="services-note">
            📞 <strong>Contact for pricing:</strong> Sessions start at $25/hour. 
            Discounts available for package bookings.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;