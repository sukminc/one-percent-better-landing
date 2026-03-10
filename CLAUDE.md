# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**onepercentbetter.poker** is a GTO exploit quantification platform for poker. Users upload GGPoker hand history `.txt` files; the backend parses them, stores results, and surfaces positional exploit signals (bb/100 edge, VPIP, ROI, etc.).

## Commands

### Backend (FastAPI + SQLite)
```bash
cd backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

uvicorn app.main:app --reload        # dev server at localhost:8000, docs at /docs
PYTHONPATH=. pytest -v               # all tests
PYTHONPATH=. pytest tests/test_api.py::test_health -v  # single test
```

### Frontend (Next.js)
```bash
cd frontend
npm install

npm run dev    # dev server at localhost:3000
npm run build  # production build
npm run lint   # ESLint
```

## Architecture

Two independent services — frontend is currently a static marketing/landing page with no backend calls.

**Backend (`backend/app/`)**
- `main.py` — FastAPI app, all routes, CORS for `localhost:3000` and `onepercentbetter.poker`
- `models.py` — SQLAlchemy ORM: `Tournament` (1-to-many) → `Hand`
- `db.py` — SQLite engine, session factory, FastAPI dependency injection
- `parser.py` — Regex-based GGPoker hand history parser (filename metadata, hand splitting, position/action/result extraction)
- `analytics.py` — Pandas-based aggregation: positional stats, P&L curves, exploit signals

**Backend API endpoints:**
| Method | Path | Purpose |
|--------|------|---------|
| GET | `/health` | Health check |
| POST | `/ingest` | Upload GGPoker `.txt` file |
| GET | `/tournaments` | List tournaments |
| PATCH | `/tournaments/{id}` | Update result/finish |
| GET | `/analytics/signals` | Top-level exploit metrics (P&L, ROI, VPIP, best/worst positions) |
| GET | `/analytics/positional` | Win-rate stats by position |
| GET | `/analytics/pnl` | Cumulative P&L over time |

**Frontend (`frontend/app/`)**
- `page.tsx` — Home page (assembles all components)
- `components/` — Marketing sections: Navbar, Hero, About, Roadmap, FundingCTA, Footer
- All funding CTAs link to `https://buymeacoffee.com/chris.yoon`
- Styling: Tailwind CSS v4, dark theme (black bg, `#007AFF` blue accents)
- Path alias: `@/*` → project root

**Deployment:** Frontend on Vercel (`vercel.json`), backend on any ASGI host.
