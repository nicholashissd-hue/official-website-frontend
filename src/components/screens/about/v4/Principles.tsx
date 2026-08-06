import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import { principles } from "@/contents/screens/aboutV4";

/**
 * The X-over-Y principles as a visible two-column grid. The pair reads as
 * one display line: the lead in ink, "over y" in the quiet tone.
 */
const Principles = () => (
  <section className="border-y border-hairline bg-bone">
    <div className="container section-space-block">
      <Reveal>
        <Kicker>{principles.kicker}</Kicker>
        <h2 className="mt-3 font-display text-heading font-bold tracking-[-0.03em] text-ink">
          {principles.title}
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
        {principles.items.map((item, index) => (
          <Reveal key={item.lead} delay={(index % 2) * 0.08}>
            <div className="border-t border-ink/30 pt-5">
              <p className="font-display text-subhead font-bold tracking-[-0.02em]">
                <span className="text-ink">{item.lead}</span>{" "}
                <span className="text-ink/40">over {item.over}</span>
              </p>
              <p className="mt-3 max-w-md text-base text-sub">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Principles;
