import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import { method } from "@/contents/screens/homeV4";
import { METHOD } from "@/contents/taxonomy";
import assessSketch from "@/assets/webp/v4/assess-sketch.webp";
import buildSketch from "@/assets/webp/v4/build-sketch.webp";
import ownSketch from "@/assets/webp/v4/own-sketch.webp";

/**
 * Each step carries a patent-drawing-style ink sketch that MEANS its verb
 * (Nicholas, 2026-08-06): Assess is the magnifier over the blueprint, Build
 * is the keystone being set at the arch, Own is the key on the manual.
 */
const STEP_SKETCHES = [
  { src: assessSketch, alt: "Ink drawing of a magnifying glass over an unrolled blueprint" },
  { src: buildSketch, alt: "Ink drawing of a stone arch under construction, the keystone being lowered" },
  { src: ownSketch, alt: "Ink drawing of a key resting on a closed engineering manual" },
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
