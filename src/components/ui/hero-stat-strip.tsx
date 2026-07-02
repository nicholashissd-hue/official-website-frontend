import Reveal from "./reveal";

export interface HeroStat {
  /** Highlighted figure (bright green). Optional — some items are plain labels. */
  value?: string;
  label: string;
}

/**
 * Quiet mono stat strip pinned to a dark hero's bottom edge — the page-level
 * counterpart of the home hero's logo strip. Anchors the composition so no
 * dead band is left under the CTAs on tall viewports.
 */
const HeroStatStrip = ({ stats }: { stats: HeroStat[] }) => (
  <div className="relative z-10 border-t border-bg-cream/[0.07]">
    <Reveal immediate delay={0.8} y={12}>
      <div className="container flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 lg:justify-between lg:py-6">
        {stats.map((stat) => (
          <p
            key={stat.label}
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-four"
          >
            {stat.value && (
              <span className="mr-2 text-border-light">{stat.value}</span>
            )}
            {stat.label}
          </p>
        ))}
      </div>
    </Reveal>
  </div>
);

export default HeroStatStrip;
