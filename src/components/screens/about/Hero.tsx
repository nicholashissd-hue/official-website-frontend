import { heroText } from "@/contents/screens/about";
import Eyebrow from "@/components/ui/eyebrow";
import PhotoCard from "@/components/ui/photo-card";
import Reveal from "@/components/ui/reveal";
import Underlined from "@/components/ui/underline";
import featuredTwo from "@/assets/jpg/featured-two.jpg";

const titleLineTwoWords = heroText.titleLineTwo.split(" ");
const titleLineTwoLead = titleLineTwoWords.slice(0, -1).join(" ");
const titleLineTwoFinal = titleLineTwoWords[titleLineTwoWords.length - 1];

/** Philosophy-first opener: title, deck, third-path story, and the credo. */
const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-bg-cream">
      <div className="container relative pb-16 pt-36 md:pb-24 md:pt-44">
        <Reveal immediate delay={0.05} y={26}>
          <h1 className="max-w-4xl font-display text-[clamp(2.5rem,5.4vw,4.3rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-primary">
            {heroText.titleLineOne}
            <br />
            <span className="text-success">
              {titleLineTwoLead} <Underlined>{titleLineTwoFinal}</Underlined>
            </span>
          </h1>
        </Reveal>

        <Reveal immediate delay={0.26} y={22}>
          <p className="mt-9 max-w-2xl font-display text-[1.3rem] font-medium leading-[1.5] tracking-[-0.01em] text-primary md:text-[1.45rem]">
            {heroText.deck}
          </p>
          <p className="mt-5 max-w-2xl text-[15px] leading-[1.85] text-accent-one md:text-base">
            {heroText.body}
          </p>
        </Reveal>

        <Reveal immediate delay={0.4} y={24}>
          <blockquote className="grain relative mt-14 max-w-4xl overflow-hidden rounded-[2rem] bg-pine p-8 md:mt-20 md:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_120%_at_100%_0%,#02361b_0%,transparent_60%)]"
            />
            <div className="relative">
              <span
                aria-hidden="true"
                className="block font-display text-6xl font-semibold leading-none text-border-light md:text-7xl"
              >
                “
              </span>
              <p className="mt-4 font-display text-[clamp(1.3rem,2.6vw,1.9rem)] font-medium leading-[1.4] tracking-[-0.01em] text-bg-cream">
                {heroText.quote}
              </p>
              <footer className="mt-7">
                <Eyebrow dark>The ElderOps Philosophy</Eyebrow>
              </footer>
            </div>
          </blockquote>
        </Reveal>

        <Reveal immediate delay={0.52} y={24}>
          <PhotoCard
            src={featuredTwo}
            alt="ElderOps engineers collaborating with a client team"
            caption="Collaboration over handoff"
            chip="Partnership model"
            className="mt-6 h-64 md:h-80"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
