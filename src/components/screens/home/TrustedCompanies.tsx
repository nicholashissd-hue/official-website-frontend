import LogoMarquee from "@/components/ui/logo-marquee";
import Reveal from "@/components/ui/reveal";

const TrustedCompanies = () => {
  return (
    <section className="bg-bg-cream">
      <div className="container py-12 md:py-16">
        <Reveal className="mb-9">
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-accent-three">
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
