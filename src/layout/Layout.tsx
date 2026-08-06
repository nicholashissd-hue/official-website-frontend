import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ScrollToTop from "@/components/ScrollToTop";
import CTASection from "@/components/ui/cta-section";
import PageTransition from "@/components/ui/page-transition";
import { usePageMeta } from "@/lib/pageMeta";
import { Outlet } from "react-router";

const Layout = () => {
  usePageMeta();

  return (
    <div className="flex min-h-dvh flex-col bg-paper font-sans text-ink">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <PageTransition>
          <Outlet />
          {/* Identical on every page; contact + legal pages opt out */}
          <CTASection />
        </PageTransition>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
