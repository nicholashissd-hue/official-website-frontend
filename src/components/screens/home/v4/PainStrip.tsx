import Reveal from "@/components/ui/reveal";
import { painStrip } from "@/contents/screens/homeV4";

/** One sentence of the buyer's own pain before anything is sold. */
const PainStrip = () => (
  <section className="border-b border-hairline bg-bone">
    <div className="container py-12 md:py-14">
      <Reveal>
        <p className="max-w-5xl font-display text-lede font-semibold tracking-[-0.015em] text-ink">
          {painStrip.lead} <span className="text-sub">{painStrip.tail}</span>
        </p>
      </Reveal>
    </div>
  </section>
);

export default PainStrip;
