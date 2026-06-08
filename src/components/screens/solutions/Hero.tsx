import Button from "@/components/ui/button";
import HeroTitle from "@/components/ui/hero-title";
import LogoMarquee from "@/components/ui/logo-marquee";
import { Animated } from "@/components/ui/animated";
import heroImg from "@/assets/svg/talent-hero-bg.svg";
import featureVideo from "@/assets/video/globe-video.mp4";
import Highlight from "@/components/ui/highlight";
import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;

    void video.play().catch(() => {});
  }, []);

  return (
    <section
      className="solutions-hero-section relative bg-cover bg-center bg-no-repeat pt-22.5"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="container hero-space-block solutions-hero-block">
        <div className="solutions-hero-grid grid grid-cols-1 place-items-center gap-8 md:gap-10 lg:grid-cols-2 lg:items-center xl:gap-30 xl:px-12">
          <Animated
            variant="slideUp"
            type="animate"
            className="solutions-hero-copy w-full text-center lg:max-w-152 lg:py-8"
          >
            <HeroTitle className="!text-[clamp(2.85rem,11vw,4rem)] !leading-[0.98] lg:text-start lg:!text-[4.25rem] lg:!leading-[1] xl:!text-[4.8rem]">
              Engineering and data solutions from{" "}
              <Highlight className="lg:block">Global Talent</Highlight>
            </HeroTitle>
            <p className="mx-auto mt-4 max-w-[34rem] text-[0.98rem] leading-7 text-[#7C7C7C] sm:mt-5 sm:text-lg sm:leading-8 lg:max-w-[43rem] lg:text-start lg:text-[1.18rem] lg:leading-9">
              ElderOps helps Global teams move faster across DevOps, data,
              analytics, and software engineering without sacrificing quality.
              We build the team, your client interviews confirm the fit, and we
              help you deliver measurable outcomes.
            </p>

            <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 lg:mt-12 lg:justify-start">
              <Button
                variant="glass-link"
                to="/contact-us"
                className="w-full sm:w-fit sm:px-7 sm:py-3.5 sm:text-[1.05rem]"
              >
                Get in Touch
              </Button>

              <Button
                variant="link"
                to="/talent"
                className="w-full border-2 border-primary text-primary font-bold transition-transform duration-200 hover:-translate-y-1 sm:w-fit sm:px-7 sm:py-3.5 sm:text-[1.05rem]"
              >
                Explore Talent
              </Button>
            </div>
          </Animated>

          <Animated
            variant="scale"
            className="solutions-hero-media h-[16.5rem] w-full max-w-[34rem] overflow-hidden rounded-[14px] sm:h-76 lg:h-[29.75rem] lg:max-h-[29.75rem] lg:max-w-[37.5rem] xl:h-[32rem] xl:max-h-[32rem] xl:max-w-[40.5rem]"
          >
            <video
              src={featureVideo}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              ref={videoRef}
              preload="auto"
              poster="/images/hero-fallback.jpg"
              disablePictureInPicture
              className="pointer-events-none size-full object-cover"
            />
          </Animated>
        </div>

        <div className="solutions-hero-marquee mt-8 xl:px-12">
          <LogoMarquee />
        </div>
      </div>
    </section>
  );
};

export default Hero;
