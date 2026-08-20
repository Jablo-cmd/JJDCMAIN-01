# Jo Jackson Dance Company — Website

A nine-page marketing website for Jo Jackson Dance Company (JJDC), a dance studio in Nahoon, East London, South Africa: Home, About, Programs, Timetable, Gallery, Contact, and three legal pages (Privacy Policy, Terms & Conditions, POPIA Notice).

**Status:** v1.0.0 — production-ready pending client-supplied content. See `docs/CLIENT-CHECKLIST.md` for exactly what's outstanding and `docs/RELEASE-REPORT-v1.0.0.md` for the full engineering release report.

## Stack

Plain HTML5, one shared stylesheet (`assets/css/main.css`, native CSS cascade layers), vanilla JS as native ES modules (`assets/js/`). No framework, no build step, no npm dependencies in the shipped site.

## Running locally

No build step — serve the repository root with any static file server and open a page directly:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/index.html
```

## Project structure

```
index.html, about.html, programs.html, timetable.html,
gallery.html, contact.html,
privacy-policy.html, terms.html, popia-notice.html   — the 9 pages

assets/css/main.css        — the entire design system (one file, cascade layers)
assets/js/main.js          — single entry point; imports every feature module
assets/js/modules/         — one module per feature, each defensive (no-ops if its markup isn't on the page)
assets/fonts/, assets/images/, assets/icons/

docs/                       — QA reports, content-gap tracking, release documentation
docs/archive/               — superseded planning documents, kept for history
```

## Documentation

- `docs/CLIENT-CHECKLIST.md` — what the studio still needs to supply (plain-language)
- `docs/PHOTOGRAPHY-BRIEF.md` — the canonical art direction and shot list for the studio's real photo shoot, so every image ends up feeling like one cohesive story
- `docs/GALLERY-AUDIT-CHECKLIST.md` — the premium/editorial layout checklist to run once real photos exist, plus a technical readiness pass on the grid CSS done ahead of time
- `docs/RELEASE-REPORT-v1.0.0.md` — full engineering release report (QA, performance, accessibility, SEO, security)
- `docs/AUDIT-REPORT.md` — repository audit (Keep/Update/Archive/Delete findings)
- `docs/CONTENT-TO-CONFIRM.md` — the authoritative, continuously-updated list of every content placeholder on the site
- `docs/Master_Project_Context_Document.md` — the primary source of truth for all site content
- `docs/QA-REPORT-*.md` — per-page QA detail (Lighthouse, accessibility, responsive, code quality)
- `CHANGELOG.md` — release history

## Content discipline

No content on any page is invented. Anything not yet confirmed by the studio gets a visible placeholder (`tag--tbc` or a `.notice` block) and an entry in `docs/CONTENT-TO-CONFIRM.md` — never a guess presented as fact.
