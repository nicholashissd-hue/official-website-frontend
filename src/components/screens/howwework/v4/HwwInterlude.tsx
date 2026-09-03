import FullBleed from "@/components/ui/full-bleed";
import { interlude } from "@/contents/screens/howWeWorkV4";
import interludeImage from "@/assets/webp/v4/hww-handoff-dusk.webp";
import interludeImage1600 from "@/assets/webp/v4/hww-handoff-dusk-1600.webp";
import interludeImage828 from "@/assets/webp/v4/hww-handoff-dusk-828.webp";

/** The handoff promise, carried by a photograph of the handoff itself:
 *  one engineer showing another how the thing actually works. */
const HwwInterlude = () => (
  <FullBleed
    image={interludeImage}
    imageSet={`${interludeImage828} 828w, ${interludeImage1600} 1600w, ${interludeImage} 2880w`}
    alt="One ElderOps engineer showing a colleague how something works on a laptop at a desk"
    objectPosition="center 40%"
  >
    <h2 className="max-w-3xl font-display text-title font-bold tracking-[-0.03em] text-bg-cream">
      {interlude.statement}
    </h2>
    <p className="mt-6 max-w-xl text-lg text-bg-cream/80">{interlude.body}</p>
  </FullBleed>
);

export default HwwInterlude;
