# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run lint     # eslint
```

No test suite is configured.

## Stack

- **Next.js 16.2.4** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** — configured via `@import "tailwindcss"` + `@theme inline` in `app/globals.css`, no `tailwind.config.*` file
- No external UI library

## Architecture

Page structure: `app/page.tsx` is the single route. It renders a fixed `<header>` with plain `<a>` anchor tags (not `next/link` — hash nav links use native anchors to avoid router re-render cursor flicker), followed by view components.

**Layers:**
- `views/` — full-page sections (`<section id={SECTIONS.x}>`), each owns its layout. One view per section.
- `components/` — reusable primitives (`Button`, `Terminal`, `Stars`, `Container`, `Label`).
- `lib/consts.ts` — `SECTIONS` object is the single source of truth for section IDs used in both nav links and section `id` attributes.
- `lib/utils.ts` — `cn()` helper (clsx wrapper).

**Styling conventions:**
- Design tokens (colors, shadows, fonts) defined as CSS variables in `globals.css` `:root` and exposed to Tailwind via `@theme inline`.
- Custom animations (`animate-pop`, `animate-slide`, `animate-star-float`, `animate-cursor-blink`) and delay utilities (`animate-delay-100` etc.) defined in `globals.css`.
- Shadow tokens: `shadow-xs/sm/(default)/lg` map to flat ink-colored box-shadows.
- Font variables: `--font-nunito` (primary), `--font-luckiest-guy` (secondary/display), `--font-courier-prime` (code). Applied via `font-primary`, `font-secondary`, `font-code` Tailwind classes.

**Terminal component** (`components/terminal.tsx`) is a `"use client"` animated fake terminal. It sequences lines from the `LINES` array, typing each command character-by-character with timers. Adding content means extending `LINES`.
