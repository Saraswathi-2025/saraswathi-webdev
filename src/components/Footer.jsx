import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()}
        <span className="footer-name"> Saraswathi</span>
        <span className="footer-sub"> · Built with React</span>
      </p>
    </footer>
  );
}