export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="/" className="nav-logo">
          <span className="logo-icon">✨</span>
          <span className="logo-text">AboutMyFace AI</span>
        </a>
        <div className="nav-links">
          <a href="/#features">What You'll Learn</a>
          <a href="/privacy">Privacy</a>
          <a href="https://apps.apple.com/app/aboutmyface-ai" className="nav-cta" target="_blank" rel="noopener noreferrer">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
