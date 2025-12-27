import { useState, useEffect } from 'react';
import './Contact.css';

function Contact() {
  // ========== PASSWORD AUTHENTICATION STATES ==========
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // ========== EXISTING STATES ==========
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [activeContact, setActiveContact] = useState(0);
  const [showCallModal, setShowCallModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isTutorView, setIsTutorView] = useState(false);
  
  const [reminders, setReminders] = useState({
    email: true,
    sms: true,
    whatsapp: true,
    before24h: true,
    before1h: true
  });

  // ========== PASSWORD CHECK FUNCTION ==========
  const checkPassword = () => {
    // In production, this would check against a database
    // For demo, use a simple password like "tutor123"
    if (password === 'tutor123') {
      setIsAuthenticated(true);
      setIsTutorView(true);
      setShowPasswordModal(false);
      setPassword('');
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  // Contact methods with actual contact info
  const contactMethods = [
    {
      id: 1,
      icon: '📞',
      title: 'Call Me',
      details: '+260 977 123 456', // Replace with your number
      description: 'Available 8 AM - 8 PM, Monday to Saturday',
      action: 'Call Now',
      color: '#3B82F6',
      delay: '0s'
    },
    {
      id: 2,
      icon: '✉️',
      title: 'Email Me',
      details: 'tutor@example.com', // Replace with your email
      description: 'Response within 24 hours guaranteed',
      action: 'Send Email',
      color: '#10B981',
      delay: '0.2s'
    },
    {
      id: 3,
      icon: '💬',
      title: 'WhatsApp',
      details: '+260 977 123 456', // Replace with your WhatsApp
      description: 'Quick response, ideal for quick questions',
      action: 'Open WhatsApp',
      color: '#25D366',
      delay: '0.4s'
    },
    {
      id: 4,
      icon: '📍',
      title: 'Location',
      details: 'Lusaka, Zambia', // Replace with your location
      description: 'Online & In-person sessions available',
      action: 'View on Map',
      color: '#8B5CF6',
      delay: '0.6s'
    }
  ];

  // Sample bookings data - Normally this would come from a database
  const [bookings, setBookings] = useState([
    {
      id: 1,
      student: 'John Mwale',
      subject: 'Mathematics',
      date: '15 Dec 2024',
      time: '10:00 AM',
      duration: '2 hours',
      status: 'confirmed',
      contact: '+260 977 123 456',
      email: 'john.mwale@email.com',
      level: 'University',
      topics: 'Calculus, Linear Algebra',
      notes: 'Needs help with integration techniques',
      createdAt: '10 Dec 2024'
    },
    {
      id: 2,
      student: 'Sarah Banda',
      subject: 'Physics',
      date: '16 Dec 2024',
      time: '2:00 PM',
      duration: '1.5 hours',
      status: 'pending',
      contact: '+260 977 654 321',
      email: 'sarah.banda@email.com',
      level: 'High School',
      topics: 'Mechanics, Thermodynamics',
      notes: 'Exam preparation for finals',
      createdAt: '12 Dec 2024'
    }
  ]);

  // Filter bookings by status
  const [filter, setFilter] = useState('all');
  const filteredBookings = bookings.filter(booking => {
    if (filter === 'all') return true;
    if (filter === 'confirmed') return booking.status === 'confirmed';
    if (filter === 'pending') return booking.status === 'pending';
    if (filter === 'cancelled') return booking.status === 'cancelled';
    return true;
  });

  // Dashboard statistics
  const dashboardStats = {
    total: bookings.length,
    confirmed: bookings.filter(b => b.status === 'confirmed').length,
    pending: bookings.filter(b => b.status === 'pending').length,
    cancelled: bookings.filter(b => b.status === 'cancelled').length
  };

  // Auto-rotate contact methods
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveContact((prev) => (prev + 1) % contactMethods.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [contactMethods.length]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Create a new booking (for demo purposes)
    const newBooking = {
      id: bookings.length + 1,
      student: formData.name,
      subject: formData.subject || 'General Inquiry',
      date: new Date().toLocaleDateString('en-US', { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }),
      time: new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
      duration: '1 hour',
      status: 'pending',
      contact: formData.email,
      email: formData.email,
      level: 'Not specified',
      topics: 'General inquiry',
      notes: formData.message || 'No additional notes',
      createdAt: new Date().toLocaleDateString('en-US')
    };
    
    setBookings(prev => [newBooking, ...prev]);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitStatus(''), 5000);
    setIsSubmitting(false);
  };

  // Handle direct communication actions
  const handleContactAction = (method) => {
    switch(method.title) {
      case 'Call Me':
        setShowCallModal(true);
        break;
      case 'Email Me':
        window.open(`mailto:${method.details}?subject=Tutoring Inquiry&body=Hello! I would like to inquire about tutoring sessions.`, '_blank');
        break;
      case 'WhatsApp':
        // FIXED: Proper regex escaping
        const whatsappMessage = encodeURIComponent('Hello! I would like to inquire about tutoring sessions.');
        const phoneNumber = method.details.replace(/\D/g, '');
        window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
        break;
      case 'Location':
        window.open(`https://maps.google.com/?q=${encodeURIComponent(method.details)}`, '_blank');
        break;
      default:
        break;
    }
  };

  // Direct communication handlers
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I would like to book a tutoring session.');
    window.open(`https://wa.me/260977123456?text=${message}`, '_blank');
  };

  const handleDirectCall = () => {
    window.location.href = 'tel:+260977123456';
  };

  const handleDirectEmail = () => {
    window.open(`mailto:tutor@example.com?subject=Tutoring Inquiry&body=Hello! I would like to inquire about tutoring sessions.`, '_blank');
  };

  const handleDirectSMS = () => {
    window.location.href = 'sms:+260977123456?body=Hello! I would like to book a tutoring session.';
  };

  // Booking management functions
  const confirmBooking = (bookingId) => {
    setBookings(prev => prev.map(booking => 
      booking.id === bookingId 
        ? { ...booking, status: 'confirmed' }
        : booking
    ));
    
    const booking = bookings.find(b => b.id === bookingId);
    alert(`✅ Booking confirmed for ${booking?.student}. ${reminders.email ? 'Confirmation email sent.' : ''}`);
  };

  const cancelBooking = (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      setBookings(prev => prev.map(booking => 
        booking.id === bookingId 
          ? { ...booking, status: 'cancelled' }
          : booking
      ));
    }
  };

  const viewBookingDetails = (booking) => {
    setSelectedBooking(booking);
    setShowBookingModal(true);
  };

  const sendReminder = (bookingId) => {
    const booking = bookings.find(b => b.id === bookingId);
    alert(`📧 Reminder sent to ${booking?.student} via ${reminders.email ? 'Email' : ''} ${reminders.whatsapp ? 'and WhatsApp' : ''}`);
  };

  // Toggle reminder settings
  const toggleReminder = (type) => {
    setReminders(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  // Export bookings (demo function)
  const exportBookings = () => {
    const dataStr = JSON.stringify(bookings, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `tutor-bookings-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <section className={`contact ${isTutorView ? 'tutor-view' : 'student-view'}`} id="contact">
      {/* Animated Background */}
      <div className="contact-background">
        <div className="contact-shape shape-1"></div>
        <div className="contact-shape shape-2"></div>
        <div className="contact-shape shape-3"></div>
        <div className="floating-envelope">✉️</div>
        <div className="floating-phone">📱</div>
        <div className="floating-marker">📍</div>
      </div>

      <div className="container">
        {/* Contact Header */}
        <div className="contact-header">
          <div className="contact-badge">
            <span className="badge-icon">✨</span>
            <span className="badge-text">Get in Touch</span>
          </div>
          
          <h2 className="contact-title">
            Let's Start Your 
            <span className="title-highlight"> Learning Journey</span>
          </h2>
          
          <p className="contact-subtitle">
            Have questions? Ready to transform your mathematics skills? 
            Reach out today for personalized academic support.
          </p>

          {/* Stats Bar */}
          <div className="contact-stats">
            <div className="contact-stat">
              <div className="stat-number">24h</div>
              <div className="stat-label">Response Time</div>
            </div>
            <div className="contact-stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Free Consultation</div>
            </div>
            <div className="contact-stat">
              <div className="stat-number">95%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* ===== Dashboard Access Controls ===== */}
        <div className="dashboard-access">
          {isAuthenticated ? (
            <>
              <div className="tutor-status">
                ✅ Tutor Mode Active - You can view and manage bookings
              </div>
              <div className="dashboard-toggle">
                <span className="toggle-label">View Mode:</span>
                <label className="toggle-switch-large">
                  <input 
                    type="checkbox" 
                    checked={isTutorView}
                    onChange={() => setIsTutorView(!isTutorView)}
                  />
                  <span className="toggle-slider-large">
                    <div className="toggle-text">
                      <span>Student</span>
                      <span>Tutor</span>
                    </div>
                  </span>
                </label>
                <button 
                  className="logout-btn"
                  onClick={() => {
                    setIsAuthenticated(false);
                    setIsTutorView(false);
                  }}
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className="tutor-login-prompt">
              <p>Tutor access required to view bookings dashboard.</p>
              <button 
                className="login-btn"
                onClick={() => setShowPasswordModal(true)}
              >
                🔒 Tutor Login
              </button>
            </div>
          )}
        </div>

        {/* ===== Direct Communication Section ===== */}
        <div className="direct-comms-section">
          <h3 className="section-title">
            {isTutorView ? 'Student Communication' : 'Connect Directly'}
          </h3>
          <div className="comm-methods">
            <div className="comm-card whatsapp" onClick={handleWhatsApp}>
              <div className="comm-icon">💬</div>
              <h4>WhatsApp</h4>
              <p>{isTutorView ? 'Message students directly' : 'Instant messaging with quick responses'}</p>
              <button className="comm-btn">
                {isTutorView ? 'Open WhatsApp' : 'Message Now'}
              </button>
            </div>
            
            <div className="comm-card call" onClick={() => setShowCallModal(true)}>
              <div className="comm-icon">📞</div>
              <h4>Direct Call</h4>
              <p>{isTutorView ? 'Call students directly' : 'Call directly for immediate assistance'}</p>
              <button className="comm-btn">Call Now</button>
            </div>
            
            <div className="comm-card message" onClick={handleDirectSMS}>
              <div className="comm-icon">✉️</div>
              <h4>SMS/Text</h4>
              <p>{isTutorView ? 'Send SMS to students' : 'Send a quick text message'}</p>
              <button className="comm-btn">Send SMS</button>
            </div>
            
            <div className="comm-card email" onClick={handleDirectEmail}>
              <div className="comm-icon">📧</div>
              <h4>Email</h4>
              <p>{isTutorView ? 'Email students directly' : 'Send detailed queries via email'}</p>
              <button className="comm-btn">Send Email</button>
            </div>
          </div>
        </div>

        {/* ===== Bookings Dashboard (Only visible in tutor view) ===== */}
        {isTutorView && (
          <div className="bookings-section">
            <div className="bookings-header">
              <h3>📅 Tutor Dashboard - Your Bookings</h3>
              <div className="booking-filters">
                <button 
                  className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                  onClick={() => setFilter('all')}
                >
                  All ({bookings.length})
                </button>
                <button 
                  className={`filter-btn ${filter === 'confirmed' ? 'active' : ''}`}
                  onClick={() => setFilter('confirmed')}
                >
                  Confirmed ({dashboardStats.confirmed})
                </button>
                <button 
                  className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
                  onClick={() => setFilter('pending')}
                >
                  Pending ({dashboardStats.pending})
                </button>
                <button 
                  className={`filter-btn ${filter === 'cancelled' ? 'active' : ''}`}
                  onClick={() => setFilter('cancelled')}
                >
                  Cancelled ({dashboardStats.cancelled})
                </button>
              </div>
            </div>
            
            <div className="bookings-grid">
              {filteredBookings.map(booking => (
                <div key={booking.id} className="booking-card">
                  <div className={`booking-status status-${booking.status}`}>
                    {booking.status}
                  </div>
                  <div className="booking-details">
                    <h4>{booking.student} - {booking.subject}</h4>
                    <div className="booking-meta">
                      <div className="meta-item">
                        <span className="meta-icon">📅</span>
                        <span>{booking.date} at {booking.time}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-icon">⏰</span>
                        <span>{booking.duration}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-icon">👤</span>
                        <span>{booking.contact}</span>
                      </div>
                    </div>
                    <div className="booking-actions">
                      <button 
                        className="action-btn primary"
                        onClick={() => viewBookingDetails(booking)}
                      >
                        View Details
                      </button>
                      <button 
                        className="action-btn secondary"
                        onClick={() => sendReminder(booking.id)}
                        disabled={booking.status === 'cancelled'}
                      >
                        Send Reminder
                      </button>
                      <button 
                        className="action-btn primary"
                        onClick={() => confirmBooking(booking.id)}
                        disabled={booking.status === 'confirmed' || booking.status === 'cancelled'}
                      >
                        Confirm
                      </button>
                      <button 
                        className="action-btn secondary"
                        onClick={() => cancelBooking(booking.id)}
                        disabled={booking.status === 'cancelled'}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Content (Contact Methods & Form) */}
        <div className="contact-content">
          {/* Left Column - Contact Methods */}
          <div className="contact-methods">
            <h3 className="section-title">
              {isTutorView ? 'Contact Information' : 'Quick Contact Options'}
            </h3>
            
            {/* Featured Contact Method */}
            <div className="featured-contact">
              <div 
                className="featured-icon"
                style={{ backgroundColor: contactMethods[activeContact].color }}
              >
                {contactMethods[activeContact].icon}
              </div>
              <div className="featured-content">
                <h4>{contactMethods[activeContact].title}</h4>
                <p className="featured-details">{contactMethods[activeContact].details}</p>
                <p className="featured-description">{contactMethods[activeContact].description}</p>
                <button 
                  className="action-button"
                  style={{ backgroundColor: contactMethods[activeContact].color }}
                  onClick={() => handleContactAction(contactMethods[activeContact])}
                >
                  {contactMethods[activeContact].action}
                </button>
              </div>
              <div className="contact-dots">
                {contactMethods.map((_, index) => (
                  <button
                    key={index}
                    className={`contact-dot ${index === activeContact ? 'active' : ''}`}
                    onClick={() => setActiveContact(index)}
                    style={{ backgroundColor: index === activeContact ? contactMethods[index].color : '#e2e8f0' }}
                  />
                ))}
              </div>
            </div>

            {/* All Contact Methods Grid */}
            <div className="methods-grid">
              {contactMethods.map((method) => (
                <div 
                  className="method-card" 
                  key={method.id}
                  style={{ 
                    animationDelay: method.delay,
                    borderColor: method.color,
                    backgroundColor: `${method.color}08`
                  }}
                  onClick={() => handleContactAction(method)}
                >
                  <div className="method-icon" style={{ color: method.color }}>
                    {method.icon}
                  </div>
                  <div className="method-content">
                    <h5>{method.title}</h5>
                    <p className="method-details">{method.details}</p>
                    <p className="method-description">{method.description}</p>
                  </div>
                  <div className="method-action" style={{ color: method.color }}>
                    →
                  </div>
                </div>
              ))}
            </div>

            {/* Working Hours */}
            <div className="hours-card">
              <div className="hours-header">
                <div className="hours-icon">⏰</div>
                <h4>Working Hours</h4>
              </div>
              <div className="hours-schedule">
                <div className="hours-day">
                  <span className="day">Monday - Friday</span>
                  <span className="time">8:00 AM - 8:00 PM</span>
                </div>
                <div className="hours-day">
                  <span className="day">Saturday</span>
                  <span className="time">9:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-day">
                  <span className="day">Sunday</span>
                  <span className="time">By Appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-form-section">
            <div className="form-header">
              <h3 className="section-title">
                {isTutorView ? 'New Booking Notification' : 'Book a Session'}
              </h3>
              <p className="form-subtitle">
                {isTutorView 
                  ? 'When students book sessions, they will appear in your dashboard above.'
                  : 'Fill out the form below to book a tutoring session. You\'ll receive automated reminders based on your preferences.'
                }
              </p>
            </div>

            {/* Animated Form (Only show in student view) */}
            {!isTutorView && (
              <form 
                className="contact-form" 
                onSubmit={handleSubmit}
                name="contact"
                method="POST"
                data-netlify="true"
                netlify
              >
                <input type="hidden" name="form-name" value="contact" />

                {/* Form Steps Indicator */}
                <div className="form-steps">
                  <div className="step active">1</div>
                  <div className="step-line"></div>
                  <div className="step">2</div>
                  <div className="step-line"></div>
                  <div className="step">3</div>
                </div>

                {/* Form Fields */}
                <div className="form-fields">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">
                        <span className="label-icon">👤</span>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">
                        <span className="label-icon">✉️</span>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">
                      <span className="label-icon">📚</span>
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="Mathematics Tutoring">Mathematics Tutoring</option>
                      <option value="Statistics Help">Statistics Help</option>
                      <option value="Calculus Assistance">Calculus Assistance</option>
                      <option value="Thesis Writing">Thesis Writing</option>
                      <option value="Research Paper Help">Research Paper Help</option>
                      <option value="Civic Education">Civic Education</option>
                      <option value="Exam Preparation">Exam Preparation</option>
                      <option value="Other Inquiry">Other Inquiry</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">
                      <span className="label-icon">💭</span>
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your learning goals, current level, and preferred schedule..."
                      rows="6"
                      required
                    />
                    <div className="char-counter">
                      {formData.message.length}/500 characters
                    </div>
                  </div>
                </div>

                {/* Form Footer */}
                <div className="form-footer">
                  <div className="privacy-note">
                    <span className="privacy-icon">🔒</span>
                    Your information is secure and will never be shared
                  </div>
                  
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Booking Session...
                      </>
                    ) : (
                      <>
                        <span className="btn-icon">📅</span>
                        Book Your Session
                      </>
                    )}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <div className="success-message">
                      <span className="success-icon">✅</span>
                      Booking submitted! The tutor will contact you soon.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="error-message">
                      <span className="error-icon">❌</span>
                      Something went wrong. Please try again or contact me directly.
                    </div>
                  )}
                </div>
              </form>
            )}

            {/* In Tutor View, show booking instructions */}
            {isTutorView && (
              <div className="response-guarantee">
                <div className="guarantee-icon">📊</div>
                <div className="guarantee-content">
                  <h4>Tutor Dashboard Active</h4>
                  <p>You're viewing the tutor dashboard. Students cannot see this section. 
                  When they submit the booking form, new bookings will appear here.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="contact-cta">
          <div className="cta-content">
            <h3>Need Immediate Assistance?</h3>
            <p>Call, message, or WhatsApp me directly for the fastest response.</p>
            <div className="cta-buttons">
              <button className="cta-btn primary" onClick={() => setShowCallModal(true)}>
                <span className="btn-icon">📞</span>
                Call Now
              </button>
              <button className="cta-btn secondary" onClick={handleWhatsApp}>
                <span className="btn-icon">💬</span>
                WhatsApp Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Call Modal ===== */}
      {showCallModal && (
        <div className="call-modal" onClick={() => setShowCallModal(false)}>
          <div className="call-content" onClick={e => e.stopPropagation()}>
            <h3>Call {isTutorView ? 'Student' : 'Tutor'} Directly</h3>
            <div className="call-number">+260 977 123 456</div>
            <p>Available: Monday - Saturday, 8:00 AM - 8:00 PM</p>
            <div className="call-options">
              <button className="call-action-btn primary" onClick={handleDirectCall}>
                <span className="btn-icon">📞</span>
                Call Now
              </button>
              <button className="call-action-btn secondary" onClick={() => setShowCallModal(false)}>
                <span className="btn-icon">✕</span>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== Password Modal ===== */}
      {showPasswordModal && (
        <div className="password-modal" onClick={() => setShowPasswordModal(false)}>
          <div className="password-modal-content" onClick={e => e.stopPropagation()}>
            <h3>Tutor Login</h3>
            <p>Enter your tutor password to access the dashboard:</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="password-input"
              onKeyPress={(e) => e.key === 'Enter' && checkPassword()}
            />
            <div className="password-modal-actions">
              <button className="primary-btn" onClick={checkPassword}>
                Login
              </button>
              <button className="secondary-btn" onClick={() => setShowPasswordModal(false)}>
                Cancel
              </button>
            </div>
            <p className="password-hint">Hint: The password is "tutor123" for this demo</p>
          </div>
        </div>
      )}

      {/* ===== WhatsApp Widget ===== */}
      <div className="whatsapp-widget">
        <div className="whatsapp-btn" onClick={handleWhatsApp}>
          💬
        </div>
      </div>
    </section>
  );
}

export default Contact;