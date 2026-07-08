# portfolio

![Website](https://img.shields.io/website?url=https%3A%2F%2Fspjc.fr&style=flat)
![Last commit](https://img.shields.io/github/last-commit/luigilink/portfolio.svg?style=flat)
![Issues opened](https://img.shields.io/github/issues/luigilink/portfolio.svg?style=flat)

Personal portfolio of **Jean-Cyril Drouhin** — SharePoint & M365 specialist, Cloud Solution Architect. Built with Next.js and deployed on Azure App Service.

🌐 **Live site: [spjc.fr](https://spjc.fr)**

## Features

- Server-rendered landing page with a hero, core-expertise and work sections.
- **Dynamic projects section**: the latest public GitHub repositories are fetched
  from the GitHub API and revalidated hourly (ISR), so the site stays up to date
  on its own — no code change needed when a new project is pushed.
- Glassmorphism design with an animated mesh background.

## Tech stack

| Area       | Technology                                  |
| ---------- | ------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| Language   | [TypeScript](https://www.typescriptlang.org/) |
| UI         | [React 19](https://react.dev/)              |
| Styling    | [Tailwind CSS 4](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/) |
| Icons      | [lucide-react](https://lucide.dev/)         |
| Fonts      | [Geist](https://vercel.com/font) via `next/font` |
| Hosting    | Azure App Service (Linux, Node 22-LTS)      |

## Getting started

Requires **Node.js 22 or later**.

```bash
# install dependencies
npm install

# run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available scripts

| Script          | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

## Configuration

The projects section calls the public GitHub API, which is rate-limited to
60 requests/hour per IP. Thanks to ISR (1h revalidation) this is more than
enough, but you can optionally provide a token to raise the limit to
5,000 requests/hour:

| Variable       | Required | Description                                            |
| -------------- | -------- | ------------------------------------------------------ |
| `GITHUB_TOKEN` | No       | GitHub personal access token (read-only, public repos) |

On Azure App Service, add it under **Settings → Environment variables**.

## Deployment

The site is deployed to **Azure App Service** (`spguy`, Linux, Node 22-LTS) via
a GitHub Actions workflow ([`.github/workflows/main_spguy.yml`](.github/workflows/main_spguy.yml)):
every push to `main` builds the app and deploys it, and it is served on the
custom domain [spjc.fr](https://spjc.fr).

## Changelog

See [CHANGELOG.md](CHANGELOG.md).
