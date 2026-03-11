# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**onepercentbetter.poker** — "GTO Defends. We Exploit."

This repo (`opblandingpage`) is the **landing page / portfolio website only**. The backend analytical engine lives in a separate repository.

The site serves two purposes:
1. **Product branding** — marketing the onepercentbetter GTO exploit platform
2. **Personal portfolio** — job hunting for Senior Data Engineer / AI Engineering roles (Chris S. Yoon)

## Site Structure

**Landing page (`/`)** — Brand-first, project-focused
- Hero: "GTO Defends. We Exploit." headline, product description, name byline links to LinkedIn
- Projects: 4 featured projects with 3D flip-card funding mechanic (hover to reveal FOLD/Check/Call/10x Raise/All-In tiers)
- No personal experience on landing page

**About page (`/about`)** — Full resume
- Professional summary, full 7-company experience timeline with bullet points
- 6 technical skill categories (Data Engineering, Languages, Cloud, AI/Agentic, Observability, Frontend)
- Education & certifications
- LinkedIn CTA (no resume PDF download)

## Owner

**Chris S. Yoon** — Senior Data Engineer & AI Builder, Toronto ON
- LinkedIn: `linkedin.com/in/sukminyoon`
- GitHub: `github.com/sukminc`
- Email: `chris.yoon@outlook.com`
- Open to Work: Data Engineering / AI Engineering roles

## Featured Projects (in order)

1. **onepercentbetter** — GTO Deviation & Exploit Analytics Platform · `building` · featured card
2. **Blue Jays Moneyball ETL** — Production-Grade ELT & Self-Validating Pipeline · `live`
3. **ActionKeeper** — Full-Stack Staking Agreement Platform · `building`
4. **TwelveLabs API Validator** — Multimodal Search Validation Framework · `live`

Project data lives in `frontend/app/data/projects.ts`.

## Design System

- **Colors:** Deep Black `#000000`, Electric Blue `#007AFF`, Emerald green for "Open to Work" accents
- **Layout:** Bento grid — projects as independent interactive flip cards
- **Animation:** Framer Motion — 3D card flips (hover front → back shows funding tiers), scroll-in fade-ups
- **Funding CTAs:** Flip card backs link to `https://buymeacoffee.com/chris.yoon`
- **Typography:** Monospace font for labels/tags, bold tracking-tight for headlines

## Frontend Commands

```bash
cd frontend
npm install

npm run dev    # dev server at localhost:3000
npm run build  # production build
npm run lint   # ESLint
```

## Frontend Architecture

```
frontend/app/
├── page.tsx              # Landing page: Navbar + Hero + Projects + Footer
├── about/page.tsx        # Resume page: full experience, skills, education
├── components/
│   ├── Navbar.tsx        # Fixed nav — logo (1%) | Projects | About
│   ├── Hero.tsx          # Brand hero — "GTO Defends. We Exploit.", name → LinkedIn
│   ├── About.tsx         # Full experience timeline + skills + education (landing About section — currently unused on landing, lives at /about)
│   ├── Skills.tsx        # 6 skill category cards with scroll-in animations
│   ├── Projects.tsx      # Flip-card grid with filter pills and funding tiers
│   └── Footer.tsx        # Minimal footer with social links
├── data/
│   └── projects.ts       # Project definitions (slug, title, tagline, description, status, tags, url)
└── globals.css           # Tailwind v4 base styles
```

## Deployment

- **Frontend:** Vercel — connected to GitHub repo (`opblandingpage`), auto-deploys on push to `main`
- **Domain:** `onepercentbetter.poker`
- After any repo rename, reconnect Vercel via Settings → Git → Disconnect → reconnect

## Notes

- Resume PDF (`resume/` and `frontend/public/resume/`) is gitignored — never commit
- Backend poker analytics engine is in a **separate repo** — not part of this codebase
- Navbar logo updated to `1%` mark
