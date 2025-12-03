import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

export default function Skills(){
  const groups = [
    { title: "Frontend", items:["HTML","CSS","JavaScript (ES6+)","React"] },
    { title: "Tools", items:["Git & GitHub","VS Code","Figma","React Router"] },
    { title: "Soft Skills", items:["Problem Solving","Communication","Time Management","Collaboration"] }
  ];

  return (
    <motion.section className="skills container" initial={{opacity:0}} animate={{opacity:1}}>
      <h2 className="h2">Skills</h2>
      <p className="lead">Technologies and skills I use daily.</p>

      <div className="skills-grid">
        {groups.map(g=>(
          <div className="skill-card card" key={g.title}>
            <h4>{g.title}</h4>
            <ul>
              {g.items.map(i=><li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}