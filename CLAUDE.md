# CLAUDE.md — onepercentbetter (Landing Page Hub)

## What this is
Brand hub + portfolio for **onepercentbetter.poker**
Tagline: "Marginal gains. Exponential results."
Repo: `opblandingpage` (GitHub) → `one-percent-better` (local)

**Rule: If a project is not listed on onepercentbetter.poker, it is not a brand asset.**

## Owner
Chris S. Yoon · Senior Data Engineer & AI Builder · Toronto ON
`linkedin.com/in/sukminyoon` · `github.com/sukminc` · Open to Work

## Pages
- `/` — Brand hero + project cards (commit feed, progress bar, tech stack icons)
- `/about` — Full resume (experience, skills, education). LinkedIn CTA only, no PDF download.

## Projects (`frontend/app/data/projects.ts`)
1. **onepercentbetter** — Performance Analytics & Edge Intelligence · `building` · featured
2. **Blue Jays Moneyball ETL** — Self-Validating ELT Pipeline · `live`
3. **ActionKeeper** — Agreement & Negotiation Platform · `building`
4. **1% Better Focus** — Minimalist Deep-Work Timer · `building`
5. **TwelveLabs API Validator** — Multimodal Search Validation · `live`

Adding a project to the site = it becomes part of the brand. Removing = it's off the record.

## Stack
Next.js · Tailwind CSS v4 · TypeScript
Deploy: Vercel → `onepercentbetter.poker`

## Commands
```bash
cd frontend && npm run dev    # localhost:3000
npx next build                # build check
git push origin main          # always push directly to main (no PRs — squash merge causes conflicts)
```

---

## Core Value (Brand DNA)

**Surface story:** Data-driven performance improvement. Marginal gains compounded.

**Encoded truth:** 피쉬 잡는 공략법 — systematic edge exploitation against weak players.
- Did I exploit fish correctly this session?
- How do I quantify my edge against weak players?
- How do I improve that edge over time?

This is the north star for the analytics platform (`onepercentbetter` project).
The public never sees poker. The product tells the whole story without saying the word.
Like Renaissance Technologies — the surface story and the real story differ.

**Revenue plan:** Easy consumer apps (focus tools, simple utilities) alongside the core analytics platform. Ship fast, capture income, fund the deep work.

---

## Brand Identity

### Public taglines
- Hero: "Marginal gains. Exponential results."
- Sub-tagline: "FIND THE EDGE"
- Description: "Every system has inefficiencies. Every market has edges. We build data tools that find them — and compound the advantage 1% at a time."

### Voice
- Precise, confident, minimal
- No fluff — every word earns its place
- Technical credibility without jargon overload
- Never mention poker explicitly in public-facing copy

### Colors
| Token       | Hex       | Use                          |
|-------------|-----------|------------------------------|
| `bg`        | `#0D0D11` | Site background              |
| `purple`    | `#5E5CE6` | Primary accent               |
| `violet`    | `#8B5CF6` | Logo ring, secondary accents |
| `text-mute` | `#8A8B97` | Body / secondary text        |
| `border`    | `#232329` | Dividers, card borders       |

### Logo
- `/public/logo.svg` — circle badge "1%"
- `/public/logo-lockup.svg` — badge + wordmark
- `logo-48.png` (navbar), `logo-256.png` (general), `logo-512.png` (OG)

---

## Notes
- Resume PDF is gitignored — never commit
- Worktree branches: `git push origin HEAD:main` from worktree
- Vercel auto-deploys from `main`
