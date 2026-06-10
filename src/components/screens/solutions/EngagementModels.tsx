import { engagementModelsData, engagementText } from "@/contents/screens/solutions";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
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

/** "Engineering Support That Fits Your Organization" + start-small scale rail. */
const EngagementModels = () => {
  return (
    <section className="border-t border-primary/10 bg-bg-light/50">
      <div className="container section-space-block">
        <SectionHeading
          index="04"
          eyebrow="Engagement Models"
          title={engagementText.title}
          lede={engagementText.subtext}
        />

        {/* Scale rail — answers "Can I start small?" at a glance */}
        <Reveal className="mb-16 border border-primary/10 bg-bg-cream px-6 py-7 md:px-10">
          <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-three">
              Start small —<span className="text-success"> scale when ready</span>
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              {engagementModelsData.map((model, index) => (
                <div key={model.id} className="flex items-center gap-4 md:gap-6">
                  <div className="flex items-center gap-3">
                    <ScaleNode
                      count={index === 0 ? 1 : index === 1 ? 4 : 9}
                      ring={index === 2}
                    />
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-one">
                      {model.scale}
                    </span>
                  </div>
                  {index < engagementModelsData.length - 1 && <ScaleArrow />}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-px border border-primary/10 bg-primary/10 lg:grid-cols-3">
          {engagementModelsData.map((model, index) => (
            <Reveal
              key={model.id}
              delay={index * 0.08}
              className="group flex flex-col bg-bg-cream p-8 transition-colors duration-500 hover:bg-white md:p-10"
            >
              <span className="inline-flex w-fit items-center gap-2.5 border border-primary/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-one transition-colors duration-500 group-hover:border-success/40 group-hover:text-success">
                <span aria-hidden="true" className="size-1 rotate-45 bg-success" />
                {model.scale}
              </span>

              <h3 className="mt-7 font-display text-xl leading-snug tracking-[-0.01em] text-primary md:text-2xl">
                {model.title}
              </h3>
              <p className="mt-4 flex-1 text-[15px] leading-[1.8] text-accent-one">
                {model.description}
              </p>

              <div className="mt-8 border-t border-primary/10 pt-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-three">
                  Best For
                </p>
                <p className="mt-2.5 text-sm leading-[1.7] text-secondary">
                  {model.bestFor}
                </p>
              </div>
            </Reveal>
          ))}
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
