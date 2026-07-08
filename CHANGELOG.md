# Change log for portfolio

The format is based on and uses the types of changes according to [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2026-07-08

### Added

- Dynamic "Latest Projects" section: the site now fetches the most recently
  pushed public repositories from the GitHub API in a Server Component, with
  Incremental Static Regeneration (1h revalidate). Forks, archived repositories
  and the portfolio itself are excluded, and each entry shows its star count and
  a language icon. Falls back to a static list on API failure and supports an
  optional `GITHUB_TOKEN` environment variable for a higher rate limit.
- "View all" link in the Latest Projects card header pointing to the GitHub
  repositories tab.

### Changed

- Upgraded the stack to Next.js 16 (Turbopack build), React 19, Tailwind CSS 4
  and ESLint 9 (flat config), plus refreshed minor/patch dependencies.
- Migrated Tailwind CSS v3 to v4: the configuration is now folded into `@theme`
  in `app/globals.css` and PostCSS uses `@tailwindcss/postcss`.
- Migrated ESLint 8 to 9 flat config (`eslint.config.mjs`); the `lint` script
  now runs `eslint .` since Next.js 16 removed `next lint`.
- Rebalanced the layout: 5 projects are displayed, and the Microsoft experience
  is split into the Premier Field Engineer and Support Lead roles.

### Fixed

- Serve the favicon through the Next.js App Router `app/icon.svg` convention,
  removing the manual head tag and the `/favicon.svg` 404.
