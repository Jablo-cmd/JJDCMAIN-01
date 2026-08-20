# Legal Pages QA Audit — Jo Jackson Dance Company

**Scope:** `privacy-policy.html`, `terms.html`, `popia-notice.html` (all new). No shared-file changes.
**Date:** 2026-08-01
**Method:** Same tooling as every prior audit — Lighthouse, axe-core, scripted Playwright checks. Covered together in one report since all three are structurally identical (simple `.prose` content pages) and were built, tested and fixed as a single batch.

---

## 1. Summary

All three pages were linked from every page's footer since the very first build session but never built — a live 404 on a real, deployed site. They're now built as clearly-labelled **draft legal templates**, each carrying a visible "Draft document — pending legal review" notice, since neither I nor any prior session is a substitute for an actual attorney, and POPIA (South Africa's data protection law) carries real compliance obligations beyond what a website can self-certify.

One real defect was found and fixed during this audit: all three pages initially shipped with `<meta name="robots" content="noindex, follow">`, which is defensible practice for utility pages but tanks Lighthouse's SEO category to 63/100 (the `is-crawlable` audit alone carries ~37% of that category's weight). Since the project's stated target is a clean score across every page, and indexing legal pages is common, reasonable practice too, all three were switched to `index, follow` to match the rest of the site. Re-tested clean afterward.

## 2. Content Approach

Each page uses only generic, defensible legal boilerplate appropriate to a small business website — no invented business specifics (no fabricated registration numbers, no named Information Officer beyond a reasonable "Jo Jackson, as studio owner" placeholder, no specific data-retention periods beyond "as long as necessary"). Every substantive legal claim is flagged for attorney review rather than presented as finalized. Full detail and required follow-up actions are in `docs/CONTENT-TO-CONFIRM.md`.

## 3. Design System Consistency

Built entirely from existing components: header, mobile nav, footer, action bar, breadcrumbs, `.prose` (an existing "long-form copy" component that had never been used until now — first real exercise, confirmed rendering correctly), `.notice`, `.check-list`, `.tag--tbc`. Zero new CSS or JS.

## 4. Lighthouse Scores (after the `noindex` → `index` fix)

| | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| **privacy-policy.html — Desktop** | 100 | 100 | 100 | 100 |
| **privacy-policy.html — Mobile** | 99 | 100 | 100 | 100 |
| **terms.html — Desktop** | 100 | 100 | 100 | 100 |
| **terms.html — Mobile** | 98 | 100 | 100 | 100 |
| **popia-notice.html — Desktop** | 100 | 100 | 100 | 100 |
| **popia-notice.html — Mobile** | 98 | 100 | 100 | 100 |

## 5. Accessibility Status

Zero axe-core violations on all three pages (WCAG 2.0/2.1/2.2 A+AA + best-practice), at both 1440×900 and 390×844. Exactly one `<h1>` per page, logical heading hierarchy throughout the long-form `.prose` content, zero duplicate ids, zero broken links.

## 6. SEO Status

Unique title/description per page (verified programmatically against every other page sitewide — no duplicates across all 9 pages). Canonical URLs page-specific. No JSON-LD on these three pages — appropriate, since they're not marketing content and don't need `LocalBusiness`/`BreadcrumbList`/`FAQPage` schema (breadcrumbs are visually present but not schema-marked, consistent with keeping these pages simple).

## 7. Recommendation

**All three pages meet the sitewide benchmark.** No outstanding technical defects. The only follow-up required is the legal review already flagged clearly on-page and in `CONTENT-TO-CONFIRM.md` — not a development task.
