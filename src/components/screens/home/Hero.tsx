import { heroText } from "@/contents/screens/home";
import Button from "@/components/ui/button";
import LogoMarquee from "@/components/ui/logo-marquee";
import NetworkCanvas from "@/components/ui/network-canvas";
import Reveal from "@/components/ui/reveal";
import Underlined from "@/components/ui/underline";
import MatchingEngine from "./MatchingEngine";
import talentOne from "@/assets/png/talent-one.png";
import talentTwo from "@/assets/png/talent-two.png";
import talentThree from "@/assets/png/talent-three.png";

const TRUST_AVATARS = [talentOne, talentTwo, talentThree];

/**
 * Full-viewport hero on laptops, composed top-to-bottom: the content block
 * fills the frame (fluid type + slightly scaled console), and a trusted-logos
 * strip anchors the bottom edge so no dead green band is left below the CTAs.
 * Tonal glows + vignette give the empty field depth instead of flat paint.
 */
const Hero = () => {
  return (
    <section className="grain relative overflow-hidden bg-primary lg:flex lg:min-h-screen lg:flex-col lg:pt-20">
      {/* Layered depth: gradient, living lattice, glow behind the engine,
          pine lift in the lower-left, vignette at the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,#02361b_30%,#012112_100%)]"
      />
      <NetworkCanvas className="opacity-80" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_82%_38%,rgba(6,156,78,0.22)_0%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_55%_at_8%_88%,rgba(7,69,39,0.55)_0%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_50%,transparent_55%,rgba(1,24,12,0.45)_100%)]"
      />

      <div className="container relative z-10 grid w-full grid-cols-1 items-center gap-14 pb-16 pt-32 md:pt-36 lg:flex-1 lg:content-center lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-10">
        <div>
          <Reveal immediate delay={0.08} y={30}>
            <h1 className="max-w-2xl font-display text-[clamp(2.5rem,5.8vw,5.25rem)] font-semibold leading-[1.03] tracking-[-0.025em] text-bg-cream">
              Your Company Deserves{" "}
              <span className="text-border-light">Senior Engineering</span>{" "}
              <Underlined delay={1.1}>
                Talent<span className="ml-[0.06em]">.</span>
              </Underlined>
            </h1>
          </Reveal>

          <Reveal immediate delay={0.34} y={24}>
            <p className="mt-7 max-w-xl text-[15px] leading-[1.8] text-accent-four md:text-[17px] lg:mt-8 lg:max-w-[34rem] lg:text-[18px] lg:leading-[1.75]">
              {heroText.subtext}
            </p>
          </Reveal>

          <Reveal immediate delay={0.48} y={20}>
            <div className="mt-9 flex flex-wrap items-center gap-4 lg:mt-10">
              <Button to="/contact-us" variant="primary" withArrow>
                Start With Clarity
              </Button>
              <Button to="/solutions" variant="outline-light">
                Explore Solutions
              </Button>
            </div>
          </Reveal>

          <Reveal immediate delay={0.62} y={16}>
            <div className="mt-10 flex items-center gap-4 lg:mt-11">
              <div className="flex -space-x-3">
                {TRUST_AVATARS.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt=""
                    className="size-10 rounded-full border-2 border-primary object-cover lg:size-11"
                  />
                ))}
                <span className="grid size-10 place-items-center rounded-full border-2 border-primary bg-border-light font-mono text-[9px] font-medium text-primary lg:size-11">
                  250+
                </span>
              </div>
              <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-accent-four">
                Vetted senior engineers
                <br />
                <span className="text-border-light">&lt;4% acceptance rate</span>
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal immediate delay={0.45} y={36}>
          <div className="lg:origin-left lg:scale-[1.06]">
            <MatchingEngine />
          </div>
        </Reveal>
      </div>

      {/* Bottom anchor: trusted-logos strip pinned to the hero's lower edge */}
      <div className="relative z-10 border-t border-bg-cream/[0.07]">
        <Reveal immediate delay={0.8} y={12}>
          <div className="container py-5 lg:py-6">
            <p className="mb-4 text-center font-mono text-[9px] uppercase tracking-[0.22em] text-accent-four/80">
              Our engineers have delivered inside these organizations
            </p>
            <LogoMarquee dark />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
