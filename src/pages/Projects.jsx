import React, { useState } from "react";
import "./styles/Projects.css";

const projectsData = [
  {
    id: "portfolio",
    title: "Portfolio Website",
    subtitle: "Tech used: HTML · CSS · JavaScript · React",
    description:
      "A modern portfolio website built to showcase my skills and learning journey. Responsive layout, smooth UI and clean presentation.",
    github: "https://github.com/Saraswathi-2025/MyPortfolio", // update to your repo
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
      "A simple web-based music player demonstrating DOM interaction, audio APIs and playlist controls (Play / Pause / Next / Prev).",
    github: "https://github.com/Saraswathi-2025/music-player", // update
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
      "A small form-based system to register students, validate inputs and persist demo data (localStorage). Built for learning front-end form flows.",
    github: "https://github.com/Saraswathi-2025/student-registration", // update
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
  // add more projects as needed
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projectsData[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  function openProject(projectId) {
    const p = projectsData.find((x) => x.id === projectId) || projectsData[0];
    setActiveProject(p);
    // reset lightbox index
    setLightboxIndex(0);
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
        {/* Project list (vertical) */}
        <nav className="projects-list" aria-label="Projects list">
          {projectsData.map((p) => (
            <button
              key={p.id}
              className={`project-list-item ${activeProject.id === p.id ? "active" : ""}`}
              onClick={() => openProject(p.id)}
              aria-pressed={activeProject.id === p.id}
            >
              <div className="project-list-title">{p.title}</div>
              <div className="project-list-tech">{p.subtitle}</div>
            </button>
          ))}
        </nav>

        {/* Active project preview + details */}
        <article className="project-detail">
          <div className="project-left">
            {/* large preview - clickable */}
            <div
              className="project-preview"
              role="button"
              tabIndex={0}
              onClick={() => openLightbox(0)}
              onKeyDown={(e) => {
                if (e.key === "Enter") openLightbox(0);
              }}
              aria-label={`Open screenshots for ${activeProject.title}`}
            >
              <img
                src={process.env.PUBLIC_URL + activeProject.screenshots[0]}
                alt={`${activeProject.title} screenshot 1`}
                loading="lazy"
              />
            </div>

            {/* thumbnail strip */}
            <div className="project-thumbs" aria-hidden={false}>
              {activeProject.screenshots.map((src, idx) => (
                <button
                  key={src}
                  className="thumb-btn"
                  onClick={() => openLightbox(idx)}
                  aria-label={`Open screenshot ${idx + 1} for ${activeProject.title}`}
                >
                  <img src={process.env.PUBLIC_URL + src} alt={`${activeProject.title} thumb ${idx + 1}`} />
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
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>

              <button
                className="btn outline"
                onClick={() => openLightbox(0)}
                aria-label={`Open screenshots for ${activeProject.title}`}
              >
                View screenshots
              </button>
            </div>

            <div className="project-meta">
              <small>Tip: click thumbnails or the big preview to open the screenshots viewer.</small>
            </div>
          </div>
        </article>
      </section>

      {/* Lightbox / modal */}
      {lightboxOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProject.title} screenshots viewer`}
          onClick={closeLightbox}
        >
          <div
            className="lightbox-inner"
            onClick={(e) => e.stopPropagation()}
            role="document"
          >
            <button className="lb-close" onClick={closeLightbox} aria-label="Close viewer">
              ✕
            </button>

            <button className="lb-prev" onClick={prevScreenshot} aria-label="Previous screenshot">
              ‹
            </button>

            <div className="lb-image-wrap">
              <img
                src={process.env.PUBLIC_URL + activeProject.screenshots[lightboxIndex]}
                alt={`${activeProject.title} screenshot ${lightboxIndex + 1}`}
              />
              <div className="lb-counter">
                {lightboxIndex + 1} / {activeProject.screenshots.length}
              </div>
            </div>

            <button className="lb-next" onClick={nextScreenshot} aria-label="Next screenshot">
              ›
            </button>
          </div>
        </div>
      )}
    </main>
  );
}