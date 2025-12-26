import { useState } from 'react';
import './Services.css';

function Services() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const services = [
    // Mathematics & Science
    {
      title: "Advanced Calculus",
      description: "Differentiation, integration, multivariable calculus, differential equations for university-level students.",
      icon: "📈",
      level: "University Level",
      duration: "1-2 hour sessions",
      color: "#3B82F6",
      category: "mathematics"
    },
    {
      title: "Statistics & Probability",
      description: "Descriptive statistics, hypothesis testing, regression analysis, probability distributions.",
      icon: "📊",
      level: "College/University",
      duration: "1-2 hour sessions",
      color: "#10B981",
      category: "mathematics"
    },
    {
      title: "Linear Algebra",
      description: "Vectors, matrices, eigenvalues, eigenvectors, linear transformations, and applications.",
      icon: "🔢",
      level: "University Level",
      duration: "1-2 hour sessions",
      color: "#8B5CF6",
      category: "mathematics"
    },
    {
      title: "Physics Tutoring",
      description: "Mechanics, electromagnetism, thermodynamics, modern physics for science students.",
      icon: "⚛️",
      level: "High School/University",
      duration: "1-2 hour sessions",
      color: "#EF4444",
      category: "science"
    },
    
    // Writing & Research Services
    {
      title: "Master's Thesis Writing",
      description: "Comprehensive assistance with Master's thesis from proposal to final submission. Literature review, methodology, data analysis.",
      icon: "🎓",
      level: "Master's Level",
      duration: "Custom packages",
      color: "#EC4899",
      category: "writing"
    },
    {
      title: "Research Paper Writing",
      description: "Academic paper writing for journals, conferences. APA/MLA formatting, peer-review preparation.",
      icon: "📝",
      level: "Undergrad to PhD",
      duration: "Per paper basis",
      color: "#F59E0B",
      category: "writing"
    },
    {
      title: "Dissertation Assistance",
      description: "PhD dissertation guidance, structure planning, chapter writing, editing, and proofreading.",
      icon: "📚",
      level: "PhD Level",
      duration: "Long-term projects",
      color: "#06B6D4",
      category: "writing"
    },
    {
      title: "Academic Editing",
      description: "Professional editing for grammar, clarity, flow, and academic tone. Formatting and citation checking.",
      icon: "✏️",
      level: "All Academic Levels",
      duration: "Per document",
      color: "#8B5CF6",
      category: "writing"
    },
    {
      title: "Research Proposal Writing",
      description: "Crafting compelling research proposals for grants, scholarships, and academic programs.",
      icon: "📋",
      level: "Master's/PhD",
      duration: "1-2 weeks",
      color: "#10B981",
      category: "writing"
    },
    {
      title: "Literature Review Writing",
      description: "Comprehensive literature reviews, systematic reviews, annotated bibliographies.",
      icon: "🔍",
      level: "Undergrad to PhD",
      duration: "Custom timelines",
      color: "#3B82F6",
      category: "writing"
    },
    {
      title: "Data Analysis & Interpretation",
      description: "Statistical analysis using SPSS, R, Python. Results interpretation and visualization.",
      icon: "📊",
      level: "Research Level",
      duration: "Per project",
      color: "#6366F1",
      category: "research"
    },
    {
      title: "Plagiarism Check & Removal",
      description: "Turnitin reports, plagiarism detection, and ethical paraphrasing services.",
      icon: "✅",
      level: "All Levels",
      duration: "48-hour turnaround",
      color: "#22C55E",
      category: "research"
    }
  ];

  // Service categories for filtering
  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'mathematics', name: 'Mathematics', count: services.filter(s => s.category === 'mathematics').length },
    { id: 'writing', name: 'Writing Services', count: services.filter(s => s.category === 'writing').length },
    { id: 'research', name: 'Research', count: services.filter(s => s.category === 'research').length },
    { id: 'science', name: 'Science', count: services.filter(s => s.category === 'science').length }
  ];

  // Filter services based on active filter
  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">Academic Services</h2>
          <p className="services-subtitle">
            MSc Mathematics Expert offering comprehensive tutoring, writing, and research support. 
            8+ years experience in academic assistance across multiple disciplines.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="services-filters">
          {categories.map(category => (
            <button 
              key={category.id} 
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name} <span className="filter-count">({category.count})</span>
            </button>
          ))}
        </div>
        
        {/* Services Count Display */}
        <div className="services-count">
          Showing {filteredServices.length} of {services.length} services
        </div>
        
        <div className="services-grid">
          {filteredServices.map((service, index) => (
            <div 
              className="service-card" 
              key={index}
              data-category={service.category}
            >
              <div className="service-icon" style={{ backgroundColor: `${service.color}15` }}>
                <span style={{ fontSize: '2rem' }}>{service.icon}</span>
                <span className="service-category-badge" style={{ backgroundColor: service.color }}>
                  {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                </span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-details">
                <span className="service-level">
                  <span className="detail-label">Level:</span> {service.level}
                </span>
                <span className="service-duration">
                  <span className="detail-label">Timeline:</span> {service.duration}
                </span>
              </div>
              
              <div className="service-actions">
                <button className="service-button" style={{ backgroundColor: service.color }}>
                  Get Quote
                </button>
                <button className="service-button-outline" style={{ borderColor: service.color, color: service.color }}>
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="services-footer">
          <div className="pricing-info">
            <h3>📋 Pricing Structure</h3>
            <div className="pricing-grid">
              <div className="pricing-item">
                <h4>Mathematics Tutoring</h4>
                <p><strong>$25-$40/hour</strong> depending on level</p>
              </div>
              <div className="pricing-item">
                <h4>Writing Services</h4>
                <p><strong>$15-$30/page</strong> based on complexity</p>
              </div>
              <div className="pricing-item">
                <h4>Research Assistance</h4>
                <p><strong>Custom quotes</strong> per project</p>
              </div>
              <div className="pricing-item">
                <h4>Editing/Proofreading</h4>
                <p><strong>$10-$20/page</strong></p>
              </div>
            </div>
          </div>
          
          <div className="services-cta">
            <p className="services-note">
              📞 <strong>Contact for detailed quotes:</strong> +260 97 XXX XXXX | 
              ✉️ <strong>Email:</strong> math.expert@example.com
            </p>
            <button className="cta-button">
              📩 Request Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;