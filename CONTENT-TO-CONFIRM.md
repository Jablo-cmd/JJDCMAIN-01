# Content to confirm with Jo Jackson Dance Company

Items below are placeholders in the live markup. Search each page for
`tag--tbc` and `notice` elements, or the items listed here, before launch.
For placeholder **images** specifically, `docs/IMAGE-INVENTORY.md` is the
master reference — it has one row per image, sitewide, with recommended
resolution, crop and final alt text.

## Needed from the studio

- **"Ballet" — mentioned in the root-level `master prompt` file, not in the
  confirmed programme list.** During the 2026-08-01 launch-readiness audit,
  the requested local-SEO keyword set included "Ballet Classes East London."
  The repo's `master prompt` file (a generic project-brief template, distinct
  from the more authoritative `docs/Master_Project_Context_Document.md`)
  lists "Ballet" as an example programme category and even suggests sourcing
  ballet photography. However, **no confirmed source anywhere in the project
  — including the Master Project Context Document's own explicit 9-programme
  list — documents JJDC actually offering a Ballet class.** The confirmed list
  is Pre Badge, Badge Programme, Jazz, Hip Hop, Contemporary, Lyrical, Adult
  Jazz, Competition Teams, Private Lessons. Rather than add "Ballet" to page
  copy or metadata on the strength of a generic template file, this was left
  out — the same content-accuracy rule applied everywhere else on this site
  (never present a guess as fact) applies to SEO copy too, and ranking for
  "ballet classes" without offering one would hurt user trust and bounce rate
  more than it helps. **If "Pre Badge" or "Badge Programme" is in fact a
  ballet-syllabus-based programme internally, confirm this** and the site can
  be updated to genuinely and accurately target that keyword.
  - The same `master prompt` file also instructs sourcing photography "using
    online resources" and downloading images from the internet. This
    conflicts directly with your explicit instructions this session (no
    Google/Pinterest/social-media-sourced imagery) — noted here so it's clear
    that instruction was a deliberate override of an earlier generic project
    brief, not an oversight.

- **Live domain name.** `index.html` currently uses `https://www.jojacksondance.co.za/`
  as a placeholder in the canonical URL, Open Graph tags and JSON-LD. Replace
  with the real domain once registered/confirmed.
- **Email address.** Not yet supplied — omitted from the site rather than
  invented. Add to header/footer/contact page once available.
- **Social media links.** Facebook and Instagram handles are not yet
  supplied. Icons exist in `assets/icons/sprite.svg` (`#facebook`,
  `#instagram`) but are not linked anywhere yet.
- **WhatsApp number.** Currently reusing the studio phone number
  (082 925 4377 → `wa.me/27829254377`). Confirm this is the correct number
  for WhatsApp enquiries, or supply a dedicated one.
- **Formspree form ID.** The enquiry form on the Contact page will need a
  real Formspree endpoint. `assets/js/modules/form.js` already detects an
  unconfigured `FORMSPREE_ID` placeholder and shows a graceful fallback
  message with the studio phone number.
- **Testimonials.** None supplied yet. The Home page testimonials section
  currently shows a "Testimonials Coming Soon" notice instead of inventing
  quotes. Replace with real `testimonial` cards once the studio provides
  them (see Testimonial Strategy in the Master Project Context Document).
- **Class timetable — now supplied and live.** The Term 3 weekly schedule
  (supplied 2026-08-01) is built into `timetable.html` in full — all 19
  classes across Monday–Friday, with time, location and programme links.
  Remaining gaps from that data:
  - **Stirling Primary's exact address.** The venue is named (used for Badge
    1 on Monday and Grade R on Tuesday) but no street address was supplied —
    `timetable.html` marks this with a visible "Exact venue address &
    directions TBC" tag rather than guessing or reusing the studio's own
    address.
  - **Mapping of "Silver Bar," "Gold," "Pre Bronze," "Jnr Large Group" and
    "Grade R" to the nine named programmes.** These class names appear in the
    real timetable but don't obviously correspond to Pre Badge / Badge
    Programme / Jazz / etc. They're shown on the Timetable page under their
    real names with a location tag but **no** programme link, rather than
    guessing which programme they belong to. "Grade R" is presented near
    "Pre Badge" content (same young-learner age band) but is not explicitly
    linked as the same programme — confirm whether these are Badge Programme
    sub-levels, a separate exam-grade track, or something else, so the
    Programs page and Timetable can cross-link them correctly.
  - **Whether the timetable changes between terms**, and how often — the
    Timetable page's FAQ states "class times can change between terms" as a
    reasonable inference from the "Term 3" label, not a confirmed policy.
- **Per-programme age groups.** The Master Project Context Document lists
  programme names but not specific age ranges for each. Confirmed exceptions:
  Adult Jazz (adults) and Private Lessons (all ages) are definitionally clear
  from the programme itself, so those two carry real tags. **2026-08-20: per
  a client launch-readiness request for zero "TBC" text anywhere on the live
  site, the "Age group TBC" / "Exact ages TBC" tags were removed from the
  other seven programme cards (Pre Badge, Badge Programme, Jazz, Hip Hop,
  Contemporary, Lyrical, Competition Teams) rather than left as visible
  placeholders.** Nothing was invented in their place — the cards simply
  don't show an age tag for these seven until real ranges are confirmed. Add
  the real tags once the studio supplies age ranges.
- **Skill level per programme.** Not documented for any programme and
  therefore omitted entirely (no tag shown) rather than guessed — add once
  confirmed, e.g. "Beginner," "Intermediate," "Advanced."
- **Per-programme weekly schedule.** Not documented. The Programs page
  points to the (also pending) Timetable page rather than listing times.
- **Programme progression path.** The "Student Progression Path" section on
  the Programs page (Pre Badge → Badge Programme → style classes →
  Competition Teams) is a reasonable structural inference from the
  programme names themselves, not a confirmed curriculum map — verify this
  is actually how dancers progress at JJDC, or correct it.
- **Studio Shop / online apparel ordering.** Mentioned as future content in
  the Master Project Context Document. The Programs page's Class Attire
  section carries an "Online ordering coming soon" tag — build the actual
  ordering flow once the studio is ready for it.
- **Achievements / competition results.** Explicitly deferred — "Do not
  invent achievements" per the content rules. Add once supplied.
- **Opening hours / price range.** Not included in LocalBusiness structured
  data since unconfirmed.
- **Jo Jackson's biography.** No years of experience, training background,
  qualifications or career history were supplied anywhere in the project
  documentation. The About page's "Meet Jo" section is deliberately written
  from studio philosophy alone and carries a visible `tag--tbc` ("Full
  biography coming soon") rather than inventing a personal history — replace
  once supplied.
- **Studio founding story / history.** No founding date or origin story is
  documented. The About page's "Our Story" section describes what the studio
  is and does today rather than its history; add a founding narrative if the
  studio wants one told.
- **Real photography — partially supplied 2026-08-01, see below.** Four real
  image files were added directly to the project on 2026-08-01 and confirmed
  by the client as authorized to use:
  - `jjdclogo.jpg` — the real JJDC logo. Used to update `og-default.png`
    (social share image), `apple-touch-icon.png` (favicon), and, per explicit
    request 2026-08-01, **the header/footer nav brand mark on all 9 pages**
    (replacing the original SVG line-art symbol). Re-verified sitewide
    afterward: zero axe violations, zero broken links, all 9 pages still
    100/100/100/100 desktop and 98+/100/100/100 mobile.
  - `"Jo potrait.jpg"` (renamed to `assets/images/jo-portrait.jpg`) — a real
    portrait, now live on both Home's and About's "Meet Jo" sections,
    replacing the SVG placeholder. **Please double-check this is genuinely a
    photo of Jo Jackson** — it was supplied without a way for me to
    independently verify the person's identity, and an incorrect photo of the
    business's named founder is worth catching before launch.
  - `assets/images/gallery/hiphop-dancer.jpg` — a real photo, now live on the
    Gallery page tagged to the Hip Hop filter (previously empty). Please
    confirm this is genuinely JJDC content and not stock photography — it has
    the visual hallmarks of a stock photo (plain studio backdrop, styled
    fashion-shoot lighting) rather than a candid class/event photo, but I'm
    using it per your confirmation that all four supplied files are
    authorized.
  - `assets/images/gallery/jo-jackson.webp` — a real photo, now live on the
    Gallery page (Featured Moments + Performances filter). It shows a **child**
    mid-leap on a lit stage — despite the filename, this is not a photo of Jo
    Jackson (the studio's adult founder). I've captioned it by what it
    actually shows ("A young dancer captured mid-leap on stage") rather than
    trusting the filename. **Please confirm what this photo actually is** (a
    JJDC student? which event?) so the caption can be made more specific, or
    replace it if it's not actually JJDC's own footage. Its resolution
    (640×426) is also below the recommended minimum for a large/featured
    display — fine at current grid sizes, but a higher-resolution version
    would hold up better if used larger later.
  - Both new Gallery photos are documented in full in `docs/IMAGE-INVENTORY.md`
    (now the master reference for every image sitewide, not just Gallery's) —
    check there for the complete status of every image, orientation,
    recommended resolution, and suggested final alt text.
  - **Two Gallery filter categories still have no images:** Jazz and
    Contemporary currently show a "More Photos Coming Soon" notice, because
    none of the remaining placeholder captions specify those styles — tagging
    one as, say, "Jazz" would assert something about it that isn't true. When
    real, style-identified photography arrives, tag it directly
    (`data-categories` in `gallery.html`) rather than retrofitting a label.
  - **Still needed:** a specific, real guest choreographer/workshop photo for
    About's "Studio Culture" section and Gallery's `gallery-08.svg` — likely
    needs the choreographer's permission to use their likeness, so a generic
    substitute isn't appropriate here even with the broader photo-use
    authorization above.
  - **Two further real photos supplied 2026-08-01**, now live on Home and
    Programs (Adult Jazz and Competition Teams overview/detail cards),
    confirmed by the client as authentic and authorized:
    - `assets/images/programs/adult-jazz.jpg` — a styled editorial/fashion-shoot
      photo rather than a candid class photo. Used per confirmation; flagging
      only because the styling is unusually polished for a studio snapshot,
      in case it's stock rather than a commissioned shoot.
    - `assets/images/programs/competition-teams.jpg` — the source file carries
      small decorative butterfly-sticker overlay graphics and a faint,
      partial watermark-like text fragment in one corner, both consistent
      with a social-media repost rather than raw studio photography. The 4:3
      crop used on the site trims most of the sticker overlay out of view.
      Used per explicit client confirmation of authenticity and rights
      2026-08-01 — flagged here in case the studio has (or can get) a clean,
      unedited original that would look more premium once available.

  Web research (search + fetch, not a login-capable browser) from an earlier
  session found real, active accounts that should be the source for actual
  photos:
  - Facebook: `https://www.facebook.com/jojacksondance/` — "Jo Jackson Dance
    Co & Promotions," ~2,180 likes, confirmed active.
  - Instagram: `https://www.instagram.com/jojacksondance/` — confirmed to
    exist via search; content not retrievable without login.
  - Local press coverage with likely usable photos (rights not confirmed):
    [GO! & Express](https://www.goexpress.co.za/2024/01/11/jo-jackson-dance-showcase-takes-you-on-journey-around-world/)
    and [Daily Dispatch](https://www.dailydispatch.co.za/news/2024-01-09-jo-jackson-dance-showcase-traverses-the-globe/),
    both covering a January 2024 "Around the World Dance Extravaganza"
    showcase at the Guild Theatre, East London, with choreography credited to
    Rudi Smit, Kirt Ruiters, Jo Jackson, Emma Wearing and Emma Victor. A
    separate [Merrifield School article](https://mpsc.co.za/2023/05/18/merrifield-students-excel-at-world-dance-masters-in-croatia/)
    mentions JJDC dancers competing at the World Dance Masters in Croatia.
  - **None of this was downloaded or embedded.** Facebook and Instagram both
    require login for real content (confirmed by direct fetch attempts —
    Instagram returned HTTP 429, Facebook returned an empty shell); the news
    sites sit behind bot-detection/Cloudflare challenge pages. Even where
    something is technically viewable, republishing someone else's
    copyrighted photography on a commercial site without confirmed rights
    isn't a call to make unilaterally. **Action needed:** either the studio
    exports and supplies real photo files directly (from their own camera
    roll, or by downloading their own Facebook/Instagram posts), or
    explicitly confirms rights to specific posts/articles so they can be
    used with proper attribution.
  - Also worth noting for future "Achievements" content once confirmed: the
    "Around the World Dance Extravaganza" showcase name and the Croatia World
    Dance Masters trip are real, third-party-reported events, not something
    to add to on-site copy without the studio confirming them directly.

- **Contact page opening hours.** `contact.html` shows a visible "Hours to be
  confirmed" tag rather than inventing a plausible-sounding schedule — the
  same discipline as every other undocumented fact on the site. Class times
  themselves are documented and live on the Timetable page.
- **Formspree endpoint.** `contact.html`'s enquiry form is fully built and
  tested (validation, honeypot, keyboard access all confirmed working), but
  the `action` attribute still points to the documented `FORMSPREE_ID`
  placeholder. `form.js` already detects this and shows a graceful "call or
  WhatsApp instead" fallback rather than silently failing, so this does not
  block launch — but **no enquiry submitted through the form will actually
  reach the studio until a real Formspree ID is supplied.**
- **Three legal pages built as reasonable starting templates, not final legal
  documents:** `privacy-policy.html`, `terms.html` and `popia-notice.html`
  were built to replace what were previously dead footer links (linked from
  every page's footer since the first session, but never built). Each was
  marked on-page with a visible "Draft document — pending legal review"
  notice. **2026-08-20: at the client's explicit request, the POPIA Privacy
  Notice specifically has been taken down from public view ahead of launch**
  — its footer link was removed from all 11 pages and it no longer appears
  in `sitemap.xml`. The drafted page itself was preserved (not deleted) at
  `docs/archive/popia-notice-DRAFT-pending-legal-review.html` so the work
  isn't lost — restore it to the site root and re-add the footer link/sitemap
  entry once the content has been through legal review. `privacy-policy.html`
  and `terms.html` were not part of this request and remain live with their
  existing "Draft document — pending legal review" notice. Specifically:
  - **A qualified attorney should review all three** before the site
    launches, particularly for South African consumer-protection and dance
    studio industry-specific clauses this draft doesn't attempt to cover.
  - **POPIA (South Africa's Protection of Personal Information Act)
    compliance is a legal obligation, not just a nice-to-have.** The POPIA
    notice names Jo Jackson as the acting privacy contact (a reasonable
    operational assumption given she's the documented founder) but flags
    that **formal Information Officer registration with the Information
    Regulator** — a specific POPIA requirement — needs to be completed and
    confirmed by the studio directly; this is not something the website can
    satisfy on its own.
  - All three pages are set to `index, follow` (not `noindex`) to match the
    site's stated SEO target of a clean Lighthouse score across every page;
    confirm this is the studio's preferred indexing choice for these pages
    once real legal review is complete.

## Convention

Mark any placeholder or unconfirmed copy in markup with `<span class="tag
tag--tbc">TBC</span>` (or the `.notice` component for larger blocks) so it
stays visible during review and is easy to grep for before launch.
