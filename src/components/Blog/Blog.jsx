import { useState } from 'react';
import './Blog.css';

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const blogPosts = [
    {
      id: 1,
      title: "5 Common Calculus Mistakes & How to Avoid Them",
      excerpt: "Learn about the most frequent errors students make in calculus and proven strategies to overcome them.",
      category: "mathematics",
      readTime: "5 min read",
      date: "May 15, 2024",
      author: "MathMasters Tutor",
      image: "📊", // Placeholder emoji - replace with image URL
      featured: true
    },
    {
      id: 2,
      title: "Mastering Statistics: Understanding Hypothesis Testing",
      excerpt: "A beginner-friendly guide to hypothesis testing with practical examples from real research.",
      category: "statistics",
      readTime: "8 min read",
      date: "April 28, 2024",
      author: "MathMasters Tutor",
      image: "📈",
      featured: true
    },
    {
      id: 3,
      title: "How to Write a Winning Mathematics Research Proposal",
      excerpt: "Step-by-step guide to crafting compelling research proposals for grants and academic programs.",
      category: "research",
      readTime: "10 min read",
      date: "April 10, 2024",
      author: "MathMasters Tutor",
      image: "✍️",
      featured: false
    },
    {
      id: 4,
      title: "Physics Problem-Solving Strategies That Actually Work",
      excerpt: "Transform your approach to physics problems with these effective thinking frameworks.",
      category: "physics",
      readTime: "6 min read",
      date: "March 22, 2024",
      author: "MathMasters Tutor",
      image: "⚛️",
      featured: false
    },
    {
      id: 5,
      title: "Time Management for University Mathematics Students",
      excerpt: "Balance coursework, assignments, and exam preparation with these practical time management tips.",
      category: "study-tips",
      readTime: "7 min read",
      date: "March 5, 2024",
      author: "MathMasters Tutor",
      image: "⏰",
      featured: false
    },
    {
      id: 6,
      title: "Understanding Linear Algebra: Practical Applications",
      excerpt: "Discover how linear algebra concepts apply to real-world problems in technology and science.",
      category: "mathematics",
      readTime: "9 min read",
      date: "February 18, 2024",
      author: "MathMasters Tutor",
      image: "🔢",
      featured: false
    },
    {
      id: 7,
      title: "Overcoming Math Anxiety: A Student's Guide",
      excerpt: "Practical techniques to build confidence and reduce anxiety when facing mathematical challenges.",
      category: "study-tips",
      readTime: "6 min read",
      date: "February 3, 2024",
      author: "MathMasters Tutor",
      image: "😌",
      featured: false
    },
    {
      id: 8,
      title: "The Art of Mathematical Proof Writing",
      excerpt: "Learn the structure and style of effective proof writing for advanced mathematics courses.",
      category: "mathematics",
      readTime: "11 min read",
      date: "January 20, 2024",
      author: "MathMasters Tutor",
      image: "📝",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Topics', count: blogPosts.length },
    { id: 'mathematics', name: 'Mathematics', count: blogPosts.filter(post => post.category === 'mathematics').length },
    { id: 'statistics', name: 'Statistics', count: blogPosts.filter(post => post.category === 'statistics').length },
    { id: 'physics', name: 'Physics', count: blogPosts.filter(post => post.category === 'physics').length },
    { id: 'research', name: 'Research', count: blogPosts.filter(post => post.category === 'research').length },
    { id: 'study-tips', name: 'Study Tips', count: blogPosts.filter(post => post.category === 'study-tips').length }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = [...blogPosts].sort((a, b) => b.id - a.id).slice(0, 4);

  return (
    <section className="blog" id="blog">
      <div className="container">
        {/* Blog Header */}
        <div className="blog-header">
          <h2 className="blog-title">Math Insights & Study Tips</h2>
          <p className="blog-subtitle">
            Educational articles, study strategies, and mathematical insights to help you excel in your academic journey.
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="featured-posts">
            <h3 className="section-title">Featured Articles</h3>
            <div className="featured-grid">
              {featuredPosts.map(post => (
                <div className="featured-card" key={post.id}>
                  <div className="featured-image">
                    <span className="image-placeholder">{post.image}</span>
                    <div className="category-badge">{post.category}</div>
                  </div>
                  <div className="featured-content">
                    <div className="post-meta">
                      <span className="post-date">{post.date}</span>
                      <span className="post-read-time">{post.readTime}</span>
                    </div>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <div className="post-footer">
                      <span className="post-author">By {post.author}</span>
                      <button className="read-more-btn">Read Article →</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Blog Content */}
        <div className="blog-content">
          {/* Sidebar */}
          <div className="blog-sidebar">
            {/* Categories */}
            <div className="sidebar-widget categories-widget">
              <h4 className="widget-title">Topics</h4>
              <div className="categories-list">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className="category-name">{category.name}</span>
                    <span className="category-count">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="sidebar-widget recent-posts-widget">
              <h4 className="widget-title">Recent Posts</h4>
              <div className="recent-posts-list">
                {recentPosts.map(post => (
                  <div className="recent-post-item" key={post.id}>
                    <div className="recent-post-image">
                      <span>{post.image}</span>
                    </div>
                    <div className="recent-post-content">
                      <h5>{post.title}</h5>
                      <div className="recent-post-meta">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="sidebar-widget newsletter-widget">
              <h4 className="widget-title">Math Tips Newsletter</h4>
              <p>Get weekly study tips and math insights delivered to your inbox.</p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  Subscribe
                </button>
              </form>
              <p className="privacy-note">No spam. Unsubscribe anytime.</p>
            </div>

            {/* Study Resources */}
            <div className="sidebar-widget resources-widget">
              <h4 className="widget-title">Free Resources</h4>
              <div className="resources-list">
                <a href="#" className="resource-item">
                  <span className="resource-icon">📥</span>
                  <span>Calculus Formula Sheet</span>
                </a>
                <a href="#" className="resource-item">
                  <span className="resource-icon">📥</span>
                  <span>Statistics Cheat Sheet</span>
                </a>
                <a href="#" className="resource-item">
                  <span className="resource-icon">📥</span>
                  <span>Physics Problem Set</span>
                </a>
                <a href="#" className="resource-item">
                  <span className="resource-icon">📥</span>
                  <span>Research Paper Template</span>
                </a>
              </div>
            </div>
          </div>

          {/* Main Blog Posts */}
          <div className="blog-main">
            {/* Category Filter for Mobile */}
            <div className="mobile-categories">
              <div className="categories-scroll">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`mobile-category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Posts Grid */}
            <div className="posts-grid">
              {filteredPosts.map(post => (
                <div className="post-card" key={post.id}>
                  <div className="post-image">
                    <span className="image-placeholder">{post.image}</span>
                    <div className="post-category">{post.category}</div>
                  </div>
                  <div className="post-content">
                    <div className="post-meta">
                      <span className="post-date">{post.date}</span>
                      <span className="post-read-time">{post.readTime}</span>
                    </div>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <div className="post-footer">
                      <span className="post-author">By {post.author}</span>
                      <button className="read-more-btn">Read More →</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {filteredPosts.length > 0 && (
              <div className="load-more-container">
                <button className="load-more-btn">
                  Load More Articles
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="blog-cta">
          <div className="cta-content">
            <h3>Want Personalized Math Help?</h3>
            <p>These articles are just the beginning. Get one-on-one tutoring tailored to your specific needs.</p>
            <div className="cta-buttons">
              <a href="#booking" className="cta-btn primary">
                📅 Book a Session
              </a>
              <a href="#contact" className="cta-btn secondary">
                📞 Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;