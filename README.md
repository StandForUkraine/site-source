# Stand For Ukraine — site source

Source of [standforukraine.com](https://standforukraine.com/) — a curated list of vetted organizations that support Ukraine, with donation links for international donors.

The site is a static Next.js export. Shared components and utilities live in the [site-core](https://github.com/StandForUkraine/site-core) repo, included here as the `core` git submodule. This repo holds the content (organization cards, translations, public assets) and thin page wrappers.

## Getting started

```sh
git clone --recurse-submodules https://github.com/StandForUkraine/site-source.git
cd site-source
yarn install
yarn start   # dev server
```

If you cloned without `--recurse-submodules`, run `git submodule update --init` first.

## Scripts

- `yarn start` — run the dev server
- `yarn build` — static export into `out/` (runs `next build && next export`, then post-processing)
- `yarn deploy` — build and publish
- `yarn lint` — tslint + prettier
- `yarn fetch-t10n` — pull translations (needs Google credentials in `secrets.json`, not committed)

## Content structure

- `donations/<id>/` — one directory per organization:
  - `en.yml` — canonical card: `title`, `description`, `tags`, `link`, `donateLink`, `payMethods`, optional `edrpou`/`ein`, `hidden`
  - `<lang>.yml` — per-locale overrides (usually `title`/`description` only; missing fields fall back to English)
  - `logo.svg` or `logo.png` — the logo (lowercase filename; the build copies it to `/logos/<id>.*`)
- `pages/` — Next.js pages, thin wrappers around `core`
- `public/` — static assets

Translation conventions and review status live in `TRANSLATIONS_GUIDE.md` and `TRANSLATIONS_REVIEW.md`.
