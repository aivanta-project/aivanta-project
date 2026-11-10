import React from "react";

export const OpenSourceSection: React.FC = () => {
  return (
    <section className="section open-section" id="opensource">
      <div className="container open-layout">
        <div>
          <span className="section-kicker">04 / Open source</span>
          <h2>
            Built in the open.
            <br />
            <em>Improved together.</em>
          </h2>
          <p className="section-copy-text">
            We believe useful technology should be open to inspection, experimentation and
            meaningful contribution. Explore our work, learn from it and help us improve it.
          </p>
          <a
            className="button button-primary"
            href="https://github.com/aivanta-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Aivanta on GitHub <span>↗</span>
          </a>
        </div>
        <div className="open-list">
          <article>
            <span className="open-icon">⌘</span>
            <div>
              <h3>Open development</h3>
              <p>Public repositories, issues and transparent project discussions.</p>
            </div>
            <span className="open-arrow">↗</span>
          </article>
          <article>
            <span className="open-icon">◇</span>
            <div>
              <h3>Reproducible work</h3>
              <p>Experiments, documentation, test cases and practical evidence.</p>
            </div>
            <span className="open-arrow">↗</span>
          </article>
          <article>
            <span className="open-icon">↗</span>
            <div>
              <h3>Community contributions</h3>
              <p>Ideas, reviews, issues and pull requests from the wider community.</p>
            </div>
            <span className="open-arrow">↗</span>
          </article>
        </div>
      </div>
    </section>
  );
};
