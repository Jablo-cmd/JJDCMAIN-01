# Programs Page QA Audit — Jo Jackson Dance Company

**Scope:** `programs.html` (new page). One new CSS utility added to `assets/css/main.css` (`.icon-sm`, ~6 lines); `assets/js/**` unchanged.
**Date:** 2026-08-01
**Method:** Same tooling and rigor as the Home and About audits — Lighthouse, axe-core, and scripted Playwright interaction testing against the real rendered page, plus a manual content-accuracy review against the Master Project Context Document.

---

## 1. Summary

The Programs page — the site's most content-dense page, covering nine programmes — was built entirely from the existing design system. It's also the first page to actually exercise the FAQ accordion (`disclosure.js` + `.accordion` CSS), which had shipped since the Home audit but never been used until now; that interaction was tested end-to-end, not assumed to work.

No defects were found. One small, justified CSS addition was made (documented in Section 3). All quality targets were met or exceeded.

---

## 2. Content Verification

Every programme claim was checked against source material before being written. Where the documentation didn't specify something, the page says so visibly rather than guessing:

| Field | Approach |
|---|---|
| Programme names & order | Verbatim from the Master Project Context Document's programme list |
| Descriptions & benefits | Derived from the project brief's documented genre focuses (e.g. Jazz → energy/musicality/performance; Hip Hop → rhythm/individual style/confidence) — not invented |
| Age groups | **Adult Jazz** ("Adults") and **Private Lessons** ("All Ages") are definitionally clear from what the programme is, so those carry real tags. The other seven carry a visible "Age group TBC" tag — nothing was guessed |
| Skill level | Not documented for any programme — omitted entirely rather than labelled with a guess |
| Attire | Verbatim from the client-supplied attire content (Hip Hop; Freestyle/Jazz/Contemporary; official JJDC apparel rules) |
| Progression path | Built as a **labelled inference** from the programme names themselves (Pre Badge → Badge Programme → style classes → Competition Teams), explicitly framed as "a typical path" rather than a confirmed curriculum, and flagged in `CONTENT-TO-CONFIRM.md` for the studio to verify or correct |
| FAQ answers | All six answers restate only already-verified facts (studio philosophy on exams/competition, attire rules, contact details, Adult Jazz's audience) — no new claims introduced |

No "Skill Level" tags were invented anywhere on the page, and no numeric age ranges appear anywhere — both were explicitly prohibited by your brief and neither exists in the source documentation.

---

## 3. Design System Consistency

- Header, mobile nav, footer, action bar, cards, tags, check-lists, `.split`, `.cta-band`: all reused unchanged from Home/About.
- `.page-hero` + `.breadcrumbs`: reused from About, no changes.
- **First real use of the FAQ accordion** (`.accordion`, `disclosure.js`, `data-disclosure-exclusive`) — this component existed in the codebase since the Home audit but had never been exercised. Verified: all six items ship expanded by default (required for no-JS/screen-reader accessibility per the module's own documented contract), clicking closes an item independently, and reopening one via the exclusive group correctly closes the others. Confirmed via scripted keyboard activation (Enter key) as well as click.
- **One new CSS utility added:** `.icon-sm` (6 lines, `utilities` layer) — a generic small-inline-icon class for the arrow separators in the "Student Progression Path" flow. This was added only after confirming no existing class covered a bare icon outside a component context (every other icon size in the codebase is scoped to its parent component, e.g. `.btn__icon`, `.card__icon svg`). The alternative was an inline `style` attribute, which would have broken the codebase's zero-inline-style convention (already enforced once during the About page build) — a single-purpose utility was the more consistent fix, and matches the `utilities` layer's own stated purpose ("single-purpose helpers").
- No other new CSS or JS was written. No duplicated rules were introduced — checked by diffing the utility addition against the full stylesheet.
- The whole-card-clickable pattern used for the compact Overview grid (`.program-card__link` with its full-card hit-area) was deliberately **not** reused for the richer Detail cards, because those cards contain multiple genuine links (an inline "See attire guide" anchor plus a CTA button) — stacking that pattern under a full-card invisible overlay would have made the secondary link's hit area get silently swallowed by the card-wide overlay. The Detail cards use a normal, visible `.btn` button instead. This was caught and designed around during the build, not left for testing to find.

## 4. Lighthouse Scores

| | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| **Desktop** | 100 | 100 | 100 | 100 |
| **Mobile, realistic (gzip/brotli) hosting** | 98 | 100 | 100 | 100 |

Meets both stated targets (Desktop 100, Mobile 98+) exactly. Core Web Vitals (mobile): LCP 2.2s, CLS 0, TBT 0ms.

## 5. Accessibility Status

- **axe-core (WCAG 2.0/2.1/2.2 A+AA + best-practice): 0 violations** at 1440×900 and 390×844.
- Exactly one `<h1>`; heading sequence checked programmatically across all 31 headings — logical H1→H2→H3 throughout, no skipped levels.
- No duplicate `id`s despite nine repeated card structures — verified explicitly given the higher risk of accidental ID collisions on a page this dense.
- All 9 programme anchor IDs (`#pre-badge`, `#badge-programme`, etc.) exist and are reachable — checked both as fragment links and as the actual targets the Home and About "Explore Program" links already point to.
- Zero broken same-page anchor links (`#attire` cross-links from every detail card, `#pre-badge` etc. from the overview grid).
- Keyboard flow re-verified on this page: mobile nav focus trap works as on Home/About, and the FAQ accordion responds correctly to keyboard activation (Enter), not just mouse clicks.
- Accordion panels are readable with JavaScript disabled — verified directly: a JS-disabled context shows all six panels with real rendered height (not collapsed to zero), confirming the no-JS fallback the component was designed for actually holds.

## 6. SEO Status

- Title trimmed from an initial 66 characters to 55 ("Dance Classes in East London | Jo Jackson Dance Company") for consistency with Home/About's length discipline; meta description 159 characters.
- Canonical, Open Graph, Twitter Card: page-specific.
- **Three** JSON-LD blocks, all validated as syntactically correct JSON: `LocalBusiness` (sitewide), `BreadcrumbList` (Home → Programs), and — new on this page — `FAQPage` with all 6 question/answer pairs mirrored exactly from the visible accordion content (required for FAQ rich-result eligibility; mismatched visible-vs-schema text is a common real-world mistake this avoids).
- Same placeholder-domain caveat as Home/About, tracked sitewide in `CONTENT-TO-CONFIRM.md`.

## 7. Responsive & Cross-Device

- Zero horizontal overflow at all 9 tested breakpoints (320–1440px) — checked with the same automated bounding-box sweep used on Home and About.
- Visually spot-checked at 320px, including the "Student Progression Path" tag/arrow flow — the longest tag ("Jazz / Hip Hop / Contemporary / Lyrical") wraps cleanly via the existing `.cluster` flex-wrap, no overflow or awkward breaks.

## 8. Code Quality

- Zero console errors, zero failed network requests (full-page scroll-through with response monitoring).
- Zero duplicated CSS/JS — the only addition is the single `.icon-sm` utility, checked against the full stylesheet for overlap with existing rules.
- No inline `style` attributes (the one that would otherwise have been needed was resolved via the new utility class instead).

---

## 9. CONTENT-TO-CONFIRM.md Updates

Five new entries added, all specific to this page:
- Per-programme age groups (seven of nine still TBC; two are definitionally confirmed)
- Skill level per programme (not documented anywhere, omitted)
- Per-programme weekly schedule (depends on the not-yet-supplied timetable)
- Programme progression path (flagged as an inference to verify, not a confirmed fact)
- Studio Shop / online apparel ordering (future content, placeholder tag shown)

## 10. Recommendation

**The Programs page meets and in some respects exceeds the Home/About benchmark** (it's the first page to prove out the FAQ accordion and FAQPage schema, both now validated working). No outstanding defects.

Per your instruction, development stops here pending your approval before the Timetable page begins.
