import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: "📚",
      title: "Smart Learning",
      description: "AI-powered personalized learning paths that adapt to your pace and style."
    },
    {
      icon: "🎯",
      title: "Goal Tracking",
      description: "Set and achieve your learning goals with our intelligent progress tracking."
    },
    {
      icon: "👥",
      title: "Community",
      description: "Connect with fellow learners and share your knowledge journey."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      content: "WeStudy transformed how I learn new technologies. The personalized approach is incredible!",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Marcus Johnson",
      role: "Data Scientist",
      content: "The community aspect makes learning so much more engaging. Highly recommend!",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">📖</span>
            <span className="logo-text">WeStudy</span>
          </div>
          <div className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
            <button className="cta-button">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Learn Smarter, Not Harder
              <span className="title-accent">.</span>
            </h1>
            <p className="hero-subtitle">
              Transform your learning journey with AI-powered personalization, 
              community support, and intelligent progress tracking.
            </p>
            <div className="hero-buttons">
              <button className="primary-button">
                Start Learning Free
                <span className="button-arrow">→</span>
              </button>
              <button className="secondary-button">
                <span className="play-icon">▶</span>
                Watch Demo
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card card-1">
              <div className="card-icon">🎓</div>
              <div className="card-text">
                <div className="card-title">Progress</div>
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">⚡</div>
              <div className="card-text">
                <div className="card-title">Streak</div>
                <div className="streak-count">15 days</div>
              </div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">🏆</div>
              <div className="card-text">
                <div className="card-title">Achievement</div>
                <div className="achievement">Expert Level</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose WeStudy?</h2>
            <p className="section-subtitle">
              Discover the features that make learning effective and enjoyable
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`feature-card ${activeFeature === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Active Learners</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Lessons Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Learners Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">"{testimonial.content}"</div>
                <div className="testimonial-author">
                  <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Learning?</h2>
            <p className="cta-subtitle">
              Join thousands of learners who are already achieving their goals with WeStudy
            </p>
            <button className="cta-button-large">
              Start Your Journey Today
              <span className="button-sparkle">✨</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-icon">📖</span>
                <span className="logo-text">WeStudy</span>
              </div>
              <p className="footer-description">
                Empowering learners worldwide with intelligent, personalized education.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#integrations">Integrations</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#about">About</a>
                <a href="#careers">Careers</a>
                <a href="#contact">Contact</a>
              </div>
              <div className="footer-column">
                <h4>Resources</h4>
                <a href="#blog">Blog</a>
                <a href="#help">Help Center</a>
                <a href="#community">Community</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 WeStudy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;