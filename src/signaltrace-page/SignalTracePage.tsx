import React from "react";
import { useTheme } from "../hooks/useTheme";

export const SignalTracePage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {/* Header with back navigation */}
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="../../" aria-label="Aivanta home">
            <img src="../../assets/aivanta-symbol.svg" className="brand-mark" alt="" />
            <span className="brand-copy">
              <strong>Aivanta</strong>
              <small>Independent Open Technology Initiative</small>
            </span>
          </a>

          <nav className="main-nav open" aria-label="Project navigation">
            <a href="../../">← Aivanta Home</a>
            <a href="#overview">Overview</a>
            <a href="#problem">Problem</a>
            <a href="#architecture">Architecture</a>
            <a href="#milestones">Milestones</a>
            <a href="#quickstart">Quickstart</a>
            <a href="#documentation">Docs & Links</a>
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
            <a
              className="button button-small button-primary"
              href="https://github.com/aivanta-project/signaltrace"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Project Hero */}
        <section className="hero section" id="overview">
          <div className="hero-art" aria-hidden="true">
            <div className="sun"></div>
            <div className="hill hill-back"></div>
            <div className="hill hill-front"></div>
          </div>
          <div className="container hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot"></span> Project Dossier · Open Source R&D
            </div>
            <h1>
              SignalTrace: Verifiable Execution Traces for <em>Autonomous AI</em>
            </h1>
            <p className="hero-lede">
              A cryptographic provenance layer and verification runtime that transforms opaque agent
              executions into tamper-evident Merkle-DAG audit receipts.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://github.com/aivanta-project/signaltrace"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository on GitHub <span>↗</span>
              </a>
              <a className="button button-outline" href="#quickstart">
                Try the Verification CLI
              </a>
            </div>
            <div className="hero-note">
              <span>Apache-2.0</span>
              <i></i>
              <span>Python 3.11+</span>
              <i></i>
              <span>RFC 8785 Canonical JSON</span>
              <i></i>
              <span>SHA-256 Merkle-DAG</span>
            </div>
          </div>
          <div className="hero-caption">
            Provable integrity over implicit trust for autonomous systems.
          </div>
        </section>

        {/* Project Facts Box for Reviewers */}
        <section className="section" style={{ padding: "40px 0" }}>
          <div className="container">
            <div
              style={{
                background: "var(--av-surface, #FFFCF6)",
                border: "1px solid var(--av-border, #E6DED1)",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
              }}
            >
              <h3 style={{ margin: "0 0 16px", fontSize: "1.25rem", color: "var(--av-primary)" }}>
                Project Overview & Governance Summary
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "20px",
                  fontSize: "0.95rem",
                }}
              >
                <div>
                  <strong style={{ display: "block", color: "var(--av-accent)" }}>Initiative</strong>
                  Aivanta — Independent Open Technology Initiative
                </div>
                <div>
                  <strong style={{ display: "block", color: "var(--av-accent)" }}>Project Lead</strong>
                  Moses Willfred (Founder & Lead Engineer)
                </div>
                <div>
                  <strong style={{ display: "block", color: "var(--av-accent)" }}>Project Status</strong>
                  Phase 1: Alpha / Active R&D (Codebase active)
                </div>
                <div>
                  <strong style={{ display: "block", color: "var(--av-accent)" }}>License</strong>
                  Apache License 2.0 (Open Source)
                </div>
                <div>
                  <strong style={{ display: "block", color: "var(--av-accent)" }}>Public Repository</strong>
                  <a
                    href="https://github.com/aivanta-project/signaltrace"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/aivanta-project/signaltrace
                  </a>
                </div>
                <div>
                  <strong style={{ display: "block", color: "var(--av-accent)" }}>Specification</strong>
                  RFC 0001 (Canonical Event Schema & DAG)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="section" id="problem">
          <div className="container split-layout">
            <div className="section-heading">
              <span className="section-kicker">01 / The Problem</span>
              <h2>
                Why AI logging is <em>fundamentally broken.</em>
              </h2>
            </div>
            <div className="section-copy">
              <p className="lead">
                Autonomous agents make tool calls, execute SQL queries, invoke external APIs, and
                mutate databases without a tamper-evident audit trail.
              </p>
              <p>
                Standard telemetry (logs, print statements, flat JSON dumps) is easily modified
                post-hoc. If an agent is manipulated via prompt injection or hallucinations, forensic
                investigators have no cryptographic proof of which prompt led to which specific tool
                call.
              </p>
              <div
                style={{
                  display: "grid",
                  gap: "16px",
                  marginTop: "24px",
                }}
              >
                <div style={{ padding: "16px", borderLeft: "3px solid #D99A3B", background: "var(--av-surface-raised, #FFF)" }}>
                  <strong>Vulnerability to Tampering:</strong> A compromised host or agent can selectively edit or omit log records without invalidating any checksums.
                </div>
                <div style={{ padding: "16px", borderLeft: "3px solid #D99A3B", background: "var(--av-surface-raised, #FFF)" }}>
                  <strong>Missing Causal Lineage:</strong> Flat timestamps do not prove which prior observations triggered an action in concurrent or multi-agent workflows.
                </div>
                <div style={{ padding: "16px", borderLeft: "3px solid #D99A3B", background: "var(--av-surface-raised, #FFF)" }}>
                  <strong>Third-Party Blind Trust:</strong> Customers and auditors have to trust the platform's assertions because they cannot mathematically verify trace integrity.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture & Solution */}
        <section className="section" id="architecture">
          <div className="container">
            <div className="section-topline">
              <span className="section-kicker">02 / Technical Architecture</span>
              <span className="muted-label">Hexagonal Ports & Adapters</span>
            </div>
            <div className="section-intro">
              <h2>
                Cryptographic Merkle-DAGs for <em>Every Agent Action.</em>
              </h2>
              <p>
                SignalTrace decouples cryptographic proof logic from execution runtimes. Every
                action is an immutable node linked to its causal predecessors.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "24px",
                marginTop: "32px",
              }}
            >
              <div className="research-card">
                <span className="card-index">01</span>
                <h3>RFC 8785 Canonical Serialization</h3>
                <p>
                  Eliminates cross-runtime serialization ambiguities (whitespace, key ordering, float representation) to guarantee deterministic SHA-256 content hashes.
                </p>
                <span className="topic-tag">DATA INTEGRITY</span>
              </div>

              <div className="research-card">
                <span className="card-index">02</span>
                <h3>Merkle-DAG Causal Trees</h3>
                <p>
                  Every event (prompt, reasoning step, tool invocation, tool response) references its parent IDs. Altering any prior action breaks the downstream hash chain.
                </p>
                <span className="topic-tag">CAUSAL PROVENANCE</span>
              </div>

              <div className="research-card">
                <span className="card-index">03</span>
                <h3>Independent Audit Verifier</h3>
                <p>
                  A standalone verification engine recalculates the full DAG and confirms the root receipt in O(N log N) time with zero external network calls.
                </p>
                <span className="topic-tag">VERIFICATION RUNTIME</span>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Plan & Milestones */}
        <section className="section" id="milestones">
          <div className="container">
            <div className="section-topline">
              <span className="section-kicker">03 / Implementation Plan</span>
              <span className="muted-label">Measurable Outcomes</span>
            </div>
            <div className="section-intro">
              <h2>
                Concrete Milestones & <em>Deliverables.</em>
              </h2>
              <p>
                SignalTrace is developed as a focused, deliverable software engineering project with
                defined technical outcomes.
              </p>
            </div>

            <div style={{ display: "grid", gap: "20px", marginTop: "32px" }}>
              <div
                style={{
                  padding: "24px",
                  borderRadius: "12px",
                  border: "1px solid var(--av-border)",
                  background: "var(--av-surface)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <h3 style={{ margin: 0 }}>Milestone 1: Core Engine & Canonical Specification</h3>
                  <span className="status status-development">Completed (Alpha 0.1)</span>
                </div>
                <p style={{ margin: "0 0 12px", color: "var(--av-text-muted)" }}>
                  Delivered RFC 0001 specification, JSON Schema v0.1, Python DAG constructor, deterministic canonicalizer, CLI verifier, and 100% passing test suite.
                </p>
                <span className="topic-tag">CORE ALGORITHM & PROTOCOL</span>
              </div>

              <div
                style={{
                  padding: "24px",
                  borderRadius: "12px",
                  border: "1px solid var(--av-border)",
                  background: "var(--av-surface)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <h3 style={{ margin: 0 }}>Milestone 2: Agent Runtime Interceptors (MCP & OpenTelemetry)</h3>
                  <span className="status status-exploration">In Progress</span>
                </div>
                <p style={{ margin: "0 0 12px", color: "var(--av-text-muted)" }}>
                  Developing zero-code-change wrappers for Anthropic's Model Context Protocol (MCP) and OpenTelemetry spans, capturing tool actions automatically.
                </p>
                <span className="topic-tag">RUNTIME INTEGRATIONS</span>
              </div>

              <div
                style={{
                  padding: "24px",
                  borderRadius: "12px",
                  border: "1px solid var(--av-border)",
                  background: "var(--av-surface)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <h3 style={{ margin: 0 }}>Milestone 3: Adversarial Corpus & Verification Benchmarks</h3>
                  <span className="status status-exploration">Planned</span>
                </div>
                <p style={{ margin: "0 0 12px", color: "var(--av-text-muted)" }}>
                  Curate an open attack-corpus testing suite (tampered tool returns, equivocation, replay attacks) and benchmark verification latency under 5ms for 1,000 events.
                </p>
                <span className="topic-tag">SECURITY & BENCHMARKS</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quickstart & CLI Verification */}
        <section className="section" id="quickstart">
          <div className="container">
            <div className="section-topline">
              <span className="section-kicker">04 / Developer Quickstart</span>
              <span className="muted-label">Hands-On Evidence</span>
            </div>
            <div className="section-intro">
              <h2>
                Installation & <em>Live Verification.</em>
              </h2>
              <p>
                SignalTrace is working software today. Anyone can install the package, record an agent
                session, and independently audit execution traces.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                gap: "24px",
                marginTop: "24px",
              }}
            >
              {/* Python Code Block */}
              <div>
                <h4 style={{ marginBottom: "12px" }}>1. Python SDK — Recording a Trace</h4>
                <pre
                  style={{
                    background: "var(--av-surface-raised, #1F1B24)",
                    color: "var(--av-text)",
                    padding: "20px",
                    borderRadius: "12px",
                    border: "1px solid var(--av-border)",
                    overflowX: "auto",
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "0.85rem",
                    lineHeight: "1.5",
                  }}
                >
{`from signaltrace.models import Actor, EventType
from signaltrace.dag import ProvenanceDAG

dag = ProvenanceDAG("session-001")
agent = Actor("agent-1", role="agent")
tool = Actor("calculator", role="tool_executor")

# 1. Record tool execution
e1 = dag.add_event(
    EventType.TOOL_CALL,
    agent,
    {"function": "multiply", "args": [42, 10]}
)

# 2. Record tool output (linked to tool call)
e2 = dag.add_event(
    EventType.TOOL_RESULT,
    tool,
    {"result": 420},
    parent_ids=[e1.event_id]
)

# 3. Export receipt & trace
trace = dag.export_trace()
print("Root:", trace["receipt"]["root_hash"])`}
                </pre>
              </div>

              {/* CLI Verification Block */}
              <div>
                <h4 style={{ marginBottom: "12px" }}>2. CLI — Auditing Traces & Catching Tampering</h4>
                <pre
                  style={{
                    background: "var(--av-surface-raised, #1F1B24)",
                    color: "var(--av-text)",
                    padding: "20px",
                    borderRadius: "12px",
                    border: "1px solid var(--av-border)",
                    overflowX: "auto",
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "0.85rem",
                    lineHeight: "1.5",
                  }}
                >
{`# Install locally
pip install -e .

# Audit valid trace:
$ signaltrace verify examples/simple_agent_trace.json
VALID: Session 'session-demo-2026-001' verified.
  Events validated: 5
  Merkle Root: 1386b42ba530829fe...

# Audit tampered trace (detects modification):
$ signaltrace verify examples/tampered_trace.json
INVALID: Verification failed.
  Errors:
  - Content address mismatch at event #3:
    declared='84f17...', computed='3c0b2...'
    Possible payload tampering.`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Public Documentation & Reviewer Links */}
        <section className="section" id="documentation">
          <div className="container">
            <div className="section-topline">
              <span className="section-kicker">05 / Public Documentation</span>
              <span className="muted-label">Supporting Evidence</span>
            </div>
            <div className="section-intro">
              <h2>
                Primary Technical <em>Resources.</em>
              </h2>
              <p>
                All specifications, architectural blueprints, and threat models are publicly
                available under the Apache-2.0 license:
              </p>
            </div>

            <div className="open-list" style={{ marginTop: "32px" }}>
              <article>
                <span className="open-icon">📦</span>
                <div>
                  <h3>
                    <a
                      href="https://github.com/aivanta-project/signaltrace"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Repository: aivanta-project/signaltrace
                    </a>
                  </h3>
                  <p>Complete source code, unit tests, pyproject configuration, and CLI tooling.</p>
                </div>
                <span className="open-arrow">↗</span>
              </article>

              <article>
                <span className="open-icon">📐</span>
                <div>
                  <h3>
                    <a
                      href="https://github.com/aivanta-project/signaltrace/blob/main/docs/architecture.md"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      System Architecture Blueprint (docs/architecture.md)
                    </a>
                  </h3>
                  <p>Hexagonal ports and adapters, data flow diagrams, and runtime boundaries.</p>
                </div>
                <span className="open-arrow">↗</span>
              </article>

              <article>
                <span className="open-icon">◈</span>
                <div>
                  <h3>
                    <a
                      href="https://github.com/aivanta-project/signaltrace/blob/main/docs/provenance-model.md"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Provenance Data Model (docs/provenance-model.md)
                    </a>
                  </h3>
                  <p>Formal definitions of content addressing, Merkle roots, and causal parent links.</p>
                </div>
                <span className="open-arrow">↗</span>
              </article>

              <article>
                <span className="open-icon">🛡️</span>
                <div>
                  <h3>
                    <a
                      href="https://github.com/aivanta-project/signaltrace/blob/main/docs/threat-model.md"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Threat Model & Security Policy (docs/threat-model.md)
                    </a>
                  </h3>
                  <p>Analysis of compromised runtimes, prompt injection attacks, and equivocation mitigations.</p>
                </div>
                <span className="open-arrow">↗</span>
              </article>

              <article>
                <span className="open-icon">📋</span>
                <div>
                  <h3>
                    <a
                      href="https://github.com/aivanta-project/signaltrace/blob/main/specifications/provenance-rfc.md"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      RFC 0001: Canonical Schema Specification
                    </a>
                  </h3>
                  <p>Formal specification draft for deterministic event canonicalization and tree generation.</p>
                </div>
                <span className="open-arrow">↗</span>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <a className="brand" href="../../">
              <img src="../../assets/aivanta-symbol.svg" className="brand-mark" alt="" />
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
              <h2>Navigation</h2>
              <a href="../../">Aivanta Home</a>
              <a href="../../#about">About</a>
              <a href="../../#research">Research</a>
              <a href="../../#projects">Projects</a>
            </div>
            <div>
              <h2>SignalTrace</h2>
              <a href="https://github.com/aivanta-project/signaltrace" target="_blank" rel="noopener noreferrer">
                GitHub Repository ↗
              </a>
              <a href="https://github.com/aivanta-project/signaltrace/blob/main/docs/architecture.md" target="_blank" rel="noopener noreferrer">
                Architecture Specs ↗
              </a>
              <a href="https://github.com/aivanta-project/signaltrace/issues" target="_blank" rel="noopener noreferrer">
                Issues & Roadmap ↗
              </a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Aivanta. Independent research and open technology.</span>
          <a href="#overview">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
};
