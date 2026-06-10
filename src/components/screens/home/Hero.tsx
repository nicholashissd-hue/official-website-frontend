import { heroText } from "@/contents/screens/home";
import Button from "@/components/ui/button";
import NetworkCanvas from "@/components/ui/network-canvas";
import Reveal from "@/components/ui/reveal";
import Underlined from "@/components/ui/underline";
import MatchingEngine from "./MatchingEngine";
import talentOne from "@/assets/png/talent-one.png";
import talentTwo from "@/assets/png/talent-two.png";
import talentThree from "@/assets/png/talent-three.png";

const TRUST_AVATARS = [talentOne, talentTwo, talentThree];

const Hero = () => {
  return (
    <section className="grain relative overflow-hidden bg-primary">
      {/* Layered depth: gradient, living lattice, glow behind the engine */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,#02361b_30%,#012112_100%)]"
      />
      <NetworkCanvas className="opacity-80" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_82%_38%,rgba(6,156,78,0.2)_0%,transparent_70%)]"
      />

      <div className="container relative z-10 grid items-center gap-14 pb-16 pt-32 md:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-44">
        <div>
          <Reveal immediate delay={0.08} y={30}>
            <h1 className="max-w-2xl font-display text-[clamp(2.5rem,5.8vw,4.5rem)] font-semibold leading-[1.03] tracking-[-0.025em] text-bg-cream">
              Your Company Deserves{" "}
              <span className="text-border-light">Senior Engineering</span>{" "}
              <Underlined delay={1.1}>Leadership.</Underlined>
            </h1>
          </Reveal>

          <Reveal immediate delay={0.34} y={24}>
            <p className="mt-7 max-w-xl text-[15px] leading-[1.8] text-accent-four md:text-[17px]">
              {heroText.subtext}
            </p>
          </Reveal>

          <Reveal immediate delay={0.48} y={20}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button to="/contact-us" variant="primary" withArrow>
                Start With Clarity
              </Button>
              <Button to="/solutions" variant="outline-light">
                Explore Solutions
              </Button>
            </div>
          </Reveal>

          <Reveal immediate delay={0.62} y={16}>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {TRUST_AVATARS.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt=""
                    className="size-10 rounded-full border-2 border-primary object-cover"
                  />
                ))}
                <span className="grid size-10 place-items-center rounded-full border-2 border-primary bg-border-light font-mono text-[9px] font-medium text-primary">
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
          <MatchingEngine />
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
