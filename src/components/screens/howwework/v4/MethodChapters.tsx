import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import { methodChapters } from "@/contents/screens/howWeWorkV4";
import assessPhoto from "@/assets/webp/v4/hww-assess.webp";
import buildPhoto from "@/assets/webp/v4/hww-build.webp";
import ownPhoto from "@/assets/webp/v4/hww-own.webp";

/**
 * The method expanded: three anchored chapters. The photography is people
 * doing the work, never hardware catalog shots (Nicholas, 2026-08-06:
 * "it looks like we're selling hardware"): reading the system, pairing
 * on the build, and the client engineer at the keys for the handoff.
 */
const STEP_PHOTOS = [
  { src: assessPhoto, alt: "An engineer studying a whiteboard covered in a system architecture diagram" },
  { src: buildPhoto, alt: "Two engineers pairing at one desk in the evening, one typing while the other thinks along" },
  { src: ownPhoto, alt: "One engineer at the keyboard while an ElderOps engineer stands behind with a mug, watching the handoff" },
];

const ids = ["assess", "build", "own"];

const MethodChapters = () => (
  <section className="bg-paper">
    <div className="container section-space-block">
      <Reveal>
        <Kicker>{methodChapters.kicker}</Kicker>
        <h2 className="mt-3 font-display text-[clamp(2.75rem,4.8vw,3.6rem)] font-bold leading-none tracking-[-0.03em] text-ink">
          {methodChapters.title}
        </h2>
      </Reveal>

      <div className="mt-14 flex flex-col gap-16">
        {methodChapters.steps.map((step, index) => (
          <Reveal key={step.num} delay={0.05} as="article">
            <div
              id={ids[index]}
              className="grid scroll-mt-28 items-center gap-x-16 gap-y-8 border-t border-hairline pt-12 lg:grid-cols-[5fr_7fr]"
            >
              <img
                src={STEP_PHOTOS[index].src}
                alt={STEP_PHOTOS[index].alt}
                loading="lazy"
                className={`aspect-[4/3] w-full border border-hairline object-cover ${index % 2 === 1 ? "lg:order-2" : ""}`}
              />
              <div>
                <p className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] tracking-[0.1em] text-primary">
                    {step.num}
                  </span>
                  <span className="font-display text-[clamp(2rem,3.4vw,2.7rem)] font-bold leading-none tracking-[-0.02em] text-ink">
                    {step.title}
                  </span>
                </p>
                <p className="mt-5 max-w-xl text-[16px] leading-[1.65] text-sub">
                  {step.body}
                </p>
                <p className="mt-5 max-w-xl border-l-2 border-signal pl-4 text-[15px] font-semibold leading-[1.6] text-ink">
                  {step.keep}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default MethodChapters;
