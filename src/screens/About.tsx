import AboutHero from "@/components/screens/about/v4/AboutHero";
import Narrative from "@/components/screens/about/v4/Narrative";
import Principles from "@/components/screens/about/v4/Principles";
import AboutTeam from "@/components/screens/about/v4/AboutTeam";

/**
 * About, V4: the thesis as the hero, the third-path narrative, the team, and
 * the X-over-Y principles the firm is run on. The method used to be restated
 * here too; it has its own page and this one is about why the firm exists.
 */
const About = () => (
  <>
    <AboutHero />
    <Narrative />
    <AboutTeam />
    <Principles />
  </>
);

export default About;
