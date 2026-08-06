import { useEffect } from "react";
import { useLocation } from "react-router";
import HwwHero from "@/components/screens/howwework/v4/HwwHero";
import MethodChapters from "@/components/screens/howwework/v4/MethodChapters";
import HwwInterlude from "@/components/screens/howwework/v4/HwwInterlude";
import EngagementModels from "@/components/screens/howwework/v4/EngagementModels";

/**
 * How We Work, V4: the method as three expanded chapters, the handoff
 * promise, and the three engagement models (launch folded in as the third).
 */
const HowWeWork = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (!el) return;
    requestAnimationFrame(() => el.scrollIntoView({ block: "start" }));
  }, [hash]);

  return (
    <>
      <HwwHero />
      <MethodChapters />
      <HwwInterlude />
      <EngagementModels />
    </>
  );
};

export default HowWeWork;
