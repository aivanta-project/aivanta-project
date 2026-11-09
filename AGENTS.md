# Aivanta Contributor & Agent Guide

> **Aivanta — Independent Open Technology Initiative**
> Advancing trustworthy AI, digital autonomy, and open technology through independent research and engineering.

## 1. Project Overview

This repository (`aivanta-project/aivanta-project`) serves as the official website and public organizational documentation for the Aivanta initiative, published to GitHub Pages at [https://aivanta-project.github.io/](https://aivanta-project.github.io/).

## 2. Technical Stack & Design System

- **Architecture:** Zero-build static web application (HTML5, CSS3, Vanilla JavaScript).
- **Design System:** `@aivanta/design-system` (OpenKnowledge brand, warm paper surfaces in light mode, deep ink/plum in dark mode, accessible typography).
- **Hosting:** GitHub Pages via GitHub Actions.
- **Zero Server Overhead:** Zero external build dependencies, trackers, or client-side runtime bloat.

## 3. Directory Layout

```text
aivanta-project/
├── index.html                # Semantic HTML structure and page sections
├── styles.css                # Responsive layout, brand styling and theme custom properties
├── script.js                 # Theme switcher, mobile nav, project filter and search
├── assets/                   # Vector marks, favicons, logos
│   ├── aivanta-symbol.svg    # Primary brand symbol
│   ├── favicon.svg           # Main SVG favicon
│   ├── favicons/             # Light and dark favicon variants
│   └── logo/                 # Light and dark SVG brand logo variants
├── .context/                 # Architecture, roadmap, decisions & status
└── .github/
    └── workflows/
        └── deploy.yml        # GitHub Pages automated deployment workflow
```

## 4. Local Testing & Verification

Because the site requires no compilation step, you can preview it immediately using any local HTTP static server:

```bash
# Python 3
python3 -m http.server 8000

# or npx serve
npx serve .
```

## 5. Development Principles

1. **Brand Fidelity:** Strictly adhere to the Aivanta Design System (`@aivanta/design-system`).
2. **Semantic & Accessible:** Ensure all pages, buttons, and form elements are semantic and accessible.
3. **Responsive & Fast:** Zero layout shift, instant theme switching, mobile drawer menu, and instant project filtering.
4. **Conventional Commits:** Prefix all commit messages with standard types (`feat:`, `fix:`, `docs:`, `chore:`).
