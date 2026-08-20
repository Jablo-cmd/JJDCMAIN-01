# Gallery Page QA Audit — Jo Jackson Dance Company

**Scope:** `gallery.html` (new page). Shared-file changes: `assets/css/main.css` (`.lightbox`/`.lightbox.is-open` bug fix, see Section 2), `assets/js/modules/filter.js` (small, additive empty-state feature, see Section 4). No other shared files changed.
**Date:** 2026-08-01
**Method:** Same tooling and rigor as the Home/About/Programs/Timetable audits — Lighthouse, axe-core, and scripted Playwright interaction testing (keyboard, mouse and touch) against the real rendered page. A dedicated Playwright test suite was written specifically for the lightbox, per your instruction that its fix be verified before any Gallery markup was written.

---

## 1. Summary

Before writing any Gallery HTML, the suspected `lightbox.js`/`.lightbox` focus bug flagged at the end of the previous session was reproduced, fixed and verified — see Section 2. Only once that test suite passed did Gallery development begin.

The Gallery page is built entirely from the existing design system: `.gallery-grid`/`.gallery-item` (already used non-interactively on Home's preview), `.lightbox`/`lightbox.js` (now fixed and, for the first time, actually wired up to real markup), `.filter-bar`/`filter.js` (previously built, never used until now), and `.card`/`.card__icon` (Studio Life section). One small, additive feature was written into `filter.js` (Section 4) to give a thin category a graceful empty state rather than a blank grid. No other new CSS or JS was needed.

All quality targets were met: **Desktop Lighthouse 100/100/100/100, Mobile 98/100/100/100** (realistic hosting), **zero axe-core violations**, **zero console errors**, **zero horizontal overflow** across all 9 tested breakpoints, and every interactive component (lightbox, filters, mobile nav) verified with real scripted keyboard/mouse/touch input — not just markup inspection.

---

## 2. The Lightbox Bug — Fixed and Verified First

**This was completed before any Gallery HTML existed, per your explicit instruction.**

### Root cause

Identical in shape to the mobile-nav bug fixed earlier in the project (`docs/QA-REPORT-HOME.md`, Section 2.4). `.lightbox` used a `visibility: hidden → visible` CSS transition to gate the panel alongside `opacity`. `lightbox.js`'s `open()` function calls `$("[data-lightbox-close]", lightbox)?.focus()` **synchronously**, before the `requestAnimationFrame` callback that adds `.is-open` has painted. At that exact moment `.lightbox` still carried `visibility: hidden` from its base state, and a `visibility: hidden` ancestor makes all descendants unfocusable — so the `.focus()` call silently no-opped, exactly as suspected.

### Fix

Removed `visibility` (and its half of the `transition` shorthand) from both `.lightbox` and `.lightbox.is-open` in `assets/css/main.css`. This is redundant with the `hidden` attribute already used for true hiding while closed — `[hidden] { display: none !important; }` (reset layer) already fully removes the element from layout, focus and the accessibility tree while closed, so `visibility` was only ever doing anything during the single frame between `hidden` clearing and `.is-open` landing, which is precisely the frame that was breaking focus. Opacity alone gives the same fade with none of that cost. A code comment matching the existing `.mobile-nav` comment was added directly above the rule so a future developer doesn't reintroduce the same pattern.

### Verification

A dedicated Playwright suite (`lightbox.test.mjs`, 14 assertions) was written covering exactly the checklist you specified: opening, keyboard navigation (arrow keys, Home/End not separately needed given arrow coverage), focus trapping (Shift+Tab from the first control wraps to the last), Escape closing, focus restoration to the triggering thumbnail, desktop behaviour and mobile (touch) behaviour including swipe.

**To confirm the test actually catches the bug** (not just passes coincidentally), the fix was temporarily reverted via `git stash` and the suite re-run: **3 of 14 assertions failed** (focus-onto-close-button on both desktop and mobile, and the focus-trap wrap check) — exactly the two symptoms the bug predicts. The fix was then restored and the suite re-run clean. Full output:

```
--- Desktop lightbox tests ---
PASS: [desktop] lightbox opens (is-open class present)
PASS: [desktop] lightbox is not hidden once open
PASS: [desktop] focus moved onto the close button on open
PASS: [desktop] focus trap wraps Shift+Tab from first control to last control inside the lightbox
PASS: [desktop] ArrowRight advances the image (counter: "1 of 18" -> "2 of 18")
PASS: [desktop] ArrowLeft goes back (counter: "1 of 18" should match "1 of 18")
PASS: [desktop] Escape closes the lightbox
PASS: [desktop] lightbox is hidden again after close
PASS: [desktop] focus restored to the triggering thumbnail after close
--- Mobile lightbox tests ---
PASS: [mobile] tapping a tile opens the lightbox
PASS: [mobile] focus moved onto the close button on open (touch open path)
PASS: [mobile] swipe left advances the image (counter: "3 of 18" -> "4 of 18")
PASS: [mobile] tapping close closes the lightbox
PASS: [mobile] focus restored to the triggering thumbnail after close

ALL TESTS PASSED
```

No Gallery HTML was written until this suite passed clean.

---

## 3. Content Verification

| Element | Approach |
|---|---|
| Hero headline/copy | Original copy written to the brief's tone (warmth, community, story); no factual claims beyond what's documented |
| Featured Moments (6 images) | Reuses the exact same 6 images/captions Home's approved gallery preview already uses — a deliberate, low-risk choice (a curated "best representative" set the studio has effectively already signed off on via the Home page approval), not an arbitrary new selection |
| Filterable Gallery (12 images) | All 12 existing gallery placeholder SVGs and their established `aria-label`/caption strings, reused verbatim per the previous session's handover instructions |
| Filter categories | The exact 9 categories you specified (All, Studio Classes, Hip Hop, Jazz, Contemporary, Competitions, Performances, Workshops, Team Moments) |
| Category-to-image tagging | Only tagged where a placeholder's existing caption honestly supports it (e.g. "Technique at the barre" → Studio Classes). **Hip Hop, Jazz and Contemporary carry no images** — none of the 12 captions specify a dance style, so tagging a generic placeholder as "Hip Hop" would assert something about it that isn't true, which conflicts with this project's standing content rule against presenting a guess as fact. Instead, those three filters show a graceful "More Photos Coming Soon" notice (Section 4) rather than an invented tag or a broken-looking blank grid. Logged in `CONTENT-TO-CONFIRM.md`. |
| Studio Life section (7 themes) | Community, Confidence, Growth, Teamwork, Professionalism, Joy, Passion for Dance — exactly the 7 you specified. Copy for each draws from already-documented material: Passion, Confidence and Discipline are verbatim Core Values or Brand Personality traits from the Master Project Context Document; Community/Teamwork restate the documented "family environment" and Competition Teams content; Growth restates the documented "growth over trophies" philosophy. Nothing new was invented. |
| Final CTA | Book a Trial Class, View Timetable, Contact Us — exactly the three you specified |

No skill levels, no invented biographical or achievement claims, no fabricated dance-style tagging on placeholder art — consistent with every prior page's content discipline.

---

## 4. Design System Consistency

- Header, mobile nav, footer, action bar, page-hero, breadcrumbs, section-head, cta-band, notice, card/card__icon: all reused unchanged from Home/About/Programs/Timetable.
- **First real use of `.gallery-item` as an interactive `<button>`** (previously only used as a non-interactive `<a>` on Home's preview). No CSS changes were needed — buttons are already reset (`background: none; border: 0; cursor: pointer;`) in the base layer, so `.gallery-item`'s existing padding/border/cursor rules apply identically regardless of element type.
- **First real use of `.lightbox`/`lightbox.js` end-to-end** — see Section 2 for the fix, and this section for the markup design:
  - One single `data-lightbox` overlay instance, placed once in the document (mirroring how `.mobile-nav` is a single shared instance).
  - One single `data-gallery` scope wraps **both** the Featured Moments grid and the filterable grid, so every image on the page — featured or filtered — opens in the same lightbox and can be cycled between with the keyboard/swipe, in document order. This works cleanly with zero JS changes because of how `lightbox.js` and `filter.js` already query the DOM: `lightbox.js`'s `collectItems()` selects every `[data-gallery-item]` inside the single `[data-gallery]` scope and filters by `!hidden`; `filter.js` only ever touches elements that both live inside `[data-filter-target="gallery"]` **and** carry a `data-categories` attribute. Featured Moments items sit outside the `[data-filter-target]` element and carry no `data-categories`, so they're structurally invisible to the filter logic and always stay visible/included in the lightbox's cycle, while the 12 filterable items respond to category clicks normally. Verified directly: filtering to "Competitions" leaves Featured Moments' 6 images visible and shows only the 2 competitions-tagged filterable images, and opening the lightbox in that state cycles through exactly 8 images, not 18.
- **First real use of `filter.js` on a page with more than one possible outcome per category** — confirmed multi-category tagging works (`data-categories="competitions team-moments"` on one image shows correctly under both pills).
- **One small, additive feature written into `filter.js`:** an optional `data-filter-empty="<name>"` element is now un-hidden when a filter's result count is zero (2 lines in the `apply()` function, plus a 1-line lookup and a doc-comment update). This exists specifically because Hip Hop/Jazz/Contemporary currently have no honestly-taggable images (Section 3) — without it, clicking those pills would show a blank grid, which fails the Master Project Context Document's own "Empty States" requirement ("Gallery updating soon... always provide helpful messaging"). This is the same "small, justified, checked against the existing system first" bar every prior new-CSS addition on this project was held to (`.icon-sm`, `.cluster--between`, the print stylesheet) — here applied to a JS module instead of CSS.
- **Deliberate re-use, not duplication:** the 6 Featured Moments images are the exact same files/captions as 6 of the 12 filterable images (matching the precedent already set by Home's preview reusing Gallery's images). A visitor who opens the lightbox from Featured Moments and cycles all the way through will see a couple of images twice — once as a curated highlight, once in the full browse — which mirrors how most real photography sites present a "highlights reel" followed by "browse everything," and was a deliberate structural choice, not an oversight.
- A page-content review caught one naming collision before this report was written: the filterable grid's own section heading initially read "Every Side of Studio Life," which duplicated the theme of the actual Studio Life section further down the page. Renamed to "Browse the Full Gallery" (eyebrow "Explore the Gallery" was already distinct and unchanged).

---

## 5. Lighthouse Scores

| | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| **Desktop** | 100 | 100 | 100 | 100 |
| **Mobile, realistic (gzip/brotli) hosting** | 98 | 100 | 100 | 100 |

Meets both stated targets (Desktop 100, Mobile 98+) exactly, in line with every other completed page. Core Web Vitals (mobile): LCP 2.2s, FCP 1.3s, CLS 0, TBT 0ms. The 2-point mobile Performance gap is ordinary FCP/LCP timing variance under Lighthouse's mobile throttling profile (the same shared CSS/JS/font payload as every other page), not a Gallery-specific issue — the same profile Programs and Timetable also measured.

## 6. Accessibility Status

- **axe-core (WCAG 2.0/2.1/2.2 A+AA + best-practice): 0 violations** at both 1440×900 and 390×844.
- Exactly one `<h1>`; heading sequence checked programmatically (`1,2,2,2,3,3,3,3,3,3,3,2,3,3,3`) — logical H1→H2→H3 throughout, no skipped levels, across Featured Moments, Explore the Gallery, the 7 Studio Life cards, and the CTA band.
- Zero duplicate `id`s, every `<img>` has `alt` text, zero broken same-page anchor links — all checked programmatically, not spot-checked.
- **Mobile nav keyboard flow re-verified on this page specifically, at a mobile viewport** (the hamburger toggle is `display: none` at desktop widths by design, so this check must run below the 62em breakpoint — an early version of this test suite ran it at 1440px and correctly failed for that reason, which is a good sign the test was actually exercising real behaviour rather than passing by default): focus lands on the first link on open, `aria-current="page"` correctly marks "Gallery," Escape closes and returns focus to the toggle.
- **Filter pills tested with keyboard activation (Enter), not just click** — confirmed `aria-pressed` state updates correctly, the live region (`data-filter-status`) announces the result count, and the empty-state notice's `hidden` attribute toggles correctly in both directions.
- **Lightbox: full checklist verified** — see Section 2. Keyboard (arrows, Escape), focus trap, focus restoration, and touch swipe all confirmed with scripted input on both a desktop and a mobile (iPhone 13 emulation) context.
- All images use `loading="lazy"` except the hero (`fetchpriority="high"`, correctly not lazy since it's the LCP candidate) — matching the pattern every other page uses.

## 7. SEO Status

- Title: "Dance Studio Gallery | Jo Jackson Dance Company" (47 characters). Description: 146 characters. Both within safe limits, matching the Master Project Context Document's own suggested focus keyword for this page ("Dance Studio Gallery East London").
- Canonical, Open Graph, Twitter Card: page-specific.
- Two JSON-LD blocks: `LocalBusiness` (sitewide, unchanged) and `BreadcrumbList` (Home → Gallery). No `FAQPage` schema — the Gallery page has no FAQ section, matching your specified 6-section structure exactly (Hero, Featured Moments, Filterable Gallery, Lightbox, Studio Life, Final CTA).
- Same placeholder-domain caveat as every other page: URLs use `jojacksondance.co.za` pending the real domain — tracked sitewide in `CONTENT-TO-CONFIRM.md`.

## 8. Responsive & Cross-Device

- **Zero horizontal overflow at all 9 tested breakpoints** (320, 360, 375, 390, 414, 430, 768, 1024, 1440px) — verified with an automated `scrollWidth` vs `clientWidth` sweep across every element on the page, not eyeballed.
- Visually spot-checked at 1440px and 390px (full-page screenshots, plus a cropped screenshot of the Studio Life section specifically after confirming its `data-reveal` cards render correctly once scrolled into view — a first full-page screenshot appeared to show a blank gap there, which turned out to be a screenshot-timing artifact of the `IntersectionObserver`-driven reveal animation not having fired yet for off-screen content, not a real rendering defect; a direct DOM query confirmed all 7 cards exist and reach `opacity: ~0.97` once scrolled into view).
- The Studio Life section's 7 cards are laid out as a 4-card row followed by a 3-card row (two separate `.grid--4`/`.grid--3` blocks) rather than one 7-item `.grid--4`, specifically to avoid `auto-fit`'s known last-row-stretch behaviour when an item count doesn't divide evenly into the available columns — confirmed clean in the cropped screenshot, no stretched singleton on any row.

## 9. Code Quality

- Zero console errors, zero failed network requests (checked via Playwright's console/request-failed listeners across both viewport passes).
- No duplicated CSS or JS. The two shared-file changes (Section 2's lightbox fix, Section 4's filter.js empty-state addition) were both checked against the existing system before being written, matching this project's established bar for new shared code.
- No inline `style` attributes.
- All gallery `<img>` elements carry accurate `width`/`height` matching each placeholder SVG's real intrinsic viewBox dimensions (verified per-file, not assumed uniform), so aspect ratio is reserved correctly regardless of the CSS-forced crop.

---

## 10. CONTENT-TO-CONFIRM.md Updates

See the updated file for full detail. New entries from this page:
- Real photography needed for all 12 Gallery placeholders (cross-referenced with the new `docs/IMAGE-INVENTORY.md`, which is now the master reference for every placeholder image sitewide, not just Gallery's).
- Three filter categories (Hip Hop, Jazz, Contemporary) have no real images to tag yet — flagged as a specific, actionable gap rather than left implicit.
- Two images specifically require studio-supplied source material with likely third-party permission considerations: Jo Jackson's portrait and any guest-choreographer/guest-workshop photography (both already partially flagged in earlier reports; now cross-referenced against `IMAGE-INVENTORY.md`).

## 11. Recommendation

**The Gallery page meets the established benchmark and is ready for approval.** The lightbox bug flagged at the end of the previous session is fixed and independently verified (including a before/after test to confirm the test itself is meaningful, not just passing). No outstanding defects.

Per your instruction, development stops here pending your approval before the Contact page begins.
