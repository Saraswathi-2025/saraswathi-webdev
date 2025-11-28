import React, { useState } from "react";

function Navbar({ scrollToSkills, scrollToProjects, scrollToContact }) {
  const [open, setOpen] = useState(false);

  const goTo = (ref) => {
    if (!ref || !ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav style={styles.navbar}>
        <h3 style={styles.logo}>Saraswathi</h3>

        {/* Desktop menu */}
        <div className="desktop-menu" style={styles.menu}>
          <button style={styles.navItem} onClick={() => goTo(scrollToSkills)}>Skills</button>
          <button style={styles.navItem} onClick={() => goTo(scrollToProjects)}>Projects</button>
          <button style={styles.navItem} onClick={() => goTo(scrollToContact)}>Contact</button>
        </div>

        {/* Hamburger icon (mobile) */}
        <div
          className="hamburger"
          style={styles.hamburger}
          onClick={() => setOpen((s) => !s)}
          aria-label="Open menu"
        >
          ☰
        </div>
      </nav>

      {/* Mobile menu (drawer) */}
      {open && (
        <div className="mobile-menu" style={styles.mobileMenu}>
          <button style={styles.mobileItem} onClick={() => goTo(scrollToSkills)}>Skills</button>
          <button style={styles.mobileItem} onClick={() => goTo(scrollToProjects)}>Projects</button>
          <button style={styles.mobileItem} onClick={() => goTo(scrollToContact)}>Contact</button>
        </div>
      )}

      {/* Responsive CSS injected once */}
      {typeof document !== "undefined" && (() => {
        // only add once
        if (document.getElementById("nav-responsive-styles")) return null;
        const css = `
          /* Desktop: hide hamburger, show menu */
          @media (min-width: 769px) {
            .desktop-menu { display: flex !important; }
            .hamburger { display: none !important; }
          }

          /* Mobile: hide desktop menu, show hamburger */
          @media (max-width: 768px) {
            .desktop-menu { display: none !important; }
            .hamburger { display: block !important; }
          }
        `;
        const style = document.createElement("style");
        style.id = "nav-responsive-styles";
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
        return null;
      })()}
    </>
  );
}

/* Styles (adjust only these numbers if you want small shifts) */
const styles = {
  /* NOTE: center + maxWidth keeps navbar aligned with your main container */
  navbar: {
    width: "100%",
    maxWidth: "900px",       // <-- match this to your container maxWidth (900 in Portfolio)
    margin: "0 auto",        // centers the navbar so it lines up with the card
    padding: "12px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "rgba(20,0,40,0.6)",
    backdropFilter: "blur(8px)",
    borderRadius: "12px",   // subtle rounded corners like your card
    boxSizing: "border-box",
    /* make navbar slightly taller so hamburger aligns visually */
    height: "64px",
    /* make sure content doesn't push the whole layout */
  },

  logo: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#d8b4ff",
    margin: 0,
  },

  menu: {
    display: "flex",
    gap: "22px",
    alignItems: "center",
  },

  navItem: {
    background: "transparent",
    border: "none",
    color: "#e5d4ff",
    fontSize: "1rem",
    cursor: "pointer",
    padding: "8px 12px",
    borderRadius: "6px",
  },

  /* hamburger is absolutely positioned inside the navbar so we can nudge it left/right */
  hamburger: {
    display: "none",           // controlled by media queries above
    fontSize: "1.8rem",
    color: "#d8b4ff",
    cursor: "pointer",
    position: "absolute",
    right: "18px",             // <-- change this to nudge left/right on mobile (smaller = move left)
    top: "50%",
    transform: "translateY(-50%)",
  },

  /* mobile slide menu (drawer) */
  mobileMenu: {
    position: "fixed",
    top: "70px",               // below navbar
    right: "10px",             // small right offset so it looks like it's attached (tweak if you want)
    width: "72%",              // keeps it small; change if you want it wider
    maxWidth: "380px",
    background: "#1a0030",
    padding: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    boxShadow: "-6px 0 18px rgba(0,0,0,0.45)",
    borderRadius: "10px",
    zIndex: 2000,
  },

  mobileItem: {
    background: "#2e0147",
    padding: "12px 16px",
    borderRadius: "8px",
    color: "#e5d4ff",
    textAlign: "left",
    fontSize: "1rem",
    border: "1px solid #5e2a86",
    cursor: "pointer",
  },
};

export default Navbar;