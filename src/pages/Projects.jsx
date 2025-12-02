import React, { useState, useEffect } from "react";
import "./styles/Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    async function loadProjects() {
      const res = await fetch(process.env.PUBLIC_URL + "/project.json");
      const base = await res.json();

      const extra = JSON.parse(localStorage.getItem("extraProjects")) || [];

      const all = [...base.projects, ...extra];
      setProjects(all);
      setActiveProject(all[0]);
    }
    loadProjects();
  }, []);

  function openProject(project) {
    setActiveProject(project);
    setLightboxIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openLightbox(index) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
  }

  function nextScreenshot() {
    setLightboxIndex((i) =>
      (i + 1) % activeProject.screenshots.length
    );
  }

  function prevScreenshot() {
    setLightboxIndex((i) =>
      (i - 1 + activeProject.screenshots.length) %
      activeProject.screenshots.length
    );
  }

  if (!activeProject) return <p>Loading...</p>;

  return (
    <main className="projects-page">
      <header className="projects-header">
        <h1>Projects</h1>
        <p className="projects-sub">Click a project to view details</p>
      </header>

      <section className="projects-shell">
        {/* PROJECT LIST */}
        <nav className="projects-list">
          {projects.map((p) => (
            <button
              key={p.id}
              className={`project-list-item ${
                activeProject.id === p.id ? "active" : ""
              }`}
              onClick={() => openProject(p)}
            >
              <div className="project-list-title">{p.title}</div>
              <div className="project-list-tech">{p.subtitle}</div>
            </button>
          ))}
        </nav>

        {/* DETAILS */}
        <article className="project-detail" data-project={activeProject.id}>
          <div className="project-left">
            <div
              className="project-preview"
              onClick={() => openLightbox(0)}
            >
              <img
                src={process.env.PUBLIC_URL + activeProject.screenshots[0]}
                alt="preview"
              />
            </div>

            <div className="project-thumbs">
              {activeProject.screenshots.map((src, i) => (
                <button key={i} className="thumb-btn" onClick={() => openLightbox(i)}>
                  <img src={process.env.PUBLIC_URL + src} alt="thumb" />
                </button>
              ))}
            </div>
          </div>

          <div className="project-right">
            <h2 className="project-title">{activeProject.title}</h2>
            <p className="project-tech">{activeProject.subtitle}</p>
            <p className="project-desc">{activeProject.description}</p>

            <div className="project-actions">
              <a className="btn primary" href={activeProject.github} target="_blank" rel="noreferrer">
                View on GitHub →
              </a>
              <button className="btn outline" onClick={() => openLightbox(0)}>
                View Screenshots
              </button>
            </div>
          </div>
        </article>
      </section>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lb-close" onClick={closeLightbox}>✕</button>
            <button className="lb-prev" onClick={prevScreenshot}>‹</button>

            <div className="lb-image-wrap">
              <img
                src={process.env.PUBLIC_URL + activeProject.screenshots[lightboxIndex]}
                alt=""
              />
              <div className="lb-counter">
                {lightboxIndex + 1} / {activeProject.screenshots.length}
              </div>
            </div>

            <button className="lb-next" onClick={nextScreenshot}>›</button>
          </div>
        </div>
      )}
    </main>
  );
}