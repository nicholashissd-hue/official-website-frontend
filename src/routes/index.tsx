import Layout from "@/layout/Layout";
import NotFound from "@/screens/NotFound";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";

const Home = lazy(() => import("@/screens/Home"));
const Services = lazy(() => import("@/screens/Solutions"));
const HowWeWork = lazy(() => import("@/screens/StartupLaunch"));
const About = lazy(() => import("@/screens/About"));
const Contact = lazy(() => import("@/screens/ContactUs"));
const Careers = lazy(() => import("@/screens/Careers"));
const Terms = lazy(() => import("@/screens/Terms"));
const Privacy = lazy(() => import("@/screens/Privacy"));
const AdStudio = lazy(() => import("@/screens/AdStudio"));

const LoadingFallback = () => (
  <div className="fixed left-0 right-0 top-0 z-50 h-0.5 overflow-hidden bg-transparent">
    <div className="h-full w-2/5 animate-[loading_1.2s_ease-in-out_infinite] bg-success" />
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* Standalone admin tool — no site chrome, hidden from nav */}
        <Route path="/login" element={<AdStudio />} />
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* Old paths 301 at the edge (vercel.json); these cover client nav + dev */}
          <Route path="/solutions" element={<Navigate to="/services" replace />} />
          <Route
            path="/startup-launch"
            element={<Navigate to="/how-we-work" replace />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
