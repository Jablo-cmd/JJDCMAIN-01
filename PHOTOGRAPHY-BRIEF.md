# Photography Brief — Jo Jackson Dance Company

**Purpose:** a single, ready-to-hand-to-a-photographer brief for the one shoot
that replaces every stock photo, screenshot, and placeholder on the site with
real JJDC photography. The goal: every image on the website should look like
it was taken on the same day, by the same photographer, in the same light.

This document is the canonical source for *style and direction*. For the
exact file each shot replaces, its dimensions, and its current status, see
`docs/IMAGE-INVENTORY.md` — that file still tracks orientation/crop/filename
detail per image; this one sets the brand direction that should govern all of
it.

---

## Brand personality

- Elegant but approachable
- Professional dance training
- Warm, inclusive and family-friendly
- Aspirational without feeling elitist
- Energy, movement and confidence

## Visual style — non-negotiable

- Natural light wherever possible
- Warm colour grading, consistent white balance across every shot
- Soft contrast — editorial quality, not high-contrast commercial/sports style
- Authentic expressions — genuine moments, not posed-for-camera smiles
- **Real JJDC students and teachers.** No models, no stock photography.
- **No text, logos, posters, signage, or social media UI baked into any
  image.** No watermarks. No stickers or graphic overlays. If a location has
  visible signage or a poster in frame, reframe or retouch it out — this
  applies to every image on the site, not only the hero.
- Clean, uncluttered backgrounds — the studio's own architecture (barres,
  mirrors, wood floor) is the backdrop; avoid busy or unrelated clutter in
  frame.

## Locations

- The JJDC studio floor — wide shots and close-ups
- Ballet barres
- Mirrors (used deliberately — reflections can double a moment's energy)
- Wooden dance floors
- Reception area
- Theatre stage during rehearsal (working light, not performance-only)
- Stage performance under theatrical lighting

## Composition rules

- Leave generous negative space on at least one side of hero/banner shots for
  overlaid headings and CTA buttons (see Home Hero spec below — this is not
  optional for that shot).
- Avoid tightly cropping subjects against the frame edge — give the image
  room to breathe.
- Shoot **both landscape and portrait** — the site's grid needs both (see
  shot list below).
- Keep backgrounds clean; don't let a second, unrelated class or storage
  clutter compete with the subject.

---

## Home hero — special direction

The current hero composition problem: the site already overlays an eyebrow
label, H1, supporting paragraph, and two CTA buttons directly on the hero
image (`index.html`, `.hero__content`). A photo with its own text, banner, or
signage competes with that overlay and weakens the hierarchy.

**Brief for this shot specifically:**
- No visible text, banners, posters, or signage anywhere in frame.
- Compose with the subject weighted to the **right** of frame, leaving open,
  relatively simple space on the **left two-thirds** for the H1/lede/CTAs to
  sit over. (The site's dark gradient scrim is already built to support this
  — it darkens the left/bottom for text legibility and keeps the right side
  brighter so the photo still "does its emotional work" there. No CSS change
  needed once a matching photo exists — see `assets/css/main.css`, `.hero__media::after`.)
- Should read, at a glance, as movement + joy + professionalism — not a
  static posed group.
- Concepts that fit: Jo coaching a student mid-movement; a dancer caught
  mid-jump in natural light; a rehearsal moment with dancers moving across
  frame; a wide, elegantly composed studio scene.
- Avoid tight close-ups that leave no room for the text overlay.
- Delivered size: landscape, minimum 3200×1867px (current placeholder slot:
  `assets/images/hero-home.svg`, replace with `hero-home.jpg`/`.webp`).

---

## Shot list, mapped to every image slot on the site

Genuine, in-the-moment shots — not posed portraits — for each of the
following. Where a specific website slot already exists, it's named; where a
category maps to several slots (e.g. gallery), shoot enough variety to fill
all of them without repeating a near-identical frame.

| # | Moment to capture | Fills these site slots |
|---|---|---|
| 1 | Teacher helping a student adjust technique, one-on-one | `hero-about.svg`, `gallery-04.svg` (barre technique) |
| 2 | Students laughing together between classes | `studio-culture.svg`, `gallery-06.svg` |
| 3 | Stretching, pre- or post-class | `gallery-10.svg` (warm-up variant) |
| 4 | Warm-up as a group | `gallery-10.svg`, `hero-timetable.svg` |
| 5 | Ballet technique at the barre | `gallery-04.svg`, a Pre Badge/Badge programme card |
| 6 | Jazz class in motion | `programs/jazz.svg` |
| 7 | Hip Hop class, full energy | `programs/hip-hop.svg` (also replaces the current stock-styled `gallery/hiphop-dancer.jpg`) |
| 8 | Contemporary movement | `programs/contemporary.svg` |
| 9 | Small group working together on choreography | `gallery-01.svg`, `gallery-12.svg` (rehearsal) |
| 10 | Parents watching proudly from the reception/viewing area | new — supports "family-friendly" brand personality, no current slot; strong candidate for a Testimonials-section or About-page image |
| 11 | Stage rehearsal, working light, mid-movement | `gallery-03.svg` (backstage), `gallery-12.svg` |
| 12 | Full company on stage, theatrical lighting | `gallery-09.svg` (also replaces `programs/competition-teams.svg`, portrait crop) |
| 13 | Solo performance under stage lights | `gallery-07.svg` |
| 14 | Team celebrating a result (medals, trophies, genuine joy) | `gallery-05.svg` |
| 15 | Team photo in JJDC apparel, posed but warm | `gallery-11.svg` |
| 16 | Studio space, empty or lightly populated — floor, mirrors, barre | `studio-space.svg` |
| 17 | A young dancer's first class — encouraging teacher present | `home-journey.svg` |
| 18 | Adult Jazz class or dancer, dynamic pose, at JJDC (not a fashion-editorial styled shot) | replaces `programs/adult-jazz.jpg` |
| 19 | Private lesson, one teacher + one student | `programs/private-lessons.svg` |
| 20 | A class in progress showing more than one style/age group, wide shot | `hero-programs.svg`, `hero-gallery.svg` |

**Guest choreographer / workshop shots** (`guest-choreographer.svg`,
`gallery-08.svg`) are marked `Client Required` in `docs/IMAGE-INVENTORY.md` —
these need a real, permissioned photo of an actual guest instructor, not a
generic stand-in, so schedule this shot for the studio's next real workshop
rather than staging one.

### Portrait vs. landscape, by slot

- **Portrait needed:** `gallery-02.svg` (competition team, stage), `gallery-07.svg` (solo, stage), `programs/competition-teams.svg`, Jo's portrait re-shoot if desired (currently `jo-portrait.jpg`, already real and approved — no action needed).
- **Landscape needed:** every hero (`hero-*.svg`), `gallery-03.svg`, `gallery-05.svg`, `gallery-09.svg`, `gallery-12.svg`, `studio-culture.svg`, `studio-space.svg`, `guest-choreographer.svg`, `home-journey.svg`, all seven `programs/*.svg`.
- **Square:** `gallery-01.svg`, `gallery-04.svg`, `gallery-06.svg`, `gallery-08.svg`, `gallery-10.svg`, `gallery-11.svg`.

Exact pixel dimensions per slot are already documented in
`docs/IMAGE-INVENTORY.md` — use those, not the numbers above, when briefing
final delivery sizes.

---

## Coverage this brief does not yet include

- **Teachers.** No dedicated "meet the teachers" grid exists on the site yet
  beyond Jo herself — flag to the studio whether individual teacher portraits
  should be commissioned in the same session, since the shoot is already
  scheduled.
- **Testimonials section imagery.** The Home page's testimonials block is
  currently text-only (see `docs/CLIENT-CHECKLIST.md` — real testimonials are
  still outstanding). If real testimonials arrive with the family's
  permission, small accompanying portraits shot in this same session would
  keep them visually consistent with everything else; not required if the
  studio prefers text-only quotes.
- **CTA-section imagery.** Most CTA sections on the site are text/colour
  blocks, not photo-backed — the brand's warm colour palette carries them.
  Only flag this if the studio specifically wants a photographic CTA
  treatment; nothing currently requires one.

## What happens once real photos arrive

Per `docs/IMAGE-INVENTORY.md`'s existing workflow: save the real photo over
the placeholder's file path (or update the `src` attribute if the filename
changes), replace the `alt` text with the "Suggested Final Alt Text" already
written for that slot (dropping the "Placeholder artwork:" prefix), and flip
the row's status to `Final`. No layout or CSS changes should be needed — the
grid's aspect ratios were fixed from the start specifically so a same-ratio
real photo drops in cleanly.
