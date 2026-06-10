import LogoMarquee from "@/components/ui/logo-marquee";
import Reveal from "@/components/ui/reveal";

const TrustedCompanies = () => {
  return (
    <section className="border-b border-primary/10 bg-bg-cream">
      <div className="container py-14 md:py-16">
        <Reveal>
          <p className="mb-10 text-center font-mono text-[11px] uppercase tracking-[0.24em] text-accent-three">
            Our engineers have delivered inside these organizations
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <LogoMarquee />
        </Reveal>
      </div>
    </section>
  );
};

export default TrustedCompanies;
