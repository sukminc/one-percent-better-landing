# Release Flow

## Rule

- Preview first.
- Approve before prod.
- `main` = production.
- Larger copy or structure changes should be preview-reviewed before going live.

## Why

- `onepercentbetter.dev` is recruiter-facing and trust-sensitive.
- Small release discipline reduces avoidable public drift.

## Default flow

1. Make changes locally.
2. Review on preview first.
3. Approve the preview.
4. Merge only approved changes to `main`.
5. Treat anything on `main` as production-ready.
