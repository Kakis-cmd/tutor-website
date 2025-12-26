import { useState } from 'react';
import './Booking.css';

function Booking() {
  const [selectedService, setSelectedService] = useState('consultation');
  const [showBookingWidget, setShowBookingWidget] = useState(false);

  const services = [
    {
      id: 'consultation',
      name: 'Free Consultation',
      duration: '30 minutes',
      price: 'FREE',
      description: 'Discuss your learning goals and create a personalized plan',
      icon: '💬',
      color: '#3B82F6'
    },
    {
      id: 'mathematics',
      name: 'Mathematics Session',
      duration: '1 hour',
      price: '$25',
      description: 'One-on-one tutoring in any mathematics subject',
      icon: '📐',
      color: '#10B981'
    },
    {
      id: 'physics',
      name: 'Physics Session',
      duration: '1 hour',
      price: '$30',
      description: 'Physics concepts, problem-solving, and exam preparation',
      icon: '⚛️',
      color: '#8B5CF6'
    },
    {
      id: 'writing',
      name: 'Writing Assistance',
      duration: '1-2 hours',
      price: '$40/session',
      description: 'Thesis, research papers, and academic writing help',
      icon: '✍️',
      color: '#EC4899'
    },
    {
      id: 'package',
      name: 'Package (5 Sessions)',
      duration: '5 hours',
      price: '$110',
      description: 'Save 12% with our most popular package',
      icon: '🎯',
      color: '#F59E0B'
    },
    {
      id: 'custom',
      name: 'Custom Package',
      duration: 'Custom',
      price: 'Contact',
      description: 'Tailored sessions for specific needs and schedules',
      icon: '⭐',
      color: '#6366F1'
    }
  ];

  const calendlyLinks = {
    consultation: 'https://calendly.com/yourusername/free-consultation',
    mathematics: 'https://calendly.com/yourusername/mathematics-tutoring',
    physics: 'https://calendly.com/yourusername/physics-tutoring',
    writing: 'https://calendly.com/yourusername/writing-assistance',
    package: 'https://calendly.com/yourusername/package-sessions',
    custom: '#contact'
  };

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
    setShowBookingWidget(false);
  };

  const handleBookNow = () => {
    if (selectedService === 'custom') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setShowBookingWidget(true);
      setTimeout(() => {
        const widgetElement = document.querySelector('.booking-widget');
        if (widgetElement) {
          widgetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  return (
    <section className="booking" id="booking">
      <div className="container">
        <div className="booking-header">
          <h2 className="booking-title">Book Your Session</h2>
          <p className="booking-subtitle">
            Easy online scheduling. Choose your service, pick a time, and start learning!
          </p>
        </div>

        {/* Service Selection */}
        <div className="service-selection">
          <h3 className="section-title">Select a Service</h3>
          <div className="services-grid">
            {services.map((service) => (
              <div
                key={service.id}
                className={`service-option ${selectedService === service.id ? 'selected' : ''}`}
                onClick={() => handleServiceSelect(service.id)}
                style={{ 
                  borderColor: selectedService === service.id ? service.color : '#e2e8f0',
                  backgroundColor: selectedService === service.id ? `${service.color}10` : 'white'
                }}
              >
                <div className="service-icon" style={{ color: service.color }}>
                  {service.icon}
                </div>
                <div className="service-details">
                  <h4>{service.name}</h4>
                  <div className="service-meta">
                    <span className="duration">⏱️ {service.duration}</span>
                    <span className="price" style={{ color: service.color }}>
                      {service.price}
                    </span>
                  </div>
                  <p className="service-description">{service.description}</p>
                </div>
                {selectedService === service.id && (
                  <div className="selected-badge" style={{ backgroundColor: service.color }}>
                    ✓ Selected
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Selected Service Summary */}
        <div className="selected-service-summary">
          <div className="summary-content">
            <div className="summary-header">
              <h3>Selected: {services.find(s => s.id === selectedService)?.name}</h3>
              <div className="summary-price" style={{ color: services.find(s => s.id === selectedService)?.color }}>
                {services.find(s => s.id === selectedService)?.price}
              </div>
            </div>
            <p>{services.find(s => s.id === selectedService)?.description}</p>
            
            <div className="summary-features">
              <div className="feature">
                <span className="feature-icon">✅</span>
                <span>One-on-one personalized attention</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✅</span>
                <span>Flexible online or in-person sessions</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✅</span>
                <span>Session recordings available</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✅</span>
                <span>Materials and resources included</span>
              </div>
            </div>
            
            <button 
              className="book-now-btn"
              onClick={handleBookNow}
              style={{ 
                backgroundColor: services.find(s => s.id === selectedService)?.color 
              }}
            >
              {selectedService === 'custom' ? '📞 Contact for Custom Package' : '📅 Book Now'}
            </button>
          </div>
        </div>

        {/* Calendly Widget */}
        {showBookingWidget && selectedService !== 'custom' && (
          <div className="booking-widget">
            <div className="widget-header">
              <h3>Select Your Time</h3>
              <button 
                className="close-widget"
                onClick={() => setShowBookingWidget(false)}
              >
                ✕
              </button>
            </div>
            
            <div className="calendly-embed">
              {/* Placeholder - Replace with actual Calendly embed */}
              <div className="calendly-placeholder">
                <div className="placeholder-content">
                  <h4>📅 Calendly Booking Widget</h4>
                  <p>To set up your booking system:</p>
                  <ol>
                    <li>Create a free account at <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">calendly.com</a></li>
                    <li>Set up your availability and event types</li>
                    <li>Replace this placeholder with your Calendly embed code</li>
                  </ol>
                  <div className="demo-buttons">
                    <button className="demo-btn monday">Mon 10:00 AM</button>
                    <button className="demo-btn tuesday">Tue 2:00 PM</button>
                    <button className="demo-btn wednesday">Wed 4:00 PM</button>
                    <button className="demo-btn thursday">Thu 6:00 PM</button>
                  </div>
                  <p className="note">For now, you can contact me directly at +260 97 XXX XXXX to schedule</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Booking Instructions */}
        <div className="booking-instructions">
          <h3 className="section-title">How It Works</h3>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Choose Your Service</h4>
              <p>Select the type of session that matches your learning needs.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Pick a Time</h4>
              <p>View available slots and choose what works for your schedule.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Book & Confirm</h4>
              <p>Enter your details and receive instant confirmation.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h4>Start Learning</h4>
              <p>Receive session details and join at your scheduled time.</p>
            </div>
          </div>
        </div>

        {/* Support Information */}
        <div className="support-info">
          <h3>Need Help Booking?</h3>
          <div className="support-options">
            <div className="support-option">
              <div className="support-icon">📞</div>
              <div className="support-details">
                <h4>Call to Book</h4>
                <p>+260 97 XXX XXXX</p>
                <p className="support-note">Available 8 AM - 8 PM</p>
              </div>
            </div>
            <div className="support-option">
              <div className="support-icon">✉️</div>
              <div className="support-details">
                <h4>Email Booking</h4>
                <p>math.expert@example.com</p>
                <p className="support-note">Response within 24 hours</p>
              </div>
            </div>
            <div className="support-option">
              <div className="support-icon">💬</div>
              <div className="support-details">
                <h4>WhatsApp</h4>
                <p>Message to schedule</p>
                <p className="support-note">Quick response guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;