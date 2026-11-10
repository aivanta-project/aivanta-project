import React, { useState, useEffect } from "react";
import { Theme } from "../hooks/useTheme";

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "research", "projects", "opensource", "community"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="Aivanta home" onClick={closeMenu}>
          <img src="assets/aivanta-symbol.svg" className="brand-mark" alt="" />
          <span className="brand-copy">
            <strong>Aivanta</strong>
            <small>Independent Open Technology Initiative</small>
          </span>
        </a>

        <button
          className="menu-toggle icon-button"
          id="menuToggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
        </button>

        <nav
          className={`main-nav ${menuOpen ? "open" : ""}`}
          id="mainNav"
          aria-label="Main navigation"
        >
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href="#research"
            className={activeSection === "research" ? "active" : ""}
            onClick={closeMenu}
          >
            Research
          </a>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
            onClick={closeMenu}
          >
            Projects
          </a>
          <a
            href="#opensource"
            className={activeSection === "opensource" ? "active" : ""}
            onClick={closeMenu}
          >
            Open source
          </a>
          <a
            href="#community"
            className={activeSection === "community" ? "active" : ""}
            onClick={closeMenu}
          >
            Community
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle icon-button"
            id="themeToggle"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            title="Toggle theme"
            onClick={toggleTheme}
          >
            <span className="theme-icon">{theme === "dark" ? "☀" : "☾"}</span>
          </button>
          <a className="button button-small button-primary" href="#community" onClick={closeMenu}>
            Get involved <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
};
