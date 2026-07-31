# GoGenius User Manual

Web app for the **GoGenius** user guide: a step-by-step manual for the European Portuguese learning app (sign-in, menus, themed games, scores, privacy, and support). It was converted from the standalone `gogenius-manual.html` into a [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript site while keeping the same layout, typography, and behaviour.

## What you get in the browser

- **Sticky sidebar** with a table of contents (Welcome, quick start, and sections 1–11 plus a glossary).
- **Scroll-spy** highlighting of the current section as you read.
- **Mobile layout** with a “Contents” button, slide-in navigation, and backdrop dismiss.
- **Phone-framed screenshots** and the original callouts, tables, and skill/theme styling.

Static assets (logo, language-selection screenshot, and extracted JPEGs) are served from `public/`.

## Tech stack

| Layer | Choice |
| --- | --- |
| UI | React 19 |
| Build | Vite 6 |
| Language | TypeScript |
| Styling | Global CSS (`src/styles/manual.css`) — Quicksand & Nunito Sans via Google Fonts |

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (20+ recommended)

## Commands

```bash
npm install
npm run dev      # local dev server (default http://localhost:5173)
npm run build    # typecheck + production bundle → dist/
npm run preview  # serve the production build locally
```

Deploy the contents of `dist/` to any static host (Netlify, GitHub Pages, S3, etc.).

## Project layout

```
gogenius-manual/
├── index.html                 # App shell, font links
├── public/
│   ├── gogenius-logo.png
│   ├── gogenius-language-selection.png
│   └── images/                # Screenshot JPEGs (from the original HTML)
├── src/
│   ├── App.tsx                # Shell: menu button, sidebar, main content
│   ├── components/
│   │   ├── ManualContent.tsx  # Renders manual HTML
│   │   └── Sidebar.tsx        # Brand + TOC links
│   ├── content/
│   │   └── manualContent.html # Manual body (sections, copy, markup)
│   ├── data/
│   │   └── toc.ts             # TOC entries (must match section ids in content)
│   ├── hooks/
│   │   ├── useActiveSection.ts
│   │   └── useMobileNav.ts
│   └── styles/
│       └── manual.css
└── gogenius-manual.html       # Original single-file manual (reference only)
```

## Editing the manual

1. **Copy and structure** — Change `src/content/manualContent.html`. Section and hero blocks need stable `id` attributes (e.g. `id="signin"`) so in-page links and scroll-spy keep working.
2. **Sidebar labels** — Update `src/data/toc.ts` so each `id` matches a section in the HTML and the label reads correctly in the nav.
3. **Images** — Add or replace files under `public/` and point `<img src="...">` in the content at paths like `/gogenius-logo.png` or `/images/your-shot.jpg`.
4. **Look and feel** — Adjust design tokens and layout in `src/styles/manual.css`.

`ManualContent.tsx` loads the HTML as a raw string and renders it inside `.content-inner`; the sidebar and chrome are React components.

## Legacy file

`gogenius-manual.html` is the pre-React version (embedded base64 screenshots). The React app uses external images under `public/` instead. Keep the HTML file for diffing or archival; it is not used by `npm run dev` or `npm run build`.
