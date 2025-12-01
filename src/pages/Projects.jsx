import React, { useState } from "react";
import "./styles/Projects.css";

const projectsData = [
  {
    id: "portfolio",
    title: "Portfolio Website",
    subtitle: "Tech used: HTML · CSS · JavaScript · React",
    description:
      "A modern portfolio website built to showcase my skills and learning journey. Responsive layout, smooth UI and clean presentation.",
    github: " https://saraswathi-2025.github.io/MyPortfolio/",
    screenshots: [
      "/screenshots/portfolio-1.png",
      "/screenshots/portfolio-2.png",
      "/screenshots/portfolio-3.png",
      "/screenshots/portfolio-4.png",
      "/screenshots/portfolio-5.png",
    ],
  },
  {
    id: "music-player",
    title: "Music Player",
    subtitle: "Tech used: JavaScript · HTML · CSS",
    description:
      "A simple web-based music player demonstrating DOM interaction, audio APIs and playlist controls.",
    github: "https://saraswathi-2025.github.io/Music-Player/",
    screenshots: [
      "/screenshots/music-player-1.png",
      "/screenshots/music-player-2.png",
      "/screenshots/music-player-3.png",
      "/screenshots/music-player-4.png",
      "/screenshots/music-player-5.png",
    ],
  },
  {
    id: "student-reg",
    title: "Student Registration System",
    subtitle: "Tech used: HTML · CSS · JavaScript",
    description:
      "A basic student registration form that validates input and stores demo data using localStorage.",
    github: " https://saraswathi-2025.github.io/SMCEC/",
    screenshots: [
      "/screenshots/SMCMC-1.png",
      "/screenshots/SMCMC-2.png",
      "/screenshots/SMCMC-3.png",
      "/screenshots/SMCMC-4.png",
      "/screenshots/SMCMC-5.png",
      "/screenshots/SMCMC-6.png",
      "/screenshots/SMCMC-7.png",
    ],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projectsData[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  function openProject(projectId) {
    const p = projectsData.find((x) => x.id === projectId) || projectsData[0];
    setActiveProject(p);
    setLightboxIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" }); // 🔥 mobile UX improvement
  }

  function openLightbox(index = 0) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
  }

  function nextScreenshot() {
    setLightboxIndex((i) => (i + 1) % activeProject.screenshots.length);
  }

  function prevScreenshot() {
    setLightboxIndex((i) =>
      (i - 1 + activeProject.screenshots.length) %
      activeProject.screenshots.length
    );
  }

  return (
    <main className="projects-page">
      <header className="projects-header">
        <h1>Projects</h1>
        <p className="projects-sub">
          A selection of recent work — click a project to view screenshots & details.
        </p>
      </header>

      <section className="projects-shell">
        {/* PROJECT LIST */}
        <nav className="projects-list">
          {projectsData.map((p) => (
            <button
              key={p.id}
              className={`project-list-item ${
                activeProject.id === p.id ? "active" : ""
              }`}
              onClick={() => openProject(p.id)}
            >
              <div className="project-list-title">{p.title}</div>
              <div className="project-list-tech">{p.subtitle}</div>
            </button>
          ))}
        </nav>

        {/* PROJECT DETAIL */}
        <article
          className="project-detail"
          data-project={activeProject.id}
        >
          <div className="project-left">
            {/* clickable preview */}
            <div
              className="project-preview"
              onClick={() => openLightbox(0)}
            >
              <img
                src={process.env.PUBLIC_URL + activeProject.screenshots[0]}
                alt="project preview"
              />
            </div>

            {/* THUMBNAILS */}
            <div className="project-thumbs">
              {activeProject.screenshots.map((src, idx) => (
                <button
                  key={idx}
                  className="thumb-btn"
                  onClick={() => openLightbox(idx)}
                >
                  <img
                    src={process.env.PUBLIC_URL + src}
                    alt="thumbnail"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT INFO */}
          <div className="project-right">
            <h2 className="project-title">{activeProject.title}</h2>
            <p className="project-tech">{activeProject.subtitle}</p>
            <p className="project-desc">{activeProject.description}</p>

            <div className="project-actions">
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary"
              >
                View on GitHub →
              </a>

              <button className="btn outline" onClick={() => openLightbox(0)}>
                View Screenshots
              </button>
            </div>

            <div className="project-meta">
              <small>Tap preview or thumbnails to view full gallery.</small>
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
                src={
                  process.env.PUBLIC_URL +
                  activeProject.screenshots[lightboxIndex]
                }
                alt="large view"
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