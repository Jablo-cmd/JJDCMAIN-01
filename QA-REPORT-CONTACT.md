# Contact Page QA Audit — Jo Jackson Dance Company

**Scope:** `contact.html` (new page). No shared-file changes required — this page exercises `form.js`, `map.js` and `.contact-list`/`.contact-item` for the first time on a real page, all of which were already built and tested in isolation during earlier sessions.
**Date:** 2026-08-01
**Method:** Same tooling and rigor as every prior audit — Lighthouse, axe-core, and scripted Playwright interaction testing (keyboard, form submission, honeypot, accordion, map facade) against the real rendered page.

---

## 1. Summary

The Contact page is the last of the original six pages in the brief. It's built entirely from existing components — `.page-hero`, `.contact-list`/`.contact-item`, `.map`/`map.js`, `.form`/`form.js`, `.accordion`/`disclosure.js`, `.cta-band` — with zero new CSS or JS. This is also the first real exercise of `form.js`, which was written early in the project but had no page to run on until now; every documented behaviour (inline validation, honeypot, unconfigured-endpoint fallback) was tested directly rather than assumed to work.

All quality targets were met: **Desktop Lighthouse 100/100/100/100, Mobile 99/100/100/100**, **zero axe-core violations**, **zero console errors**, **zero horizontal overflow** across all 9 breakpoints, and every interactive element (form, FAQ accordion, map facade, mobile nav) verified with scripted keyboard/mouse input.

---

## 2. Content Verification

| Element | Source |
|---|---|
| Phone / WhatsApp | 082 925 4377 — verified studio contact number, reused sitewide |
| Address | 8 Smartt Road, Nahoon, East London, 5201 — verified studio address |
| Map | Google Maps embed (click-to-load facade), same pattern and address as Timetable's Studio Location section |
| Email | **Omitted** — not supplied anywhere in the project. Not invented. |
| Opening hours | **Not invented.** Shown as a visible `tag--tbc` ("Hours to be confirmed") with a pointer to the Timetable page's actual class times, rather than guessing a plausible-sounding schedule |
| Enquiry form fields | Name, phone (required); email, programme interest (optional); message (required). The programme dropdown lists exactly the 9 documented programme names, verbatim, matching Programs/Timetable |
| FAQ (4 questions) | All four answers restate only already-verified facts (phone/WhatsApp number, studio address, programme list) — no new claims. "How quickly will I hear back" was deliberately *not* asked as a question, since no response-time SLA is documented anywhere; the copy says "as soon as possible," matching the wording already coded into `form.js`'s own success message, rather than promising a specific turnaround |

Nothing on this page states or implies a fact not already established elsewhere in the project.

## 3. Design System Consistency

- Header, mobile nav, footer, action bar, page-hero, breadcrumbs, cta-band: reused unchanged.
- `.contact-list`/`.contact-item`/`.map` reused from Timetable's Studio Location section with zero changes — second real use of the map facade, confirms it isn't Timetable-specific.
- **First real use of `.form`/`form.js` end-to-end.** Verified directly, not assumed:
  - Submitting empty required fields shows plain-language inline errors and moves focus to the first invalid field.
  - The programme `<select>` and all text/tel/email inputs are fully keyboard operable.
  - Because the Formspree endpoint is still the documented `FORMSPREE_ID` placeholder, submitting valid data correctly triggers `form.js`'s own graceful "Form not connected yet — call or WhatsApp 082 925 4377" message rather than silently failing or claiming a fake success — exactly the fallback behaviour `form.js` was built for, now confirmed working on a real page for the first time.
  - The honeypot field (`data-form-trap`) was filled directly to simulate a bot; the form correctly shows a fake "Thank you" success message and does not attempt a real submission.
- FAQ accordion: fourth real use of the same `disclosure.js` primitive as Programs/Timetable, `data-disclosure-exclusive` behaviour confirmed identical.
- No new CSS or JS was written for this page.

## 4. Lighthouse Scores

| | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| **Desktop** | 100 | 100 | 100 | 100 |
| **Mobile, realistic (gzip/brotli) hosting** | 99 | 100 | 100 | 100 |

Core Web Vitals (mobile): LCP 2.1s, CLS 0. Matches every other completed page's profile, as expected since no new render-blocking resources were introduced.

## 5. Accessibility Status

- **axe-core (WCAG 2.0/2.1/2.2 A+AA + best-practice): 0 violations** at 1440×900 and 390×844.
- Exactly one `<h1>`, logical heading sequence, zero duplicate `id`s, zero broken same-page anchors (including the `#enquiry` anchor that every other page's header/action-bar CTA links to).
- Every form field has a real, associated `<label>`; error messages are wired to their field via `[data-error-for]` and announced through the existing pattern.
- Mobile nav keyboard flow re-verified specifically on this page, at a mobile viewport: focus lands on the first link on open, `aria-current="page"` correctly marks "Contact."
- FAQ accordion keyboard-toggled successfully (Enter key).

## 6. SEO Status

- Title "Contact Us | Jo Jackson Dance Company" (39 chars), description 148 chars.
- Canonical, Open Graph, Twitter Card: page-specific.
- Three JSON-LD blocks: `LocalBusiness` (sitewide), `BreadcrumbList` (Home → Contact), and `FAQPage` (4 items, text mirrored exactly from the visible accordion).
- Same placeholder-domain caveat as every other page, tracked sitewide in `CONTENT-TO-CONFIRM.md`.

## 7. Responsive & Cross-Device

Zero horizontal overflow at all 9 tested breakpoints (320–1440px). The two-column contact-info/form split (`.split--wide-text`) collapses to a single column below 56em, verified visually with no overlap or truncation.

## 8. Code Quality

Zero console errors, zero failed network requests, no duplicated CSS/JS, no inline `style` attributes.

---

## 9. CONTENT-TO-CONFIRM.md Updates

New entries from this page: opening hours (not invented, flagged), the Formspree endpoint ID (still required before the form can actually deliver messages — the graceful fallback means this doesn't block launch, but it does mean no enquiry submitted through the form will reach the studio until it's configured), and confirmation that WhatsApp should keep using the studio's main phone number (same open question as before, now also visible on this page).

## 10. Recommendation

**The Contact page meets the established benchmark.** This completes all six pages in the original brief. No outstanding defects.
