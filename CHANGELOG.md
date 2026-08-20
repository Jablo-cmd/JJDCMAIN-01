# Changelog

All notable changes to the Jo Jackson Dance Company website are documented here.

## [1.2.0] — 2026-08-06

Gallery/image-grid technical readiness pass, ahead of the real photo shoot (see `docs/GALLERY-AUDIT-CHECKLIST.md`).

### Added
- `docs/GALLERY-AUDIT-CHECKLIST.md` — the client's full editorial/premium-layout brief preserved as a checklist to run once real photography exists, plus a technical audit of the current grid CSS completed now (verified live via headless-browser screenshots at desktop and mobile widths).

### Fixed
- `.gallery-grid` was missing `grid-auto-flow: dense`, so a `--tall`/`--wide` spanning tile that didn't fit the current row left its cell empty instead of being backfilled by a later tile — confirmed live (Home page's Featured Moments preview left a large gap after its last tile). Added `dense` sitewide.
- Added a per-image focal-point hook (`object-position: var(--focal-point, 50% 50%)`) to every `object-fit: cover` image rule (hero, page hero, gallery item, programme card, `.media`). No visual change today (still centre-crop by default), but any future real photo can now have its crop pulled toward a face or a dancer's leading edge via `style="--focal-point: 30% 15%"` on that `<img>`, without new CSS.

## [1.1.0] — 2026-08-06

Photography art direction unified into a single brief; every image on the site brought into compliance with it (see `docs/PHOTOGRAPHY-BRIEF.md`).

### Added
- `docs/PHOTOGRAPHY-BRIEF.md` — the canonical, single-shoot art direction for all future JJDC photography (brand personality, visual style, locations, shot list, composition rules), mapped to every image slot on the site with exact dimensions/aspect ratios. Supersedes the scattered per-row style notes in `docs/IMAGE-INVENTORY.md`.
- `assets/images/programs/competition-teams.svg` — clean, text-free placeholder art, restored to the Competition Teams programme card slot.

### Changed
- Stripped the baked-in "PLACEHOLDER" caption text and the low-opacity ghost "JJDC" wordmark from all 30 placeholder SVG illustrations sitewide (heroes, gallery, programme cards, About/Studio imagery). This text was redundant — every one of these images already carries the same information as real, accessible HTML (`alt` text and, on Gallery/Programme cards, a visible on-hover caption) — and it violated the new brief's "no text embedded in images" rule. The gradient/grain art style itself is unchanged.

### Removed
- `assets/images/programs/competition-teams.jpg` taken out of production (referenced from `index.html` and `programs.html`, both instances). The source file carries decorative butterfly-sticker overlays and a faint watermark-like text fragment consistent with a social-media repost — both directly prohibited by the new brief ("no stickers," "no watermarks," "no social media screenshots"). Reverted to placeholder art pending a clean, unedited source photo from the studio.

## [1.0.0] — 2026-08-04

Production-ready release, pending client-supplied content (see `docs/CLIENT-CHECKLIST.md`).

### Added
- `robots.txt` and `sitemap.xml` (previously missing — standard search-engine discovery files, using the same placeholder domain as every canonical tag; update once the real domain is confirmed).
- `CHANGELOG.md` (this file), `docs/AUDIT-REPORT.md`, `docs/CLIENT-CHECKLIST.md`, `docs/RELEASE-REPORT-v1.0.0.md`.

### Changed
- `README.md` expanded from a two-line stub into a proper project overview.
- Hero and CTA copy tightened across Home, About, Gallery, Programs, and Timetable (eyebrow labels, hero lede, final CTAs) for tone consistency.
- Removed literal placeholder caption text ("PLACEHOLDER" watermark + descriptive caption) that was rendering directly on the live Home hero image.

### Removed
- Duplicate footer legal-links block (`.site-footer__legal`) that repeated Privacy Policy/Terms links already present in every page's main footer navigation grid. The legal pages remain linked from the primary footer on every page.
- `assets/images/programs/adult-jazz.svg` and `competition-teams.svg` — unreferenced placeholder art, fully superseded by the real photos now live in their place.

### Archived
- `docs/PROJECT-HANDOVER.md` → `docs/archive/PROJECT-HANDOVER.md` (stated Gallery/Contact were incomplete; both have been finished and QA'd since it was written — see `docs/RELEASE-REPORT-v1.0.0.md` for current status).
- `master prompt` → `docs/archive/master-prompt.md` (original generic project brief; superseded by `docs/Master_Project_Context_Document.md` and direct client-confirmed content).

### Verified (this release)
- 0 console errors, 0 failed/4xx/5xx network requests across all 9 pages (live Playwright smoke test).
- 0 axe-core accessibility violations (WCAG 2.0/2.1/2.2 A+AA + best-practice) across all 9 pages at desktop (1440×900) and mobile (390×844) viewports.
- Lighthouse: 100/100/100/100 desktop, 97–98/100/100/100 mobile on spot-checked pages (Home, Gallery, Contact) against a compression-enabled server — consistent with the full 9-page sweep in `docs/QA-REPORT-LAUNCH-AUDIT.md`.
- 0 broken internal links, all JSON-LD blocks valid, canonical/robots/Open Graph tags consistent across all 9 pages.

## [0.9.0] — 2026-08-01
Final production polish and launch-readiness audit across all 9 pages (`3e99d6e`). Fixed: invisible legal-page header on load, POPIA page mobile overflow, Home header wordmark regression, missing Twitter Card tags on 3 legal pages. Full detail: `docs/QA-REPORT-LAUNCH-AUDIT.md`.

## [0.8.0] — 2026-08-01
Contact page and three legal pages (Privacy Policy, Terms & Conditions, POPIA Notice) built. Real client-supplied photos (logo, Jo's portrait, two gallery photos, two programme photos) added, replacing SVG placeholders where authorized. Gallery page's lightbox focus-trap bug found and fixed.

## [0.5.0] — 2026-07-30 – 2026-08-01
Home, About, Programs, and Timetable pages built, QA'd, and approved as the design system's reference implementations. Design system established: shared CSS (`main.css`), shared JS entry point (`main.js`), self-hosted fonts, full component library.

## [0.1.0] — 2026-07-30
Initial commit — `README.md` only.
