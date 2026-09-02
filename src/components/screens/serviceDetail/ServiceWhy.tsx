import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import { sharedProof } from "@/contents/services";

/**
 * "Why ElderOps" — identical on all eight pages, and now rendered once.
 *
 * Each page used to carry its own `why` block directly above this band, and
 * the two argued the same case back to back: senior engineers, matched to the
 * shape of the problem, who leave capability behind. The per-page version is
 * gone; this is the survivor.
 */
const ServiceWhy = () => (
  <section className="border-y border-hairline bg-paper">
    <div className="container section-space-block">
      <div className="grid gap-x-16 gap-y-9 lg:grid-cols-[4fr_8fr]">
        <Reveal>
          <Kicker>{sharedProof.kicker}</Kicker>
          <h2 className="mt-3 max-w-md font-display text-heading font-bold tracking-[-0.03em] text-ink">
            {sharedProof.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          {sharedProof.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-5 max-w-2xl text-base text-sub first:mt-0"
            >
              {paragraph}
            </p>
          ))}
        </Reveal>
      </div>

      <Reveal>
        <div className="mt-16 grid gap-x-12 gap-y-0 border-t border-ink/25 pt-10 md:grid-cols-2 lg:grid-cols-4">
          {sharedProof.points.map((point) => (
            <div key={point.label} className="border-t border-hairline py-5">
              <p className="font-display text-base font-bold tracking-[-0.01em] text-ink">
                {point.label}
              </p>
              <p className="mt-2 text-sm text-sub">{point.body}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default ServiceWhy;
