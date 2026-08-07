import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Writes a real HTML file per route.
 *
 * The app is a single-page build, so every path was served the same
 * index.html: one canonical tag pointing at the homepage, one title, one
 * share card. Search engines were told /services and /careers are duplicates
 * of /, and every link anyone shared unfurled identically, because crawlers
 * and unfurlers never execute the JavaScript that patches those tags at
 * runtime.
 *
 * Vercel checks the filesystem before applying the SPA rewrite, so these
 * files are served for their routes and everything else still falls through
 * to the app shell.
 */
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const meta = JSON.parse(
  readFileSync(join(root, "src/lib/pageMeta.json"), "utf8"),
);

const shell = readFileSync(join(dist, "index.html"), "utf8");

/** The origin vite already stamped in, so both agree on the deployment. */
const origin = (shell.match(/<meta property="og:url" content="([^"]+)\/"/) ?? [
  null,
  "https://www.elderops.net",
])[1];

const escape = (value) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

const swapTag = (html, pattern, replacement) => {
  if (!pattern.test(html)) throw new Error(`prerender: no match for ${pattern}`);
  return html.replace(pattern, replacement);
};

let written = 0;

for (const [route, { title, description }] of Object.entries(meta)) {
  const url = route === "/" ? `${origin}/` : `${origin}${route}`;
  const t = escape(title);
  const d = escape(description);

  let html = shell;
  html = swapTag(html, /<title>[^<]*<\/title>/, `<title>${t}</title>`);
  html = swapTag(
    html,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${d}" />`,
  );
  html = swapTag(
    html,
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${url}" />`,
  );
  html = swapTag(
    html,
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${t}" />`,
  );
  html = swapTag(
    html,
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${url}" />`,
  );
  html = swapTag(
    html,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${d}" />`,
  );
  html = swapTag(
    html,
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${t}" />`,
  );
  html = swapTag(
    html,
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${d}" />`,
  );

  if (route === "/") {
    writeFileSync(join(dist, "index.html"), html);
  } else {
    const dir = join(dist, route.replace(/^\//, ""));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "index.html"), html);
  }
  written += 1;
}

console.log(`prerendered ${written} routes against ${origin}`);
