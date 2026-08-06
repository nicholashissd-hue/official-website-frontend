import AboutHero from "@/components/screens/about/v4/AboutHero";
import Narrative from "@/components/screens/about/v4/Narrative";
import Principles from "@/components/screens/about/v4/Principles";
import MethodCompact from "@/components/screens/services/v4/MethodCompact";
import AboutTeam from "@/components/screens/about/v4/AboutTeam";

/**
 * About, V4: the thesis as the hero, the third-path narrative, the
 * X-over-Y principles grid, the method, and the team. Ordinary scroll,
 * no snap.
 */
const About = () => (
  <>
    <AboutHero />
    <Narrative />
    <Principles />
    <MethodCompact />
    <AboutTeam />
  </>
);

export default About;
