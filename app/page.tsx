export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />

        <div className="container">
          <div className="hero-badge">✨ AI-Powered Face Reading</div>
          <h1>Unlock Your Face's Hidden Story</h1>
          <p>
            Discover personality insights, mystical wisdom, and fortune predictions through
            advanced AI facial analysis. Your journey of self-discovery starts here.
          </p>
          <a
            href="https://apps.apple.com/app/aboutmyface-ai"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 2C13.83 2 13.15 2.24 12.61 2.72C12.11 3.16 11.72 3.78 11.5 4.47C12.23 4.54 12.96 4.24 13.5 3.76C14 3.32 14.39 2.7 14.5 2ZM17.5 14.17C17.35 14.55 17.17 14.9 16.95 15.23C16.64 15.7 16.38 16.04 16.17 16.25C15.85 16.58 15.49 16.75 15.09 16.76C14.79 16.76 14.43 16.67 14.01 16.48C13.58 16.29 13.2 16.2 12.85 16.2C12.48 16.2 12.08 16.29 11.64 16.48C11.2 16.67 10.86 16.77 10.62 16.78C10.23 16.8 9.86 16.62 9.52 16.25C9.29 16.03 9.01 15.67 8.68 15.19C8.32 14.67 8.03 14.06 7.81 13.36C7.57 12.6 7.45 11.87 7.45 11.17C7.45 10.37 7.61 9.69 7.93 9.13C8.18 8.68 8.51 8.32 8.93 8.05C9.35 7.78 9.8 7.64 10.3 7.63C10.62 7.63 11.03 7.73 11.53 7.93C12.03 8.13 12.37 8.23 12.57 8.23C12.71 8.23 13.1 8.11 13.73 7.88C14.33 7.67 14.83 7.58 15.25 7.61C16.43 7.7 17.33 8.15 17.93 8.96C16.9 9.58 16.39 10.47 16.41 11.63C16.43 12.54 16.76 13.28 17.41 13.85C17.7 14.11 18.03 14.31 18.4 14.45C18.31 14.7 18.21 14.94 18.1 15.17L17.5 14.17Z" fill="currentColor"/>
            </svg>
            Download on App Store
          </a>

          <div className="features">
            <div className="feature">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 8V16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="16" cy="6" r="1.5" fill="currentColor"/>
                  <circle cx="24" cy="12" r="1.5" fill="currentColor"/>
                  <circle cx="24" cy="20" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              <h3>Personality Insights</h3>
              <p>
                Uncover your strengths, hidden talents, and social style through
                AI-powered facial feature analysis.
              </p>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4L18.5 11.5L26 14L18.5 16.5L16 24L13.5 16.5L6 14L13.5 11.5L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="24" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="24" cy="24" r="2" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3>Life Path Guidance</h3>
              <p>
                Discover career insights, relationship wisdom, and life purpose
                revealed through mystical face reading.
              </p>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12C10 12 12 8 16 8C20 8 22 12 22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 18C12 18 13.5 20 16 20C18.5 20 20 18 20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="14" r="1.5" fill="currentColor"/>
                  <circle cx="20" cy="14" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              <h3>Fortune & Luck</h3>
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
            For entertainment purposes only. Face readings are for fun and should not be taken as professional advice.
          </p>
        </div>
      </footer>
    </>
  );
}
