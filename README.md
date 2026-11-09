# aivanta-project.github.io

> **Official Website & Organizational Documentation for [Aivanta — Independent Open Technology Initiative](https://github.com/aivanta-project)**

Live Site: [https://aivanta-project.github.io/](https://aivanta-project.github.io/)

---

## Overview

This repository powers the official public web presence for Aivanta. It articulates Aivanta's mission, governance, research themes, active software projects (including [SignalTrace](https://github.com/aivanta-project/signaltrace)), open-source repositories, and community participation pathways.

## Design & Philosophy

- **Brand Direction:** OpenKnowledge — discovery, shared research, and accessible computing.
- **Editorial Aesthetic:** High-readability typography, warm paper surfaces in light mode, deep ink/plum in dark mode.
- **Built Lean:** Strict TypeScript, Vite, zero heavy framework overhead, zero telemetry or tracking.

## Development

```bash
# Install dependencies
pnpm install

# Start local development server
pnpm dev

# Type-check TypeScript
pnpm typecheck

# Build for production (output to dist/)
pnpm build

# Preview production build locally
pnpm preview
```

## Deployment

The website is continuously deployed to GitHub Pages using GitHub Actions on every commit to `main`. See [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

## License

This repository is licensed under the [MIT License](LICENSE).
Content and specifications are shared under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/).
