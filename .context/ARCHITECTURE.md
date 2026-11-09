# Architecture: Aivanta Website

## 1. System Overview
The website is architected as an ultra-lean, static web application designed specifically for GitHub Pages deployment. It requires zero compilation steps and directly serves standard-compliant HTML5, CSS3, and modern Vanilla JS.

```
                      ┌────────────────────────────┐
                      │        index.html          │
                      │  Semantic Multi-Section    │
                      └─────────────┬──────────────┘
                                    │
           ┌────────────────────────┼────────────────────────┐
           ▼                        ▼                        ▼
  ┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
  │    styles.css    │    │    script.js     │    │     assets/      │
  │  - Design Tokens │    │  - Theme Toggle  │    │  - Brand Marks   │
  │  - Light / Dark  │    │  - Nav Drawer    │    │  - Favicons      │
  │  - Responsive UI │    │  - Live Search   │    │  - Logos         │
  │  - Hill & Sun Art│    │  - Active Track  │    └──────────────────┘
  └──────────────────┘    └──────────────────┘
```

## 2. Design System Alignment
The site implements `@aivanta/design-system`:
- **Palette:** Warm paper (`#F8F4EA`), deep ink (`#1F1B24`), primary plum (`#4B2E83`), accent ochre (`#D99A3B`).
- **Typography:** Plus Jakarta Sans via Google Fonts with full fallback stack.
- **Components:** Responsive navbar, hero with vector artwork, research cards, project search/filter, and accessible footer.

## 3. GitHub Pages Pipeline
- `.github/workflows/deploy.yml` triggers on push to `main`.
- Uses official GitHub Actions (`actions/upload-pages-artifact` & `actions/deploy-pages`).
- Deploys repository root directly to `https://aivanta-project.github.io/`.
