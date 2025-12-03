import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";

function Thumb({ src, onClick, alt }) {
  return (
    <button className="thumb" onClick={onClick} aria-label={`Open ${alt}`}>
      <img src={process.env.PUBLIC_URL + src} alt={alt} loading="lazy" />
    </button>
  );
}

export default function Projects(){
  const [projects, setProjects] = useState([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightbox, setLightbox] = useState({ open:false, idx:0 });

  useEffect(() => {
    async function load(){
      const res = await fetch(process.env.PUBLIC_URL + "/projects.json");
      const base = await res.json();
      const extra = JSON.parse(localStorage.getItem("extraProjects")) || [];
      const all = [...base.projects, ...extra];
      setProjects(all);
    }
    load();
  },[]);

  const active = projects[activeIdx];

  if (!projects.length) return <div className="container"><p className="lead">Loading projects…</p></div>;

  return (
    <motion.main className="projects container" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <header className="projects-head">
        <h2 className="h2">Projects</h2>
        <p className="lead">Select a project to view details & screenshots.</p>
      </header>

      <div className="projects-grid">
        <aside className="projects-list card" aria-label="Project list">
          {projects.map((p, i) => (
            <button
              key={p.id}
              className={`proj-item ${i === activeIdx ? "is-active" : ""}`}
              onClick={() => setActiveIdx(i)}
            >
              <div className="proj-title">{p.title}</div>
              <div className="proj-sub">{p.subtitle}</div>
            </button>
          ))}
        </aside>

        <section className="proj-detail card">
          <div className="proj-preview" onClick={() => setLightbox({ open:true, idx:0 })}>
            <img src={process.env.PUBLIC_URL + active.screenshots[0]} alt={`${active.title} preview`} loading="lazy" />
          </div>

          <div className="proj-meta">
            <h3 className="h2" style={{fontSize:"1.2rem"}}>{active.title}</h3>
            <p className="lead" style={{marginBottom:12}}>{active.subtitle}</p>
            <p style={{color:"var(--muted-2)"}}>{active.description}</p>

            <div className="proj-actions" style={{marginTop:18}}>
              <a className="btn btn--primary" href={active.github} target="_blank" rel="noreferrer">View on GitHub</a>
              <button className="btn btn--ghost" onClick={() => setLightbox({ open:true, idx:0 })}>View Screenshots</button>
            </div>

            <div className="thumbs-row">
              {active.screenshots.map((s, idx) => (
                <Thumb key={idx} src={s} alt={`${active.title} screenshot ${idx+1}`} onClick={() => setLightbox({ open:true, idx })} />
              ))}
            </div>
          </div>
        </section>
      </div>

      {lightbox.open && (
        <div className="lb-overlay" role="dialog" aria-modal="true" onClick={() => setLightbox({ open:false, idx:0 })}>
          <div className="lb-inner" onClick={(e)=>e.stopPropagation()}>
            <button className="lb-close" onClick={() => setLightbox({ open:false, idx:0 })}>✕</button>
            <button className="lb-nav" onClick={(e)=>{ e.stopPropagation(); setLightbox(s=>({...s, idx: (s.idx -1 + active.screenshots.length) % active.screenshots.length }))}}>‹</button>
            <img src={process.env.PUBLIC_URL + active.screenshots[lightbox.idx]} alt="" />
            <button className="lb-nav" onClick={(e)=>{ e.stopPropagation(); setLightbox(s=>({...s, idx: (s.idx +1) % active.screenshots.length }))}}>›</button>
            <div className="lb-count">{lightbox.idx +1} / {active.screenshots.length}</div>
          </div>
        </div>
      )}
    </motion.main>
  );
}