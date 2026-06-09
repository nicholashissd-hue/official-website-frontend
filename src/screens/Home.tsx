import BusinessOutcomes from "@/components/screens/home/BusinessOutcomes";
import CoreSolutions from "@/components/screens/home/coreSolutions/CoreSolutions";
import Hero from "@/components/screens/home/Hero";
import HowItWorks from "@/components/screens/home/howItWorks/HowItWorks";
import Services from "@/components/screens/home/Services";
import Stats from "@/components/screens/home/stats/Stats";
import TrustedCompanies from "@/components/screens/home/TrustedCompanies";
import WhyWeStandApart from "@/components/screens/home/WhyWeStandApart";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <Stats />
      <Services />
      <CoreSolutions />
      <WhyWeStandApart />
      <HowItWorks />
      <BusinessOutcomes />
    </>
  );
};

export default Home;
