import Hero from "@/components/screens/home/v4/Hero";
import PainStrip from "@/components/screens/home/v4/PainStrip";
import ProofBand from "@/components/screens/home/v4/ProofBand";
import ThirdPath from "@/components/screens/home/v4/ThirdPath";
import Interlude from "@/components/screens/home/v4/Interlude";
import CapabilityIndex from "@/components/screens/home/v4/CapabilityIndex";
import MethodSection from "@/components/screens/home/v4/MethodSection";
import CaseFiles from "@/components/screens/home/v4/CaseFiles";
import TeamTeaser from "@/components/screens/home/v4/TeamTeaser";

/**
 * Home, V4.1: cinematic open, light editorial body, and two full-bleed
 * photographic statement sections carrying the enablement promise and
 * the team. Apple restraint, BCG X cinema.
 */
const Home = () => {
  return (
    <>
      <Hero />
      <PainStrip />
      <ProofBand />
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
