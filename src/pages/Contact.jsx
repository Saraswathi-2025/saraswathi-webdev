import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact(){
  return (
    <motion.section className="contact container" initial={{opacity:0}} animate={{opacity:1}}>
      <div className="contact-card card" role="region" aria-label="Contact">
        <h2 className="h2">Let’s talk</h2>
        <p className="lead">Open to collaborations, internships, and junior frontend roles.</p>

        <div className="contact-actions">
          <a className="btn btn--primary" href="mailto:saraswathiachari02@gmail.com">📧 Email</a>
          <a className="btn btn--ghost" href="https://github.com/Saraswathi-2025" target="_blank" rel="noreferrer">🐙 GitHub</a>
          <a className="btn btn--ghost" href="https://www.linkedin.com/in/saraswathi-achari-89b2a4304" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
        </div>
      </div>
    </motion.section>
  );
}