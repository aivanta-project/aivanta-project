import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section className="section section-about" id="about">
      <div className="container split-layout">
        <div className="section-heading">
          <span className="section-kicker">01 / About Aivanta</span>
          <h2>
            Independent by design.
            <br />
            <em>Open by principle.</em>
          </h2>
        </div>
        <div className="section-copy">
          <p className="lead">
            Aivanta is an independent open technology initiative exploring how research and practical
            engineering can make advanced technology more accessible, trustworthy and accountable.
          </p>
          <p>
            We create and support open-source software, investigate emerging technical challenges, and
            develop reusable public-interest technology. Our projects are independently useful and
            open to inspection, experimentation and contribution.
          </p>
          <a className="text-link" href="#research">
            Explore our research areas <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};
