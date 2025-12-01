import React from "react";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">

      <h1 className="contact-title">Get in Touch</h1>

      <p className="contact-text">
        I’m open to collaborations, projects, and opportunities.  
        Feel free to reach out anytime!
      </p>

      <div className="contact-links">

        <a
          href="mailto:saraswathiachari02@gmail.com"
          className="contact-card"
        >
          📧 Email
        </a>

        <a
          href="https://github.com/Saraswathi-2025"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          🐙 GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/saraswathi-achari-89b2a4304"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          🔗 LinkedIn
        </a>

      </div>
    </div>
  );
};

export default Contact;