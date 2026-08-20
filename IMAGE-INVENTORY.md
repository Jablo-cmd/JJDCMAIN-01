# Image Inventory — Jo Jackson Dance Company

**Purpose:** the master reference for replacing every placeholder image on the
site with real JJDC photography, once the studio supplies it. Every image
currently live on the site (across all five built pages) is listed below —
not just the Gallery page — so this document can be worked through once,
top to bottom, rather than rediscovered page by page.

**How to use this document:** for each row, source or commission a real photo
matching the description/orientation/crop, save it over the existing file
path (or update the `src` if the filename changes), update the `alt` text in
the HTML to the "Suggested Final Alt Text" column (drop the current
"Placeholder artwork:" prefix — that prefix must **not** survive into the
real image's alt text), and flip the Status column to `Final`. `Status:
Client Required` rows need studio-supplied source material before a
recommendation can even be made (see the note on each).

None of the recommended-resolution figures below are arbitrary: each is
roughly 2x the image's current display size, so a supplied photo still looks
sharp on high-density ("retina") screens rather than just matching the
placeholder's own modest intrinsic size.

**Layout note:** every placeholder is a scalable vector illustration, so the
current layout (grids, aspect ratios, crops) already reflects the final
intended proportions. Dropping in a real photo at the same aspect ratio
requires no layout changes — that was a deliberate constraint of this build
(see `docs/PROJECT-HANDOVER.md`).

**Art direction note (2026-08-06):** the per-row "Suggested Crop" descriptions
below are still accurate for framing/orientation, but the studio's brand
personality, visual style (natural light, warm grade, editorial quality) and
full shot list now live in one canonical document: `docs/PHOTOGRAPHY-BRIEF.md`.
Source photography against that brief, not against style cues inferred from
individual rows here. As of this date, all 30 placeholder SVGs on the site
have also had their baked-in "PLACEHOLDER" caption text and ghost "JJDC"
wordmark removed — placeholder status is now conveyed only through real HTML
(`alt` text and, where present, an on-hover caption), never through pixels in
the image itself, in line with the brief's "no text embedded in images" rule.

---

## Status legend

- **Placeholder** — a placeholder SVG illustration is live now; replace when real photography is supplied.
- **Client Required** — cannot be sourced or finalised without the studio providing source material or a decision first (noted per row).
- **Final** — real, approved image in production. (No rows currently carry this status — nothing on the site is final photography yet.)

---

## Home (`index.html`)

| Image ID | Section | Description | Orientation | Recommended Min. Resolution | Suggested Crop | Suggested Final Alt Text | Status |
|---|---|---|---|---|---|---|---|
| `hero-home.svg` | Hero | Full-bleed cinematic hero image — dancers in motion, the site's single biggest first impression | Landscape (tall banner) | 3200×1867px | Wide shot, subjects placed right-of-centre so the headline/CTA (left-aligned, dark scrim) doesn't cover faces | A dancer mid-movement on the JJDC studio floor | Placeholder |
| `jo-portrait.jpg` | Meet Jo (preview) | Warm, professional portrait of Jo Jackson | Square (854×854) | Supplied at 854×854; ~1600px+ would give more room before visible softness at very large display sizes | Head-and-shoulders to half-body, soft studio or natural light, genuine smile — `.media--portrait` crops to 4:5 automatically via `object-fit: cover`, no distortion | Portrait of Jo Jackson, founder of Jo Jackson Dance Company | **Final** — real photo supplied and confirmed 2026-08-01, replacing the SVG placeholder |
| `programs/pre-badge.svg`, `badge.svg`, `jazz.svg`, `hip-hop.svg`, `contemporary.svg`, `lyrical.svg`, `private-lessons.svg` (7 files) | Programs Overview (preview) | One representative image per remaining programme — same 7 files reused on Programs page | Landscape | 1600×1200px each | 4:3 medium shot, one class/style clearly identifiable per image | e.g. "Hip Hop class in full energy" — one specific, accurate sentence per programme, not a generic label | Placeholder (×7) |
| `programs/adult-jazz.jpg` | Programs Overview (preview) + Programs page | Real photo, supplied 2026-08-01 — an Adult Jazz dancer in a dynamic pose (styled editorial-shoot lighting) | Square (736×736) | Sufficient for current 4:3-cropped tile size | Displays via `.program-card__media` (object-fit: cover, aspect-ratio 4:3, no distortion) | An Adult Jazz dancer striking a dynamic pose | **Final** — real photo, client-confirmed 2026-08-01 |
| `programs/competition-teams.svg` (was `competition-teams.jpg`) | Programs Overview (preview) + Programs page | A JJDC competition team, group formation | Portrait crop → 4:3 tile | 1600×1200px | Full-body group shot, stage or studio lighting, competition costuming visible, no overlays | A JJDC competition team in formation | **Placeholder (reverted 2026-08-06)** — the supplied `.jpg` had decorative butterfly-sticker overlay graphics and a faint watermark-like text fragment consistent with a social-media repost. That directly conflicts with the studio's brief (no stickers, no watermarks, no screenshots — see `docs/PHOTOGRAPHY-BRIEF.md`), so it was pulled from production rather than shipped "with a caveat." Needs a clean, unedited source file from the studio's own camera roll. |
| `studio-culture.svg` | Why JJDC? (dark section) | Dancers encouraging one another between routines — supports the studio's family/community message | Landscape | 1800×1350px | Candid, mid-shot, two or more dancers interacting (not posed solo) | Dancers encouraging one another between routines | Placeholder |
| `gallery-09/02/01/06/04/11.svg` | Gallery Preview (6 of the 12 gallery images) | Curated highlight reel — see Gallery section below for the full 12-image set these are drawn from | Mixed | See Gallery section | See Gallery section | See Gallery section | Placeholder (shared with Gallery page) |

## About (`about.html`)

| Image ID | Section | Description | Orientation | Recommended Min. Resolution | Suggested Crop | Suggested Final Alt Text | Status |
|---|---|---|---|---|---|---|---|
| `hero-about.svg` | Page Hero | Supports the "why trust JJDC" narrative | Landscape (tall banner) | 3200×1333px | Wide shot, warm/welcoming tone, some negative space for the breadcrumb/headline overlay | A dancer connecting with a teacher during class | Placeholder |
| `home-journey.svg` | Studio Story / first-class moment | A young dancer's first class — supports the "everyone starts somewhere" narrative | Landscape | 1800×1350px | Medium shot, a visibly new/young dancer, encouraging teacher present in frame if possible | A young dancer's first class at JJDC | Placeholder |
| `jo-portrait.jpg` | Meet Jo (deeper bio section) | Same portrait as Home; reused deliberately for consistency, not a separate photo | Square (854×854) | Same as Home's Meet Jo entry above | Same as Home's Meet Jo entry above | Portrait of Jo Jackson, founder of Jo Jackson Dance Company | **Final** — same file as Home, confirmed 2026-08-01 |
| `studio-space.svg` | Teaching Philosophy / What Makes Us Different | The studio floor, mirrors and barre — establishes the physical space | Landscape | 1800×1350px | Wide establishing shot of an empty or lightly-populated studio room, clean and well-lit | The studio floor, mirrors and barre at Jo Jackson Dance Company | Placeholder |
| `guest-choreographer.svg` | Studio Culture | A guest choreographer leading a workshop — supports the "brings industry professionals to East London" claim | Landscape | 1800×1350px | Candid workshop shot, choreographer actively teaching/demonstrating, students visible and engaged | A guest choreographer leading a workshop at JJDC | Client Required — needs a specific, real workshop photo with the choreographer's permission to use their likeness; do not use a generic stand-in once real workshops are photographed |

## Programs (`programs.html`)

| Image ID | Section | Description | Orientation | Recommended Min. Resolution | Suggested Crop | Suggested Final Alt Text | Status |
|---|---|---|---|---|---|---|---|
| `hero-programs.svg` | Page Hero | A class in progress across several dance styles | Landscape (tall banner) | 3200×1333px | Wide shot capturing visible variety (more than one style/age group if possible) | A class in progress at Jo Jackson Dance Company | Placeholder |
| `programs/*.svg` (7 remaining files) | Programme Overview + Individual Programme Details (each file used twice on this page) | Same 7 placeholder programme images as Home's preview | Landscape | 1600×1200px each | 4:3, one style clearly visible, ideally students actually enrolled in that programme | See Home's programme row — must stay identical across Home and Programs since it's the same file | Placeholder (×7, shared with Home) |
| `programs/adult-jazz.jpg` | Programme Overview + Individual Programme Details (used twice on this page) | Same real photo as Home's preview | Square | See Home's row above | See Home's row above | See Home's row above | **Final**, shared with Home |
| `programs/competition-teams.svg` | Programme Overview + Individual Programme Details (used twice on this page) | Same placeholder as Home's preview | Landscape | See Home's row above | See Home's row above | See Home's row above | **Placeholder**, shared with Home — see Home's entry above |

## Timetable (`timetable.html`)

| Image ID | Section | Description | Orientation | Recommended Min. Resolution | Suggested Crop | Suggested Final Alt Text | Status |
|---|---|---|---|---|---|---|---|
| `hero-timetable.svg` | Page Hero | A class in progress across several dance styles (same brief as Programs' hero; different file) | Landscape (tall banner) | 3200×1333px | Wide shot, same guidance as Programs hero | A class in progress at Jo Jackson Dance Company | Placeholder |

No other images appear on the Timetable page — its content is schedule data, not photography.

## Gallery (`gallery.html`)

| Image ID | Used In | Description | Orientation | Recommended Min. Resolution | Suggested Crop | Suggested Final Alt Text | Status |
|---|---|---|---|---|---|---|---|
| `hero-gallery.svg` | Page Hero | A collage-style hero representing the whole gallery experience | Landscape (tall banner) | 3200×1333px | Wide shot or a considered collage/montage; should read well with the headline overlay | A collage of dance moments across the studio | Placeholder |
| `gallery-01.svg` | Explore the Gallery (Studio Classes) | Class in session | Square | 1800×1800px | Tight-to-medium shot, one class clearly in progress | Class in session at Jo Jackson Dance Company | Placeholder |
| `gallery-02.svg` | Featured Moments + Explore the Gallery (Competitions, Team Moments) | Competition team on stage | Portrait | 1500×2000px | Full-body group shot, stage lighting, competition costuming visible | JJDC competition team performing on stage | Placeholder |
| `gallery-03.svg` | Explore the Gallery (Performances) | Backstage before a performance | Landscape | 2000×1500px | Candid backstage moment, genuine anticipation/nerves/excitement, not posed | Dancers backstage before a performance | Placeholder |
| `gallery-04.svg` | Explore the Gallery (Studio Classes) | Technique at the barre | Square | 1800×1800px | Medium shot, clear barre-work technique visible | A dancer practising technique at the barre | Placeholder |
| `gallery-05.svg` | Explore the Gallery (Competitions) | Celebrating a result | Landscape | 2000×1500px | Candid celebration moment — genuine joy, medals/trophies if applicable | Dancers celebrating a competition result | Placeholder |
| `gallery-06.svg` | Featured Moments + Explore the Gallery (Studio Classes, Team Moments) | Friendships between routines | Square | 1800×1800px | Candid, warm, two or more dancers interacting between classes | Dancers sharing a moment of friendship between routines | Placeholder |
| `gallery-07.svg` | Explore the Gallery (Performances) | Solo performance under stage lights | Portrait | 1500×2000px | Full-body solo shot, dramatic stage lighting | A solo dancer performing under stage lights | Placeholder |
| `gallery-08.svg` | Featured Moments + Explore the Gallery (Workshops) | Guest workshop with an industry professional | Square | 1800×1800px | Candid workshop shot, professional actively teaching, students engaged | A guest workshop with an industry dance professional | Client Required — same permission/likeness caveat as About's `guest-choreographer.svg` |
| `gallery-09.svg` | Featured Moments + Explore the Gallery (Performances, Team Moments) | Full company on stage | Landscape | 2000×1500px | Wide full-company shot, stage lighting, maximum scale/energy | The full JJDC company performing on stage | Placeholder |
| `gallery-10.svg` | Explore the Gallery (Studio Classes) | Warm-up before class | Square | 1800×1800px | Candid warm-up/stretch moment, relaxed atmosphere | Dancers warming up before class | Placeholder |
| `gallery-11.svg` | Featured Moments + Explore the Gallery (Team Moments) | Team photograph in JJDC apparel | Square | 1800×1800px | Posed group shot, official JJDC branded apparel clearly visible | A JJDC team photograph in official studio apparel | Placeholder |
| `gallery-12.svg` | Explore the Gallery (Studio Classes) | Rehearsal in the studio | Landscape | 2000×1500px | Wide rehearsal shot, mirrors/barre visible, working (not performing) energy | A rehearsal in progress at the JJDC studio | Placeholder |
| `hiphop-dancer.jpg` | Featured Moments *(not used there)* + Explore the Gallery (Hip Hop) | Real photo, supplied 2026-08-01 — a dancer in a dynamic Hip Hop pose | Portrait (1200×1800) | Supplied resolution is sufficient for this tile size; fine as-is | Already cropped/composed as supplied; displays via `.gallery-item--tall` (object-fit: cover, no distortion) | A dancer in a dynamic Hip Hop pose | **Final** — real photo, fills the previously-empty Hip Hop category |
| `jo-jackson.webp` | Featured Moments + Explore the Gallery (Performances) | Real photo, supplied 2026-08-01 — a young dancer mid-leap on a lit stage | Landscape (640×426) | Below the general 2000×1500px recommendation for this tile size — displays acceptably at current grid sizes but would benefit from a higher-resolution version if used larger (e.g. full-bleed) | As supplied | A young dancer captured mid-leap on stage under coloured lighting — **not** a photo of Jo Jackson herself despite the filename; captioned by what the photo actually shows, not by its filename | **Final**, with a caveat — real photo, but flag the filename mismatch to the studio (see `CONTENT-TO-CONFIRM.md`) so a corrected/relabelled version can replace it if this was meant to depict something else |

**On the Gallery page's category filters:** two requested filter categories —
**Jazz** and **Contemporary** — still show a "More Photos Coming Soon" empty
state rather than an image; **Hip Hop** now has a real photo (`hiphop-dancer.jpg`,
supplied 2026-08-01). None of the remaining placeholder captions specify Jazz
or Contemporary specifically, so tagging one as either would assert something
about the image that isn't actually true of it — the project's content rule
against presenting a guess as fact applies here too, even for placeholder art.
**When real photography arrives, tag it directly by style** (add `jazz` and/or
`contemporary` to the relevant `data-categories` attribute in `gallery.html`)
rather than retrofitting a style label onto the current generic set.

## Reserved for pages not yet built

| Image ID | Intended Page | Description | Orientation | Status |
|---|---|---|---|---|
| `hero-contact.svg` | Contact (not yet built) | Hero image for the Contact page | Landscape (tall banner) | Placeholder — reserved, unused until Contact page is built |
| `hero-404.svg` | 404/error page (not in original 6-page scope) | Hero image for a not-found page | Landscape (tall banner) | Placeholder — reserved, unused; a 404 page was not part of the original brief |

## Site-wide / non-photographic assets

| Image ID | Used In | Description | Orientation | Recommended Min. Resolution | Status |
|---|---|---|---|---|---|
| `og-default.png` | Every page's Open Graph / Twitter Card meta tags | Real JJDC logo (`jjdclogo.jpg`, supplied 2026-08-01) composited onto the site's existing dark-teal gradient backdrop | Landscape | 1200×630px (current size, unchanged) | **Final** — updated 2026-08-01; still a logo-on-gradient composition rather than photography, which is a reasonable OG image but a photography-based one would likely drive more social engagement once real event photos exist |
| `apple-touch-icon.png` | Every page's `<head>` (favicon / home-screen icon) | Real JJDC logo (`jjdclogo.jpg`), resized to favicon size | Square | 180×180px (current), master source is 447×447px | **Final** — updated 2026-08-01 to use the real logo instead of the generic circular placeholder mark |
| `jjdclogo.jpg` | Source file for the two rows above, **and now the header/footer nav brand mark on all 9 pages** | Real JJDC logo, supplied 2026-08-01 (star/speech-bubble mark, matches the site's exact turquoise brand colour) | Square (447×447) | Sufficient for favicon/OG/40px nav-mark use at current sizes; would need a larger/vector source to safely go bigger | **Final**, sitewide. Updated 2026-08-01: replaces the original line-art SVG symbol (`assets/icons/sprite.svg#logo`) in `.brand__mark` on every page (header + footer, 18 occurrences across all 9 pages), per explicit client request. `.brand__mark` CSS gained `border-radius: var(--radius-sm)` + `object-fit: cover` to give the square raster logo a soft rounded-square treatment consistent with the site's visual language. Verified against both header states (transparent-overlay and solid-scrolled) and the dark footer — reads cleanly in all three since the logo's own teal background already matches the brand accent colour. Re-ran the full site-wide axe/Lighthouse suite afterward: zero regressions, all 9 pages still 100/100/100/100 desktop, 98+/100/100/100 mobile. |
| `assets/icons/sprite.svg` | Every page (nav, cards, buttons, footer, social links) | Hand-drawn icon set (chevrons, social icons, etc.) — not photography | — | — | Final — this is original iconography, not a photography placeholder, and does not need replacing |

---

## Summary counts (updated 2026-08-06, post photography-brief cleanup)

- **43** distinct image files now referenced across the six built pages (7 remaining programme images and 6 SVG gallery images are each reused across more than one page/section, which is why this count is lower than the sum of every row above).
- **7** images are `Final`, real supplied photography/branding: Jo Jackson's portrait (`jo-portrait.jpg`, used on both Home and About), the real JJDC logo (`jjdclogo.jpg`, used to update `og-default.png` and `apple-touch-icon.png`), two Gallery photos (`hiphop-dancer.jpg`, `jo-jackson.webp`), and one Programme photo (`adult-jazz.jpg`, used on Home and Programs).
- **2** images are flagged `Client Required`: the About page's guest choreographer photo and the Gallery page's guest workshop photo (`gallery-08.svg`) — both need the studio to supply a specific real photo (with any necessary third-party permission), since a generic stand-in isn't appropriate for a named claim about bringing in industry professionals.
- **1** flag on a supplied photo, client-confirmed as authentic/authorized but worth a second look: `jo-jackson.webp`'s filename implies it depicts Jo Jackson herself, but the photo shows a child dancer — captioned accurately rather than trusting the filename.
- **1** supplied photo pulled from production and reverted to placeholder (2026-08-06): `programs/competition-teams.jpg` carried decorative sticker-overlay graphics and a faint watermark-like text fragment consistent with a social-media repost — this conflicts with the studio's photography brief (`docs/PHOTOGRAPHY-BRIEF.md`), so rather than ship it "with a caveat" it was removed pending a clean source file. `programs/competition-teams.svg` (new, text-free) stands in its place.
- **4 unused duplicate files removed** during the 2026-08-01 launch-readiness audit, in line with "no unused assets where practical": `Jo potrait.jpg`, `programs/lovely dancers.jpg` and `programs/adult-jazz-dancer.jpg` (the original odd-named/spaced client uploads — cleanly-named, referenced copies already existed under `jo-portrait.jpg`, `competition-teams.jpg` and `adult-jazz.jpg`), and the now-fully-superseded `jo-portrait.svg` placeholder. No content was lost; each had an identical, in-use copy under a proper filename first.
- **32** images are SVG placeholders (31 original + the restored `competition-teams.svg`), all text-free as of 2026-08-06 — see the art-direction note above.
- **Two real photos in production still read as stock/off-brand against the new brief** (not embedded-text/watermark violations, so not pulled, but flagged for the studio): `programs/adult-jazz.jpg` (moody fashion-editorial styling — concrete backdrop, hat, high-fashion tailoring — tonally distant from a family studio) and `gallery/hiphop-dancer.jpg` (flat commercial-studio grey backdrop, generic posed-model look). Both should be replaced once the shoot in `docs/PHOTOGRAPHY-BRIEF.md` happens.
