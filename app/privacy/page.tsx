export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <h1>Privacy Policy</h1>
      <p className="updated">Last updated: {new Date().toLocaleDateString()}</p>

      <section>
        <h2>1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us when using AboutMyFace AI, including:
        </p>
        <ul>
          <li>Account information (email address)</li>
          <li>Photos you choose to analyze</li>
          <li>Face analysis results and history</li>
          <li>Device information and usage data</li>
        </ul>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide AI-powered face reading analysis services</li>
          <li>Store your analysis history for easy access</li>
          <li>Improve our AI models and service quality</li>
          <li>Send service-related communications</li>
          <li>Process payments and manage subscriptions</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section>
        <h2>3. Data Storage and Security</h2>
        <p>
          Your photos and analysis results are stored securely using Supabase cloud infrastructure
          with industry-standard encryption. Analysis history is also stored locally on your device
          for offline access. We implement appropriate technical and organizational measures to
          protect your personal information against unauthorized access, alteration, disclosure, or
          destruction.
        </p>
      </section>

      <section>
        <h2>4. Data Sharing and Third Parties</h2>
        <p>
          We do not sell your personal information. We may share your information with:
        </p>
        <ul>
          <li>OpenRouter API for AI-powered face analysis processing</li>
          <li>Supabase for secure authentication and data storage</li>
          <li>Apple for in-app purchase processing (iOS only)</li>
          <li>Service providers who assist in operating our app</li>
          <li>Law enforcement or government agencies as required by law</li>
        </ul>
      </section>

      <section>
        <h2>5. Your Rights and Choices</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access and review your personal data</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your account and all data</li>
          <li>Export your data in a portable format</li>
          <li>Opt out of certain data collection practices</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>
          To exercise these rights, please contact us at support@aboutmyface.ai
        </p>
      </section>

      <section>
        <h2>6. Data Retention</h2>
        <p>
          We retain your personal information for as long as your account is active or as needed to
          provide you services. If you request account deletion, we will delete your personal
          information within 30 days, except where we are required to retain it for legal compliance.
        </p>
      </section>

      <section>
        <h2>7. Children's Privacy</h2>
        <p>
          AboutMyFace AI is not intended for children under 13 years of age. We do not knowingly
          collect personal information from children under 13. If you become aware that a child has
          provided us with personal information, please contact us and we will delete such information
          promptly.
        </p>
      </section>

      <section>
        <h2>8. International Data Transfers</h2>
        <p>
          Your information may be transferred to and processed in countries other than your country
          of residence. We ensure appropriate safeguards are in place to protect your information in
          accordance with this Privacy Policy and applicable data protection laws.
        </p>
      </section>

      <section>
        <h2>9. Changes to This Privacy Policy</h2>
        <p>
          We reserve the right to modify this Privacy Policy at any time. When we make material
          changes, we will notify you by updating the "Last updated" date and, if required by law,
          provide additional notice. Your continued use of the service after changes constitutes
          acceptance of the updated policy.
        </p>
      </section>

      <section>
        <h2>10. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or our privacy practices, please contact us at:
        </p>
        <p>
          Email: support@aboutmyface.ai
          <br />
          Website: www.aboutmyface.ai
        </p>
      </section>

      <div className="legal-footer">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/terms">Terms of Service</a>
        </div>
        <p>© {new Date().getFullYear()} AboutMyFace AI. All rights reserved.</p>
      </div>
    </div>
  );
}
