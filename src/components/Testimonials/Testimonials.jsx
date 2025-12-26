import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "University Student - Calculus",
      rating: 5,
      text: "Struggled with calculus for 2 years until I found this tutor. In 3 months, I went from failing to getting an A. The explanations are crystal clear!",
      avatar: "👩‍🎓",
      date: "December 2023"
    },
    {
      name: "James T.",
      role: "Master's Student - Thesis Help",
      rating: 5,
      text: "My thesis was a mess until I got help with statistical analysis. The tutor not only fixed my calculations but taught me how to do it myself. Highly recommended!",
      avatar: "👨‍💼",
      date: "January 2024"
    },
    {
      name: "Priya K.",
      role: "High School Student - Physics",
      rating: 5,
      text: "Physics made no sense until these sessions. The tutor breaks down complex concepts into simple steps. My grades improved from C to A in one term.",
      avatar: "👩‍🔬",
      date: "February 2024"
    },
    {
      name: "David L.",
      role: "Working Professional - Statistics",
      rating: 5,
      text: "Needed statistics help for my research paper. The tutor was patient, knowledgeable, and helped me understand complex statistical methods.",
      avatar: "👨‍🔬",
      date: "March 2024"
    },
    {
      name: "Maria G.",
      role: "College Student - Linear Algebra",
      rating: 5,
      text: "Linear algebra was overwhelming. The tutor's structured approach and real-world examples made everything click. Best academic decision I made!",
      avatar: "👩‍🏫",
      date: "April 2024"
    },
    {
      name: "Kwame A.",
      role: "PhD Candidate - Research Writing",
      rating: 5,
      text: "The writing assistance for my dissertation was exceptional. The tutor helped me structure my arguments and improve my academic writing style.",
      avatar: "🧑‍🎓",
      date: "May 2024"
    }
  ];

  // Calculate overall stats
  const totalStudents = 200;
  const successRate = 95;
  const avgRating = 4.9;

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Student Success Stories</h2>
          <p className="testimonials-subtitle">
            Don't just take our word for it. See what students say about their learning journey.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="stats-overview">
          <div className="stat-card">
            <div className="stat-number">{totalStudents}+</div>
            <div className="stat-label">Students Helped</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{successRate}%</div>
            <div className="stat-label">Success Rate</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{avgRating}/5</div>
            <div className="stat-label">Average Rating</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              {/* Rating Stars */}
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`star ${i < testimonial.rating ? 'filled' : ''}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="testimonial-text">"{testimonial.text}"</p>
              
              {/* Student Info */}
              <div className="student-info">
                <div className="avatar">{testimonial.avatar}</div>
                <div className="student-details">
                  <h4 className="student-name">{testimonial.name}</h4>
                  <p className="student-role">{testimonial.role}</p>
                  <p className="testimonial-date">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="testimonials-cta">
          <h3>Ready to Be Our Next Success Story?</h3>
          <p>Join hundreds of students who have transformed their academic performance</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn-primary">
              📞 Start Your Journey
            </a>
            <a href="#services" className="btn-outline">
              📚 View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;