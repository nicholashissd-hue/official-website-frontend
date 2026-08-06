import HwwHero from "@/components/screens/howwework/v4/HwwHero";
import MethodChapters from "@/components/screens/howwework/v4/MethodChapters";
import HwwInterlude from "@/components/screens/howwework/v4/HwwInterlude";
import EngagementModels from "@/components/screens/howwework/v4/EngagementModels";

/**
 * How We Work, V4: the method as three expanded chapters, the handoff
 * promise, and the three engagement models (launch folded in as the third).
 *
 * Deep links into the chapters are handled centrally by RouteArrival.
 */
const HowWeWork = () => (
  <>
    <HwwHero />
    <MethodChapters />
    <HwwInterlude />
    <EngagementModels />
  </>
);

export default HowWeWork;
