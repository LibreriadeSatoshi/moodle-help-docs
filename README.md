# Librería de Satoshi · Help Center

Public help docs for the Librería de Satoshi course platform (Moodle), served at **https://docs.libreriadesatoshi.com**. Static site, no login, independent of Moodle.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) and authored in [Markdoc](https://markdoc.dev) (`.mdoc`). Jira: ENG-453.

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview
```

Node 22+ (see `.nvmrc`).

## Content layout

```
src/content/docs/
├── index.mdoc                 # Spanish landing (default locale, served at /)
├── acceso/                    # Spanish topics → /acceso/<slug>/
├── cuenta/
└── en/                        # English mirror → /en/...
    ├── index.mdoc
    ├── acceso/                # same file names as Spanish → /en/acceso/<slug>/
    └── cuenta/
```

Rules:

- **Spanish is the source of truth** (default locale). Every topic must exist in both languages; keep the **same file name** under `en/` so Starlight can pair them. If an English page is missing, Starlight shows the Spanish one with a notice.
- URLs follow the file path in both locales (`/acceso/login-nostr/`, `/en/acceso/login-nostr/`). Do **not** override `slug` in English pages: Starlight pairs translations by path, and a custom slug breaks the pairing and produces duplicate fallback pages.
- Sidebar sections are auto-generated from the directories (`acceso`, `cuenta`). Order pages with `sidebar: { order: N }` in the frontmatter. New sections: add a directory and register it in `astro.config.mjs` with its English label.
- Use Starlight components as Markdoc tags: `{% aside type="tip" %}`, `{% steps %}`, `{% tabs %}`, `{% linkcard /%}`, `{% cardgrid %}`. See https://starlight.astro.build/guides/authoring-content/#markdoc

## Adding a topic

1. Create `src/content/docs/<seccion>/<nombre>.mdoc` in Spanish with `title`, `description` and `sidebar.order`.
2. Create `src/content/docs/en/<seccion>/<nombre>.mdoc` in English with the same fields (same file name, no `slug`).
3. Link between pages with absolute paths (`/acceso/login-nostr/`, `/en/acceso/login-nostr/`).
4. `npm run build` must pass with no warnings.

## Deploy

Netlify, from `netlify.toml` (`npm run build` → `dist/`). Point `docs.libreriadesatoshi.com` (Cloudflare DNS) at the Netlify site.

## TODO

- Brand colours and logo (`src/styles/custom.css`, `logo` in Starlight config).
- Sections `cursos/` (enrolment, certificates) once the flows are confirmed with the team.
- Contact channel for the "escríbenos / contact us" mentions (support email or form).
