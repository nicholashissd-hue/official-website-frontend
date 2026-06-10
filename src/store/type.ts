export interface GlobalState {
  isMobileMenuOpen: boolean;
  isNavbarRevealBlocked: boolean;
  isChatOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  setNavbarRevealBlocked: (isBlocked: boolean) => void;
  setChatOpen: (isOpen: boolean) => void;
}
