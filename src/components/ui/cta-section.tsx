import { useLocation } from "react-router";
import { ctaText as solutionsCTA } from "@/contents/screens/solutions";
import { ctaText as talentsCTA } from "@/contents/screens/talents";
import { ctaText as aboutCTA } from "@/contents/screens/about";
import { homeCTAText } from "@/contents/footer";
import Button from "./button";
import Eyebrow from "./eyebrow";
import Reveal from "./reveal";
import CalendlyCTA from "../contactUs/react-calendly";

export interface CTAContent {
  eyebrow: string;
  title: string;
  description: string;
  buttonText: string;
}

const CTA_MAP: Record<string, CTAContent> = {
  "/": homeCTAText,
  "/solutions": solutionsCTA,
  "/talent": talentsCTA,
  "/about": aboutCTA,
};

/** Full-width dark closing band, with page-specific copy. */
const CTASection = () => {
  const { pathname } = useLocation();
  const content = CTA_MAP[pathname];

  if (!content) return null;

  return (
    <section className="grain relative overflow-hidden bg-primary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_120%_at_50%_-20%,#074527_0%,transparent_55%)]"
      />

      <div className="container section-space-block relative">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow dark>{content.eyebrow}</Eyebrow>

          <h2 className="mt-7 max-w-4xl text-balance font-display text-[clamp(2.2rem,4.6vw,3.8rem)] leading-[1.05] tracking-[-0.015em] text-bg-cream">
            {content.title}
          </h2>

          <p className="mt-6 max-w-xl text-[15px] leading-[1.8] text-accent-four md:text-base">
            {content.description}
          </p>

          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact-us" variant="light" withArrow>
              {content.buttonText}
            </Button>
            <CalendlyCTA variant="outline-light" />
          </div>

          <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.22em] text-accent-four">
            Typical response — within one business day
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
