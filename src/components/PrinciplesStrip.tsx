import React from "react";

export const PrinciplesStrip: React.FC = () => {
  return (
    <section className="principles-strip" aria-label="Aivanta approach">
      <div className="container principles-grid">
        <article>
          <span className="principle-icon">⌕</span>
          <div>
            <h2>Research</h2>
            <p>Explore hard problems and advance practical knowledge.</p>
          </div>
        </article>
        <article>
          <span className="principle-icon">◇</span>
          <div>
            <h2>Build</h2>
            <p>Develop open tools and reusable infrastructure.</p>
          </div>
        </article>
        <article>
          <span className="principle-icon">◎</span>
          <div>
            <h2>Collaborate</h2>
            <p>Work with a community of researchers and builders.</p>
          </div>
        </article>
      </div>
    </section>
  );
};
