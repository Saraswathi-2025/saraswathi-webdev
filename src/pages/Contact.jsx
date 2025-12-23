import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  return (
    <motion.section
      className="contact container"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="contact-card">
        <h2 className="contact-title">Let’s Connect</h2>

        <p className="contact-desc">
          I’m open to junior frontend roles, internships, freelance work,
          and meaningful collaborations.  
          Feel free to reach out — I’ll respond.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:saraswathiachari02@gmail.com"
            className="contact-btn primary"
          >
            📧 Email Me
          </a>

          <a
            href="https://github.com/Saraswathi-2025"
            target="_blank"
            rel="noreferrer"
            className="contact-btn outline"
          >
            🐙 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/saraswathi-achari-89b2a4304"
            target="_blank"
            rel="noreferrer"
            className="contact-btn outline"
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </motion.section>
  );
}