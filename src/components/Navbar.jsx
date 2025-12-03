import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const loc = useLocation();
  return (
    <header className="nav-wrap">
      <div className="container nav-inner">
        <Link className="brand" to="/">Saraswathi</Link>

        <nav className="nav-links" aria-label="Primary">
          <Link className={loc.pathname === "/" ? "active" : ""} to="/">Home</Link>
          <Link className={loc.pathname === "/projects" ? "active" : ""} to="/projects">Projects</Link>
          <Link className={loc.pathname === "/skills" ? "active" : ""} to="/skills">Skills</Link>
          <Link className={loc.pathname === "/contact" ? "active" : ""} to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}