import FullBleed from "@/components/ui/full-bleed";
import { GhostLink } from "@/components/ui/v4";
import { interlude, method } from "@/contents/screens/servicesV4";
import interludeImage from "@/assets/webp/v4/services-interlude.webp";
import interludeImage1600 from "@/assets/webp/v4/services-interlude-1600.webp";
import interludeImage828 from "@/assets/webp/v4/services-interlude-828.webp";

/** The delivery promise, carried by a dusk photograph of the work itself. */
const ServicesInterlude = () => (
  <FullBleed
    image={interludeImage}
    imageSet={`${interludeImage828} 828w, ${interludeImage1600} 1600w, ${interludeImage} 2880w`}
    alt="Two ElderOps engineers inspecting an open server rack by work light"
    objectPosition="center 40%"
  >
    <h2 className="max-w-3xl font-display text-title font-bold tracking-[-0.03em] text-bg-cream">
      {interlude.statement}
    </h2>
    <p className="mt-6 max-w-xl text-lg text-bg-cream/80">{interlude.body}</p>
    {/* The route to the method, which this page no longer restates. */}
    <GhostLink to="/how-we-work" onDark className="mt-8">
      {method.cta} <span aria-hidden="true">→</span>
    </GhostLink>
  </FullBleed>
);

export default ServicesInterlude;
