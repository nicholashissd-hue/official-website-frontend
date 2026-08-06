import FullBleed from "@/components/ui/full-bleed";
import { interlude } from "@/contents/screens/homeV4";
import workshopImage from "@/assets/webp/v4/interlude-dusk.webp";
import workshopImage1600 from "@/assets/webp/v4/interlude-dusk-1600.webp";
import workshopImage828 from "@/assets/webp/v4/interlude-dusk-828.webp";

/** The enablement promise, carried by a full-bleed photograph of the work. */
const Interlude = () => (
  <FullBleed
    image={workshopImage}
    imageSet={`${workshopImage828} 828w, ${workshopImage1600} 1600w, ${workshopImage} 2880w`}
    alt="ElderOps engineers working through a system design on a glass wall"
    objectPosition="center 45%"
  >
    <h2 className="max-w-3xl font-display text-[clamp(2.6rem,5vw,4rem)] font-bold leading-none tracking-[-0.03em] text-bg-cream">
      {interlude.statement}
    </h2>
    <p className="mt-6 max-w-xl text-[16.5px] leading-[1.6] text-bg-cream/80">
      {interlude.body}
    </p>
  </FullBleed>
);

export default Interlude;
