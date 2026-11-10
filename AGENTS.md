# Aivanta Contributor & Agent Guide

> **Aivanta — Independent Open Technology Initiative**
> Advancing trustworthy AI, digital autonomy, and open technology through independent research and engineering.

## 1. Project Overview

This repository (`aivanta-project/aivanta-project`) serves as the official website and public organizational documentation for the Aivanta initiative, hosted on GitHub Pages at [https://aivanta-project.github.io/aivanta-project/](https://aivanta-project.github.io/aivanta-project/).

## 2. Technical Stack & Design System

- **Framework:** React 19 + TypeScript + Vite
- **Design System:** `@aivanta/design-system` (OpenKnowledge brand, warm paper surfaces in light mode, deep ink/plum in dark mode, accessible typography)
- **Package Manager:** `pnpm`
- **Hosting & CI/CD:** GitHub Actions $\rightarrow$ GitHub Pages (`pnpm build` outputting to `dist/`)

## 3. Directory Layout

```text
aivanta-project/
├── index.html                # Vite HTML entry point mounting React root
├── package.json              # Project scripts and dependencies
├── tsconfig.json             # Strict TypeScript configuration
├── vite.config.ts            # Vite configuration with @vitejs/plugin-react
├── pnpm-lock.yaml            # Deterministic lockfile
├── public/                   # Static assets (favicons, symbol, logos)
├── src/                      # React application source code
│   ├── main.tsx              # React DOM entry point
│   ├── App.tsx               # Primary layout & section coordinator
│   ├── vite-env.d.ts         # Vite client types
│   ├── hooks/
│   │   └── useTheme.ts       # Theme switcher hook (light/dark, OS preference)
│   ├── components/           # Modular semantic section components
│   │   ├── Header.tsx        # Navigation bar & theme toggle
│   │   ├── Hero.tsx          # Hero section with SVG sun/hill/tree art
│   │   ├── PrinciplesStrip.tsx # Research, Build, Collaborate principles
│   │   ├── AboutSection.tsx  # Mission and independence statement
│   │   ├── ResearchSection.tsx # 6 research cards and exploration areas
│   │   ├── ProjectsSection.tsx # Reactive category filter and live search
│   │   ├── OpenSourceSection.tsx # Open development guidelines
│   │   ├── CommunitySection.tsx # Community participation pathways
│   │   └── Footer.tsx        # Brand footer and navigation links
│   └── styles/               # Design tokens, components, and brand styles
├── .context/                 # 6-file Context Playbook
└── .github/
    └── workflows/
        └── deploy.yml        # CI/CD: build and deploy to GitHub Pages
```

## 4. Key Commands

```bash
# Install dependencies
pnpm install

# Start local development server
pnpm dev

# Type-check TypeScript
pnpm typecheck

# Build for production
pnpm build

# Preview production build locally
pnpm preview
```

## 5. Development Principles

1. **Brand Fidelity:** Strictly adhere to the Aivanta Design System.
2. **Component Modularity:** Encapsulate features in clean, type-safe React components.
3. **High Performance:** Minimal bundle size, zero hydration mismatch, responsive across devices.
4. **Conventional Commits:** Prefix all commit messages with standard types (`feat:`, `fix:`, `docs:`, `chore:`).
