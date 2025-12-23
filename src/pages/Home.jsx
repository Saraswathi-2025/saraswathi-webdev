import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <div className="home-container">

        {/* LEFT = PROFILE */}
        <div className="left-section">
          <div className="profile-card">
            <img
              src={process.env.PUBLIC_URL + "/profile.png"}
              className="profile-img"
              alt="Saraswathi profile"
            />
          </div>
        </div>

        {/* RIGHT = INTRO */}
        <div className="right-section">
          <h1 className="home-title">
            Hi — I'm <span className="gradient-name">Saraswathi</span>
          </h1>

          <p className="home-sub">
            Aspiring Frontend Developer passionate about building clean,
            responsive, and user-friendly web interfaces using HTML, CSS,
            JavaScript, and React.
          </p>

          <div className="home-buttons">
            <a href="#/projects" className="home-btn primary">
              View Projects
            </a>
            <a href="#/contact" className="home-btn outline">
              Contact Me
            </a>
          </div>
        </div>

      </div>

      {/* WHAT I DO SECTION */}
      <div className="focus-section fade">
        <h2 className="focus-title">What I Do</h2>

        <div className="focus-grid">
          <div className="focus-card">
            <h3>Clean UI Design</h3>
            <p>
              I design simple, clean, and visually pleasing user interfaces
              with strong attention to spacing, colors, and consistency.
            </p>
          </div>

          <div className="focus-card">
            <h3>Responsive Frontend</h3>
            <p>
              I build layouts that work smoothly across mobile, tablet,
              and desktop devices using modern CSS and React.
            </p>
          </div>

          <div className="focus-card">
            <h3>Continuous Learning</h3>
            <p>
              I improve my skills by building real projects, fixing issues,
              and understanding code deeply instead of copying blindly.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}