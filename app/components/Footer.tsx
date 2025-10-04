export default function Footer() {
  return (
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
  );
}
