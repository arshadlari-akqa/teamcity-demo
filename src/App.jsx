import "./App.css";

function App() {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav">
            <div className="logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">TeamCity Demo</span>
            </div>
            <nav className="nav-links">
              <a href="#features">Features</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <button className="btn-primary">start here</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
          updated hero title
              <span className="gradient-text"> Confidence</span>
            </h1>
            <p className="hero-subtitle">
              Experience seamless CI/CD integration with TeamCity. Automate your
              workflow, accelerate delivery, and ship quality code faster than
              ever.
            </p>
            <div className="hero-buttons">
              <button className="btn-large btn-primary">
                Start Free Trial
              </button>
              <button className="btn-large btn-secondary">
                <span>Watch Demo</span>
                <span className="play-icon">▶</span>
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">10M+</div>
                <div className="stat-label">Builds per Day</div>
              </div>
              <div className="stat">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
              <div className="stat">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Companies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Why Choose TeamCity?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Lightning Fast Builds</h3>
              <p>
                Parallel execution and smart caching ensure your builds complete
                in record time.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Easy Configuration</h3>
              <p>
                Intuitive UI and Kotlin DSL make pipeline setup a breeze for any
                team size.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3>Enterprise Security</h3>
              <p>
                Bank-level security with role-based access control and audit
                logs.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Cloud & On-Premise</h3>
              <p>
                Deploy anywhere - cloud, on-premise, or hybrid infrastructure.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Advanced Analytics</h3>
              <p>
                Real-time insights and detailed reports for every build and
                deployment.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Seamless Integration</h3>
              <p>
                Works with all major version control systems, IDEs, and
                deployment tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Transform Your CI/CD Pipeline?
            </h2>
            <p className="cta-subtitle">
              Join thousands of teams already using TeamCity to ship better
              software faster.
            </p>
            <button className="btn-large btn-white">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="logo">
                <span className="logo-icon">⚡</span>
                <span className="logo-text">TeamCity Demo</span>
              </div>
              <p>Making CI/CD simple and powerful for everyone.</p>
            </div>
            <div className="footer-section">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#docs">Documentation</a>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#blog">Blog</a>
              <a href="#careers">Careers</a>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <a href="#help">Help Center</a>
              <a href="#contact">Contact</a>
              <a href="#status">Status</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 TeamCity Demo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
