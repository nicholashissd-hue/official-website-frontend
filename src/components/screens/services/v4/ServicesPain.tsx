import Reveal from "@/components/ui/reveal";
import { pain } from "@/contents/screens/servicesV4";

/**
 * The buyer's own sentence, between the hero and the schematic. It used to
 * open CapabilityChapters; the schematic that replaced that component is a
 * drawing on paper, and this band is the bone rest before it.
 */
const ServicesPain = () => (
  <section className="border-b border-hairline bg-bone">
    <div className="container py-12 md:py-14">
      <Reveal>
        <p className="max-w-5xl font-display text-lede font-semibold tracking-[-0.015em] text-ink">
          {pain.lead} <span className="text-sub">{pain.tail}</span>
        </p>
      </Reveal>
    </div>
  </section>
);

export default ServicesPain;
