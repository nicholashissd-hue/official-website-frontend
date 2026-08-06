import CareersHero from "@/components/screens/careers/v4/CareersHero";
import WhyJoin from "@/components/screens/careers/v4/WhyJoin";
import Domains from "@/components/screens/careers/v4/Domains";
import JoinProcess from "@/components/screens/careers/v4/JoinProcess";

/**
 * Careers, V4: the supply side. One voice ("Own the work. Set the terms."),
 * the reasons engineers join, the buyer taxonomy as the domain grid, and
 * the Apply / Vetting / Embed process with the only Careers CTA.
 */
const Careers = () => (
  <>
    <CareersHero />
    <WhyJoin />
    <Domains />
    <JoinProcess />
  </>
);

export default Careers;
