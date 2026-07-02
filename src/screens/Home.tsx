import Hero from "@/components/screens/home/Hero";
import Stats from "@/components/screens/home/Stats";
import DeliveryModel from "@/components/screens/home/DeliveryModel";
import ExpertiseIndex from "@/components/screens/home/ExpertiseIndex";
import WhyElderOps from "@/components/screens/home/WhyElderOps";
import EngagementSteps from "@/components/screens/home/EngagementSteps";
import Outcomes from "@/components/screens/home/Outcomes";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <DeliveryModel />
      <ExpertiseIndex />
      <WhyElderOps />
      <EngagementSteps />
      <Outcomes />
    </>
  );
};

export default Home;
