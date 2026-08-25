# portfolio

![Website](https://img.shields.io/website?url=https%3A%2F%2Fspjc.fr&style=flat)
![Last commit](https://img.shields.io/github/last-commit/luigilink/portfolio.svg?style=flat)
![Issues opened](https://img.shields.io/github/issues/luigilink/portfolio.svg?style=flat)
![License](https://img.shields.io/github/license/luigilink/portfolio.svg?style=flat)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)

Personal portfolio of **Jean-Cyril Drouhin** — SharePoint & M365 specialist, Cloud Solution Architect. Built with Next.js as a static export and hosted on Azure Static Web Apps.

🌐 **Live site: [spjc.fr](https://spjc.fr)**

## Features

- Single-page landing site with a hero, core-expertise, work, certifications and
  contact sections.
- **Projects section**: the latest public GitHub repositories are fetched from the
  GitHub API **at build time** and rendered into the static pages. The list
  refreshes on each deployment (a push to `main`), not at runtime.
- Glassmorphism design with an animated mesh background, respecting
  `prefers-reduced-motion`.
- SEO metadata, Open Graph image, sitemap, robots and a bilingual legal notice.

## Tech stack

| Area       | Technology                                  |
| ---------- | ------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org) (App Router, static export) |
| Language   | [TypeScript](https://www.typescriptlang.org/) |
| UI         | [React 19](https://react.dev/)              |
| Styling    | [Tailwind CSS 4](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/) |
| Icons      | [lucide-react](https://lucide.dev/)         |
| Fonts      | [Geist](https://vercel.com/font) via `next/font` |
| Analytics  | Azure Application Insights (cookieless)      |
| Hosting    | Azure Static Web Apps (Free plan)            |

## Getting started

Requires **Node.js 22 or later**.

```bash
# install dependencies
npm install

# run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

`npm run build` produces a fully static site in the `out/` directory
(`output: "export"` in `next.config.mjs`).

### Available scripts

| Script          | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Build the static export into `out/`  |
| `npm run lint`  | Run ESLint                           |

## Configuration

Both variables are optional and read **at build time**.

| Variable       | Required | Description                                            |
| -------------- | -------- | ------------------------------------------------------ |
| `GITHUB_TOKEN` | No       | GitHub personal access token used when fetching the repositories at build time (public repos, read-only). Raises the API rate limit from 60 to 5,000 requests/hour. |
| `NEXT_PUBLIC_APPLICATIONINSIGHTS_CONNECTION_STRING` | No | Azure Application Insights connection string. When set, privacy-friendly (cookieless) analytics is enabled. As a `NEXT_PUBLIC_*` variable it is inlined into the client bundle at build time. |

In CI these are provided as GitHub Actions secrets consumed by the build step.

## Deployment

The site is deployed to **Azure Static Web Apps** (Free plan) via a GitHub Actions
workflow ([`.github/workflows/azure-static-web-apps.yml`](.github/workflows/azure-static-web-apps.yml)):
every push to `main` runs `npm ci && npm run build` and uploads the `out/` folder.
Pull requests get their own temporary preview environment, which is cleaned up when
the PR is closed. The site is served on the custom domains
[spjc.fr](https://spjc.fr) and [www.spjc.fr](https://www.spjc.fr).

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

## License

Released under the [MIT License](LICENSE). Please also review the
[Code of Conduct](CODE_OF_CONDUCT.md).
