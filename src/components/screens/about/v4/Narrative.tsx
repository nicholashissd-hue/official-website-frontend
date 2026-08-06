import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import { narrative } from "@/contents/screens/aboutV4";

/** The third-path story, told in two paragraphs of editorial prose. */
const Narrative = () => (
  <section className="bg-paper">
    <div className="container section-space-block">
      <div className="grid items-start gap-x-20 gap-y-8 lg:grid-cols-[5fr_7fr]">
        <Reveal>
          <Kicker>{narrative.kicker}</Kicker>
          <h2 className="mt-3 max-w-md font-display text-heading font-bold tracking-[-0.03em] text-ink">
            {narrative.title}
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex max-w-2xl flex-col gap-6">
            {narrative.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-lg leading-[1.7] text-sub"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Narrative;
