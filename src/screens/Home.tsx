import Hero from "@/components/screens/home/v4/Hero";
import ThirdPath from "@/components/screens/home/v4/ThirdPath";
import Interlude from "@/components/screens/home/v4/Interlude";
import CapabilityIndex from "@/components/screens/home/v4/CapabilityIndex";
import MethodSection from "@/components/screens/home/v4/MethodSection";
import CaseFiles from "@/components/screens/home/v4/CaseFiles";
import TeamTeaser from "@/components/screens/home/v4/TeamTeaser";

/**
 * Home, V4.2: cinematic open, then the argument.
 *
 * The page used to open with a one-line pain strip and a full proof band,
 * so a reader met a statement about what was wrong with their company and
 * then a row of figures before the site had said what ElderOps is. Both are
 * gone; the vetting figure and the client logos survive inside ThirdPath,
 * where they read as evidence for the positioning rather than as a
 * standalone dashboard.
 */
const Home = () => {
  return (
    <>
      <Hero />
      <ThirdPath />
      <Interlude />
      <CapabilityIndex />
      <MethodSection />
      <TeamTeaser />
      <CaseFiles />
    </>
  );
};

export default Home;
