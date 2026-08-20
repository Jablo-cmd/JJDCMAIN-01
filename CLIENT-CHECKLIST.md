# What's Left Before Launch — A Checklist for Jo

Your website is fully built, tested, and working. Every page, button, form, and link functions correctly today. What's left is not development work — it's information and decisions that only you can provide, plus one legal review. This document lists exactly those items, and nothing else.

---

## Things we need from you

### Business basics
- [ ] **Domain name** — the site currently uses a placeholder web address (`jojacksondance.co.za`) everywhere behind the scenes (search results, social share previews). Confirm the real one once registered.
- [ ] **Business email address** — not shown anywhere on the site yet. We won't guess one.
- [ ] **Opening hours** — the Contact page currently shows "Hours to be confirmed" rather than a guess.
- [ ] **WhatsApp number** — currently we're reusing your studio phone number for the WhatsApp button. Confirm that's correct, or give us a dedicated one.

### The enquiry form
- [ ] **A Formspree account ID** (or your preferred alternative) so that submissions from the Contact page's enquiry form actually reach you by email. Right now, if someone submits the form, they're shown a friendly message asking them to call or WhatsApp instead — nobody sees a broken form, but no enquiries are being delivered either.

### Content only you can supply
- [ ] **Jo's biography** — years of experience, training, qualifications. The About page currently describes studio philosophy only, with a visible "Full biography coming soon" note.
- [ ] **Real testimonials** — from parents or students. The Home page currently shows an honest "Testimonials coming soon" notice rather than invented quotes.
- [ ] **Studio founding story** (optional) — if you'd like a "how JJDC began" narrative on the About page.
- [ ] **Achievements / competition results** — we deliberately did not invent any. Send us what you'd like featured.

### Programme details
- [ ] **Age ranges** for 7 of the 9 programmes (Pre Badge, Badge Programme, Jazz, Hip Hop, Contemporary, Lyrical, Competition Teams) — Adult Jazz and Private Lessons are already clear from their names.
- [ ] **Skill levels** per programme (Beginner / Intermediate / Advanced, or your own terms) — not shown anywhere yet.
- [ ] **"Ballet" confirmation** — an early planning document mentioned Ballet as a possible class, but it's not in your confirmed 9-programme list, so we left it off the site entirely (including SEO keywords) rather than advertise a class you might not teach. **Tell us if this should be added** — for example, if Pre Badge or Badge Programme is actually built on a ballet syllabus internally.
- [ ] **How "Silver Bar," "Gold," "Pre Bronze," "Jnr Large Group," and "Grade R" map to your 9 named programmes** — these appear on the real timetable you gave us, but we couldn't confidently match them to Pre Badge / Badge Programme / etc. without guessing, so they're shown by their real names with no programme link yet.
- [ ] **Stirling Primary's exact address** — currently marked "Address & directions TBC" on the Timetable page.
- [ ] **Whether the timetable changes each term** — we noted this as likely (since you gave us "Term 3" specifically) but haven't confirmed it as policy.

### Photos
- [ ] **Please double-check the portrait we're using for "Meet Jo" is genuinely a photo of you** — it was supplied without a way for us to verify that independently.
- [ ] **Confirm two gallery photos are genuinely JJDC's own footage** (not stock photography) — flagged in detail in `docs/IMAGE-INVENTORY.md`. Both are currently live on the strength of your general authorization; we're asking you to double-check the specific two.
- [x] **The Competition Teams photo has been taken down.** The file you sent us had small decorative sticker graphics and a faint watermark on it (it looked like it had been saved from a social media post rather than the original camera file). That's now been swapped back to placeholder artwork. If you have the original, unedited photo — or a similar one without stickers/watermarks — send it our way and we'll put it straight back up.
- [ ] **A full photo shoot, when you're ready to arrange one.** We've written a complete, ready-to-hand-to-a-photographer brief — `docs/PHOTOGRAPHY-BRIEF.md` — covering locations, lighting, the exact list of moments to capture, and every spot on the website an image is needed for. The goal is that every photo on the site ends up looking like it came from one shoot, on one day, by one photographer. Until then, the site continues to use honest placeholder artwork (never stock photos standing in as "real" JJDC photography).
- [ ] **More real photography, when you have it** — most of the Gallery and Programmes pages still use tasteful placeholder artwork. We found your real Facebook and Instagram accounts during research but deliberately did not download anything from them without your say-so (copyright). Easiest path: export your own photos directly, or tell us which specific posts we have your permission to use.
- [ ] **A guest choreographer/workshop photo**, if you have one you're able to use (likely needs that person's permission too).
- [ ] **Two photos already live are worth a second look once the shoot happens**: the Adult Jazz and Hip Hop programme photos are real and client-confirmed, but they read as generic/stock-styled rather than "shot at JJDC" — not urgent, just flagged so they're on the replacement list alongside everything else in `docs/PHOTOGRAPHY-BRIEF.md`.

### Legal (important)
- [ ] **A qualified attorney needs to review the Privacy Policy, Terms & Conditions, and POPIA Notice** before launch. We built solid starting drafts, clearly marked "pending legal review" on the pages themselves, but we are not lawyers and these should not go live as final legal documents without sign-off — particularly for South African consumer-protection law and anything specific to running a dance studio.
- [ ] **POPIA Information Officer registration** — South African law requires this to be registered with the Information Regulator. That's a step only the studio can complete; the website names Jo as the privacy contact as a placeholder assumption.

---

## Things we're handling (no action needed from you)

- A short technical follow-up before we tag this as version 1.0.0: adding a `robots.txt` and `sitemap.xml` (standard search-engine files, currently missing — this is on us, not something you need to provide).
- Everything else — performance, accessibility, mobile responsiveness, SEO structure, code cleanliness — has already been verified and is production-ready. See `docs/RELEASE-REPORT-v1.0.0.md` for the full technical summary if you'd like it.

---

**Bottom line:** the website works today and could go live as-is. The items above are what would make it *complete* — your real content, your final say on a few open questions, and a lawyer's sign-off on the legal pages. None of them are bugs.
