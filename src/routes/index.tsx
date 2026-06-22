import Layout from "@/layout/Layout";
import NotFound from "@/screens/NotFound";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

const Home = lazy(() => import("@/screens/Home"));
const Solutions = lazy(() => import("@/screens/Solutions"));
const StartupLaunch = lazy(() => import("@/screens/StartupLaunch"));
const About = lazy(() => import("@/screens/About"));
const Contact = lazy(() => import("@/screens/ContactUs"));
const Careers = lazy(() => import("@/screens/Careers"));
const Terms = lazy(() => import("@/screens/Terms"));

const LoadingFallback = () => (
  <div className="fixed left-0 right-0 top-0 z-50 h-0.5 overflow-hidden bg-transparent">
    <div className="h-full w-2/5 animate-[loading_1.2s_ease-in-out_infinite] bg-success" />
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route index path="/solutions" element={<Solutions />} />
          <Route index path="/startup-launch" element={<StartupLaunch />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/careers" element={<Careers />} />
          <Route index path="/contact-us" element={<Contact />} />
          <Route index path="/terms" element={<Terms />} />
          <Route index path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
