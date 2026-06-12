import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ChatWidget from "@/components/chatbot/ChatWidget";
import CTASection from "@/components/ui/cta-section";
import PageTransition from "@/components/ui/page-transition";
import ScrollProgress from "@/components/ui/scroll-progress";
import { usePageMeta } from "@/lib/pageMeta";
import { Outlet } from "react-router";

const Layout = () => {
  usePageMeta();

  return (
    <div className="flex min-h-dvh flex-col bg-bg-cream font-sans text-secondary">
      <ScrollToTop />
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <PageTransition>
          <Outlet />
          {/* Renders only on routes with mapped copy (contact page opts out) */}
          <CTASection />
        </PageTransition>
        <Footer />
      </main>
      <ChatWidget />
    </div>
  );
};

export default Layout;
