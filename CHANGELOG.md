# Change log for portfolio

The format is based on and uses the types of changes according to [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.1] - 2026-07-09

### Added

- Bilingual (FR/EN) legal notice page at `/mentions-legales`, linked from a new
  footer on the home page and listed in the sitemap.
- Apple touch icon (`app/apple-icon.png`) so iOS devices get a proper home-screen
  icon instead of a 404.

### Changed

- Dependabot now ignores major version updates (handled manually) and only
  proposes grouped minor/patch updates and security fixes, to reduce noise.

### Fixed

- Theme contrast bug: `--primary-foreground` and `--secondary-foreground` were
  identical to their background tokens, making text on `default`/`secondary`
  buttons invisible. They now use contrasting values.

## [0.5.0] - 2026-07-08

### Added

- Certifications section: a card grid showcasing Microsoft certifications,
  with a link to the public Microsoft Learn transcript.
- Contact call-to-action section with a "Connect on LinkedIn" button
  (no email address exposed).
- Dependabot configuration for automated npm and GitHub Actions updates.
- Privacy-friendly web analytics via Azure Application Insights: a client
  component loads the SDK only when `APPLICATIONINSIGHTS_CONNECTION_STRING`
  is configured, using cookieless tracking. The connection string is read at
  runtime through a dynamic route handler.

## [0.4.0] - 2026-07-08

### Added

- SEO and social sharing metadata: `metadataBase`, canonical URL, Open Graph and
  Twitter card tags, and a dynamically generated Open Graph image
  (`app/opengraph-image.tsx`).
- JSON-LD `Person` structured data for rich search results.
- `app/sitemap.ts` and `app/robots.ts`.
- `theme-color` meta for the mobile browser UI.

### Changed

- Respect the `prefers-reduced-motion` user setting: the animated mesh background
  and the hero typewriter are disabled for users who opt out of motion.

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
- Community health files: `LICENSE` (MIT) and `CODE_OF_CONDUCT.md`
  (Contributor Covenant 2.1).

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
