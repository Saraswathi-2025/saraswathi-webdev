import React from "react";
import "./Footer.css";

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Saraswathi — Built with React</div>
        <div className="footer-links">
          <a href="https://github.com/Saraswathi-2025" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/saraswathi-achari-89b2a4304" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}