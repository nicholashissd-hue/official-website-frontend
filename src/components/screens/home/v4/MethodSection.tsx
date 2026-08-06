import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import { method } from "@/contents/screens/homeV4";
import { METHOD } from "@/contents/taxonomy";
import assessPhoto from "@/assets/webp/v4/method-assess.webp";
import assessPhoto828 from "@/assets/webp/v4/method-assess-828.webp";
import buildPhoto from "@/assets/webp/v4/method-build.webp";
import buildPhoto828 from "@/assets/webp/v4/method-build-828.webp";
import ownPhoto from "@/assets/webp/v4/method-own.webp";
import ownPhoto828 from "@/assets/webp/v4/method-own-828.webp";

/**
 * The method triptych (Nicholas's pick, 2026-08-06): one engineer's arc
 * across three cinematic frames. Reading the system map, deep in the
 * build, walking away at dawn with everything running. The same three
 * frames carry the method wherever it appears.
 */
const STEP_SKETCHES = [
  { src: assessPhoto, srcSet: `${assessPhoto828} 828w, ${assessPhoto} 1600w`, alt: "An engineer stands before a wall-sized glowing map of a system" },
  { src: buildPhoto, srcSet: `${buildPhoto828} 828w, ${buildPhoto} 1600w`, alt: "The same engineer deep in work at a dark desk, lit by screen glow" },
  { src: ownPhoto, srcSet: `${ownPhoto828} 828w, ${ownPhoto} 1600w`, alt: "The engineer walks away down a green-lit server aisle toward dawn light" },
];

const MethodSection = () => (
  <section className="bg-paper">
    <div className="container section-space-block">
      <Reveal>
        <Kicker>{method.eyebrow}</Kicker>
        <h2 className="mt-3 font-display text-[clamp(2.75rem,4.8vw,3.6rem)] font-bold leading-none tracking-[-0.03em] text-ink">
          {method.title}
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
        {METHOD.map((step, index) => (
          <Reveal key={step.num} delay={index * 0.08} as="article">
            <img
              src={STEP_SKETCHES[index].src}
              srcSet={STEP_SKETCHES[index].srcSet}
              sizes="(min-width: 768px) 33vw, 100vw"
              alt={STEP_SKETCHES[index].alt}
              loading="lazy"
              className="aspect-[4/3] w-full border border-hairline object-cover"
            />
            <p className="mt-6 flex items-center gap-3">
              <span className="font-mono text-[11px] tracking-[0.1em] text-primary">
                {step.num}
              </span>
              <span className="text-[18px] font-bold text-ink">{step.title}</span>
            </p>
            <p className="mt-2.5 text-[15px] leading-[1.62] text-sub">
              {step.body}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default MethodSection;
