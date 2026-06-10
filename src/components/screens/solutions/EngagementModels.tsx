import { engagementModelsData, engagementText } from "@/contents/screens/solutions";
import SectionHeading from "@/components/ui/section-heading";
import Reveal, { Lift } from "@/components/ui/reveal";
import { cn } from "@/lib/util";

/** Dot clusters that grow across the three models: 1 → team → managed ring. */
const ScaleNode = ({ count, ring }: { count: number; ring?: boolean }) => (
  <span
    className={cn(
      "grid shrink-0 place-items-center",
      ring && "rounded-full border border-success/50 p-2",
    )}
  >
    <span
      className="grid gap-[3px]"
      style={{ gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(count))}, 1fr)` }}
    >
      {Array.from({ length: count }).map((_, dot) => (
        <span key={dot} className="size-1.5 rounded-full bg-success" />
      ))}
    </span>
  </span>
);

const ScaleArrow = () => (
  <svg viewBox="0 0 28 8" fill="none" aria-hidden="true" className="w-7 text-primary/30">
    <path
      d="M0 4h26m0 0-3.4-3M26 4l-3.4 3"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="square"
    />
  </svg>
);

/** Color deck tones: white → lime → deep green grain. */
const CARD_TONES = [
  {
    card: "bg-white ring-1 ring-primary/10 hover:shadow-[0_24px_50px_rgba(2,54,27,0.1)]",
    chip: "bg-success/10 text-success",
    title: "text-primary",
    body: "text-accent-one",
    panel: "bg-primary/[0.04]",
    panelLabel: "text-accent-three",
    panelBody: "text-secondary",
  },
  {
    card: "grain relative bg-pine",
    chip: "bg-bg-cream/10 text-border-light",
    title: "text-bg-cream",
    body: "text-accent-four",
    panel: "bg-bg-cream/[0.07]",
    panelLabel: "text-accent-four",
    panelBody: "text-bg-light/85",
  },
  {
    card: "grain relative bg-primary",
    chip: "bg-bg-cream/10 text-border-light",
    title: "text-bg-cream",
    body: "text-accent-four",
    panel: "bg-bg-cream/[0.07]",
    panelLabel: "text-accent-four",
    panelBody: "text-bg-light/85",
  },
];

/** "Engineering Support That Fits Your Organization" + start-small scale rail. */
const EngagementModels = () => {
  return (
    <section className="bg-bg-cream">
      <div className="container section-space-block">
        <SectionHeading
          index="04"
          eyebrow="Engagement Models"
          title={engagementText.title}
          lede={engagementText.subtext}
        />

        {/* Scale rail — answers "Can I start small?" at a glance */}
        <Reveal className="mb-16 rounded-3xl bg-white px-6 py-7 ring-1 ring-primary/10 md:px-10">
          <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-three">
              Start small —<span className="text-success"> scale when ready</span>
            </p>

            <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              {engagementModelsData.map((model, index) => (
                <div
                  key={model.id}
                  className="flex w-full items-center gap-4 sm:w-auto sm:gap-6 md:gap-6"
                >
                  <div className="flex w-full items-center gap-3 rounded-xl bg-bg-light/60 px-3.5 py-3 sm:w-auto sm:rounded-none sm:bg-transparent sm:p-0">
                    <ScaleNode
                      count={index === 0 ? 1 : index === 1 ? 4 : 9}
                      ring={index === 2}
                    />
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-one">
                      {model.scale}
                    </span>
                  </div>
                  {index < engagementModelsData.length - 1 && (
                    <span className="hidden sm:block">
                      <ScaleArrow />
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {engagementModelsData.map((model, index) => {
            const tone = CARD_TONES[index % CARD_TONES.length];

            return (
              <Reveal key={model.id} delay={index * 0.08}>
                <Lift
                  className={cn(
                    "flex flex-col overflow-hidden rounded-3xl p-8 md:p-10",
                    tone.card,
                  )}
                >
                <span
                  className={cn(
                    "inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em]",
                    tone.chip,
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-success"
                  />
                  {model.scale}
                </span>

                <h3
                  className={cn(
                    "mt-7 font-display text-xl font-semibold leading-snug tracking-[-0.01em] md:text-2xl",
                    tone.title,
                  )}
                >
                  {model.title}
                </h3>
                <p className={cn("mt-4 flex-1 text-[15px] leading-[1.8]", tone.body)}>
                  {model.description}
                </p>

                <div className={cn("mt-8 rounded-2xl p-4", tone.panel)}>
                  <p
                    className={cn(
                      "font-mono text-[10px] uppercase tracking-[0.22em]",
                      tone.panelLabel,
                    )}
                  >
                    Best For
                  </p>
                  <p className={cn("mt-2 text-sm leading-[1.7]", tone.panelBody)}>
                    {model.bestFor}
                  </p>
                </div>
                </Lift>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-accent-three">
            {engagementText.footerText}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default EngagementModels;
