# ElderOps V4 Design Language

"Apple met BCG X." Cinematic near-black photography at the openings, light
editorial body between them, one action colour, and hierarchy carried by scale
rather than decoration. This file supersedes the V3 doctrine (Clash Display,
pill CTAs, rounded cards, saturated green surfaces), which is retired: if you
find any of it in the tree it is a leak, not a precedent.

## Surfaces

- `bg-paper` (#fcfcf6) and `bg-bone` (#f1eee7) are the body of the site.
- `bg-nearblack` (#0a1a12) appears in exactly three places: hero scrims, the
  end-of-page CTA band, and the footer.
- **No saturated green surfaces.** Green is light, never a field.
- Sections alternate surfaces; never place two of the same adjacent.

## Colour

- `--color-ink` (#0b2418) is text. `--color-sub` is the quiet tone.
- `--color-signal` (#0fb45e) is the **one** action colour, with dark text on
  it. It is for buttons, small data numerals, and focus rings on dark ground.
  Never as body-text colour on paper: it measures 2.7:1 there.
- `--color-danger` (#a4161a) is the only other saturated colour, for errors.
- Focus is a pair: `--focus-ring` is ink on light, and flips to signal on
  dark surfaces. Never one ring for both.

## Type

One scale, defined in `src/index.css` under `@theme`. Every step carries its
own line-height and tracking so leading cannot drift from size.

- Display: `text-hero` (home only) → `text-title` (page openers, full-bleed
  statements, CTA band) → `text-heading` (section h2) → `text-subhead` (h3) →
  `text-lede` (a large body statement).
- Figures: `text-stat`, `text-stat-sm`. A figure never outranks the hero.
- Body: `text-lg` / `text-base` / `text-sm` / `text-xs`, where `text-xs` also
  serves the mono data labels.
- **Never write an arbitrary `text-[..px]`.** Add or reuse a token. The site
  previously drifted to 16 body sizes between 10px and 19px.
- Fonts: General Sans 700 display, Satoshi body, IBM Plex Mono for genuine
  data only (numerals, field keys). Clash Display is retired.

## Banned patterns

These were tried and rejected. Do not reintroduce them.

- The mono-caps + wide-tracking eyebrow with a rule. Section context is a
  sentence-case `Kicker` in the display family, seated above the headline.
- Tile walls, equal-thirds stat rows, and left chapter rails. Hierarchy over
  symmetry: one large element with subordinates.
- Sticky or parallax columns.
- Rounded cards and pill buttons. Radius (14px) belongs to buttons and chips
  only; photographs and cards are square-cornered, always.
- Shadows and coloured glows. Depth comes from hairlines and surface changes.
- Decorative use of the action colour, including coloured paragraph rails.

## Photography

- Every frame is born dark: dusk or night, near-black shadow, emerald accents.
- It shows people or real work. Never empty architecture, never hardware
  catalog shots.
- It must mean the thing it sits beside, not decorate it.
- **No legible or pseudo-legible text in any frame, ever.** Gibberish writing
  is the one artifact that cannot be graded out, and a tiled or duplicated
  background is an immediate reject. QC every asset at full size.
- Screens are never shown: compose monitors from behind, or out of frame.
- Never caption a generated photograph as a record of real ElderOps people or
  work, and never name the people in it.

## Copy

- No em or en dashes anywhere, including email subjects and alt text.
- No staffing vocabulary: shortlist, candidates, bench, matching.
- No hype, no exclamation points, and **no invented statistics**. A figure
  ships only when it is real and attributable; otherwise state the claim
  qualitatively. The site previously published a headline number it
  disclaimed as a sample, which invites the reader to discount everything.
- One CTA system: "Get in touch" on buyer pages, "Start the conversation" on
  the contact form's submit only, "Apply to join the network" on Careers only.

## Motion

- One entrance: `Reveal`, a quiet rise and fade with a long settle.
- Entrances start at zero opacity, so anything animated must carry the
  `data-reveal` hook that the print and reduced-motion rule resets. Without
  it pages print blank.
- The router is wrapped in `MotionConfig reducedMotion="user"`; respect it.
- Interactive elements answer: a lift and a brighter fill on hover, a settle
  and slight compression on press. Tone shifts, never shadows.

## The hero film

- The poster is always the shipped film's own frame zero, or the swap from
  still to motion is visible.
- The film must start **and** end on full-brightness frames, or the loop
  blinks. Check with `ffprobe … signalstats` at both ends.
- It streams with no buffering gate; keep the bitrate well under a normal
  connection so playback cannot outrun the download.
- Phones get a separate smaller encode, chosen at mount.

## Structure

- Every page: dark photographic opening, alternating light bands, the shared
  CTA band. Contact, Careers and the legal pages opt out of the band.
- Content lives in `src/contents/`. `taxonomy.ts` is the single source for the
  eight capabilities and the method, including each step's "what you keep"
  line. Never restate one page's argument on another.
