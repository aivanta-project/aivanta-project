import React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <a className="brand" href="#home">
            <img src="assets/aivanta-symbol.svg" className="brand-mark" alt="" />
            <span className="brand-copy">
              <strong>Aivanta</strong>
              <small>Independent Open Technology Initiative</small>
            </span>
          </a>
          <p>
            Open research. Public technology.
            <br />
            Shared knowledge.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <h2>Explore</h2>
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#projects">Projects</a>
          </div>
          <div>
            <h2>Participate</h2>
            <a href="#opensource">Open source</a>
            <a href="#community">Community</a>
            <a
              href="https://github.com/aivanta-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {currentYear} Aivanta. Independent research and open technology.
        </span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
};
