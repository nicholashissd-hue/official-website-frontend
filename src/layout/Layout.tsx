import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ChatWidget from "@/components/chatbot/ChatWidget";
import CTASection from "@/components/ui/cta-section";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex min-h-dvh flex-col bg-bg-cream font-sans text-secondary">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
        {/* Renders only on routes with mapped copy (contact page opts out) */}
        <CTASection />
        <Footer />
      </main>
      <ChatWidget />
    </div>
  );
};

export default Layout;
