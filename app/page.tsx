export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-bg">
          <div className="mesh-gradient"></div>
        </div>

        <div className="container">
          <div className="hero-content-centered">
            <h1>
              Understand Yourself Through
              <br />
              <span className="gradient-text">Face Reading</span>
            </h1>

            <p className="hero-description">
              Ancient physiognomy meets modern AI. Discover personality traits, life patterns, and hidden strengths
              revealed through your unique facial features.
            </p>

            <div className="cta-group-centered">
              <a
                href="https://apps.apple.com/app/aboutmyface-ai"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="apple-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Get Your Reading
              </a>
              <p className="trust-line">Trusted by 50,000+ people seeking self-understanding</p>
            </div>
          </div>
        </div>
      </div>

      <section id="features" className="features-section">
        <div className="container">
          <div className="section-intro">
            <h2>What You'll Discover</h2>
            <p>Face reading has been practiced for thousands of years. Now, AI makes ancient wisdom accessible to everyone.</p>
          </div>

          <div className="features-simple">
            <div className="feature-simple">
              <div className="feature-icon">👤</div>
              <h3>Personality Traits</h3>
              <p>Understand your natural tendencies, communication style, and how others perceive you based on facial structure and features.</p>
            </div>

            <div className="feature-simple">
              <div className="feature-icon">🧭</div>
              <h3>Life Path Insights</h3>
              <p>Explore potential career directions, relationship patterns, and areas where your unique characteristics create opportunity.</p>
            </div>

            <div className="feature-simple">
              <div className="feature-icon">💎</div>
              <h3>Hidden Strengths</h3>
              <p>Discover qualities you may not recognize in yourself—talents and abilities revealed through physiognomic analysis.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="credibility">
        <div className="container">
          <div className="credibility-content">
            <h2>Ancient Practice, Modern Technology</h2>
            <p>Face reading (physiognomy) has been studied across cultures for over 3,000 years. Our AI combines traditional wisdom with pattern recognition to provide personalized insights for self-reflection and personal growth.</p>
            <div className="stats">
              <div className="stat">
                <div className="stat-number">50,000+</div>
                <div className="stat-label">Readings Completed</div>
              </div>
              <div className="stat">
                <div className="stat-number">4.8/5</div>
                <div className="stat-label">User Rating</div>
              </div>
              <div className="stat">
                <div className="stat-number">95%</div>
                <div className="stat-label">Find It Insightful</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
