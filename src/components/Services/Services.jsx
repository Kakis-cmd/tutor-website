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
      description: "Master complex mathematical concepts including differentiation, integration, multivariable calculus, and differential equations with step-by-step guidance.",
      icon: "∫",
      level: "University & College Level",
      duration: "1-2 hour interactive sessions",
      category: "mathematics",
      color: "#3B82F6",
      features: [
        "Step-by-step problem solving approach",
        "Real-world applications and case studies", 
        "Comprehensive exam preparation strategies",
        "Customized study plans based on your syllabus"
      ],
      learnContent: "Gain a deep understanding of mathematical modeling, optimization problems, and analytical thinking that extends beyond the classroom into real-world applications."
    },
    {
      id: 2,
      title: "Statistics & Probability",
      description: "Comprehensive understanding of statistical methods, data analysis techniques, probability theory, and research methodology.",
      icon: "📊",
      level: "High School to PhD Level",
      duration: "1-2 hour data-driven sessions",
      category: "mathematics",
      color: "#10B981",
      features: [
        "Practical data analysis with SPSS/R/Python",
        "Research methodology and experimental design",
        "Statistical inference and hypothesis testing",
        "Data visualization and interpretation"
      ],
      learnContent: "Develop the ability to analyze complex datasets, make data-driven decisions, and understand the mathematical foundations behind statistical reasoning."
    },
    {
      id: 3,
      title: "Linear Algebra",
      description: "Master matrix operations, vector spaces, eigenvalues, eigenvectors, and their applications in computer science and engineering.",
      icon: "⎡⎣⎤⎦",
      level: "University & Graduate Level",
      duration: "1-2 hour concept-focused sessions",
      category: "mathematics",
      color: "#8B5CF6",
      features: [
        "Matrix operations and transformations",
        "Vector spaces and linear independence",
        "Applications in AI and machine learning",
        "Geometric interpretations of algebraic concepts"
      ],
      learnContent: "Understand the language of linear transformations that powers modern computing, graphics, and artificial intelligence systems."
    },
    {
      id: 4,
      title: "High School Mathematics",
      description: "Build strong foundations in algebra, geometry, trigonometry, and pre-calculus with curriculum-aligned instruction.",
      icon: "📐",
      level: "Grades 8-12",
      duration: "1-hour structured sessions",
      category: "mathematics",
      color: "#F59E0B",
      features: [
        "Complete curriculum alignment",
        "Exam preparation and strategy building",
        "Concept reinforcement through practice",
        "Homework and assignment assistance"
      ],
      learnContent: "Develop mathematical confidence and problem-solving skills that prepare you for university-level mathematics and real-world applications."
    },
    
    // Writing & Research Services
    {
      id: 5,
      title: "Thesis & Research Writing",
      description: "Expert guidance through the entire research process from proposal development to final thesis submission and defense preparation.",
      icon: "🎓",
      level: "Bachelor's to PhD Level",
      duration: "Flexible project-based sessions",
      category: "writing",
      color: "#EC4899",
      features: [
        "Literature review and gap analysis",
        "Research methodology design",
        "Statistical analysis and interpretation",
        "Academic writing and citation formatting"
      ],
      learnContent: "Master the art of academic writing, research design, and scholarly communication while developing a compelling research narrative."
    },
    {
      id: 6,
      title: "Academic Paper Development",
      description: "Professional assistance with research papers, journal articles, conference submissions, and academic publications.",
      icon: "📝",
      level: "Undergraduate to Professional",
      duration: "Custom project timelines",
      category: "writing",
      color: "#06B6D4",
      features: [
        "APA/MLA/Chicago formatting expertise",
        "Peer-review preparation and response",
        "Statistical analysis guidance",
        "Professional editing and proofreading"
      ],
      learnContent: "Learn to communicate complex ideas clearly, structure arguments logically, and contribute meaningfully to academic discourse."
    },
    
    // Civic Education
    {
      id: 7,
      title: "Civic Education",
      description: "Comprehensive understanding of government systems, constitutional law, citizenship rights, and civic responsibilities.",
      icon: "🏛️",
      level: "All Educational Levels",
      duration: "1-2 hour engaging sessions",
      category: "civics",
      color: "#EF4444",
      features: [
        "Government structures and functions",
        "Constitutional rights and responsibilities",
        "Political systems and processes",
        "Critical thinking about social issues"
      ],
      learnContent: "Develop informed citizenship, understand democratic processes, and engage meaningfully with societal structures and civic duties."
    },
    
    // Exam Preparation
    {
      id: 8,
      title: "Exam Preparation",
      description: "Strategic preparation for university entrance exams, standardized tests, finals, and comprehensive assessments.",
      icon: "🎯",
      level: "All Academic Levels",
      duration: "Custom preparation packages",
      category: "preparation",
      color: "#6366F1",
      features: [
        "Past paper analysis and practice",
        "Time management strategies",
        "Stress reduction techniques",
        "Exam-taking skills development"
      ],
      learnContent: "Build test-taking confidence, improve performance under pressure, and develop strategies for academic success across all subjects."
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

  const handleBookSession = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Auto-rotate featured services
  const [featuredIndex, setFeaturedIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % Math.min(4, filteredServices.length));
    }, 5000);
    return () => clearInterval(interval);
  }, [filteredServices.length]);

  return (
    <section className="services" id="services">
      {/* Animated Background Elements */}
      <div className="services-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        <div className="math-symbol">∑</div>
        <div className="math-symbol">π</div>
        <div className="math-symbol">∞</div>
        <div className="math-symbol">∫</div>
        <div className="writing-symbol">✍️</div>
        <div className="civic-symbol">⚖️</div>
        <div className="success-symbol">⭐</div>
      </div>

      <div className="container">
        {/* Services Header */}
        <div className="services-header">
          <div className="header-badge">
            <span className="badge-icon">✨</span>
            <span className="badge-text">Transformative Academic Support</span>
          </div>
          
          <h2 className="services-title">
            Master Your Subjects with
            <span className="title-highlight"> Personalized Guidance</span>
          </h2>
          
          <p className="services-subtitle">
            Expert-led tutoring designed to build confidence, enhance understanding, and achieve academic excellence. 
            Each session is tailored to your unique learning style and goals.
          </p>
          
          {/* Quick Stats */}
          <div className="services-stats">
            <div className="stat-item">
              <div className="stat-icon">🎯</div>
              <div className="stat-number">95%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">⏰</div>
              <div className="stat-number">8+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">👥</div>
              <div className="stat-number">200+</div>
              <div className="stat-label">Students Transformed</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">⭐</div>
              <div className="stat-number">4.9</div>
              <div className="stat-label">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Featured Service Highlight */}
        <div className="featured-service">
          <div className="featured-content">
            <div className="featured-icon" style={{ color: filteredServices[featuredIndex]?.color }}>
              {filteredServices[featuredIndex]?.icon}
            </div>
            <h3>Currently Highlighting: {filteredServices[featuredIndex]?.title}</h3>
            <p>{filteredServices[featuredIndex]?.learnContent}</p>
          </div>
          <div className="featured-dots">
            {filteredServices.slice(0, 4).map((_, index) => (
              <button
                key={index}
                className={`featured-dot ${index === featuredIndex ? 'active' : ''}`}
                onClick={() => setFeaturedIndex(index)}
                style={{ backgroundColor: index === featuredIndex ? filteredServices[index]?.color : '#e2e8f0' }}
              />
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="services-filters">
          <div className="filters-container">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                <span className="filter-name">{category.name}</span>
                <span className="filter-count">{category.count}</span>
              </button>
            ))}
          </div>
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
                '--service-color': service.color,
                '--service-bg': `${service.color}15`
              }}
              data-hovered={hoveredService === service.id}
            >
              {/* Service Header */}
              <div className="service-header">
                <div className="service-icon-wrapper">
                  <div 
                    className="service-icon"
                    style={{ 
                      backgroundColor: `${service.color}20`,
                      color: service.color
                    }}
                  >
                    {service.icon}
                  </div>
                  <span className="service-level">{service.level}</span>
                </div>
                <div className="service-category" style={{ color: service.color }}>
                  {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                </div>
              </div>
              
              {/* Service Content */}
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                {/* What You'll Learn Section */}
                <div className="learn-section">
                  <h4 className="learn-title">
                    <span className="learn-icon">🧠</span>
                    What You'll Master
                  </h4>
                  <p className="learn-content">{service.learnContent}</p>
                </div>
                
                {/* Service Features */}
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
                    <span className="detail-icon">⏱️</span>
                    <div className="detail-content">
                      <span className="detail-label">Session Duration</span>
                      <span className="detail-value">{service.duration}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">🎯</span>
                    <div className="detail-content">
                      <span className="detail-label">Learning Outcome</span>
                      <span className="detail-value">Concept Mastery</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Service Footer */}
              <div className="service-footer">
                <button 
                  className="service-button"
                  onClick={handleBookSession}
                  style={{ backgroundColor: service.color }}
                >
                  <span className="button-icon">📅</span>
                  Book This Session
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Approach Section */}
        <div className="learning-approach">
          <h3 className="section-title">Our Learning Methodology</h3>
          <div className="approach-grid">
            <div className="approach-card">
              <div className="approach-icon">🎯</div>
              <h4>Personalized Learning</h4>
              <p>Customized lesson plans based on your learning style, pace, and academic goals</p>
            </div>
            <div className="approach-card">
              <div className="approach-icon">🔄</div>
              <h4>Interactive Sessions</h4>
              <p>Engaging discussions, real-time problem-solving, and continuous feedback</p>
            </div>
            <div className="approach-card">
              <div className="approach-icon">📊</div>
              <h4>Progress Tracking</h4>
              <p>Regular assessments and progress reports to measure improvement</p>
            </div>
            <div className="approach-card">
              <div className="approach-icon">💡</div>
              <h4>Concept Building</h4>
              <p>Focus on understanding fundamental concepts rather than memorization</p>
            </div>
          </div>
        </div>

        {/* Service Guarantee */}
        <div className="service-guarantee">
          <div className="guarantee-content">
            <div className="guarantee-icon">🏆</div>
            <div className="guarantee-text">
              <h3>First Session Confidence Guarantee</h3>
              <p>Experience our teaching approach risk-free. If you're not completely satisfied with your first session, it's completely free.</p>
            </div>
            <button className="guarantee-button" onClick={handleBookSession}>
              Start Your Journey
            </button>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="faq-preview">
          <h3 className="section-title">Common Questions</h3>
          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-icon">❓</div>
              <div className="faq-content">
                <h4>How are sessions conducted?</h4>
                <p>We use interactive platforms with digital whiteboards, screen sharing, and session recording for review.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-icon">📚</div>
              <div className="faq-content">
                <h4>Are materials provided?</h4>
                <p>Yes, all necessary study materials, practice problems, and resources are included at no extra cost.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-icon">🔄</div>
              <div className="faq-content">
                <h4>Can I change subjects?</h4>
                <p>Absolutely! You can switch between subjects or combine multiple based on your learning needs.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-icon">👥</div>
              <div className="faq-content">
                <h4>Group sessions available?</h4>
                <p>Yes, group sessions (2-4 students) offer collaborative learning at reduced rates.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="services-cta">
          <div className="cta-content">
            <h3>Ready to Transform Your Learning Experience?</h3>
            <p>Take the first step toward academic excellence with personalized guidance tailored to your goals.</p>
            <div className="cta-buttons">
              <button className="cta-btn primary" onClick={handleBookSession}>
                <span className="btn-icon">🎯</span>
                Begin Your Journey
              </button>
              <a href="#contact" className="cta-btn secondary">
                <span className="btn-icon">💬</span>
                Ask Questions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;