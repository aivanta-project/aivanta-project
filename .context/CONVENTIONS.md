# Conventions: Aivanta Website

## 1. Naming & Semantic Markup
- Use semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- CSS classes follow `@aivanta/design-system` prefixing: `av-container`, `av-card`, `av-button`, `av-badge`, `av-nav`.
- Strictly avoid hardcoded inline magic numbers for colors and spacing; use CSS custom properties (`--av-color-*`, `--av-space-*`).

## 2. TypeScript & Code Standards
- Strict mode enabled (`strict: true`, zero `any`).
- No unnecessary external runtime libraries.
- DOM interactions use type guards and null-checks.

## 3. Workflow & Commits
- Trunk-based development landing on `main`.
- Conventional Commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`.
