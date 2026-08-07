import { useEffect } from "react";
import { useLocation } from "react-router";
import PAGE_META from "./pageMeta.json";

/**
 * Route metadata lives in pageMeta.json so the build can read it too:
 * scripts/prerender.mjs writes a real HTML file per route with these values
 * already in the tags. Patching them here at runtime is enough for a browser
 * but invisible to crawlers and link unfurlers, which never run our JS.
 */
const FALLBACK = PAGE_META["/"];

/** Keeps document.title and the meta description in sync with the route. */
export const usePageMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta =
      (PAGE_META as Record<string, { title: string; description: string }>)[
        pathname
      ] ?? FALLBACK;
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
  }, [pathname]);
};
