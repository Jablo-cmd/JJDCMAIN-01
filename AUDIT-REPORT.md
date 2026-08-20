# Repository Audit — Jo Jackson Dance Company Website

**Date:** 2026-08-04
**Scope:** Full repository — all 9 pages, shared assets, JS/CSS, documentation, git metadata.
**Method:** Direct inspection (`grep`/`find` sweeps across every source file, image-reference cross-check, git history diff), plus a fresh, live re-verification run this session — a real Playwright smoke test (console errors / failed requests) and a real axe-core scan across all 9 pages × 2 viewports, plus fresh Lighthouse runs on 3 representative pages. Findings below are evidence-based; none are estimated.

Every item is classified **Keep / Update / Archive / Delete**. Nothing was deleted without a specific, checkable reason (zero references found in code). Nothing client-content-related was touched.

---

## 1. Code

| Item | Finding | Classification |
|---|---|---|
| `assets/js/main.js` + all 10 modules in `assets/js/modules/` | Every module is imported and called by `main.js`; none are orphaned. | **Keep** |
| `console.error` at `assets/js/main.js:45` | Inside the top-level `try/catch` init boundary — logs only if a feature module throws. This is intentional production error-surfacing, not debug cruft. | **Keep** |
| TODO / FIXME / XXX / HACK comments | Zero found anywhere in `.html`, `.js`, `.css`. | N/A — clean |
| Inline `style="..."` attributes | Zero, except the one documented, legitimate exception (`style="--i:N"` per-instance animation index on mobile-nav items). Matches the codebase's own stated convention. | **Keep** |
| `.testimonial` CSS component (7 rules in `main.css`) | Built, styled, zero live usage in any HTML — matches documented intent (Home shows a "coming soon" notice instead of fabricating quotes). This is a prepared placeholder for real content, not dead code. | **Keep** — activate once testimonials are supplied |
| `.site-footer__legal` CSS rule + markup (removed in the most recent commit, `a38c13b`) | Was a *duplicate* second copy of the Privacy/Terms links sitting in the footer's copyright row, redundant with the same links already present in the footer's main nav grid on every page. Removing it was correct de-duplication, not a regression — verified the legal pages are still linked from every page's primary footer column. | Already resolved — **no action needed** |

## 2. Images

| Item | Finding | Classification |
|---|---|---|
| `assets/images/programs/adult-jazz.svg` | Zero references anywhere in `.html`/`.css`/`.js`. Fully superseded by the real photo `adult-jazz.jpg`, which is what's actually live on-site. | **Deleted this session** (see below) |
| `assets/images/programs/competition-teams.svg` | Same situation — zero references, superseded by `competition-teams.jpg`. | **Deleted this session** |
| `assets/images/hero-404.svg` | Zero references. Unlike the two above, this isn't superseded — it's reserved for a 404 page that was never in the original 6-page scope and hasn't been built. Already correctly documented in `docs/IMAGE-INVENTORY.md` as "reserved, unused." | **Keep** — costs nothing (tiny SVG), ready for a future 404 page |
| All 12 `gallery-NN.svg` placeholders + all other placeholder SVGs | Each carries a baked-in "PLACEHOLDER" watermark by design, so nobody mistakes it for real photography — confirmed this is deliberate, consistent across every placeholder image bar one exception below. | **Keep** until real photography replaces them |
| `hero-home.svg` | The most recent commit removed a caption text block ("PLACEHOLDER" label + "Dancers mid-movement..." caption) that was baked directly into the SVG as visible on-page text — this was literal placeholder copy rendering on the live Home hero and has now been removed. Correct fix, already done. One minor side-effect: `hero-home.svg` is now the *only* hero/placeholder image without the small "PLACEHOLDER" watermark that every sibling placeholder still carries — a cosmetic inconsistency, not a functional issue. | **Update (minor, cosmetic)** — optionally re-add just the watermark (not the caption) for consistency with every other placeholder image |
| Real photos flagged for client verification (`jo-portrait.jpg`, `hiphop-dancer.jpg`, `jo-jackson.webp`, `adult-jazz.jpg`, `competition-teams.jpg`) | Already thoroughly flagged in `docs/CONTENT-TO-CONFIRM.md` with specific authenticity/rights questions for each. Not re-litigated here — see the Client Checklist. | **Keep, pending client confirmation** |
| Image file sizes | Largest file is `og-default.png` at 140KB; nothing bloated or unoptimized for placeholder/small real-photo content. | **Keep** |

## 3. Documentation

| Item | Finding | Classification |
|---|---|---|
| `docs/PROJECT-HANDOVER.md` | **Confirmed stale**, exactly as flagged: it states Gallery is unbuilt and Contact hasn't started, while both pages exist, are fully built, and are covered by three later, more current documents (`QA-REPORT-GALLERY.md`, `QA-REPORT-CONTACT.md`, `QA-REPORT-LAUNCH-AUDIT.md`) confirming completion. Its content is still valuable as a historical record of *why* certain decisions were made (e.g. the lightbox focus-trap bug, the `visibility:hidden` lesson), so it wasn't deleted. | **Archived this session** → `docs/archive/PROJECT-HANDOVER.md`, with a superseded-notice pointing to `docs/RELEASE-REPORT-v1.0.0.md` |
| `master prompt` (repo root, no file extension) | The original generic project brief. Two of its instructions were explicitly overridden later in the project (inventing "Ballet" as a programme, sourcing images by downloading them from the internet) — the more authoritative `docs/Master_Project_Context_Document.md` and direct client conversation supersede it throughout. Its unconventional filename (no extension, sits in repo root next to actual site pages) risks a future maintainer mistaking it for something still authoritative. | **Archived this session** → `docs/archive/master-prompt.md` |
| `docs/CONTENT-TO-CONFIRM.md` | Actively maintained, current, detailed, cross-referenced. No staleness found. | **Keep** |
| `docs/QA-REPORT-{HOME,ABOUT,PROGRAMS,TIMETABLE,GALLERY,CONTACT,LEGAL-PAGES,LAUNCH-AUDIT}.md` | All internally consistent with each other and with the current repository state; the launch audit (the most recent, most comprehensive one) doesn't contradict any earlier one. | **Keep** |
| `docs/IMAGE-INVENTORY.md`, `docs/Master_Project_Context_Document.md` | Both actively referenced by other current docs, no staleness found. | **Keep** |
| `README.md` | Two lines ("# JJDA / Jo jackson dance academy"). Inadequate for a professional handover — no setup instructions, no project description, no link to the more detailed docs. | **Updated this session** |
| `CHANGELOG.md`, `DEPLOYMENT.md`, `MAINTENANCE.md`, `LICENSE` | None exist anywhere in the repository. | **CHANGELOG.md created this session.** `DEPLOYMENT.md`/`MAINTENANCE.md`/`LICENSE` — see Release Report recommendations; not fabricated here since their content depends on decisions only the client/studio can make (chosen host, licensing terms). |

## 4. Production/SEO files

| Item | Finding | Classification |
|---|---|---|
| `robots.txt` | **Does not exist anywhere in the repository.** No page references one either. | **Missing — genuine engineering gap, not a client-content gap.** See Release Report. |
| `sitemap.xml` | **Does not exist.** | **Missing — same as above.** |
| `manifest.json` (web app manifest) | **Does not exist**, and no page's `<head>` references one. Not fatal — this is a marketing site, not an installable PWA — but its absence means no theme-consistent "Add to Home Screen" icon/name if a visitor does that manually. | **Optional — low priority** |
| Favicon delivery | No dedicated `favicon.ico`. `<link rel="icon">` and `<link rel="apple-touch-icon">` both point at `assets/images/apple-touch-icon.png` (real JJDC logo) — functionally works in all modern browsers, but a root-level `favicon.ico` is still the universal fallback some very old crawlers/browsers expect. | **Minor — optional** |
| Hosting config (`netlify.toml` / `vercel.json` / `_headers` / `.htaccess`) | None exist. Expected at this stage — no host has been chosen yet (confirmed in `CONTENT-TO-CONFIRM.md`). | **Deferred to host selection**, not a defect |

## 5. Security

| Item | Finding | Classification |
|---|---|---|
| Secrets / API keys / credentials scan (repo-wide) | Zero real secrets found. All "token"/"key" matches were CSS "design token" terminology, not credentials. | **Clean** |
| Formspree endpoint | Still the documented `FORMSPREE_ID` placeholder in `contact.html`; `form.js` already detects this and shows a graceful phone/WhatsApp fallback rather than silently failing. | **Client-content gap, already handled gracefully in code** |
| External links | All external links (`aurisnexus.co.za`, `wa.me`) carry correct `target="_blank" rel="noopener"` (two carry `noreferrer` too). No `rel`-attribute gaps found. | **Clean** |
| Dependency vulnerabilities | No `package.json` ships with the site — it's dependency-free static HTML/CSS/vanilla-JS by design. Nothing to scan. | **N/A by design** |

## 6. Git hygiene

| Item | Finding |
|---|---|
| Working tree | Clean at session start; only untracked files were harness-internal (`.claude/scheduled_tasks.lock`, `.claude/settings.local.json`) — not site-related. |
| `.gitignore` | Does not exist. Minor — not currently causing any problem since no build artifacts or local secrets are being generated, but worth adding before any tooling (npm, editor config) gets introduced later. |

---

## Actions taken this session (all reversible via git, nothing committed)

1. Deleted `assets/images/programs/adult-jazz.svg` and `competition-teams.svg` — confirmed zero references, fully superseded by real photos.
2. Moved `docs/PROJECT-HANDOVER.md` → `docs/archive/PROJECT-HANDOVER.md` (confirmed stale, kept for its historical/lessons-learned value).
3. Moved `master prompt` → `docs/archive/master-prompt.md` (superseded generic brief, some instructions in it were explicitly overridden later in the project).
4. Created `CHANGELOG.md`, `docs/CLIENT-CHECKLIST.md`, `docs/RELEASE-REPORT-v1.0.0.md`.
5. Updated `README.md`.

**Nothing was committed.** Run `git status` / `git diff` to review before staging.
