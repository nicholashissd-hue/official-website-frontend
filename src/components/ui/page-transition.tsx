import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router";
import type { ReactNode } from "react";
import { EASE } from "./reveal";

/** Soft cross-fade + rise between routes. */
const PageTransition = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.38, ease: EASE }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
