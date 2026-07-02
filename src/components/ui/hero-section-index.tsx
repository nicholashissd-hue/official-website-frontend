import Reveal from "./reveal";

export interface HeroIndexItem {
  /** id of the target section (which should carry scroll-mt-24). */
  id: string;
  label: string;
}

/**
 * Numbered index of the page's sections, pinned to a dark hero's bottom
 * edge. Anchors the composition on tall viewports and doubles as
 * navigation — each entry smooth-scrolls to its section. Content is
 * inherently page-specific, so no two heroes read the same.
 */
const HeroSectionIndex = ({ items }: { items: HeroIndexItem[] }) => (
  <div className="relative z-10 border-t border-bg-cream/[0.07]">
    <Reveal immediate delay={0.8} y={12}>
      <nav
        aria-label="Page sections"
        className="container flex flex-wrap items-center justify-center gap-x-8 gap-y-1 py-4 lg:justify-between lg:py-5"
      >
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() =>
              document
                .getElementById(item.id)
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="group flex cursor-pointer items-baseline gap-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-four transition-colors duration-300 hover:text-bg-cream"
          >
            <span className="text-border-light">0{index + 1}</span>
            {item.label}
            <span
              aria-hidden="true"
              className="translate-y-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              ↓
            </span>
          </button>
        ))}
      </nav>
    </Reveal>
  </div>
);

export default HeroSectionIndex;
