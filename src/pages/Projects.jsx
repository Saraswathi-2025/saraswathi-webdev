import React, { useState, useEffect } from "react";
import "./styles/Projects.css";

export default function Projects() {
  const [projectsData, setProjectsData] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Load projects
  useEffect(() => {
    async function loadProjects() {
      const saved = localStorage.getItem("projectsData");

      if (saved) {
        const data = JSON.parse(saved);
        setProjectsData(data);
        setActiveProject(data[0]);
      } else {
        const res = await fetch("/project.json");
        const data = await res.json();
        setProjectsData(data.projects);
        setActiveProject(data.projects[0]);
      }
    }
    loadProjects();
  }, []);

  function openProject(projectId) {
    const p = projectsData.find((x) => x.id === projectId);
    if (p) {
      setActiveProject(p);
      setLightboxIndex(0);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function openLightbox(i) {
    setLightboxIndex(i);
    setLightboxOpen(true);
  }

  return (
    <main className="projects-page">
      <header className="projects-header">
        <h1>Projects</h1>
        <p className="projects-sub">A selection of recent work</p>
      </header>

      <section className="projects-shell">
        {/* LIST */}
        <nav className="projects-list">
          {projectsData.map((p) => (
            <button
              key={p.id}
              className={`project-list-item ${activeProject?.id === p.id ? "active" : ""}`}
              onClick={() => openProject(p.id)}
            >
              <div className="project-list-title">{p.title}</div>
              <div className="project-list-tech">{p.subtitle}</div>
            </button>
          ))}
        </nav>

        {/* DETAILS */}
        {activeProject && (
          <article className="project-detail" data-project={activeProject.id}>
            <div className="project-left">
              <div className="project-preview" onClick={() => openLightbox(0)}>
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
                <a
                  className="btn primary"
                  href={activeProject.github}
                  target="_blank"
                >
                  View on GitHub →
                </a>

                <button className="btn outline" onClick={() => openLightbox(0)}>
                  View Screenshots
                </button>
              </div>
            </div>
          </article>
        )}
      </section>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div className="lightbox" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lb-close" onClick={() => setLightboxOpen(false)}>
              ✕
            </button>

            <button className="lb-prev" onClick={() => setLightboxIndex((i) => (i - 1 + activeProject.screenshots.length) % activeProject.screenshots.length)}>
              ‹
            </button>

            <div className="lb-image-wrap">
              <img
                src={process.env.PUBLIC_URL + activeProject.screenshots[lightboxIndex]}
                alt="large view"
              />
              <div className="lb-counter">
                {lightboxIndex + 1} / {activeProject.screenshots.length}
              </div>
            </div>

            <button className="lb-next" onClick={() => setLightboxIndex((i) => (i + 1) % activeProject.screenshots.length)}>
              ›
            </button>
          </div>
        </div>
      )}
    </main>
  );
}