export interface GlobalState {
  isMobileMenuOpen: boolean;
  isNavbarRevealBlocked: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  setNavbarRevealBlocked: (isBlocked: boolean) => void;
}
