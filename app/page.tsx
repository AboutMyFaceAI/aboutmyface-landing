export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <h1>AboutMyFace AI</h1>
          <p>
            Discover your face's hidden story with AI-powered readings.
            Unlock personality insights, mystical wisdom, and fortune predictions
            - all for entertainment purposes!
          </p>
          <a
            href="https://apps.apple.com/app/aboutmyface-ai"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download on App Store
          </a>

          <div className="features">
            <div className="feature">
              <h3>🔮 Personality Insights</h3>
              <p>
                Uncover your strengths, hidden talents, and social style through
                AI-powered facial feature analysis.
              </p>
            </div>

            <div className="feature">
              <h3>🌟 Life Path Guidance</h3>
              <p>
                Discover career insights, relationship wisdom, and life purpose
                revealed through mystical face reading.
              </p>
            </div>

            <div className="feature">
              <h3>🍀 Fortune & Luck</h3>
              <p>
                Find your lucky days, colors, compatible energies, and personalized
                wisdom for your journey ahead.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="mailto:support@aboutmyface.ai">Contact Support</a>
          </div>
          <p>© {new Date().getFullYear()} AboutMyFace AI. All rights reserved.</p>
          <p className="disclaimer">
            Made with ❤️ for entertainment purposes.
            Face readings are for fun and should not be taken as professional advice.
          </p>
        </div>
      </footer>
    </>
  );
}
