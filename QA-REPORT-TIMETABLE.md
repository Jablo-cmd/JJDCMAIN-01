# Timetable Page QA Audit — Jo Jackson Dance Company

**Scope:** `timetable.html` (new page). Shared-file changes: `assets/js/modules/print.js` (new, ~14 lines), `assets/js/main.js` (2-line wiring), `assets/js/modules/timetable.js` (bug fix, see Section 3), `assets/css/main.css` (`.cluster--between` utility + a `@media print` block).
**Date:** 2026-08-01
**Method:** Same tooling and rigor as prior audits — Lighthouse, axe-core, and scripted Playwright interaction testing, including a first-ever real test of the `timetable.js` component (built earlier but never previously used) and of the new print stylesheet.

---

## 1. Summary

Initial research turned up no class schedule anywhere in the project documentation, and no prior mention of "Stirling Primary." Rather than build the required desktop/mobile timetable sections around invented data, I flagged this directly and asked before proceeding. You supplied the real Term 3 schedule, and the page is built entirely from that data — every one of the 19 classes, exactly as given, with nothing invented.

This page also exercises two components for the first time: `timetable.js` (built during the Home page work, never previously used on a real page) and the new print stylesheet. Testing them for real — not assuming they worked because the code looked reasonable — caught a genuine bug in `timetable.js` before it could confuse a real visitor. See Section 3.

All quality targets were met.

---

## 2. Content Verification

The full Term 3 timetable you supplied was transcribed class-for-class:

| Day | Classes |
|---|---|
| Monday | Badge 1 (Stirling Primary), Pre Badge (4 & 5 year olds), Private Lesson, Jazz, Contemporary/Lyrical, Fortitude Comp Team |
| Tuesday | Grade R (Stirling Primary), Private Lessons, Hip Hop (Exam Work), Hip Hop (Open Class) |
| Wednesday | Badge 3, Silver Bar, Jnr Large Group *(new, limited space)* |
| Thursday | Private Lessons, Gold, Pre Bronze, Adult Jazz |
| Friday | Badge 2, Private Lessons |

Every time, class name and location is copied verbatim — nothing was rounded, renamed or reinterpreted. Two deliberate choices, both disclosed rather than silently applied:

- **AM/PM was inferred.** Your data gave bare times ("1:30 – 2"); every class on the schedule is contextually an afternoon/evening class (the latest runs to 6:30, and each day's blocks only make sequential sense as PM), so all times are rendered as PM. This is a formatting inference, not a data change.
- **Programme cross-links were only added where confident.** Jazz, Hip Hop, Contemporary, Lyrical, Adult Jazz, Private Lessons, Pre Badge and Badge Programme (Badge 1/2/3) all link to their Programs page section. **Silver Bar, Gold, Pre Bronze, Jnr Large Group and Grade R do not** — these names don't obviously map to the nine programmes already documented (they may be exam-grade tiers or a separate track), so rather than guess, they're shown by name with a location tag only, and flagged in `CONTENT-TO-CONFIRM.md` for you to clarify.
- **Stirling Primary has no street address in any source document.** It's named as the venue for Badge 1 and Grade R, with a visible "Exact venue address & directions TBC" tag rather than a guessed or reused address.
- **"Privates" blocks are described as by-appointment**, which is a fair reading of a 3-hour block (e.g. Tuesday 1:00–4:00 PM) rather than a single continuous group class — stated explicitly in the new "Private Lesson Information" section rather than left ambiguous.

## 3. Bug Found: `timetable.js` Toggle-All Label

**This is the first page to actually use `timetable.js`** — it was written during the Home page build (for exactly this purpose) but had no real page to run on until now, so this defect has been latent and untested since then.

`applyLayout()` force-expands every day on wide viewports by calling `setAllDisclosures(timetable, true)` directly — bypassing the "Expand all days" button entirely. The button's own label and `aria-pressed` state were only ever updated by its own click handler, so on desktop load it read **"Expand all days" while every day was, in fact, already expanded** — the opposite of true. A user's first click would silently no-op the actual layout (already expanded) while finally correcting the label.

**Fix:** extracted a `syncToggleAllLabel()` helper and call it from `applyLayout()` as well as the click handler, so the button's label is authoritative to the *real* state at all times — including across a resize that crosses the desktop/mobile breakpoint, which had the same staleness problem. Verified before and after with scripted checks: desktop now correctly loads reading "Collapse all days" / `aria-pressed="true"`; mobile correctly loads "Expand all days" / `aria-pressed="false"` with only today's (or Monday's, on weekends) day expanded; clicking correctly flips both the state and the label together.

## 4. Design System Consistency

- Header, mobile nav, footer, action bar, cards, tags, check-lists, accordion, `.map`/`.map__facade`, `.contact-list`: all reused from Home/About/Programs with zero changes.
- **First real use of `timetable.js` and its markup contract** (`.timetable`, `.day`, `.day__toggle`/`.day__panel` via the shared disclosure mechanism, `[data-today-marker]`, `[data-timetable-toggle-all]`) — see Section 3 for the bug this surfaced and fixed.
- **First real use of `.map`/`map.js`** (click-to-load Google Maps facade) — verified: clicking "Load Map" correctly injects the iframe only on request, keeping the third-party request opt-in as designed.
- Two small, justified CSS additions:
  - `.cluster--between` (`justify-content: space-between`) — mirrors the existing `.cluster--centre` modifier exactly; added after confirming no existing class covered this, to avoid an inline `style` attribute.
  - A `@media print` block (~50 lines, in `main.css`, deliberately outside the cascade layers so it reliably wins) — hides chrome (header, mobile nav, floating actions, hero photography), forces every accordion/day panel open regardless of its on-screen collapsed state, and neutralises `.section--dark` to black-on-white for ink efficiency. Verified with Playwright's print-media emulation: header/nav/print-button correctly hidden, and a day that was collapsed on-screen (Wednesday, on a mobile viewport) renders fully expanded in print. Site-wide, since it's shared, but written specifically to solve the "Printable timetable stylesheet" and "PDF download" requirements — the browser's native print-to-PDF is the actual export mechanism, which is why no separate PDF file or JS PDF library was introduced.
  - `assets/js/modules/print.js` (new, 14 lines) — a `window.print()` trigger, following the codebase's established one-module-per-concern pattern. Wired into `main.js` and preloaded consistently across Home/About/Programs/Timetable (all four `<head>`s updated for consistency, since `main.js` now imports it unconditionally on every page).
- **Deliberately not built:** a multi-colour "dance style" legend (an optional enhancement). The design system uses a single deliberate accent colour throughout (documented in `main.css`'s own token comments); introducing several new style-specific colours would fight that decision for a "nice to have." Location is distinguished instead via the existing `.tag` / `.tag--neutral` variants (Stirling Primary in accent, The Studio in neutral), which needed no new CSS.

## 5. Lighthouse Scores

| | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| **Desktop** | 100 | 100 | 100 | 100 |
| **Mobile, realistic (gzip/brotli) hosting** | 98 | 100 | 100 | 100 |

Meets both targets (Desktop 100, Mobile 98+) exactly. Core Web Vitals (mobile): LCP 2.3s, CLS 0, TBT 0ms.

## 6. Accessibility Status

- **axe-core (WCAG 2.0/2.1/2.2 A+AA + best-practice): 0 violations** at 1440×900 and 390×844.
- One `<h1>`, logical heading sequence, zero duplicate `id`s (checked carefully given five repeated `.day` structures plus per-class rows), all images have `alt` text, zero broken same-page anchors.
- Mobile nav focus trap re-verified on this page specifically.
- Keyboard-driven disclosure toggling verified for both the day accordion and the FAQ accordion (Enter key, not just click).
- "Today" highlighting verified to actually work — not just present in markup. Tested by simulating a Wednesday via a mocked `Date`: the "Today" tag correctly appears only on Wednesday's row, and correctly appears on none of the five days when the real system date is a Saturday (there are no weekend classes, so this is correct behaviour, not a bug).

## 7. SEO Status

- Title 42 characters, description 145 characters.
- Canonical, Open Graph, Twitter Card: page-specific.
- Three JSON-LD blocks, all validated: `LocalBusiness`, `BreadcrumbList` (Home → Timetable), and `FAQPage` (4 items, text mirrored exactly from the visible accordion).

## 8. Responsive & Cross-Device

- Zero horizontal overflow at all 9 tested breakpoints (320–1440px).
- Visually verified at 320px that the class-row layout (time / name / location+programme tags) reflows cleanly — tags wrap to their own line rather than truncating or overflowing, confirmed on the densest row (Contemporary/Lyrical, which carries three tags).

## 9. Code Quality

- Zero console errors, zero failed network requests.
- No duplicated CSS or JS — the two small additions were checked against the existing stylesheet/module set before being written, specifically to avoid duplicating something that already existed.
- No inline `style` attributes.

---

## 10. CONTENT-TO-CONFIRM.md Updates

The "Class timetable" entry has been updated from "not yet supplied" to reflect that it's now live, with three remaining specific gaps: Stirling Primary's exact address, the mapping of Silver Bar/Gold/Pre Bronze/Jnr Large Group/Grade R to the documented programme list, and confirmation of how often the schedule actually changes between terms.

## 11. Recommendation

**The Timetable page meets the established benchmark.** The one real defect found (`timetable.js`'s toggle-all label) is fixed and verified. This page is a good example of why testing every shared component on its first real use matters — `timetable.js` and the print stylesheet both looked correct by inspection and only revealed their actual behaviour under a scripted test.

Per your instruction, development stops here pending your approval before the Gallery page begins.
