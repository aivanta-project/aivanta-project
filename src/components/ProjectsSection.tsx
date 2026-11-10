import React, { useState } from "react";

interface Project {
  id: string;
  name: string;
  title: string;
  tags: string[];
  status: string;
  statusClass: string;
  topicTag: string;
  description: string;
  footerTech: string;
  linkText: string;
  linkHref: string;
  isExternal: boolean;
  visualType: "signal" | "agent";
  projectPageHref?: string;
}

const PROJECTS: Project[] = [
  {
    id: "signaltrace",
    name: "SignalTrace",
    title: "SignalTrace",
    tags: ["security", "research"],
    status: "In development",
    statusClass: "status-development",
    topicTag: "SECURITY · RESEARCH",
    description:
      "An open-source provenance and integrity verification toolkit for information consumed by AI systems.",
    footerTech: "Python · Open source",
    linkText: "GitHub ↗",
    linkHref: "https://github.com/aivanta-project/signaltrace",
    isExternal: true,
    visualType: "signal",
    projectPageHref: "projects/signaltrace/",
  },
  {
    id: "agent-trust",
    name: "Agent Trust & Security",
    title: "Agent Trust & Security",
    tags: ["security", "infrastructure", "research"],
    status: "Research direction",
    statusClass: "status-exploration",
    topicTag: "SECURITY · INFRASTRUCTURE",
    description:
      "Exploring reusable methods and tools for evaluating the security and governance of AI agents.",
    footerTech: "Research exploration",
    linkText: "Follow the work ↗",
    linkHref: "#community",
    isExternal: false,
    visualType: "agent",
  },
];

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesFilter = activeFilter === "all" || proj.tags.includes(activeFilter);
    const query = searchQuery.trim().toLowerCase();
    const matchesQuery =
      !query ||
      proj.name.toLowerCase().includes(query) ||
      proj.description.toLowerCase().includes(query) ||
      proj.topicTag.toLowerCase().includes(query);
    return matchesFilter && matchesQuery;
  });

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-topline">
          <span className="section-kicker">03 / Projects</span>
          <span className="muted-label">Independent work, shared purpose</span>
        </div>
        <div className="section-intro">
          <h2>
            Ideas into <em>open technology.</em>
          </h2>
          <p>
            Each Aivanta project has its own purpose, roadmap and community. Explore what is being
            developed and what is still being researched.
          </p>
        </div>
        <div className="project-controls">
          <div className="filter-group" role="group" aria-label="Filter projects">
            <button
              className={`filter-button ${activeFilter === "all" ? "active" : ""}`}
              aria-pressed={activeFilter === "all"}
              onClick={() => setActiveFilter("all")}
            >
              All work <span>{PROJECTS.length}</span>
            </button>
            <button
              className={`filter-button ${activeFilter === "security" ? "active" : ""}`}
              aria-pressed={activeFilter === "security"}
              onClick={() => setActiveFilter("security")}
            >
              Security
            </button>
            <button
              className={`filter-button ${activeFilter === "research" ? "active" : ""}`}
              aria-pressed={activeFilter === "research"}
              onClick={() => setActiveFilter("research")}
            >
              Research
            </button>
            <button
              className={`filter-button ${activeFilter === "infrastructure" ? "active" : ""}`}
              aria-pressed={activeFilter === "infrastructure"}
              onClick={() => setActiveFilter("infrastructure")}
            >
              Infrastructure
            </button>
          </div>
          <label className="project-search">
            <span className="sr-only">Search projects</span>
            <span>⌕</span>
            <input
              id="projectSearch"
              type="search"
              placeholder="Find a project…"
              autoComplete="off"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </label>
        </div>

        <div className="projects-grid" id="projectsGrid">
          {filteredProjects.map((proj) => (
            <article className="project-card" key={proj.id} data-name={proj.name}>
              {proj.visualType === "signal" ? (
                <div className="project-visual signal-visual">
                  <div className="signal-node node-a"></div>
                  <div className="signal-node node-b"></div>
                  <div className="signal-node node-c"></div>
                  <div className="signal-line line-a"></div>
                  <div className="signal-line line-b"></div>
                  <span className="visual-label">PROVENANCE / INTEGRITY</span>
                </div>
              ) : (
                <div className="project-visual agent-visual">
                  <div className="agent-orbit orbit-one"></div>
                  <div className="agent-orbit orbit-two"></div>
                  <div className="agent-core">A</div>
                  <span className="visual-label">IDENTITY / AUTHORIZATION / CONTROL</span>
                </div>
              )}
              <div className="project-body">
                <div className="project-meta">
                  <span className="topic-tag">{proj.topicTag}</span>
                  <span className={`status ${proj.statusClass}`}>{proj.status}</span>
                </div>
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="project-footer">
                  <span>{proj.footerTech}</span>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    {proj.projectPageHref && (
                      <a
                        href={proj.projectPageHref}
                        style={{ fontWeight: 700 }}
                        aria-label={`${proj.title} project page`}
                      >
                        Project Page →
                      </a>
                    )}
                    {proj.isExternal ? (
                      <a
                        href={proj.linkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${proj.title} GitHub repository`}
                      >
                        {proj.linkText}
                      </a>
                    ) : (
                      <a href={proj.linkHref}>{proj.linkText}</a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="empty-state" id="emptyState">
            No projects match that search. Try another term or clear the filters.
          </div>
        )}

        <p className="section-footnote">
          Project descriptions and statuses reflect the current public project direction and will
          evolve as work progresses.
        </p>
      </div>
    </section>
  );
};
