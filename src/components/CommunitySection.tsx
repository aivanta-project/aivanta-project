import React from "react";

export const CommunitySection: React.FC = () => {
  return (
    <section className="community-section" id="community">
      <div className="community-art" aria-hidden="true">
        <div className="community-sun"></div>
        <div className="community-hill"></div>
      </div>
      <div className="container community-content">
        <span className="section-kicker">05 / Community</span>
        <h2>
          The future is a<br />
          <em>shared project.</em>
        </h2>
        <p>
          Follow our research, explore our code and contribute to technology that advances digital
          autonomy and shared knowledge.
        </p>
        <div className="hero-actions">
          <a
            className="button button-accent"
            href="https://github.com/aivanta-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join us on GitHub ↗
          </a>
          <a
            className="button button-light-outline"
            href="https://github.com/aivanta-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore repositories
          </a>
        </div>
      </div>
    </section>
  );
};
