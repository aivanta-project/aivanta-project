import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="hero section" id="home">
      <div className="hero-art" aria-hidden="true">
        <div className="sun"></div>
        <div className="hill hill-back"></div>
        <div className="hill hill-front"></div>
        <svg className="hero-tree" viewBox="0 0 340 330" fill="none" aria-hidden="true">
          <path
            d="M173 322C174 262 169 218 181 157M179 210L125 157M177 187L230 129M173 249L228 207"
            stroke="currentColor"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M175 160C116 145 69 113 60 77C102 79 140 98 176 130C191 83 233 53 284 49C279 94 241 133 180 158C221 139 269 145 310 176C265 201 218 194 178 168C138 198 91 202 34 180C69 145 121 143 175 160Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="container hero-content">
        <div className="eyebrow">
          <span className="eyebrow-dot"></span> Independent open technology initiative
        </div>
        <h1>
          Open technology for a more <em>trustworthy</em> and inclusive world.
        </h1>
        <p className="hero-lede">
          Aivanta advances open research, public technology and shared knowledge for a more
          trustworthy and inclusive digital future.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore projects <span>→</span>
          </a>
          <a className="button button-outline" href="#about">
            About Aivanta
          </a>
        </div>
        <div className="hero-note">
          <span>Research</span>
          <i></i>
          <span>Build</span>
          <i></i>
          <span>Collaborate</span>
        </div>
      </div>
      <div className="hero-caption">Knowledge grows when it is shared.</div>
    </section>
  );
};
