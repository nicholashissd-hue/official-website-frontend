import { useState } from "react";
import { cn } from "@/lib/util";

/* ── Login gate (shared password, verified server-side) ─────────── */
const Gate = ({ onAuthed }: { onAuthed: () => void }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(false);
    try {
      const res = await fetch("/api/admin-auth", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        sessionStorage.setItem("eo_studio_ok", "1");
        onAuthed();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="grain flex min-h-dvh items-center justify-center bg-primary px-6">
      <form onSubmit={submit} className="w-full max-w-sm">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-border-light">ElderOps</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-[-0.01em] text-bg-cream">
          Ad Studio
        </h1>
        <p className="mt-2 text-[14px] text-accent-four">Enter the studio password to continue.</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoFocus
          className="mt-7 w-full rounded-xl border border-bg-cream/15 bg-bg-cream/[0.06] px-4 py-3 text-[15px] text-bg-cream placeholder:text-accent-four/70 outline-none focus:border-border-light/60"
        />
        {error && (
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-red-300">
            Incorrect password
          </p>
        )}
        <button
          type="submit"
          disabled={busy || !password}
          className="mt-5 w-full rounded-full bg-success px-6 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-deep transition-colors hover:bg-border-light disabled:opacity-50"
        >
          {busy ? "Checking…" : "Enter Studio"}
        </button>
      </form>
    </div>
  );
};

/* ── Studio ─────────────────────────────────────────────────────── */
const ASPECTS = [
  { v: "3:2", label: "Landscape" },
  { v: "1:1", label: "Square" },
  { v: "4:5", label: "Portrait" },
  { v: "9:16", label: "Story" },
  { v: "16:9", label: "Wide" },
];

const EXAMPLES: { label: string; prompt: string }[] = [
  {
    label: "Bold statement",
    prompt:
      "A bold, premium brand ad on a deep British-racing-green field with a soft emerald glow. Huge confident headline that reads \"Embedded, Not Outsourced\" on two lines, a small uppercase eyebrow above that reads \"DAY TO DAY ENGINEERING\", and a subhead that reads \"Inside the work. Close to the outcome.\". Minimal, gallery-grade, scroll-stopping.",
  },
  {
    label: "Team photo",
    prompt:
      "A premium documentary photo of a diverse senior engineering team genuinely collaborating around a laptop in a bright modern office with plants and natural light. Across the bottom, a deep racing-green band with the headline \"Your team, not a vendor\" and the subhead \"Senior engineers who work like they're yours.\". Authentic, not stock.",
  },
  {
    label: "Viral hook",
    prompt:
      "A witty, scroll-stopping social ad built to go viral. High-contrast deep-green and near-black with one vivid emerald accent. A huge punchy headline that reads \"Most “seniors” are expensive juniors.\" and a small subhead that reads \"We only place the real thing.\". Daring, premium, debate-sparking.",
  },
  {
    label: "Cinematic desk",
    prompt:
      "A cinematic photo of a developer's desk at dusk, a monitor glowing softly with code, warm lamp light, deep-green ambiance, shallow depth of field, no faces. Lower-left headline that reads \"Inside the work\" with a subhead that reads \"Close to the code. Close to the outcome.\". Atmospheric and aspirational.",
  },
  {
    label: "Conceptual",
    prompt:
      "An artful conceptual ad: a single brilliantly glowing emerald figure standing out among a vast field of faint identical silhouettes in deep green. Bold headline that reads \"Built to stand out\" with a subhead that reads \"Senior engineers who aren't like the rest.\". Cinematic, symbolic, gallery-grade.",
  },
];

const Studio = () => {
  const [prompt, setPrompt] = useState(EXAMPLES[0].prompt);
  const [aspect, setAspect] = useState("3:2");
  const [generating, setGenerating] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generate = async () => {
    setGenerating(true);
    setError(null);
    try {
      const res = await fetch("/api/generate-ad", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ prompt, aspectRatio: aspect }),
      });
      const data = await res.json();
      if (data?.ok && data.image) setImageUrl(data.image);
      else setError(data?.error ?? "Generation failed");
    } catch {
      setError("Generation failed — is the image API configured?");
    } finally {
      setGenerating(false);
    }
  };

  const download = () => {
    if (!imageUrl) return;
    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = "elderops-ad.png";
    a.click();
  };

  return (
    <div className="min-h-dvh bg-bg-light text-primary">
      <header className="flex items-center justify-between border-b border-primary/10 px-6 py-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
          ElderOps · Ad Studio
        </p>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-three">
          AI Ad Generator
        </span>
      </header>

      <div className="grid gap-8 p-6 lg:grid-cols-[420px_1fr] lg:p-8">
        {/* Controls */}
        <div className="flex flex-col gap-5 rounded-2xl border border-primary/10 bg-white p-6">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-three">
              Describe your ad
            </span>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={8}
              placeholder="e.g. A bold ad on deep green with the headline “Embedded, Not Outsourced”…"
              className="mt-2 w-full resize-none rounded-lg border border-primary/15 bg-white px-3 py-3 text-[14px] leading-relaxed text-primary outline-none focus:border-success"
            />
            <p className="mt-2 text-[12px] leading-relaxed text-accent-three">
              Your ElderOps logo is added to every ad automatically. Say where you want it, or it'll
              be placed neatly in a corner.
            </p>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-three">
              Start from an example
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {EXAMPLES.map((ex) => (
                <button
                  key={ex.label}
                  type="button"
                  onClick={() => setPrompt(ex.prompt)}
                  className="rounded-full border border-primary/15 px-3 py-1.5 text-[12px] text-accent-one transition-colors hover:bg-primary/[0.05]"
                >
                  {ex.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-three">
              Format
            </span>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {ASPECTS.map((a) => (
                <button
                  key={a.v}
                  type="button"
                  onClick={() => setAspect(a.v)}
                  className={cn(
                    "rounded-md px-3 py-2 text-[12px] font-medium transition-colors",
                    aspect === a.v ? "bg-primary text-bg-cream" : "bg-bg-light text-accent-one hover:bg-primary/[0.06]",
                  )}
                >
                  {a.label}
                  <span className="ml-1 text-[10px] opacity-60">{a.v}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={generate}
            disabled={generating || prompt.trim().length < 3}
            className="rounded-full bg-success px-5 py-3.5 font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-deep transition-colors hover:bg-border-light disabled:opacity-50"
          >
            {generating ? "Generating…" : "⟳ Generate Ad"}
          </button>
          {imageUrl && !generating && (
            <button
              type="button"
              onClick={download}
              className="rounded-full border border-success/40 px-5 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-success transition-colors hover:bg-success/[0.08]"
            >
              ↓ Download PNG
            </button>
          )}
          {error && <p className="font-mono text-[11px] leading-relaxed text-red-500">{error}</p>}
        </div>

        {/* Preview */}
        <div className="flex items-start justify-center">
          <div className="w-full max-w-3xl">
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-primary/10 bg-deep ring-1 ring-primary/5"
              style={{ aspectRatio: aspect.replace(":", " / ") }}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="Generated ad" className="size-full object-contain" />
              ) : (
                <div className="flex size-full items-center justify-center px-8 text-center">
                  <p className="max-w-xs font-mono text-[12px] uppercase leading-relaxed tracking-[0.16em] text-accent-four">
                    {generating ? "Generating your ad…" : "Describe an ad, then Generate"}
                  </p>
                </div>
              )}
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-three">
              {aspect} · AI-generated · logo embedded
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdStudio = () => {
  const [authed, setAuthed] = useState(
    () => import.meta.env.DEV || sessionStorage.getItem("eo_studio_ok") === "1",
  );
  return authed ? <Studio /> : <Gate onAuthed={() => setAuthed(true)} />;
};

export default AdStudio;
