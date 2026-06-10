import LogoMarquee from "@/components/ui/logo-marquee";
import Eyebrow from "@/components/ui/eyebrow";
import Reveal from "@/components/ui/reveal";

const TrustedCompanies = () => {
  return (
    <section className="bg-bg-cream">
      <div className="container py-12 md:py-16">
        <Reveal className="mb-9 flex justify-center">
          <Eyebrow>Our engineers have delivered inside these organizations</Eyebrow>
        </Reveal>

        <Reveal delay={0.1}>
          <LogoMarquee />
        </Reveal>
      </div>
    </section>
  );
};

export default TrustedCompanies;
