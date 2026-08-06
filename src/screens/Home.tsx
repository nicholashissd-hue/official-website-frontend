import Hero from "@/components/screens/home/v4/Hero";
import PainStrip from "@/components/screens/home/v4/PainStrip";
import ProofBand from "@/components/screens/home/v4/ProofBand";
import ThirdPath from "@/components/screens/home/v4/ThirdPath";
import CapabilityIndex from "@/components/screens/home/v4/CapabilityIndex";
import MethodSection from "@/components/screens/home/v4/MethodSection";
import CaseFiles from "@/components/screens/home/v4/CaseFiles";
import TeamTeaser from "@/components/screens/home/v4/TeamTeaser";

/** Home, V4 (approved 2026-08-05): cinematic open, light editorial body. */
const Home = () => {
  return (
    <>
      <Hero />
      <PainStrip />
      <ProofBand />
      <ThirdPath />
      <CapabilityIndex />
      <MethodSection />
      <CaseFiles />
      <TeamTeaser />
    </>
  );
};

export default Home;
