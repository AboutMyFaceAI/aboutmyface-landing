export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="container nav-container">
          <div className="nav-logo">
            <span className="logo-icon">✨</span>
            <span className="logo-text">AboutMyFace AI</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="/privacy">Privacy</a>
            <a href="https://apps.apple.com/app/aboutmyface-ai" className="nav-cta" target="_blank" rel="noopener noreferrer">
              Download App
            </a>
          </div>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-bg">
          <div className="mesh-gradient"></div>
          <div className="grid-overlay"></div>
        </div>

        <div className="container hero-content">
          <div className="hero-text">
            <div className="badge-pill">
              <span className="badge-icon">✨</span>
              <span>AI-Powered Face Reading</span>
            </div>

            <h1>
              Discover What Your Face
              <br />
              <span className="gradient-text">Reveals About You</span>
            </h1>

            <p className="hero-description">
              Unlock personality insights, life path guidance, and mystical wisdom through advanced AI facial analysis.
              Transform a selfie into deep self-discovery.
            </p>

            <div className="cta-group">
              <a
                href="https://apps.apple.com/app/aboutmyface-ai"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="apple-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Download for iOS
              </a>
              <div className="trust-badges">
                <span>⭐ 4.8 Rating</span>
                <span>•</span>
                <span>50K+ Users</span>
                <span>•</span>
                <span>Free to Start</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="phone-mockup">
              <div className="phone-frame">
                <div className="phone-content">
                  <div className="scan-animation">
                    <div className="scan-line"></div>
                    <svg className="face-outline" viewBox="0 0 200 240" fill="none">
                      <ellipse cx="100" cy="100" rx="70" ry="85" stroke="url(#grad1)" strokeWidth="3" strokeDasharray="5,5"/>
                      <circle cx="75" cy="90" r="8" fill="#16c2d5"/>
                      <circle cx="125" cy="90" r="8" fill="#16c2d5"/>
                      <path d="M75 120 Q100 135 125 120" stroke="url(#grad1)" strokeWidth="3" strokeLinecap="round"/>
                      <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#16c2d5"/>
                          <stop offset="100%" stopColor="#8b5cf6"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="data-points">
                      <div className="data-point" style={{top: '20%', left: '30%'}}>
                        <div className="pulse"></div>
                      </div>
                      <div className="data-point" style={{top: '35%', right: '25%'}}>
                        <div className="pulse"></div>
                      </div>
                      <div className="data-point" style={{bottom: '40%', left: '20%'}}>
                        <div className="pulse"></div>
                      </div>
                      <div className="data-point" style={{bottom: '40%', right: '20%'}}>
                        <div className="pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Get your AI face reading in three simple steps</p>
          </div>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Take a Selfie</h3>
              <p>Use your phone camera or upload a photo</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>AI Analyzes</h3>
              <p>Advanced AI examines your facial features</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Get Insights</h3>
              <p>Receive detailed personality and fortune readings</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Unlock Deep Insights</h2>
            <p>Advanced AI analyzes your facial features to reveal hidden aspects of your personality and destiny</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-number">01</div>
              <div className="feature-content">
                <h3>Personality Decoded</h3>
                <p>Discover your core strengths, hidden talents, and natural social style through advanced facial feature analysis</p>
                <ul className="feature-list">
                  <li>Behavioral patterns</li>
                  <li>Communication style</li>
                  <li>Hidden strengths</li>
                </ul>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-number">02</div>
              <div className="feature-content">
                <h3>Life Path Wisdom</h3>
                <p>Gain clarity on your career direction, relationship dynamics, and life purpose revealed through mystical reading</p>
                <ul className="feature-list">
                  <li>Career guidance</li>
                  <li>Relationship insights</li>
                  <li>Purpose discovery</li>
                </ul>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-number">03</div>
              <div className="feature-content">
                <h3>Fortune & Destiny</h3>
                <p>Explore your lucky elements, favorable periods, and personalized wisdom for navigating life's journey</p>
                <ul className="feature-list">
                  <li>Lucky days & colors</li>
                  <li>Energy compatibility</li>
                  <li>Future guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">AboutMyFace AI</div>
              <p>AI-powered face reading for entertainment</p>
            </div>
            <div className="footer-links">
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="mailto:support@aboutmyface.ai">Support</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} AboutMyFace AI. All rights reserved.</p>
            <p className="disclaimer">For entertainment purposes only. Not professional advice.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
