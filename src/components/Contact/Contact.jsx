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
    phone: '',
    subject: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
    duration: '1 hour'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [activeContact, setActiveContact] = useState(0);
  const [showCallModal, setShowCallModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isTutorView, setIsTutorView] = useState(false);
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [selectedBookingForReminder, setSelectedBookingForReminder] = useState(null);
  const [reminderTime, setReminderTime] = useState('24');
  
  const [reminders, setReminders] = useState({
    email: true,
    sms: true,
    whatsapp: true,
    before24h: true,
    before1h: true
  });

  // ========== NEW COPY STATES ========== 👈 ADD HERE
  const [copiedNumber, setCopiedNumber] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showCopyToast, setShowCopyToast] = useState(false);
  const [copyMessage, setCopyMessage] = useState('');

  // ========== COPY TO CLIPBOARD FUNCTION ========== 👈 ADD HERE
  const copyToClipboard = (text, message) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopyMessage(message);
        setShowCopyToast(true);
        setTimeout(() => setShowCopyToast(false), 3000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        alert('Failed to copy. Please copy manually: ' + text);
      });
  };

  // ========== DIRECT COMMUNICATION HANDLERS ========== 👈 ADD HERE
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi Dickson! I saw your MathMasters website and need help with mathematics.');
    window.open(`https://wa.me/260779414131?text=${message}`, '_blank');
  };

  const handleDirectCall = () => {
    // On mobile, this will dial. On desktop, show copy option
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.location.href = 'tel:+260779414131';
    } else {
      copyToClipboard('+260779414131', 'Phone number copied! Call this number from your phone.');
    }
  };

  const handleDirectSMS = () => {
    const message = 'Hi Dickson! I would like to book a tutoring session.';
    // On mobile, open SMS app. On desktop, copy number.
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.location.href = `sms:+260779414131?body=${encodeURIComponent(message)}`;
    } else {
      copyToClipboard('+260779414131', 'Phone number copied! Send SMS from your phone.');
    }
  };

  const handleDirectEmail = () => {
    window.open(`mailto:chishimbadickson2000@gmail.com?subject=MathMasters%20Tutoring%20Inquiry&body=Hi%20Dickson,%0A%0AI%20need%20help%20with...`, '_blank');
  };

  // ========== PASSWORD CHECK FUNCTION ========== 
  const checkPassword = () => {
    if (password === 'tutor123') {
      setIsAuthenticated(true);
      setIsTutorView(true);
      setShowPasswordModal(false);
      setPassword('');
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

// ENDING HERE
  // Contact methods with YOUR ACTUAL contact info
  const contactMethods = [
    {
      id: 1,
      icon: '📞',
      title: 'Call Me',
      details: '+260 779 414 131',
      description: 'Available 8 AM - 8 PM, Monday to Saturday',
      action: 'Call Now',
      color: '#3B82F6',
      delay: '0s'
    },
    {
      id: 2,
      icon: '✉️',
      title: 'Email Me',
      details: 'chishimbadickson2000@gmail.com',
      description: 'Response within 24 hours guaranteed',
      action: 'Send Email',
      color: '#10B981',
      delay: '0.2s'
    },
    {
      id: 3,
      icon: '💬',
      title: 'WhatsApp',
      details: '+260 779 414 131',
      description: 'Quick response, ideal for quick questions',
      action: 'Open WhatsApp',
      color: '#25D366',
      delay: '0.4s'
    },
    {
      id: 4,
      icon: '📍',
      title: 'Location',
      details: 'Lusaka, Zambia',
      description: 'Online & In-person sessions available',
      action: 'View on Map',
      color: '#8B5CF6',
      delay: '0.6s'
    }
  ];

  // Sample bookings data
  const [bookings, setBookings] = useState([
    {
      id: 1,
      student: 'John Mwale',
      subject: 'Calculus',
      date: '15 Dec 2024',
      time: '10:00 AM',
      duration: '2 hours',
      status: 'confirmed',
      contact: '+260 977 123 456',
      email: 'john.mwale@email.com',
      phone: '+260 977 123 456',
      level: 'University',
      topics: 'Calculus, Linear Algebra',
      notes: 'Needs help with integration techniques',
      createdAt: '10 Dec 2024'
    },
    {
      id: 2,
      student: 'Sarah Banda',
      subject: 'Statistics',
      date: '16 Dec 2024',
      time: '2:00 PM',
      duration: '1.5 hours',
      status: 'pending',
      contact: '+260977654321',
      email: 'sarah.banda@email.com',
      phone: '+260 977 654 321',
      level: 'University',
      topics: 'Hypothesis Testing, Probability',
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

  // Simulate sending notifications to YOUR EMAIL
  const sendTutorNotification = (booking) => {
    // This would actually email you via Formspree
    console.log('📧 Email notification sent to:', 'chishimbadickson2000@gmail.com', {
      subject: `📚 New Booking: ${booking.student} - ${booking.subject}`,
      body: `
        New booking received!
        
        👤 Student: ${booking.student}
        📧 Email: ${booking.email}
        📱 Phone: ${booking.phone}
        📖 Subject: ${booking.subject}
        📅 Date: ${booking.date}
        ⏰ Time: ${booking.time}
        ⏱️ Duration: ${booking.duration}
        
        📝 Notes: ${booking.notes}
        
        Please check your dashboard for details.
      `
    });

    // SMS notification
    console.log('📱 SMS notification would be sent to:', '+260779414131', 
      `New booking: ${booking.student} for ${booking.subject} on ${booking.date} at ${booking.time}`);
  };

  // Send confirmation to student
  const sendStudentConfirmation = (booking, viaEmail = true, viaSMS = true) => {
    if (viaEmail && reminders.email) {
      console.log('📧 Confirmation email sent to student:', booking.email);
    }
    
    if (viaSMS && reminders.sms && booking.phone) {
      console.log('📱 Confirmation SMS sent to student:', booking.phone,
        `Your ${booking.subject} session with MathMasters is confirmed for ${booking.date} at ${booking.time}.`);
    }
    
    if (reminders.whatsapp && booking.phone) {
      console.log('💬 WhatsApp confirmation sent to student');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('sending');

    // YOUR ACTUAL FORMSPREE ENDPOINT
    const formspreeEndpoint = "https://formspree.io/f/mkonagwl";
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          duration: formData.duration,
          message: formData.message,
          _replyto: formData.email,
          _subject: `📚 MathMasters Booking: ${formData.subject}`,
          _template: 'table'
        }),
      });

      if (response.ok) {
        // Create a new booking for dashboard display
        const newBooking = {
          id: bookings.length + 1,
          student: formData.name,
          subject: formData.subject || 'General Inquiry',
          date: formData.preferredDate || new Date().toLocaleDateString('en-US', { 
            weekday: 'short', 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          }),
          time: formData.preferredTime || new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
          }),
          duration: formData.duration,
          status: 'pending',
          contact: formData.email,
          email: formData.email,
          phone: formData.phone,
          level: 'University',
          topics: formData.subject,
          notes: formData.message || 'No additional notes',
          createdAt: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })
        };
        
        setBookings(prev => [newBooking, ...prev]);
        
        // Send notification to tutor (YOU)
        sendTutorNotification(newBooking);
        
        setSubmitStatus('success');
        setFormData({ 
          name: '', 
          email: '', 
          phone: '',
          subject: '', 
          message: '',
          preferredDate: '',  // ✅ CORRECTED: No space
          preferredTime: '',  // ✅ CORRECTED: No space
          duration: '1 hour'
        });
        
        setTimeout(() => setSubmitStatus(''), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle direct communication actions
 // Handle direct communication actions
const handleContactAction = (method) => {
  switch(method.title) {
    case 'Call Me':
      setShowCallModal(true);
      break;
    case 'Email Me':
      handleDirectEmail(); // Use the new handler
      break;
    case 'WhatsApp':
      handleWhatsApp(); // Use the new handler
      break;
    case 'Location':
      window.open(`https://maps.google.com/?q=${encodeURIComponent('Lusaka, Zambia')}`, '_blank');
      break;
    default:
      break;
  }
};
 

  // Booking management functions
  const confirmBooking = (bookingId) => {
    setBookings(prev => prev.map(booking => 
      booking.id === bookingId 
        ? { ...booking, status: 'confirmed' }
        : booking
    ));
    
    const booking = bookings.find(b => b.id === bookingId);
    
    // Send confirmation to student
    sendStudentConfirmation(booking, true, true);
    
    alert(`✅ Booking confirmed for ${booking?.student}. Student has been notified via email and SMS.`);
  };

  const cancelBooking = (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      setBookings(prev => prev.map(booking => 
        booking.id === bookingId 
          ? { ...booking, status: 'cancelled' }
          : booking
      ));
      
      const booking = bookings.find(b => b.id === bookingId);
      console.log('📧 Cancellation email sent to:', booking?.email);
      console.log('📱 Cancellation SMS sent to:', booking?.phone);
    }
  };

  const viewBookingDetails = (booking) => {
    setSelectedBooking(booking);
    setShowBookingModal(true);
  };

  const openReminderModal = (booking) => {
    setSelectedBookingForReminder(booking);
    setShowReminderModal(true);
  };

  const setReminder = () => {
    if (selectedBookingForReminder && reminderTime) {
      alert(`⏰ Reminder set for ${reminderTime} hours before the session. You will be notified.`);
      
      // Simulate setting a reminder
      setTimeout(() => {
        alert(`🔔 Reminder: Your session with ${selectedBookingForReminder.student} starts in ${reminderTime} hours!`);
      }, 2000);
      
      setShowReminderModal(false);
      setReminderTime('24');
      setSelectedBookingForReminder(null);
    }
  };

  // Toggle reminder settings
  const toggleReminder = (type) => {
    setReminders(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  // Export bookings
  const exportBookings = () => {
    const dataStr = JSON.stringify(bookings, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `mathmasters-bookings-${new Date().toISOString().split('T')[0]}.json`;
    
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
            <span className="badge-text">Contact MathMasters</span>
          </div>
          
          <h2 className="contact-title">
            Let's Start Your 
            <span className="title-highlight"> Mathematics Journey</span>
          </h2>
          
          <p className="contact-subtitle">
            Need help with university mathematics? Contact Dickson Chishimba for expert tutoring in calculus, statistics, linear algebra, and more.
          </p>

          {/* Stats Bar */}
          <div className="contact-stats">
            <div className="contact-stat">
              <div className="stat-number">6h</div>
              <div className="stat-label">Avg. Response Time</div>
            </div>
            <div className="contact-stat">
              <div className="stat-number">Free</div>
              <div className="stat-label">30-min Consultation</div>
            </div>
            <div className="contact-stat">
              <div className="stat-number">MSc</div>
              <div className="stat-label">Mathematics Expert</div>
            </div>
          </div>
        </div>

        {/* ===== Dashboard Access Controls ===== */}
        <div className="dashboard-access">
          {isAuthenticated ? (
            <>
              <div className="tutor-status">
                ✅ Tutor Mode Active - Viewing as Dickson Chishimba
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
                  className="export-btn"
                  onClick={exportBookings}
                >
                  📥 Export Bookings
                </button>
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
                🔒 Tutor Login (Password: tutor123)
              </button>
            </div>
          )}
        </div>

        {/* ===== Direct Communication Section ===== */}
        {/* ===== Direct Communication Section ===== */}
<div className="direct-comms-section">
  <h3 className="section-title">
    {isTutorView ? 'Student Communication' : 'Connect Directly with Dickson'}
  </h3>
  <div className="comm-methods">
    <div className="comm-card whatsapp" onClick={handleWhatsApp}>
      <div className="comm-icon">💬</div>
      <h4>WhatsApp</h4>
      <p>{isTutorView ? 'Message students directly' : 'Instant messaging with Dickson'}</p>
      <button className="comm-btn">
        {isTutorView ? 'Open WhatsApp' : 'Message Dickson'}
      </button>
      <div className="copy-option" onClick={(e) => {
        e.stopPropagation();
        copyToClipboard('+260779414131', 'WhatsApp number copied!');
      }}>
        📋 Copy Number
      </div>
    </div>
    
    <div className="comm-card call" onClick={handleDirectCall}>
      <div className="comm-icon">📞</div>
      <h4>Direct Call</h4>
      <p>{isTutorView ? 'Call students directly' : 'Call Dickson directly'}</p>
      <button className="comm-btn">
        {/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
          ? 'Call Now' 
          : 'Copy Number'}
      </button>
      <div className="phone-display">+260 779 414 131</div>
    </div>
    
    <div className="comm-card message" onClick={handleDirectSMS}>
      <div className="comm-icon">✉️</div>
      <h4>SMS/Text</h4>
      <p>{isTutorView ? 'Send SMS to students' : 'Send SMS to Dickson'}</p>
      <button className="comm-btn">
        {/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
          ? 'Send SMS' 
          : 'Copy Number'}
      </button>
      <div className="copy-option" onClick={(e) => {
        e.stopPropagation();
        copyToClipboard('+260779414131', 'SMS number copied!');
      }}>
        📋 Copy for SMS
      </div>
    </div>
    
    <div className="comm-card email" onClick={handleDirectEmail}>
      <div className="comm-icon">📧</div>
      <h4>Email</h4>
      <p>{isTutorView ? 'Email students directly' : 'Email Dickson directly'}</p>
      <button className="comm-btn">Send Email</button>
      <div className="copy-option" onClick={(e) => {
        e.stopPropagation();
        copyToClipboard('chishimbadickson2000@gmail.com', 'Email copied!');
      }}>
        📋 Copy Email
      </div>
    </div>
  </div>

  {/* Copy Success Toast */}
  {showCopyToast && (
    <div className="copy-toast">
      ✅ {copyMessage}
    </div>
  )}

  {/* Desktop Instructions */}
  {!isTutorView && !/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (
    <div className="desktop-instructions">
      <div className="instruction-icon">💡</div>
      <div className="instruction-text">
        <strong>On Desktop:</strong> Phone/SMS links will copy the number to clipboard. 
        Use your phone to call/text. WhatsApp Web will open directly.
      </div>
    </div>
  )}
</div>
        {/* ===== Bookings Dashboard (Only visible in tutor view) ===== */}
        {isTutorView && (
          <div className="bookings-section">
            <div className="bookings-header">
              <h3>📅 MathMasters Dashboard - Bookings Management</h3>
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
                        <span className="meta-icon">📱</span>
                        <span>{booking.phone}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-icon">📧</span>
                        <span>{booking.email}</span>
                      </div>
                    </div>
                    <div className="booking-notes">
                      <strong>Notes:</strong> {booking.notes}
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
                        onClick={() => openReminderModal(booking)}
                        disabled={booking.status === 'cancelled'}
                      >
                        Set Reminder
                      </button>
                      <button 
                        className="action-btn success"
                        onClick={() => confirmBooking(booking.id)}
                        disabled={booking.status === 'confirmed' || booking.status === 'cancelled'}
                      >
                        ✅ Confirm
                      </button>
                      <button 
                        className="action-btn danger"
                        onClick={() => cancelBooking(booking.id)}
                        disabled={booking.status === 'cancelled'}
                      >
                        ❌ Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="dashboard-stats">
              <div className="stat-card">
                <div className="stat-number">{dashboardStats.total}</div>
                <div className="stat-label">Total Bookings</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{dashboardStats.confirmed}</div>
                <div className="stat-label">Confirmed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{dashboardStats.pending}</div>
                <div className="stat-label">Pending</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{dashboardStats.cancelled}</div>
                <div className="stat-label">Cancelled</div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content (Contact Methods & Form) */}
        <div className="contact-content">
          {/* Left Column - Contact Methods */}
          <div className="contact-methods">
            <h3 className="section-title">
              {isTutorView ? 'Your Contact Information' : 'Contact Dickson Chishimba'}
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
                <h4>Available Hours</h4>
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
                  <span className="time">By Appointment Only</span>
                </div>
              </div>
              <div className="hours-note">
                <span className="note-icon">📍</span>
                <span>Based in Lusaka, Zambia | Online sessions worldwide</span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-form-section">
            <div className="form-header">
              <h3 className="section-title">
                {isTutorView ? 'Student Booking Form' : 'Book a Mathematics Session'}
              </h3>
              <p className="form-subtitle">
                {isTutorView 
                  ? 'Students use this form to book sessions. Submissions appear in your dashboard.'
                  : 'Fill this form to schedule a tutoring session. All submissions are sent to Dickson\'s email.'
                }
              </p>
            </div>

            {/* Animated Form (Only show in student view) */}
            {!isTutorView && (
              <form 
                className="contact-form" 
                onSubmit={handleSubmit}
              >
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

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">
                        <span className="label-icon">📱</span>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+260 779 414 131"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="subject">
                        <span className="label-icon">📚</span>
                        Subject Needed *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="Calculus & Analysis">Calculus & Analysis</option>
                        <option value="Linear Algebra">Linear Algebra</option>
                        <option value="Statistics & Probability">Statistics & Probability</option>
                        <option value="Differential Equations">Differential Equations</option>
                        <option value="Discrete Mathematics">Discrete Mathematics</option>
                        <option value="Numerical Methods">Numerical Methods</option>
                        <option value="Real Analysis">Real Analysis</option>
                        <option value="Complex Analysis">Complex Analysis</option>
                        <option value="Abstract Algebra">Abstract Algebra</option>
                        <option value="Topology">Topology</option>
                        <option value="Mathematical Physics">Mathematical Physics</option>
                        <option value="Thesis/Research Help">Thesis/Research Help</option>
                        <option value="Exam Preparation">Exam Preparation</option>
                        <option value="Assignment Help">Assignment Help</option>
                        <option value="Other Mathematics">Other Mathematics</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="preferredDate">
                        <span className="label-icon">📅</span>
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="preferredTime">
                        <span className="label-icon">⏰</span>
                        Preferred Time
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                      >
                        <option value="">Select preferred time</option>
                        <option value="08:00 AM">08:00 AM</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="01:00 PM">01:00 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="03:00 PM">03:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="05:00 PM">05:00 PM</option>
                        <option value="06:00 PM">06:00 PM</option>
                        <option value="07:00 PM">07:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="duration">
                      <span className="label-icon">⏱️</span>
                      Session Duration
                    </label>
                    <select
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                    >
                      <option value="1 hour">1 hour</option>
                      <option value="1.5 hours">1.5 hours</option>
                      <option value="2 hours">2 hours</option>
                      <option value="2.5 hours">2.5 hours</option>
                      <option value="3 hours">3 hours</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">
                      <span className="label-icon">💭</span>
                      Additional Notes & Learning Goals
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about:
• Your current university/course level
• Specific topics you need help with
• Your goals (exam prep, assignment, understanding concepts)
• Any deadlines or urgent requirements
• Preferred learning style"
                      rows="5"
                    />
                    <div className="char-counter">
                      {formData.message.length}/500 characters
                    </div>
                  </div>

                  {/* Reminder Preferences */}
                  <div className="form-group">
                    <label>
                      <span className="label-icon">🔔</span>
                      Send me reminders via:
                    </label>
                    <div className="reminder-preferences">
                      <label className="reminder-checkbox">
                        <input 
                          type="checkbox" 
                          checked={reminders.email}
                          onChange={() => toggleReminder('email')}
                        />
                        <span>Email</span>
                      </label>
                      <label className="reminder-checkbox">
                        <input 
                          type="checkbox" 
                          checked={reminders.sms}
                          onChange={() => toggleReminder('sms')}
                        />
                        <span>SMS</span>
                      </label>
                      <label className="reminder-checkbox">
                        <input 
                          type="checkbox" 
                          checked={reminders.whatsapp}
                          onChange={() => toggleReminder('whatsapp')}
                        />
                        <span>WhatsApp</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Form Footer */}
                <div className="form-footer">
                  <div className="privacy-note">
                    <span className="privacy-icon">🔒</span>
                    Your information is secure. Form submissions are sent directly to Dickson's email.
                  </div>
                  
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Sending to Dickson...
                      </>
                    ) : (
                      <>
                        <span className="btn-icon">📤</span>
                        Send Booking Request
                      </>
                    )}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <div className="success-message">
                      <span className="success-icon">✅</span>
                      <div>
                        <strong>Booking Submitted Successfully!</strong>
                        <p>Your request has been sent to Dickson's email. You'll receive a response within 6 hours.</p>
                        <p className="success-tip"><strong>Tip:</strong> Save Dickson's WhatsApp number (+260779414131) for faster communication.</p>
                      </div>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="error-message">
                      <span className="error-icon">❌</span>
                      <div>
                        <strong>Submission Error</strong>
                        <p>Please contact Dickson directly:</p>
                        <div className="direct-contact">
                          <button onClick={handleWhatsApp} className="whatsapp-btn">💬 WhatsApp</button>
                          <button onClick={handleDirectEmail} className="email-btn">✉️ Email</button>
                          <button onClick={() => setShowCallModal(true)} className="call-btn">📞 Call</button>
                        </div>
                      </div>
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
                  <p>You're viewing the tutor dashboard as <strong>Dickson Chishimba</strong>.</p>
                  <p>When students submit the booking form:</p>
                  <ul>
                    <li>✅ They'll receive an auto-confirmation</li>
                    <li>✅ You'll receive an email to chishimbadickson2000@gmail.com</li>
                    <li>✅ Booking will appear in your dashboard above</li>
                    <li>✅ You can confirm/cancel bookings and set reminders</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="contact-cta">
          <div className="cta-content">
            <h3>Need Immediate Mathematics Help?</h3>
            <p>Contact Dickson directly for the fastest response. Available for both online and in-person sessions in Lusaka.</p>
            <div className="cta-buttons">
              <button className="cta-btn primary" onClick={() => setShowCallModal(true)}>
                <span className="btn-icon">📞</span>
                Call Dickson Now
              </button>
              <button className="cta-btn secondary" onClick={handleWhatsApp}>
                <span className="btn-icon">💬</span>
                WhatsApp Dickson
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Call Modal ===== */}
      {showCallModal && (
        <div className="call-modal" onClick={() => setShowCallModal(false)}>
          <div className="call-content" onClick={e => e.stopPropagation()}>
            <h3>Call {isTutorView ? 'Student' : 'Dickson'} Directly</h3>
            <div className="call-number">+260779414131</div>
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
            <div className="call-note">
              <span className="note-icon">💡</span>
              <span>For urgent matters, WhatsApp is recommended for faster response.</span>
            </div>
          </div>
        </div>
      )}

      {/* ===== Reminder Modal ===== */}
      {showReminderModal && (
        <div className="reminder-modal" onClick={() => setShowReminderModal(false)}>
          <div className="reminder-modal-content" onClick={e => e.stopPropagation()}>
            <h3>⏰ Set Session Reminder</h3>
            <p>Set a reminder for session with {selectedBookingForReminder?.student}</p>
            
            <div className="reminder-form">
              <div className="form-group">
                <label htmlFor="reminderTime">
                  Remind me before session:
                </label>
                <select
                  id="reminderTime"
                  value={reminderTime}
                  onChange={(e) => setReminderTime(e.target.value)}
                  className="reminder-select"
                >
                  <option value="1">1 hour before</option>
                  <option value="3">3 hours before</option>
                  <option value="6">6 hours before</option>
                  <option value="12">12 hours before</option>
                  <option value="24">24 hours before</option>
                  <option value="48">2 days before</option>
                </select>
              </div>
              
              <div className="reminder-note">
                <span className="note-icon">📅</span>
                <span>Session: {selectedBookingForReminder?.date} at {selectedBookingForReminder?.time}</span>
              </div>
            </div>
            
            <div className="reminder-modal-actions">
              <button className="primary-btn" onClick={setReminder}>
                Set Reminder
              </button>
              <button className="secondary-btn" onClick={() => setShowReminderModal(false)}>
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
            <h3>Tutor Login - MathMasters Dashboard</h3>
            <p>Enter your tutor password to access the bookings dashboard:</p>
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
                Login as Tutor
              </button>
              <button className="secondary-btn" onClick={() => setShowPasswordModal(false)}>
                Cancel
              </button>
            </div>
            <p className="password-hint">Demo password: <code>tutor123</code></p>
          </div>
        </div>
      )}

      {/* ===== WhatsApp Widget ===== */}
      <div className="whatsapp-widget" onClick={handleWhatsApp}>
        <div className="whatsapp-btn">
          💬
          <div className="whatsapp-tooltip">Chat with Dickson on WhatsApp</div>
        </div>
      </div>
    </section>
  );
}

export default Contact;