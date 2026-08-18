# GoGenius User Manual

Web app for the **GoGenius** user guide: a step-by-step manual for the European Portuguese learning app (sign-in, menus, themed games, scores, privacy, and support).

It is a static [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript site. Manual copy lives in HTML locale files; the chrome (sidebar, language switcher, mobile menu) is React.

**Live site (GitHub Pages):** [https://jgranda1999.github.io/gogenius-manual/](https://jgranda1999.github.io/gogenius-manual/)

## Features

- **Nine languages** — Arabic, Russian, Ukrainian, Romanian, English, French, Spanish, Mandarin, and German. Arabic uses a right-to-left layout.
- **Language switcher** at the top of the page. Chrome strings (sidebar, buttons, document title) and the full manual body both change.
- **Sticky sidebar** with a table of contents (Welcome, 60-second start, sections 1–11, glossary).
- **Scroll-spy** — the current section is highlighted in the sidebar as you scroll. On a phone, the same highlight is waiting when you open **Contents**.
- **Mobile layout** — slide-in drawer, overlay dismiss, Escape to close, scroll lock, safe-area insets, and 44px tap targets.
- **Paired screenshots** with a caption under each image (side-by-side on desktop, stacked on mobile).
- **Phone-framed screenshots**, callouts, tables that scroll instead of overflowing, and the Graph / Lex / Fonê skill cards.

Static assets (logo and screenshots) are served from `public/`.

## Tech stack

| Layer | Choice |
| --- | --- |
| UI | React 19 |
| Build | Vite 6 |
| Language | TypeScript |
| Styling | Global CSS (`src/styles/manual.css`) — Quicksand & Nunito Sans via Google Fonts |
| Deploy | GitHub Actions → GitHub Pages (`gh-pages` branch and Actions Pages) |

The Vite `base` is `/gogenius-manual/` because the current host is a **project site** at `username.github.io/gogenius-manual/`. Image `src` paths in the locale HTML are rewritten at runtime with `import.meta.env.BASE_URL`. If you move the site to a custom domain at the root of a host, change `base` to `'/'` (see [Further development](#further-development)).

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (20+ recommended)

## Commands

```bash
npm install
npm run dev      # local dev server (http://localhost:5173/gogenius-manual/)
npm run build    # typecheck + production bundle → dist/
npm run preview  # serve the production build locally
```

Pushing to `main` runs `.github/workflows/deploy.yml` and publishes `dist/`.

## Project layout

```
gogenius-manual/
├── index.html                      # App shell, fonts, viewport, theme-color
├── vite.config.ts                  # base path for GitHub Pages
├── .github/workflows/deploy.yml    # build + GitHub Pages publish
├── public/
│   ├── gogenius-logo.png
│   ├── france_logo.png             # language-selection screenshot (French)
│   └── images/                     # App screenshots used in the manual
├── src/
│   ├── App.tsx                     # Menu button, sidebar, main content
│   ├── main.tsx
│   ├── components/
│   │   ├── LanguageSelector.tsx
│   │   ├── ManualContent.tsx       # Loads locale HTML and rewrites asset URLs
│   │   └── Sidebar.tsx             # Brand + TOC + active-section highlight
│   ├── content/
│   │   ├── locales/                # One HTML file per language (en, es, fr, …)
│   │   └── manualContent.html      # English snapshot / reference
│   ├── data/
│   │   └── toc.ts                  # Section ids (must match HTML ids)
│   ├── hooks/
│   │   ├── useActiveSection.ts     # Scroll-spy
│   │   └── useMobileNav.ts         # Drawer open/close, Escape, body lock
│   ├── i18n/
│   │   ├── languages.ts            # Language list, RTL, html lang
│   │   ├── ui.ts                   # Sidebar / chrome strings per language
│   │   └── LanguageContext.tsx
│   └── styles/
│       └── manual.css
```

## Editing the manual

Keep section `id`s stable (`welcome`, `quickstart`, `launch`, `signin`, …). Scroll-spy and TOC links depend on them.

1. **Body copy** — Edit `src/content/locales/<code>.html` for that language. Follow that language’s grammar and typography (for example, French non-breaking spaces before `: ; ! ?`).
2. **Sidebar labels** — Update the matching strings in `src/i18n/ui.ts`. Ids and numbers come from `src/data/toc.ts`.
3. **Images** — Put files in `public/` (or `public/images/`) and reference them as `/images/screenshot-01.jpg` in the HTML. `ManualContent.tsx` prefixes `BASE_URL`.
4. **Look and feel** — Tokens and layout live in `src/styles/manual.css`.
5. **A new language** — Add a code in `src/i18n/languages.ts`, a locale HTML file, chrome strings in `ui.ts`, and an import in `ManualContent.tsx`.

`manualContent.html` is an English reference copy. The live English text is `src/content/locales/en.html`.

---

## Further development

This section is for taking the manual off the current GitHub Pages URL, putting it on another host, attaching a real domain, and then changing the app without breaking deploy.

### 1. How the site is built (what you are hosting)

`npm run build` writes a **static site** into `dist/`:

- `dist/index.html`
- `dist/assets/*.js` and `*.css`
- copied files from `public/` (logo, screenshots)

There is **no Node server in production**. Any host that can serve files over HTTPS is enough. In-page navigation uses hash links (`#signin`), not React Router, so you do **not** need “rewrite all routes to `index.html`” unless you later add client-side paths.

Two settings decide whether images and scripts load:

| Setting | Where | What it does |
| --- | --- | --- |
| Vite `base` | `vite.config.ts` | Prefix for JS/CSS and for `import.meta.env.BASE_URL` |
| Asset paths in HTML | locale files use `/images/...` | Rewritten in `ManualContent.tsx` using `BASE_URL` |

**Rule:** `base` must match the URL path where the site actually lives.

| You want the site at | Set `base` to |
| --- | --- |
| `https://example.com/` | `'/'` |
| `https://docs.example.com/` | `'/'` |
| `https://example.com/manual/` | `'/manual/'` |
| `https://user.github.io/gogenius-manual/` (current) | `'/gogenius-manual/'` |

If `base` is wrong, the page may load with a blank screen or missing images.

### 2. Self-hosting somewhere else

Pick a host, set `base` for that URL, run `npm run build`, and publish the contents of `dist/`.

#### A. GitHub Pages with a custom domain (keep this repo)

You can stay on GitHub Pages and stop using `username.github.io/gogenius-manual/`.

1. In `vite.config.ts`, set `base: '/'` if the domain will serve the site at the root (usual case).
2. In the GitHub repo: **Settings → Pages**.
3. Under **Custom domain**, enter `manual.example.com` (or your apex domain).
4. GitHub will ask you to add a DNS record at your registrar (see [Adding a domain](#3-adding-a-domain)).
5. Turn on **Enforce HTTPS** once the certificate is ready (can take up to an hour).
6. Commit the `base` change and push `main` so Actions rebuilds.

The workflow in `.github/workflows/deploy.yml` already publishes `dist/`. You should not need to change it unless you leave GitHub Pages.

#### B. Netlify, Cloudflare Pages, or Vercel

These are a good fit for a static Vite app.

1. Set `base: '/'` in `vite.config.ts` if the site is the root of the domain.
2. Connect the GitHub repo (`jgranda1999/gogenius-manual`).
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Node version: 20
6. Attach the domain in that product’s dashboard.

You can keep GitHub Actions as a backup, or disable Pages and let the new host build on every push to `main`.

#### C. A VPS / university server (nginx or Apache)

Build locally or in CI, then copy `dist/` to the server.

```bash
npm ci
npm run build
# copy dist/ to the web root, e.g. /var/www/gogenius-manual/
```

Example **nginx** server block for a dedicated domain at the site root (`base: '/'`):

```nginx
server {
  listen 443 ssl http2;
  server_name manual.example.com;

  root /var/www/gogenius-manual;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }

  location /assets/ {
    add_header Cache-Control "public, max-age=31536000, immutable";
  }
}
```

If you keep the site in a subdirectory (`https://example.com/manual/`):

- Set `base: '/manual/'` in `vite.config.ts`
- Set nginx `root` so that `/manual/` maps to the folder that contains `index.html`, **or** use an `alias`

Example **Apache** (`DocumentRoot` pointing at `dist/`):

```apache
<Directory /var/www/gogenius-manual>
  Options -Indexes +FollowSymLinks
  AllowOverride All
  Require all granted
</Directory>
```

Use Let’s Encrypt (`certbot`) for HTTPS. Do not ship the site on plain HTTP.

#### D. Object storage (S3, R2, GCS) plus a CDN

1. Build with the correct `base`.
2. Upload `dist/` to the bucket (public-read or behind the CDN).
3. Set the bucket website index document to `index.html`.
4. Point CloudFront / Cloudflare to the bucket and attach the domain + certificate.

### 3. Adding a domain

You need three pieces that agree: **DNS**, **the host**, and **Vite `base`**.

#### DNS at the registrar

For a **subdomain** (`manual.example.com` or `docs.example.com`) — simplest:

| Type | Name | Value |
| --- | --- | --- |
| CNAME | `manual` | `jgranda1999.github.io` (GitHub Pages) **or** the hostname your new host gives you |

For an **apex** domain (`example.com`):

- GitHub Pages: `A` records to GitHub’s published IPs (listed in [GitHub Pages custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)), plus `www` as a CNAME if you use it.
- Netlify / Cloudflare / Vercel: use the `A` / `ALIAS` / `CNAME` values they show in the domain UI. Do not mix GitHub’s IPs with another host.

Wait for DNS to propagate (minutes to a few hours). Check with:

```bash
dig manual.example.com
```

#### HTTPS

- **GitHub Pages / Netlify / Cloudflare / Vercel** issue a certificate after DNS is correct. Enable “HTTPS only”.
- **Your own server:** Certbot + nginx/Apache, or terminate TLS at a reverse proxy.

#### After the domain works

1. Confirm `https://manual.example.com/` (or your URL) loads CSS, the logo, and screenshots.
2. If assets 404, `base` in `vite.config.ts` does not match the path. Fix it, rebuild, redeploy.
3. Update any links to the old `github.io` URL (app stores, course pages, emails).
4. Optional: keep `https://jgranda1999.github.io/gogenius-manual/` as a redirect, or turn Pages off so there is a single canonical URL.

### 4. Making modifications to the web app

Work on a branch, run the app locally, then merge to `main` (that is what deploys today).

```bash
git checkout -b your-change
npm install
npm run dev
```

Open `http://localhost:5173/gogenius-manual/` (the `/gogenius-manual/` prefix is the current `base`). After you switch `base` to `'/'`, local and production URLs will both be at the root of whatever host you use.

#### Typical changes

| Goal | Files to touch | Notes |
| --- | --- | --- |
| Fix or rewrite copy | `src/content/locales/<lang>.html` | Keep the same `id`s. Match that language’s punctuation and grammar. |
| Sidebar / button labels | `src/i18n/ui.ts` | One string list per language; order must match `toc.ts`. |
| Add or rename a section | Locale HTML + `src/data/toc.ts` + every `ui.ts` TOC list | Scroll-spy reads `SECTION_IDS` from `toc.ts`. |
| Replace a screenshot | `public/images/` | Keep the filename, or update every locale that references it. |
| Visual design | `src/styles/manual.css` | Mobile rules are under `@media (max-width: 860px)`. |
| Add a language | `languages.ts`, `ui.ts`, `locales/<code>.html`, `ManualContent.tsx` | Set `dir: 'rtl'` only when needed. |
| Change default language | `DEFAULT_LANGUAGE` in `languages.ts` | Currently `'en'`. |
| Host at a new path or domain | `vite.config.ts` `base` | Rebuild after changing it. |

#### Before you ship a change

```bash
npm run build
```

That typechecks and produces `dist/`. Fix TypeScript errors before pushing. Spot-check at least one LTR language and **Arabic** (RTL) on a narrow viewport: sidebar drawer, tables, fact bar (three stats, no empty fourth cell), and stacked screenshot captions.

#### Deploy after you move hosts

- **Still GitHub Pages:** push to `main`; Actions publishes `dist/`.
- **Netlify / Cloudflare / Vercel:** a push to `main` builds there. You can delete or disable `.github/workflows/deploy.yml` so Pages does not fight the new host.
- **VPS:** either `scp`/`rsync` `dist/` after `npm run build`, or add a CI job that SSH-deploys `dist/` on each `main` push.

#### Things that are easy to break

- **`base` vs domain path** — first thing to check if images vanish after a move.
- **Absolute `src="/images/..."`** — must stay root-relative in locale HTML so `withBaseUrl()` can prefix them. Do not hard-code `https://jgranda1999.github.io/...` in content.
- **Section ids** — renaming `id="signin"` without updating `toc.ts` and `ui.ts` leaves a dead TOC link.
- **Locale files drifting apart** — when you add a screenshot or heading in English, add it in the other eight files too, with native wording.

Once the domain and host are stable, day-to-day work is: edit locale HTML or CSS, `npm run dev` to preview, `npm run build` to verify, push `main` to publish.

## Contact

For questions about this project, reach out to the original developer, **Jonathan Granda Acaro**:

- Email: [jgrandaa@nd.edu](mailto:jgrandaa@nd.edu)
- Phone: +1 810-459-1101

