import { useState, useEffect } from 'react';
import './Services.css';

function Services() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);
  
  const services = [
    // Mathematics Services
    {
      id: 1,
      title: "Advanced Calculus",
      description: "Master differentiation, integration, multivariable calculus, and differential equations with expert guidance.",
      icon: "∫",
      level: "University Level",
      duration: "1-2 hour sessions",
      price: "$25-$35/hour",
      category: "mathematics",
      color: "#3B82F6",
      features: ["Step-by-step problem solving", "Real-world applications", "Exam preparation", "Custom study plans"]
    },
    {
      id: 2,
      title: "Statistics & Probability",
      description: "Understand descriptive statistics, hypothesis testing, regression analysis, and probability distributions.",
      icon: "📊",
      level: "High School to University",
      duration: "1-2 hour sessions",
      price: "$25-$30/hour",
      category: "mathematics",
      color: "#10B981",
      features: ["SPSS/R/Python guidance", "Research methodology", "Data interpretation", "Statistical modeling"]
    },
    {
      id: 3,
      title: "Linear Algebra",
      description: "Learn vectors, matrices, eigenvalues, eigenvectors, and linear transformations with practical examples.",
      icon: "⎡⎣⎤⎦",
      level: "University Level",
      duration: "1-2 hour sessions",
      price: "$25-$35/hour",
      category: "mathematics",
      color: "#8B5CF6",
      features: ["Matrix operations", "Vector spaces", "Applications in AI", "Geometric interpretations"]
    },
    {
      id: 4,
      title: "High School Mathematics",
      description: "Comprehensive support for algebra, geometry, trigonometry, and pre-calculus curriculum.",
      icon: "📐",
      level: "Grades 8-12",
      duration: "1-hour sessions",
      price: "$20-$25/hour",
      category: "mathematics",
      color: "#F59E0B",
      features: ["Curriculum alignment", "Exam strategies", "Concept building", "Homework help"]
    },
    
    // Writing & Research Services
    {
      id: 5,
      title: "Master's Thesis Writing",
      description: "Complete assistance with Master's thesis from proposal to final submission and defense preparation.",
      icon: "🎓",
      level: "Master's Level",
      duration: "Custom packages",
      price: "$30-$50/page",
      category: "writing",
      color: "#EC4899",
      features: ["Literature review", "Methodology design", "Data analysis", "Formatting & citations"]
    },
    {
      id: 6,
      title: "Research Paper Assistance",
      description: "Professional help with academic papers for journals, conferences, and publications.",
      icon: "📝",
      level: "Undergrad to PhD",
      duration: "Per paper basis",
      price: "$25-$40/page",
      category: "writing",
      color: "#06B6D4",
      features: ["APA/MLA formatting", "Peer-review preparation", "Statistical analysis", "Editing & proofreading"]
    },
    
    // Civic Education
    {
      id: 7,
      title: "Civic Education",
      description: "Comprehensive understanding of government systems, citizenship, rights, and civic responsibilities.",
      icon: "🏛️",
      level: "All Levels",
      duration: "1-2 hour sessions",
      price: "$20-$30/hour",
      category: "civics",
      color: "#EF4444",
      features: ["Government structures", "Citizen rights", "Constitutional law", "Social studies"]
    },
    
    // Exam Preparation
    {
      id: 8,
      title: "Exam & Test Preparation",
      description: "Strategic preparation for final exams, standardized tests, and university entrance exams.",
      icon: "🎯",
      level: "All Levels",
      duration: "Custom packages",
      price: "$25-$40/hour",
      category: "preparation",
      color: "#6366F1",
      features: ["Past paper practice", "Time management", "Stress reduction", "Test-taking strategies"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'mathematics', name: 'Mathematics', count: services.filter(s => s.category === 'mathematics').length },
    { id: 'writing', name: 'Writing & Research', count: services.filter(s => s.category === 'writing').length },
    { id: 'civics', name: 'Civic Education', count: services.filter(s => s.category === 'civics').length },
    { id: 'preparation', name: 'Exam Preparation', count: services.filter(s => s.category === 'preparation').length }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  // Stats for the header
  const serviceStats = [
    { number: services.length, label: 'Services Offered' },
    { number: '8+', label: 'Years Experience' },
    { number: '200+', label: 'Students Helped' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <section className="services" id="services">
      {/* Animated Background Elements */}
      <div className="services-background">
        <div className="math-symbol math-1">∑</div>
        <div className="math-symbol math-2">π</div>
        <div className="math-symbol math-3">∞</div>
        <div className="civic-symbol civic-1">⚖️</div>
        <div className="civic-symbol civic-2">🏛️</div>
      </div>

      <div className="container">
        {/* Services Header */}
        <div className="services-header">
          <div className="header-badge">
            <span className="badge-icon">✨</span>
            <span className="badge-text">Expert Academic Support</span>
          </div>
          
          <h2 className="services-title">
            Transform Your 
            <span className="title-highlight"> Academic Journey</span>
          </h2>
          
          <p className="services-subtitle">
            Comprehensive tutoring and academic support tailored to your specific learning needs. 
            From mathematics mastery to civic education and research writing.
          </p>
          
          {/* Quick Stats */}
          <div className="services-stats">
            {serviceStats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="services-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
              style={{
                backgroundColor: activeFilter === category.id ? 
                  services.find(s => s.category === category.id)?.color || '#2563eb' : 'transparent'
              }}
            >
              {category.name}
              <span className="filter-count">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {filteredServices.map(service => (
            <div 
              className="service-card"
              key={service.id}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              style={{
                transform: hoveredService === service.id ? 'translateY(-10px)' : 'translateY(0)',
                borderColor: hoveredService === service.id ? service.color : '#e2e8f0',
                boxShadow: hoveredService === service.id ? 
                  `0 20px 40px ${service.color}30` : '0 10px 30px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Service Header */}
              <div className="service-header">
                <div 
                  className="service-icon"
                  style={{ 
                    backgroundColor: `${service.color}20`,
                    color: service.color,
                    transform: hoveredService === service.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                >
                  {service.icon}
                </div>
                <div className="service-category" style={{ color: service.color }}>
                  {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                </div>
              </div>
              
              {/* Service Content */}
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                {/* Service Features - FIXED: Now showing actual features */}
                <div className="service-features">
                  {service.features.map((feature, index) => (
                    <div className="feature-item" key={index}>
                      <span className="feature-check" style={{ color: service.color }}>✓</span>
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Service Details */}
                <div className="service-details">
                  <div className="detail-item">
                    <span className="detail-label">Level:</span>
                    <span className="detail-value">{service.level}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{service.duration}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Price:</span>
                    <span className="detail-value price" style={{ color: service.color }}>
                      {service.price}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Service Footer */}
              <div className="service-footer">
                <button 
                  className="service-button"
                  style={{ backgroundColor: service.color }}
                >
                  Learn More
                </button>
                <button 
                  className="service-button-outline"
                  style={{ borderColor: service.color, color: service.color }}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Comparison - REMOVED FREE SESSION */}
        <div className="pricing-comparison">
          <h3 className="section-title">Flexible Pricing Options</h3>
          <div className="pricing-cards">
            <div className="pricing-card basic">
              <div className="pricing-header">
                <h4>Single Session</h4>
                <div className="price">$25<span>/hour</span></div>
              </div>
              <ul className="pricing-features">
                <li>✓ One-on-one personalized tutoring</li>
                <li>✓ Customized lesson plan</li>
                <li>✓ Session recording available</li>
                <li>✓ Homework help included</li>
              </ul>
              <button className="pricing-button">Book Single Session</button>
            </div>
            
            <div className="pricing-card popular">
              <div className="popular-badge">Most Popular</div>
              <div className="pricing-header">
                <h4>Package (5 Sessions)</h4>
                <div className="price">$110<span>Save 12%</span></div>
              </div>
              <ul className="pricing-features">
                <li>✓ Everything in Basic</li>
                <li>✓ Progress tracking dashboard</li>
                <li>✓ Priority scheduling</li>
                <li>✓ Free study materials</li>
                <li>✓ Monthly progress report</li>
              </ul>
              <button className="pricing-button primary">Get Package</button>
            </div>
            
            <div className="pricing-card premium">
              <div className="pricing-header">
                <h4>Monthly Plan</h4>
                <div className="price">$400<span>/month</span></div>
              </div>
              <ul className="pricing-features">
                <li>✓ Everything in Package</li>
                <li>✓ Unlimited email support</li>
                <li>✓ Weekly progress reviews</li>
                <li>✓ Customized study schedule</li>
                <li>✓ Exam prep priority</li>
              </ul>
              <button className="pricing-button">Choose Monthly</button>
            </div>
          </div>
        </div>

        {/* Service Guarantee */}
        <div className="service-guarantee">
          <div className="guarantee-content">
            <div className="guarantee-icon">🏆</div>
            <div className="guarantee-text">
              <h3>100% Satisfaction Guarantee</h3>
              <p>If you're not completely satisfied with your first session, you'll get a full refund. No questions asked.</p>
            </div>
            <button className="guarantee-button">
              Book Risk-Free Session
            </button>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="faq-preview">
          <h3 className="section-title">Frequently Asked Questions</h3>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How do online sessions work?</h4>
              <p>We use Zoom/Google Meet with interactive whiteboard, screen sharing, and session recording.</p>
            </div>
            <div className="faq-item">
              <h4>What materials do I need?</h4>
              <p>Just a computer with internet. All study materials and resources are provided digitally.</p>
            </div>
            <div className="faq-item">
              <h4>Can I reschedule sessions?</h4>
              <p>Yes! Flexible rescheduling with 24-hour notice. We understand students' busy schedules.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer group sessions?</h4>
              <p>Yes! Group sessions (2-4 students) are available at discounted rates. Perfect for study groups.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

<div className="services-cta">
  <h3>Ready to Get Started?</h3>
  <p>All services include personalized attention and flexible scheduling. Book your first session today!</p>
  <a href="#contact" className="btn-primary">
    📅 Book Your Session
  </a>
</div>

export default Services;