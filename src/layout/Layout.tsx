import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import RouteArrival from "@/components/RouteArrival";
import CTASection from "@/components/ui/cta-section";
import PageTransition from "@/components/ui/page-transition";
import { usePageMeta } from "@/lib/pageMeta";
import { Outlet } from "react-router";

const Layout = () => {
  usePageMeta();

  return (
    <div className="flex min-h-dvh flex-col bg-paper font-sans text-ink">
      <RouteArrival />
      <Header />
      {/* tabIndex lets RouteArrival move focus here on a plain navigation.
          The footer sits outside main so it maps to its own landmark. */}
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <PageTransition>
          <Outlet />
          {/* Identical on every page; contact, careers and legal pages opt out */}
          <CTASection />
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
