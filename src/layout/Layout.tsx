import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ChatWidget from "@/components/chatbot/ChatWidget";
import CTASection from "@/components/ui/cta-section";
import { useLocation } from "react-router";
import { Outlet } from "react-router";

const Layout = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  return (
    <div className="min-h-dvh font-lato flex flex-col bg-white selection:bg-success selection:text-white">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />

        {!isHomePage && <CTASection />}
        <Footer />
      </main>
      <ChatWidget />
    </div>
  );
};

export default Layout;
