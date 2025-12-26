import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

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
    
    // Prepare form data for Netlify
    const formDataToSend = new FormData();
    formDataToSend.append('form-name', 'contact');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('message', formData.message);
    
    try {
      // Send to Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend).toString(),
      });
      
      if (response.ok) {
        // Success
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus(''), 5000);
      } else {
        // Error
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(''), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      details: '+260 97 XXX XXXX',
      description: 'Available 8 AM - 8 PM, Monday to Saturday'
    },
    {
      icon: '✉️',
      title: 'Email',
      details: 'math.expert@example.com',
      description: 'Response within 24 hours'
    },
    {
      icon: '📍',
      title: 'Location',
      details: 'Lusaka, Zambia',
      description: 'Online & In-person sessions available'
    },
    {
      icon: '⏰',
      title: 'Hours',
      details: 'Flexible Scheduling',
      description: 'Weekdays & Weekends available'
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have questions? Ready to start your mathematics journey? Contact me today!
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h3 className="section-title">Contact Information</h3>
            
            <div className="info-grid">
              {contactInfo.map((info, index) => (
                <div className="info-card" key={index}>
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    <p className="info-details">{info.details}</p>
                    <p className="info-description">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="faq-section">
              <h3 className="section-title">Frequently Asked Questions</h3>
              
              <div className="faq-list">
                <div className="faq-item">
                  <h4>What are your rates?</h4>
                  <p>Rates start at $25/hour and vary based on subject level and session type. Contact for exact pricing.</p>
                </div>
                
                <div className="faq-item">
                  <h4>Do you offer online sessions?</h4>
                  <p>Yes! I offer both online (Zoom/Google Meet) and in-person sessions in Lusaka.</p>
                </div>
                
                <div className="faq-item">
                  <h4>What subjects do you teach?</h4>
                  <p>Mathematics (all levels), Physics, Statistics, and academic writing assistance.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - UPDATED FOR NETLIFY */}
          <div className="contact-form-section">
            <h3 className="section-title">Send a Message</h3>
            
            <form 
              className="contact-form" 
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              netlify
            >
              {/* Hidden input for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="Mathematics Tutoring">Mathematics Tutoring</option>
                  <option value="Physics Tutoring">Physics Tutoring</option>
                  <option value="Thesis Assistance">Thesis Assistance</option>
                  <option value="Research Paper Help">Research Paper Help</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your learning goals, current level, and preferred schedule..."
                  rows="5"
                  required
                />
              </div>
              
              <div className="form-footer">
                <p className="form-note">
                  * Required fields. I'll respond within 24 hours.
                </p>
                
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    '📨 Send Message'
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="success-message">
                    ✅ Message sent successfully! I'll contact you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="error-message">
                    ❌ Something went wrong. Please try again or contact me directly.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;