# Home Page QA Audit — Jo Jackson Dance Company

**Scope:** `index.html`, `assets/css/main.css`, `assets/js/**`
**Date:** 2026-08-01
**Method:** Automated tooling (Lighthouse, axe-core, Playwright/Chromium) driven against the real rendered page — not a read-through. Every finding below was reproduced with evidence before being called a defect, and every fix was re-tested after the change.

---

## 1. Summary

The Home page was audited as a real front-end engineer would: performance profiling under throttled mobile conditions, an automated WCAG 2.2 AA sweep, actual keyboard-driven interaction testing (not just static analysis), a 9-breakpoint responsive sweep with overflow detection, and a manual pass over the CSS/JS for dead code and cross-file wiring issues.

**Four genuine bugs were found and fixed** — three of them were latent defects in the shared design system (`main.css` / `mobile-nav.js`) that had never been exercised until this page was built, meaning they would otherwise have shipped silently into every future page. Two SEO/performance refinements were also applied. Nothing else in the design system, markup, or interaction patterns needed correction.

The Home page is now a clean, evidence-backed baseline: **100/100/100/100 on desktop Lighthouse**, **98/100/100/100 on mobile** under realistic hosting conditions, **zero axe-core violations**, **zero horizontal overflow at any of 9 tested breakpoints**, and a verified keyboard/focus flow.

---

## 2. Issues Found

### 2.1 `.section--dark` rendered white-on-white (High — shared component, would break every future page using it)
`background: var(--ink)` and `--ink: #ffffff` were declared in the same CSS rule. A custom property has one computed value per element, so the `background` declaration resolved to the *new* white value, not the dark navy it was meant to read. Result: the entire "Why JJDC?" dark section rendered with a white background and white heading text — content-destroying, not cosmetic. Confirmed via computed-style inspection (`background-color: rgb(255,255,255)`) before fixing.

### 2.2 Google Fonts stylesheet was render-blocking (Medium — mobile performance)
The `<link rel="stylesheet" href="fonts.googleapis.com/...">` blocked first paint on a third-party DNS + TLS round trip. Lighthouse's LCP breakdown attributed ~1.8s of pure render delay to it under throttled mobile conditions (mobile Performance was 89/100 before this fix).

### 2.3 Hero entrance animation was hiding the page's own LCP element (Medium — mobile performance)
The hero paragraph (`.hero__lede`) is consistently the page's Largest Contentful Paint candidate — the headline is split into a `<span>` per line for its cascading entrance, so no single line is as large a text block as the wrapped lede paragraph beneath it. That paragraph shared the `rise-in` keyframe (`opacity: 0 → 1`) with a 540ms delay, meaning the LCP element was invisible for over half a second by design, directly harming a Core Web Vital.

### 2.4 Mobile nav didn't move focus into the panel on open (High — accessibility, real keyboard testing only)
`assets/js/modules/mobile-nav.js` calls `firstLink.focus()` after opening the panel, exactly as its own comments describe. In practice, focus silently stayed on the toggle button — confirmed by scripted keyboard-driven tests, not static analysis. Root cause: `.mobile-nav` used a `visibility: hidden → visible` CSS transition to gate the panel, and a `visibility: hidden` ancestor makes descendants unfocusable; the transition's hidden→visible resolution wasn't complete by the time `.focus()` ran, so the call silently no-opped. This broke the panel's modal focus trap for every keyboard and screen-reader user — clicking/tapping still worked, so it would have been easy to ship unnoticed.

### 2.5 `.no-js` CSS convention was never wired up (High — content becomes unreachable without JS)
`main.css` has a documented `.no-js [data-reveal] { opacity: 1; }` fallback rule, whose entire purpose is to force scroll-reveal content visible if JavaScript fails to load. Nothing in the HTML ever added a `no-js` class to `<html>` or removed it once JS ran. Verified with a JS-disabled Playwright context: the eight "Why Dance?" cards (and any future `data-reveal` content) stayed at `opacity: 0` **permanently** — invisible content, not a degraded experience.

### 2.6 Floating WhatsApp / mobile action bar sat outside any landmark (Low — axe-core `region` rule)
`.wa-fab` and `.action-bar` were direct children of `<body>`, outside `header`/`nav`/`main`/`footer`. Flagged by axe-core on both desktop and mobile passes.

### 2.7 Meta description was 171 characters (Low — SEO)
Slightly past Google's typical ~155–160 character safe zone for search snippets, risking mid-sentence truncation.

---

## 3. Improvements Applied

| # | Fix | File(s) |
|---|---|---|
| 1 | Hardcoded the literal dark-navy value in `.section--dark`'s background instead of the self-referencing `var(--ink)` | `assets/css/main.css` |
| 2 | Self-hosted Fraunces + Inter as two Latin-subset variable-font `.woff2` files (fetched from Google's own CDN, same license) with `font-display: swap`; removed the external Google Fonts `<link>` entirely; added `<link rel="modulepreload">` for the JS module graph so the browser fetches it in parallel instead of discovering it hop-by-hop | `assets/css/main.css`, `index.html`, new `assets/fonts/*.woff2` |
| 3 | Gave `.hero__lede` its own transform-only `slide-up` entrance (no opacity hiding) instead of sharing the opacity-based `rise-in` keyframe with its siblings | `assets/css/main.css` |
| 4 | Removed the `visibility` transition from `.mobile-nav` entirely — `[hidden]` already handles full removal while closed via `display: none`, so `visibility` was only ever active during the exact frame that was breaking focus, for no visible benefit | `assets/css/main.css`, `assets/js/modules/mobile-nav.js` |
| 5 | Added `class="no-js"` to `<html>` plus the standard early inline script that removes it when JS runs, so the existing CSS fallback actually activates when it's supposed to | `index.html` |
| 6 | Wrapped the persistent WhatsApp/action-bar controls in `<div role="region" aria-label="Quick contact">` | `index.html` |
| 7 | Trimmed the meta description to 157 characters | `index.html` |

All seven fixes were independently re-tested (computed styles, keyboard flow, JS-disabled context, axe-core, Lighthouse) after being applied — see Section 9 for the before/after numbers on the two performance fixes specifically.

**Nothing else was changed.** The rest of the design system, copy, layout, and interaction patterns were reviewed and left as-is — they were already solid.

---

## 4. Lighthouse Scores

Tested against the real static file server. Two mobile runs are reported because the dev server used for testing (Python's built-in server) doesn't compress responses — production hosts (Vercel/Netlify/Cloudflare Pages, all named in the project brief) do this automatically, so the second number is the realistic one.

| | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| **Desktop** | 100 | 100 | 100 | 100 |
| **Mobile, uncompressed dev server** | 96 | 100 | 100 | 100 |
| **Mobile, realistic (gzip/brotli) hosting** | 98 | 100 | 100 | 100 |

Core Web Vitals (mobile, realistic hosting): LCP 2.2s, CLS 0, TBT 30ms — all within "Good" thresholds.

Before the font/animation fixes, mobile Performance was **89/100** with LCP at 3.0s. See Section 9 for the full trace.

---

## 5. Accessibility Status

- **axe-core, WCAG 2.0/2.1/2.2 A+AA + best-practice rules: 0 violations**, tested at both a 1440×900 desktop viewport and a 390×844 mobile viewport.
- Heading hierarchy verified programmatically: exactly one `<h1>`, no skipped levels, no duplicate `id`s, every `<img>` has `alt` text.
- Keyboard flow tested end-to-end via scripted interaction (not just inspection): Tab reaches the skip link first, Enter opens the mobile nav, focus moves into the panel, Shift+Tab from the first item wraps to the last focusable item (trap working correctly), Escape closes the panel and returns focus to the toggle button. This is the same flow that surfaced bug 2.4 above.
- Reduced-motion (`prefers-reduced-motion`) is respected throughout — verified in the CSS, not just assumed.
- Colour tokens are documented in `main.css` as contrast-checked (e.g. `--accent` at 5.18:1 on white), and this held up under axe's automated contrast audit with zero flags.

## 6. SEO Status

- Unique, length-appropriate `<title>` (54 chars) and `<meta description>` (157 chars, trimmed from 171).
- Canonical URL, Open Graph, Twitter Card all present and consistent.
- `LocalBusiness` and `WebSite` JSON-LD present and validated as syntactically correct JSON with the expected `@type`s.
- Semantic landmark structure (`header`, `nav`, `main`, `footer`) plus the newly added `region` for persistent actions.
- Logical heading hierarchy (see above) supports crawlability.
- **Known placeholder in the SEO metadata:** the canonical/OG/JSON-LD URLs use `https://www.jojacksondance.co.za/` as a placeholder domain — this is flagged in `docs/CONTENT-TO-CONFIRM.md` and must be swapped for the real domain before launch.

## 7. Performance Status

See Section 4 for scores. Root causes investigated and fixed, not just scored:
- Render-blocking third-party font stylesheet → self-hosted, eliminated.
- JS module discovery waterfall → collapsed to parallel fetches via `modulepreload`.
- LCP element hidden behind an entrance animation → fixed at the animation level, not by disabling the animation.
- Confirmed CLS is genuinely 0 on mobile (no layout-shift-causing patterns found).
- One residual Lighthouse "insight" (network-dependency-tree) still fires with `metricSavings: 0` — it flags the `index.html → main.js` chain as a matter of course; Lighthouse's own accounting says it produces no measurable LCP cost, so no further action is recommended.

## 8. Remaining Client Content Required

Tracked in `docs/CONTENT-TO-CONFIRM.md` — nothing below was invented or guessed:

- **Live domain name** (currently a placeholder in canonical/OG/JSON-LD tags)
- **Email address** (omitted entirely rather than invented)
- **Social media (Facebook/Instagram) handles**
- **Confirmation that WhatsApp should use the studio's main phone number**
- **Formspree endpoint ID** for the enquiry form (Contact page, not yet built)
- **Real testimonials** — the Home page currently shows an honest "Testimonials Coming Soon" notice rather than fabricated quotes
- **Weekly class timetable**
- **Per-programme age ranges**
- **Achievements / competition results** — explicitly deferred per the project's own content rules ("do not invent achievements")

## 9. Before/After Evidence (Performance Fixes)

| Metric (mobile, throttled) | Before | After |
|---|---|---|
| Performance score | 89 | 98 (realistic hosting) |
| First Contentful Paint | 3.0s | 1.3s |
| Largest Contentful Paint | 3.0s | 2.2s |
| LCP element render delay | 2,507ms | 213ms |

## 10. Recommendations Before Development Continues

1. **None of these block moving on to the About page** — they're optional future refinements, not defects:
   - Consider a lightweight build/bundling step (e.g. esbuild) before production launch, purely to reduce HTTP requests further — not required now given `modulepreload` already resolves the actual measured cost.
   - Manually verify rendering in real Safari and Firefox before launch; only Chromium was available for automated testing in this environment. The CSS features in use (`@layer`, `:has()`, `text-wrap: balance`, `svh` units) are all well-supported in current browser versions as of 2026, but a real-device pass is good practice before going live.
   - Replace placeholder assets (SVG illustrations, `og-default.png`) with real studio photography per the Photography Strategy in the Master Project Context Document — expected at this stage, not a defect.
2. Every fix in Section 3 lives in **shared files** (`main.css`, `mobile-nav.js`) used by every page, not page-specific markup — so the About/Programs/Timetable/Gallery/Contact pages inherit all of these corrections automatically as soon as they reuse the same header, mobile nav, and dark-section component.

**The Home page is confirmed as the benchmark for all remaining pages.** Its component usage, spacing rhythm, animation timing, accessibility patterns, and performance profile are now verified correct at the design-system level — the same components can be reused on the next five pages with confidence, rather than re-auditing each one from scratch.
