import React from "react";
import "./styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-card">

        <h1 className="contact-title">Contact</h1>
        <p className="contact-sub">
          Feel free to reach out for collaborations or opportunities.
        </p>

        <div className="contact-buttons">

          <a href="mailto:saraswathi@example.com" className="contact-btn">
            📧 Email
          </a>

          <a href="https://github.com/Saraswathi-2025" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="contact-btn">
            🐙 GitHub
          </a>

          <a href="https://linkedin.com" 
             target="_blank"
             rel="noopener noreferrer"
             className="contact-btn">
            🔗 LinkedIn
          </a>

        </div>
      </div>

    </div>
  );
}