import { useEffect } from "react";
import { useLocation } from "react-router";

const DEFAULT_TITLE = "ElderOps — Senior Engineering Talent";
const DEFAULT_DESCRIPTION =
  "Strategy, execution, and accountability in a single engineering model. Senior expertise that integrates directly into your team.";

const PAGE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  "/solutions": {
    title: "Solutions — ElderOps",
    description:
      "Senior engineering talent matched to your roadmap — cloud & DevOps, data platforms, analytics & BI, AI/ML enablement, and product engineering, with accountable delivery.",
  },
  "/about": {
    title: "About — ElderOps",
    description:
      "The best engineering outcomes come from ownership, not headcount. The philosophy and operating standard behind ElderOps.",
  },
  "/startup-launch": {
    title: "Startup Launch — ElderOps",
    description:
      "From idea to launch. ElderOps builds websites, web and mobile apps, infrastructure, and data/AI systems — moving founders and growing teams from concept to production.",
  },
  "/careers": {
    title: "Careers — ElderOps",
    description:
      "Join a network built around engineering excellence. ElderOps partners with senior engineers who value ownership, accountability, and meaningful technical challenges.",
  },
  "/contact-us": {
    title: "Contact — ElderOps",
    description:
      "Tell us what you're building and we'll help determine the right engineering model for your goals. Typical response within one business day.",
  },
  "/terms": {
    title: "Terms of Service — ElderOps",
    description:
      "The terms governing the ElderOps website and engineering services.",
  },
};

/** Keeps document.title and the meta description in sync with the route. */
export const usePageMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = PAGE_META[pathname] ?? {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
    };
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
  }, [pathname]);
};
