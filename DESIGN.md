# ElderOps V3 Design Language

Vibrant, rounded, photo-forward enterprise design (reference: Andela's energy,
not a magazine). Brand palette only — used boldly.

## Type
- Display: **Clash Display** (`font-display`), weight 500–700. Headlines:
  `font-display font-semibold tracking-[-0.02em] leading-[1.05]`.
- Body/UI: **Satoshi** (`font-sans`), 400/500/700.
- Technical labels/data: **IBM Plex Mono** (`font-mono`), 9–11px uppercase tracked.
- **No italics anywhere** (the loaded fonts have none — synthesized italics look broken).
  Accent words use `text-success` (light bg) / `text-border-light` (dark bg), or the
  `<Underlined>` animated swash (`@/components/ui/underline`) for ONE short word.

## Color blocks (sections rotate through these)
- Cream canvas: `bg-bg-cream`
- Deep green: `bg-primary` + `grain relative` + a radial glow div
  (`bg-[radial-gradient(...,#074527,transparent)]`)
- **British racing green** is the direction: large color blocks are DEEP —
  `bg-primary` (#02361b) or `bg-pine` (#074527, + grain + glow) — never bright
- Soft sage: `bg-bg-light` (#e9f3ec) for quiet panels/cards
- Bright greens appear ONLY in small doses: `bg-success` (#069c4e) CTAs/badges,
  `border-light` (#0fb45e) accent text-on-dark and chips,
  `bg-yellow` (#0a8043) pressed/hover states (token names are legacy)
- Card decks may deepen across members (white → sage → pine)
- REJECTED by owner (2026-06-09): yellow-green/lime, pastel mint, and bright
  green as large surfaces. Big areas = dark greens, full stop.
- Never separate sections with hairline borders; contrast comes from the blocks.
- Never stack two full-width horizontal strips back-to-back (ticker + logos,
  logos + uniform stat row = "double banner"); break strips with asymmetric
  compositions (see the home stats bento).

## Shape
- Interactive elements (buttons, chips, tabs): `rounded-full` pills
- Cards: `rounded-3xl` (or `rounded-[2rem]`+ for hero-scale panels)
- Inputs: `rounded-2xl`
- Photos: `PhotoCard` (`@/components/ui/photo-card`) — rounded, brand-graded,
  optional mono caption pill + floating lime chip

## Components (always use these)
- `Eyebrow` — pill chip label with green dot (replaces any hairline eyebrow)
- `SectionHeading` — chip + Clash headline + lede; `dark` prop on green
- `Button` — pill; variants: `primary` (bright green), `light` (lime),
  `outline`, `outline-light`; `withArrow`
- `ArrowLink` — text + circled arrow that fills green on hover
- `Reveal` / `EASE` — entrance motion; stagger with `delay={i * 0.08}`
- Number badges: colored circles, e.g.
  `grid size-10 place-items-center rounded-full bg-success/10 font-display font-semibold text-success`
- List bullets: `size-1.5 rounded-full bg-success` dots (no diamonds, no dashes)

## Motion
- Easing: `EASE = [0.16, 1, 0.3, 1]`; durations 0.4–0.9s
- Cards hover: `transition-all duration-500 hover:-translate-y-1` (+ soft shadow on light)
- Code-built animated artifacts are the brand signature (Matching Engine on Home,
  Delivery Console on Talent) — small SVG/DOM machines with mono labels, pulse dots
  (`animate-pulse-dot`), blink carets (`animate-blink`), drawing paths
  (framer-motion `pathLength`), floating chips (`animate-float`)
- Respect `useReducedMotion`

## Banned (the "AI-generated" tells — never reintroduce)
- Serif fonts, `italic`, `<em>`
- Hairline grids: `gap-px bg-*/10`, `divide-x/y`, `border-l-2` accent bars,
  `border-t border-primary/10` between sections
- Sharp corners (`rounded-none`, `rounded-[2px]`…)
- Bare mono digits as section numbers (use circle badges)
- Full-bleed flat cream sections back-to-back with no color block between
