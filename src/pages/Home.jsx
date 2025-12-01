import React from "react";
import "./styles/Home.css";

function Home() {
  return (
    <div className="home-container">

      {/* LEFT — TEXT */}
      <div className="home-text">
        <h1 className="title">
          Hi, I'm <span>Saraswathi</span>
        </h1>

        <h2 className="role">Aspiring Frontend Web Developer</h2>

        <p className="description">
          I’m a motivated learner who is passionate about building clean,
          modern, and user-friendly web interfaces.  
          Currently improving my skills in HTML, CSS, JavaScript, and React —
          and working every day to become a professional web developer.
        </p>

        <div className="buttons">
          <a href="#/projects" className="btn primary">View Projects</a>
          <a href="#/contact" className="btn secondary">Contact Me</a>
        </div>
      </div>

      {/* RIGHT — PROFILE IMAGE */}
      <div className="home-image">
        <img 
          src={`${process.env.PUBLIC_URL}/profile.png`} 
          alt="profile"
        />
      </div>

    </div>
  );
}

export default Home;