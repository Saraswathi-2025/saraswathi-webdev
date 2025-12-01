import React from "react";
import "./styles/Skills.css";

export default function Skills() {
  return (
    <div className="skills-page">
      <h1 className="skills-title">Skills</h1>

      <div className="skills-container">

        {/* Frontend */}
        <div className="skill-box">
          <h3>Frontend</h3>
          <p>HTML / CSS</p>
          <p>JavaScript (ES6+)</p>
          <p>React JS</p>
          <p>Responsive Design</p>
        </div>

        {/* Tools */}
        <div className="skill-box">
          <h3>Tools & Libraries</h3>
          <p>Git / GitHub</p>
          <p>Figma (UI/UX)</p>
          <p>VS Code</p>
          <p>React Router</p>
        </div>

        {/* Soft Skills */}
        <div className="skill-box">
          <h3>Soft Skills</h3>
          <p>Problem Solving</p>
          <p>Communication</p>
          <p>Time Management</p>
          <p>Team Collaboration</p>
        </div>

      </div>
    </div>
  );
}
