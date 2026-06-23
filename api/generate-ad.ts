import { tokenFor } from "./admin-auth";
import { LOGO_PNG_B64 } from "./_logo";

type ApiRequest = {
  method?: string;
  body?: unknown;
  headers?: Record<string, string | string[] | undefined>;
};
type ApiResponse = {
  setHeader: (name: string, value: string | string[]) => void;
  status: (code: number) => { json: (payload: unknown) => void };
};

const ASPECTS = ["3:2", "16:9", "1:1", "4:5", "9:16", "2:3", "4:3"];

const authed = (req: ApiRequest) => {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const raw = req.headers?.cookie;
  const cookie = Array.isArray(raw) ? raw.join(";") : raw ?? "";
  const m = cookie.match(/(?:^|;\s*)eo_studio=([a-f0-9]+)/);
  return !!m && m[1] === tokenFor(expected);
};

const parse = (body: unknown): { prompt?: string; aspectRatio?: string } => {
  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return (body as { prompt?: string; aspectRatio?: string }) ?? {};
};

/** Standing instruction appended to every user prompt — guarantees the real
 *  ElderOps logo is present, accurate, legible, and placed sensibly. */
const LOGO_DIRECTIVE = [
  "BRAND LOGO (mandatory): the attached reference image is the official ElderOps logo — a distinctive abstract mark above the 'ElderOps' wordmark.",
  "ALWAYS include this exact ElderOps logo in the advertisement. Reproduce it faithfully: never redraw, restyle, rename, crop, stretch, or distort it.",
  "Placement: if the description above specifies where to put the logo, put it there. Otherwise place it small and neat in a bottom corner.",
  "Legibility: render the logo in white over dark areas, or in deep racing-green over light areas, so it always stands out clearly.",
  "Render any text in the description crisply and spelled EXACTLY as written, each text element placed once. Output one finished, polished advertisement — no mockup frame, no watermark.",
].join("\n");

const generateImage = async (prompt: string, aspect: string): Promise<string | null> => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  const model = process.env.GEMINI_IMAGE_MODEL ?? "gemini-3-pro-image";
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              { inlineData: { mimeType: "image/png", data: LOGO_PNG_B64 } },
              { text: prompt },
            ],
          },
        ],
        generationConfig: {
          responseModalities: ["IMAGE"],
          imageConfig: { aspectRatio: aspect },
        },
      }),
    },
  );
  if (!res.ok) throw new Error(`image api ${res.status}: ${(await res.text()).slice(0, 200)}`);
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

  const { prompt, aspectRatio } = parse(req.body);
  if (!prompt || typeof prompt !== "string" || prompt.trim().length < 3) {
    return res.status(400).json({ ok: false, error: "Describe the ad you want." });
  }
  const aspect = ASPECTS.includes(aspectRatio ?? "") ? (aspectRatio as string) : "3:2";
  const finalPrompt = `${prompt.trim().slice(0, 2000)}\n\n${LOGO_DIRECTIVE}`;

  try {
    const image = await generateImage(finalPrompt, aspect);
    if (!image) {
      return res.status(503).json({ ok: false, error: "GEMINI_API_KEY not configured" });
    }
    return res.status(200).json({ ok: true, image });
  } catch (e) {
    return res.status(502).json({ ok: false, error: String(e).slice(0, 300) });
  }
}
