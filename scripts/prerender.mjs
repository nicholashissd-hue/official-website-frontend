import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
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

/**
 * The homepage hero, written into the served HTML.
 *
 * The headline is the largest contentful element on the site, and it existed
 * only inside the bundle: nothing could paint it until the stylesheet and
 * 146KB of JavaScript had arrived and React had mounted, which the report
 * measured as a full second of render delay. Emitting it statically lets it
 * paint as soon as the HTML and CSS land.
 *
 * The markup below must stay identical to Hero.tsx, which is why the copy and
 * the button class are read from source rather than retyped, and why the hero
 * carries no entrance animation: React replaces this on mount, and anything
 * that differs would show as a flicker.
 */
const read = (rel) => readFileSync(join(root, rel), "utf8");
const pick = (src, re, label) => {
  const m = src.match(re);
  if (!m) throw new Error(`prerender: could not read ${label}`);
  return m[1];
};

const homeCopy = read("src/contents/screens/homeV4.ts");
const heroTitle = pick(homeCopy, /title:\s*"([^"]+)"/, "hero.title");
const heroDescriptor = pick(homeCopy, /descriptor:\s*"([^"]+)"/, "hero.descriptor");
const heroPrimary = pick(homeCopy, /primaryCta:\s*"([^"]+)"/, "hero.primaryCta");
const heroSecondary = pick(homeCopy, /secondaryCta:\s*"([^"]+)"/, "hero.secondaryCta");
const buttonClass = pick(
  read("src/components/ui/v4.tsx"),
  /export const signalButtonClass =\s*"([^"]+)"/,
  "signalButtonClass",
);

const posterFile = readdirSync(join(dist, "assets")).find((f) =>
  /^hero-poster-.*\.webp$/.test(f),
);
if (!posterFile) throw new Error("prerender: hero poster asset not found");
const poster = `/assets/${posterFile}`;

const [firstLine, ...restLines] = heroTitle.split(/(?<=\.)\s+/);
const headline = [firstLine, restLines.join(" ")]
  .filter(Boolean)
  .join("<br />");

const heroHtml = `<section class="relative flex min-h-svh flex-col justify-end overflow-hidden bg-nearblack"><img src="${poster}" alt="" aria-hidden="true" class="absolute inset-0 size-full object-cover" /><div aria-hidden="true" class="absolute inset-0 bg-[linear-gradient(to_top,rgb(8_23_18/0.9)_0%,rgb(8_23_18/0.28)_50%,rgb(8_23_18/0.45)_100%)]"></div><div class="container relative pb-16 pt-40 md:pb-24"><h1 class="max-w-5xl font-display text-hero font-bold tracking-[-0.03em] text-bg-cream">${headline}</h1><div class="mt-8 flex flex-wrap items-end justify-between gap-x-12 gap-y-8"><p class="max-w-xl text-lg text-bg-cream/82">${escape(heroDescriptor)}</p><div class="flex items-center gap-7"><a class="${buttonClass}" href="/contact-us">${heroPrimary}</a><a href="#capabilities" class="inline-flex items-center gap-2 border-b border-bg-cream/35 pb-0.5 text-base font-semibold text-bg-cream/85 transition-colors duration-300 hover:text-bg-cream">${heroSecondary} <span aria-hidden="true">↓</span></a></div></div></div></section>`;

const posterPreload = `<link rel="preload" as="image" fetchpriority="high" href="${poster}" />`;

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
    html = html.replace('<div id="root"></div>', `<div id="root">${heroHtml}</div>`);
    html = html.replace("</head>", `  ${posterPreload}\n  </head>`);
    writeFileSync(join(dist, "index.html"), html);
  } else {
    const dir = join(dist, route.replace(/^\//, ""));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "index.html"), html);
  }
  written += 1;
}

console.log(`prerendered ${written} routes against ${origin}`);
