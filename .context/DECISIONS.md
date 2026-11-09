# Decisions: Aivanta Website

## ADR-001: Independent Pure Static Site with Vite
- **Status:** Accepted
- **Context:** The website must be fast, secure, easily hostable on GitHub Pages, and have minimal supply-chain surface area.
- **Decision:** Build with Vite + TypeScript using static HTML and semantic CSS modules derived from `@aivanta/design-system`.
- **Consequence:** Immediate load speeds, zero client-side hydration delays, and zero runtime vulnerabilities.

## ADR-002: Comprehensive Single-Page Semantic Layout with Deep Linking
- **Status:** Accepted
- **Context:** The site contains six core sections (Home, About, Research, Projects, Open Source, Community) that need to be accessible directly via URL hashes and seamless scrolling.
- **Decision:** Construct a unified semantic document where each section has an ID and corresponds to a top-level navigation item, synchronized with an IntersectionObserver.
- **Consequence:** Excellent SEO, instant in-page navigation, and seamless deep links (e.g. `/#projects`, `/#research`).
