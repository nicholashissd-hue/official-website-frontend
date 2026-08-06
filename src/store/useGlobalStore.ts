import { create } from "zustand";
import type { GlobalState } from "./type";

export const useGlobalStore = create<GlobalState>((set) => ({
  isMobileMenuOpen: false,
  isNavbarRevealBlocked: false,
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  setNavbarRevealBlocked: (isBlocked) =>
    set({ isNavbarRevealBlocked: isBlocked }),
}));
