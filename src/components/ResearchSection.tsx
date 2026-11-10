import React from "react";

interface ResearchTopic {
  index: string;
  symbol: string;
  title: string;
  description: string;
  tag: string;
}

const RESEARCH_TOPICS: ResearchTopic[] = [
  {
    index: "01",
    symbol: "◈",
    title: "Trustworthy AI",
    description: "Security, reliability, evaluation and accountability for intelligent systems.",
    tag: "AI SYSTEMS",
  },
  {
    index: "02",
    symbol: "⌘",
    title: "Agent governance",
    description: "Identity, authorization, delegation and enforceable boundaries for AI agents.",
    tag: "SECURITY & CONTROL",
  },
  {
    index: "03",
    symbol: "⌁",
    title: "Information integrity",
    description: "Provenance, verification and integrity of information in digital systems.",
    tag: "TRUST & PROVENANCE",
  },
  {
    index: "04",
    symbol: "⌂",
    title: "Local-first AI",
    description: "AI infrastructure that can operate locally, privately and with greater autonomy.",
    tag: "DIGITAL AUTONOMY",
  },
  {
    index: "05",
    symbol: "▱",
    title: "Open infrastructure",
    description: "Reusable tools, standards and foundational technologies for developers.",
    tag: "OPEN TECHNOLOGY",
  },
  {
    index: "06",
    symbol: "◎",
    title: "Reproducible research",
    description: "Transparent experiments, benchmarks and evidence-driven engineering.",
    tag: "RESEARCH METHODS",
  },
];

export const ResearchSection: React.FC = () => {
  return (
    <section className="section research-section" id="research">
      <div className="container">
        <div className="section-topline">
          <span className="section-kicker">02 / Research & engineering</span>
          <span className="muted-label">Questions worth working on</span>
        </div>
        <div className="section-intro">
          <h2>
            Building a more thoughtful
            <br />
            <em>digital future.</em>
          </h2>
          <p>
            Our work spans foundational questions and practical systems. These are areas of
            exploration, not claims that every capability is already built.
          </p>
        </div>
        <div className="research-grid">
          {RESEARCH_TOPICS.map((topic) => (
            <article className="research-card" key={topic.index}>
              <span className="card-index">{topic.index}</span>
              <div className="research-symbol">{topic.symbol}</div>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <span className="topic-tag">{topic.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
