# Gallery & Image-Placement Audit Checklist

**Status: not yet runnable end-to-end.** This audit needs real photography
in place first (see `docs/PHOTOGRAPHY-BRIEF.md`) — as of 2026-08-06 the site
still runs on placeholder art plus two client-supplied photos, so there is no
photo collection yet to art-direct. What follows is (1) the client's full
brief, preserved as the exact success criteria to run this audit against,
and (2) a technical readiness pass on the underlying grid/CSS mechanics,
completed now because it doesn't require real photos to evaluate.

---

## Part 1 — the brief (run this checklist once real photos exist)

- [ ] Analyse every photograph's orientation (portrait/landscape/square),
      aspect ratio, focal point, and visual weight before placing it.
- [ ] Group portrait (tall) images together where appropriate, rather than
      mixing them randomly with landscape images.
- [ ] Group landscape images together where appropriate to maintain visual
      rhythm.
- [ ] Images align cleanly both vertically and horizontally, consistent
      edges and spacing.
- [ ] No uneven rows caused by mismatched image heights.
- [ ] Image heights distributed intelligently so the page feels balanced
      top to bottom.
- [ ] No stair-stepping, awkward gaps, isolated tall images, or irregular
      whitespace.
- [ ] Gutters, margins, and spacing perfectly consistent across all
      breakpoints.
- [ ] No image appears stretched, squashed, or awkwardly cropped.
- [ ] Cropping preserves the most important subjects — faces, dancers,
      movement.
- [ ] The eye flows naturally through the page with no visual
      interruptions.
- [ ] Premium editorial aesthetic, comparable to modern dance academies and
      luxury portfolio sites.
- [ ] Verified balanced on desktop, tablet, and mobile — no broken
      alignment or inconsistent sizing.
- [ ] Photographs reordered, where it helps, so similar orientations and
      visual weights sit together for the strongest composition.
- [ ] Grid/masonry columns don't run noticeably longer or shorter than
      their neighbours.
- [ ] Lazy loading, responsive image sizes, and modern formats don't
      compromise visual consistency or cause layout shift.

**Success criteria:** the finished galleries should look intentionally
designed, not automatically generated — no awkward gaps, inconsistent
heights, broken alignment, or jarring changes in visual rhythm anywhere on
the site.

---

## Part 2 — technical readiness pass (done 2026-08-06, no real photos needed)

The layout *mechanism* can be evaluated independently of the photos that
will eventually fill it. Verified with a live headless-browser pass
(desktop 1440px and mobile 390px, `gallery.html`, `index.html`,
`programs.html`) against the current placeholder set.

### Already solid — no change made

- **Fixed aspect-ratio tiles, everywhere.** Every image slot (hero, page
  hero, gallery tile, programme card, `.media` component) sits in a CSS
  `aspect-ratio` box with `object-fit: cover`, not an intrinsic-size box.
  This is what prevents mismatched-height rows and stretching/squashing by
  construction — a real photo dropped into any slot is forced to the same
  ratio as its placeholder, so height inconsistency isn't structurally
  possible within one component type.
- **One shared spacing scale.** Every grid's gutter is `var(--space-md)` (or
  another step on the same `--space-*` token scale) — there are no
  per-component magic-number gaps that could drift out of sync across
  breakpoints.
- **Mobile collapse rule already exists.** Below 34em, `.gallery-item--tall`
  and `.gallery-item--wide` both collapse to `aspect-ratio: 1`, so the
  masonry-style rhythm that works at desktop column counts doesn't produce
  stretched or awkwardly cropped tiles on a single-column mobile layout.
- **No layout-shift risk.** Every `<img>` carries explicit `width`/`height`
  attributes (or sits in an `aspect-ratio` box) and `loading="lazy"`, so the
  browser reserves the correct space before the image loads — confirmed via
  a live pass with `console --errors` clean and no visible reflow.

### Fixed today

- **`grid-auto-flow: dense` added to `.gallery-grid`** (`assets/css/main.css`).
  It was missing — meaning a `--tall`/`--wide` spanning tile that didn't fit
  the current auto-placement row was leaving its cell empty rather than
  letting a later square tile backfill it. This is the single biggest
  mechanical cause of the "awkward gaps" and "stair-stepping" the brief
  warns against, and it's now fixed sitewide.
- **Per-image focal-point hook added** to every `object-fit: cover` image
  rule (hero, page hero, gallery item, programme card, `.media`): each now
  reads `object-position: var(--focal-point, 50% 50%)`. Today this changes
  nothing (every image still centre-crops, same as before) — but once real
  photos land, any individual `<img>` can carry
  `style="--focal-point: 30% 15%"` to pull the crop toward a face or a
  dancer's leading edge, without writing new CSS. Use this whenever a
  centre-crop would cut off the subject the brief says to preserve.

### Confirmed defect — curation issue, not a CSS bug

Live-screenshotted the Home page's "Featured Moments" preview grid (7 tiles:
1 wide + 1 tall + 5 square) at 1440px. Even with `dense` packing, the last
tile (currently `jo-jackson.webp`) sits alone with a large empty gap to its
right — exactly the "isolated tall image, irregular whitespace" pattern the
brief prohibits.

**Root cause:** 7 items with that specific span mix don't sum to a multiple
of the grid's column count (4 columns at this width), so there's nothing
left to backfill the last row with, dense or not. This isn't fixable in CSS
alone — it needs to be fixed at curation time.

**Rule to apply once real photos are chosen for this preview grid (and any
other curated, fixed-count grid on the site):** count the columns at your
target breakpoint, then choose the number of tiles and which ones span 2
columns/rows so the total fills complete rows. For a 4-column grid, that
means the sum of column-units used (1 per square, 2 per wide) is a multiple
of 4 in every row, and a tall tile's 2-row span is matched by enough
same-row content beside it. Re-check this specifically at ~1440px, ~1200px,
and ~1024px, since `auto-fill` makes the column count fluid — a mix that
tiles cleanly at 4 columns may not at 3.

### Still open — depends on real photos existing

- Actually classifying each real photo's orientation/aspect ratio/focal
  point and choosing which grid slot (square/tall/wide) it belongs in —
  this is the core of the brief and can't be done against placeholder art.
- Grouping portraits with portraits and landscapes with landscapes "where
  appropriate" is a curatorial judgment call that needs the real photos in
  hand to make well.
- `srcset`/`<picture>`/modern-format (WebP/AVIF) responsive delivery isn't
  implemented yet for any image. This is worth doing once real photos exist
  (their actual delivered dimensions should drive the `srcset` widths,
  rather than guessing sizes now against placeholder SVGs that don't have a
  meaningful "native resolution").
- Tablet-width (768–1024px) visual pass wasn't screenshotted in this
  session (only desktop 1440px and mobile 390px) — worth a dedicated look
  once real photo aspect ratios are in place, since that's where the
  auto-fill column count transitions from 4 to 2–3 and curated grids (like
  Featured Moments) are most likely to need re-checking against the tiling
  rule above.

**When ready to run Part 1 for real:** work through the checklist per page
(Home preview grid, full Gallery grid, Programme cards), re-run the same
headless-browser screenshot pass at 1440px/1024px/390px used for this audit,
and update this file's status line.
