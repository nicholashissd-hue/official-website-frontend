import { heroText } from "@/contents/screens/solutions";
import Button from "@/components/ui/button";
import Eyebrow from "@/components/ui/eyebrow";
import PhotoCard from "@/components/ui/photo-card";
import Reveal from "@/components/ui/reveal";
import Underlined from "@/components/ui/underline";
import CalendlyCTA from "@/components/contactUs/react-calendly";
import ladySittingInWorkplace from "@/assets/jpg/lady-sitting-in-workplace.jpg";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-bg-cream">
      <div className="container grid gap-12 pb-16 pt-36 md:pb-24 md:pt-44 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <Reveal immediate y={20}>
            <Eyebrow>Solutions</Eyebrow>
          </Reveal>

          <Reveal immediate delay={0.12} y={26}>
            <h1 className="mt-8 font-display text-[clamp(2.5rem,5.4vw,4.3rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-primary">
              Engineering Expertise That Drives{" "}
              <span className="text-success">
                Business <Underlined delay={1}>Outcomes</Underlined>
              </span>
            </h1>
          </Reveal>

          <Reveal immediate delay={0.26} y={22}>
            <p className="mt-8 max-w-2xl text-[15px] leading-[1.85] text-accent-one md:text-base">
              {heroText.subtext}
            </p>
          </Reveal>

          <Reveal immediate delay={0.38} y={20}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button to="/contact-us" variant="primary" withArrow>
                Start the Conversation
              </Button>
              <CalendlyCTA variant="outline" />
            </div>
          </Reveal>
        </div>

        <Reveal immediate delay={0.4} y={32} className="h-full">
          <PhotoCard
            src={ladySittingInWorkplace}
            alt="An ElderOps engineer at work on a live client delivery floor"
            caption="Inside a live client engagement"
            chip="Real delivery, not slideware"
            className="h-full min-h-[360px]"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
