import { tokenFor } from "./admin-auth";

type ApiRequest = {
  method?: string;
  body?: unknown;
  headers?: Record<string, string | string[] | undefined>;
};
type ApiResponse = {
  setHeader: (name: string, value: string | string[]) => void;
  status: (code: number) => { json: (payload: unknown) => void };
};

interface Copy {
  eyebrow: string;
  headline: string;
  subhead: string;
}

const authed = (req: ApiRequest) => {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const raw = req.headers?.cookie;
  const cookie = Array.isArray(raw) ? raw.join(";") : raw ?? "";
  const m = cookie.match(/(?:^|;\s*)eo_studio=([a-f0-9]+)/);
  return !!m && m[1] === tokenFor(expected);
};

const parse = (body: unknown): { style?: string; copy?: Copy } => {
  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return (body as { style?: string; copy?: Copy }) ?? {};
};

/* ── Reproducible prompt engineering ────────────────────────────────
 * One immutable BRAND block + one immutable COMPOSITION block per style.
 * Only the user's text is injected. Identical inputs → consistent output.
 * Nano Banana Pro is a strong text renderer; we quote every string and
 * forbid any other text so copy lands exactly. */

const BRAND = [
  'Design a premium, ultra-clean ENTERPRISE TECHNOLOGY brand advertisement for "ElderOps", a high-end firm that places senior software engineers.',
  "Strict art direction (keep IDENTICAL every time):",
  "- Deep British-racing-green world. Background: smooth dark gradient from #02361b down to near-black #011a0e, with a faint fine engineering grid and a soft emerald radial glow.",
  "- Accent colour: glowing emerald green #0fb45e. Headline/foreground text colour: off-white #fcfcf4. Small labels: muted sage green.",
  "- Mood: sophisticated, corporate, minimal, confident, generous negative space, high-end SaaS aesthetic.",
  "- Flat clean vector / refined UI look. Absolutely NO people, NO faces, NO photographic stock imagery, NO 3D clutter, NO busy textures, NO drop-shadowed clip-art.",
  "- Typography: a BOLD modern geometric grotesk sans-serif (Clash Display / Neue Montreal feel) for the headline; small UPPERCASE MONOSPACE for labels; a clean humanist sans for the subhead.",
].join("\n");

const FIDELITY = [
  "TEXT FIDELITY IS CRITICAL: render every quoted string crisply and spelled EXACTLY as written — correct letters, correct spacing, no extra words, no invented words, no gibberish, no duplicated text. Render ONLY the text specified below and nothing else.",
  "Output a single finished advertisement image. No mockup frames, no borders around the whole image, no watermark.",
].join("\n");

const headlineSpec = (headline: string) => {
  const lines = headline.split("\n").map((l) => l.trim()).filter(Boolean);
  if (lines.length <= 1) return `reading EXACTLY: "${headline.trim()}"`;
  return `on ${lines.length} lines, reading EXACTLY ${lines.map((l) => `"${l}"`).join(" / ")} (each phrase on its own line), tight line spacing`;
};

const COMPOSITIONS: Record<string, (c: Copy) => string> = {
  layers: (c) =>
    [
      "COMPOSITION — 'Layered Schematic' (keep IDENTICAL every time):",
      "Split layout. LEFT HALF: a clean left-aligned editorial text block. RIGHT HALF: a glowing isometric technical diagram.",
      `Top-left, a small UPPERCASE MONOSPACE eyebrow in muted sage green ${`reading EXACTLY: "${c.eyebrow}"`}.`,
      `Below it, a very large BOLD geometric sans-serif headline in off-white, ${headlineSpec(c.headline)}.`,
      "Below the headline, a thin horizontal emerald line ending in a small glowing green dot.",
      `Below that, a medium clean sans-serif subheadline in light sage ${`reading EXACTLY: "${c.subhead}"`}.`,
      'Bottom-left, a small clean wordmark reading EXACTLY: "ElderOps".',
      "RIGHT HALF: an isometric stack of three translucent emerald glass panels (layered floating platforms) with a bright glowing green node at the centre and faint concentric circles behind it. Thin glowing green connector lines link the stack to three small rounded-rectangle UI cards. The three cards carry small UPPERCASE MONOSPACE labels reading EXACTLY: \"OPERATIONAL CONTEXT\", \"SENIOR ENGINEERING\", \"SYSTEM LEVEL THINKING\"; each card shows tiny schematic list rows and small glowing nodes.",
    ].join("\n"),

  console: (c) =>
    [
      "COMPOSITION — 'Delivery Console' (keep IDENTICAL every time):",
      "Split layout. LEFT HALF: left-aligned editorial text block. RIGHT HALF: a single glowing dark dashboard/console panel.",
      `Top-left, a small UPPERCASE MONOSPACE eyebrow in muted sage green ${`reading EXACTLY: "${c.eyebrow}"`}.`,
      `Below it, a large BOLD geometric sans-serif headline in off-white, ${headlineSpec(c.headline)}.`,
      "Below it, a thin emerald line with a glowing dot.",
      `Below that, a clean sans-serif subheadline in light sage ${`reading EXACTLY: "${c.subhead}"`}.`,
      'Bottom-left, a small wordmark reading EXACTLY: "ElderOps".',
      'RIGHT HALF: a sleek rounded-rectangle dark-green console panel with a header dot and a small "LIVE" badge, three metric tiles with UPPERCASE MONOSPACE labels reading EXACTLY "DEPLOYS", "UPTIME", "LEAD TIME" each above a bold number, and a smooth upward-trending emerald line chart with a soft area fill. Crisp UI, glowing green accents.',
    ].join("\n"),

  statement: (c) =>
    [
      "COMPOSITION — 'Bold Statement' (keep IDENTICAL every time):",
      "Centred composition over a faint emerald node constellation (small glowing dots connected by thin faint green lines, kept around the edges so the centre stays clean).",
      `Centred at the top, a small UPPERCASE MONOSPACE eyebrow in muted sage green ${`reading EXACTLY: "${c.eyebrow}"`}.`,
      `In the centre, a very large BOLD geometric sans-serif headline in off-white, centre-aligned, ${headlineSpec(c.headline)}.`,
      "Below the headline, a short thin emerald divider line with a glowing dot in the middle.",
      `Below that, a centred clean sans-serif subheadline in light sage ${`reading EXACTLY: "${c.subhead}"`}.`,
      'Centred near the bottom, a small wordmark reading EXACTLY: "ElderOps".',
    ].join("\n"),
};

const buildPrompt = (style: string, c: Copy) => {
  const comp = (COMPOSITIONS[style] ?? COMPOSITIONS.layers)(c);
  return `${BRAND}\n\n${comp}\n\n${FIDELITY}`;
};

const generateImage = async (prompt: string): Promise<string | null> => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  const model = process.env.GEMINI_IMAGE_MODEL ?? "gemini-2.5-flash-image";
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          responseModalities: ["IMAGE"],
          imageConfig: { aspectRatio: "3:2" },
        },
      }),
    },
  );
  if (!res.ok) throw new Error(`image api ${res.status}: ${await res.text()}`);
  const data = (await res.json()) as {
    candidates?: { content?: { parts?: { inlineData?: { mimeType?: string; data?: string } }[] } }[];
  };
  const part = data?.candidates?.[0]?.content?.parts?.find((p) => p.inlineData?.data);
  const inline = part?.inlineData;
  if (!inline?.data) return null;
  return `data:${inline.mimeType ?? "image/png"};base64,${inline.data}`;
};

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ ok: false });
  if (!authed(req)) return res.status(401).json({ ok: false });

  const { style, copy } = parse(req.body);
  if (!copy || typeof copy.headline !== "string") {
    return res.status(400).json({ ok: false, error: "missing copy" });
  }

  const prompt = buildPrompt(style ?? "layers", {
    eyebrow: String(copy.eyebrow ?? "").slice(0, 60),
    headline: String(copy.headline).slice(0, 120),
    subhead: String(copy.subhead ?? "").slice(0, 140),
  });

  try {
    const image = await generateImage(prompt);
    if (!image) {
      return res.status(503).json({ ok: false, error: "GEMINI_API_KEY not configured" });
    }
    return res.status(200).json({ ok: true, image });
  } catch (e) {
    return res.status(502).json({ ok: false, error: String(e).slice(0, 300) });
  }
}
