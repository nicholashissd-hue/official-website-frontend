import FullBleed from "@/components/ui/full-bleed";
import { interlude } from "@/contents/screens/howWeWorkV4";
import interludeImage from "@/assets/webp/v4/hww-handoff-dusk.webp";

/** The handoff promise, carried by a dusk photograph of the handoff itself. */
const HwwInterlude = () => (
  <FullBleed
    image={interludeImage}
    alt="An ElderOps engineer passing a runbook binder to a colleague at dusk"
    objectPosition="center 40%"
  >
    <h2 className="max-w-3xl font-display text-[clamp(2.6rem,5vw,4rem)] font-bold leading-none tracking-[-0.03em] text-bg-cream">
      {interlude.statement}
    </h2>
    <p className="mt-6 max-w-xl text-[16.5px] leading-[1.6] text-bg-cream/80">
      {interlude.body}
    </p>
  </FullBleed>
);

export default HwwInterlude;
