import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

/**
 * Share-card metadata has to carry an absolute URL, and it has to be the
 * origin the page is actually served from: a staging page pointing at the
 * production image unfurls whatever production last shipped. So the origin
 * is stamped in at build time. Production deploys pass VITE_SITE_ORIGIN
 * explicitly; every other Vercel build (staging, previews) falls back to
 * its own deployment URL, and a local build to the canonical domain.
 */
const siteOrigin = (): string => {
  if (process.env.VITE_SITE_ORIGIN) return process.env.VITE_SITE_ORIGIN;
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
