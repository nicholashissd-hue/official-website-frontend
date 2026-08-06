import infinion from "@/assets/webp/logos/infinion.webp";
import atbTech from "@/assets/webp/logos/atbtech.webp";
import choiceCloud from "@/assets/webp/logos/choiceCloud.webp";
import hubint from "@/assets/webp/logos/hubinit.webp";
import initTs from "@/assets/webp/logos/inits.webp";
import moniepoint from "@/assets/webp/logos/moniepoint.webp";
import newGlobe from "@/assets/webp/logos/newglobe.webp";
import plugLink from "@/assets/webp/logos/plug-link.webp";
import quickRemit from "@/assets/webp/logos/quickremit.webp";
import syscomptech from "@/assets/webp/logos/syscomptech.webp";
import tandatech from "@/assets/webp/logos/tanda.webp";
import notchHr from "@/assets/webp/logos/notchHr.webp";

/**
 * Client logos for the proof band. Everything else that lived here was
 * V3 home copy, deleted in the v4.13 hygiene sweep.
 *
 * Each file is 72px tall: three times the 24px it renders at, so it stays
 * crisp on any phone. The intrinsic size travels with the logo so the img
 * can reserve its space before the file arrives (no reflow, no CLS).
 */
type Logo = {
  defaultLogo: string;
  altText: string;
  width: number;
  height: number;
};

export const trustedCompaniesLogo: Logo[] = [
  { defaultLogo: infinion, altText: "Infinion logo", width: 101, height: 72 },
  { defaultLogo: atbTech, altText: "ATB Tech logo", width: 403, height: 72 },
  {
    defaultLogo: choiceCloud,
    altText: "ChoiceCloud logo",
    width: 370,
    height: 72,
  },
  { defaultLogo: hubint, altText: "Hubinit logo", width: 246, height: 72 },
  { defaultLogo: initTs, altText: "Inits logo", width: 223, height: 72 },
  {
    defaultLogo: moniepoint,
    altText: "Moniepoint logo",
    width: 294,
    height: 72,
  },
  { defaultLogo: newGlobe, altText: "NewGlobe logo", width: 182, height: 72 },
  { defaultLogo: plugLink, altText: "PlugLink logo", width: 91, height: 72 },
  {
    defaultLogo: quickRemit,
    altText: "QuickRemit logo",
    width: 248,
    height: 72,
  },
  {
    defaultLogo: syscomptech,
    altText: "Syscomptech logo",
    width: 318,
    height: 72,
  },
  { defaultLogo: tandatech, altText: "Tanda logo", width: 73, height: 72 },
  { defaultLogo: notchHr, altText: "NotchHR logo", width: 316, height: 72 },
];
