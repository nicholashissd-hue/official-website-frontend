import { useEffect } from "react";
import { useLocation } from "react-router";
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Instant — otherwise route changes glide through the whole page.
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};
export default ScrollToTop;
