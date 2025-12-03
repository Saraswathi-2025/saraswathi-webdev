import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

export default function Home(){
  return (
    <section className="home container" aria-labelledby="home-title">
      <motion.div
        className="home-inner"
        initial={{ opacity:0, y:12 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.6 }}
      >
        <div className="home-left">
          <h1 id="home-title" className="h1">Hi — I'm <span className="name">Saraswathi</span></h1>
          <p className="lead">Aspiring Frontend Developer — building clean, accessible, and delightful UI.</p>

          <p className="desc">
            I specialize in responsive interfaces using HTML, CSS, JavaScript and React. I focus on clear UX, accessibility and polished micro-interactions.
          </p>

          <div className="home-ctas">
            <a className="btn btn--primary" href="#/projects">View Projects</a>
            <a className="btn btn--ghost" href="#/contact">Contact Me</a>
          </div>
        </div>

        <div className="home-right" aria-hidden="true">
          <div className="portrait card">
            <img src={`${process.env.PUBLIC_URL}/profile.png`} alt="Saraswathi portrait" loading="lazy" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}