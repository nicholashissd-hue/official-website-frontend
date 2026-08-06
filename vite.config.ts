import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

/**
 * Share-card metadata has to carry an absolute URL, and it has to be the
 * origin the page is actually served from: a staging page pointing at the
 * production image unfurls whatever production last shipped. So the origin
 * is stamped in at build time. Production deploys pass VITE_SITE_ORIGIN
 * explicitly; other Vercel builds use the project's stable domain, and a
 * local build the canonical one. Note the per-deployment VERCEL_URL is
 * deliberately last: those hostnames sit behind Vercel SSO, so a scraper
 * fetching an image there gets a login redirect instead of the card.
 */
const siteOrigin = (): string => {
  if (process.env.VITE_SITE_ORIGIN) return process.env.VITE_SITE_ORIGIN;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://www.elderops.net";
};

const stampSiteOrigin = (): Plugin => ({
  name: "elderops-site-origin",
  transformIndexHtml: {
    order: "pre",
    handler: (html) => html.replaceAll("__SITE_ORIGIN__", siteOrigin()),
  },
});

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
    stampSiteOrigin(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
