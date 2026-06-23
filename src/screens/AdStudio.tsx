import { useState } from "react";
import {
  TEMPLATES,
  type AdCopy,
  type TemplateId,
} from "@/components/adstudio/templates";
import { cn } from "@/lib/util";

const DEFAULT_COPY: AdCopy = {
  eyebrow: "DAY TO DAY ENGINEERING",
  headline: "Embedded,\nNot Outsourced",
  subhead: "Inside the work. Close to the outcome.",
};

/** Client-side fallback copy when the AI copy endpoint isn't reachable. */
const FALLBACK: AdCopy[] = [
  { eyebrow: "DAY TO DAY ENGINEERING", headline: "Embedded,\nNot Outsourced", subhead: "Inside the work. Close to the outcome." },
  { eyebrow: "SENIOR ENGINEERING TALENT", headline: "Ownership,\nNot Headcount", subhead: "Engineers accountable for what they ship." },
  { eyebrow: "ENTERPRISE DELIVERY", headline: "Strategy Meets\nExecution", subhead: "From roadmap to production, owned end to end." },
  { eyebrow: "CLOUD · DATA · AI", headline: "Your Roadmap,\nDelivered", subhead: "Full-stack senior engineers, matched to your mission." },
  { eyebrow: "SCALE WITH CONFIDENCE", headline: "Move Fast.\nStay Senior.", subhead: "Engineering depth, exactly when you need it." },
];

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
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-border-light">
          ElderOps
        </p>
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
const Field = ({
  label,
  value,
  onChange,
  textarea,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}) => (
  <label className="block">
    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-three">
      {label}
    </span>
    {textarea ? (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={2}
        className="mt-2 w-full resize-none rounded-lg border border-primary/15 bg-white px-3 py-2.5 text-[14px] text-primary outline-none focus:border-success"
      />
    ) : (
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-lg border border-primary/15 bg-white px-3 py-2.5 text-[14px] text-primary outline-none focus:border-success"
      />
    )}
  </label>
);

const Studio = () => {
  const [copy, setCopy] = useState<AdCopy>(DEFAULT_COPY);
  const [style, setStyle] = useState<TemplateId>("layers");
  const [writingCopy, setWritingCopy] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const set = (k: keyof AdCopy) => (v: string) => setCopy((c) => ({ ...c, [k]: v }));

  const writeCopy = async () => {
    setWritingCopy(true);
    try {
      const res = await fetch("/api/ad-copy", { method: "POST" });
      const data = await res.json();
      if (data?.ok && data.copy) {
        setCopy(data.copy);
        return;
      }
      throw new Error("no copy");
    } catch {
      setCopy((prev) => {
        const opts = FALLBACK.filter((f) => f.headline !== prev.headline);
        return opts[Math.floor(Math.random() * opts.length)] ?? FALLBACK[0];
      });
    } finally {
      setWritingCopy(false);
    }
  };

  const generateImage = async () => {
    setGenerating(true);
    setError(null);
    try {
      const res = await fetch("/api/generate-ad", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ style, copy }),
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

      <div className="grid gap-8 p-6 lg:grid-cols-[380px_1fr] lg:p-8">
        {/* Controls */}
        <div className="flex flex-col gap-5 rounded-2xl border border-primary/10 bg-white p-6">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-three">
              Style
            </span>
            <div className="mt-2 grid grid-cols-3 gap-1.5 rounded-lg bg-bg-light p-1">
              {TEMPLATES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setStyle(t.id)}
                  className={cn(
                    "rounded-md px-2 py-2 text-[11px] font-medium leading-tight transition-colors",
                    style === t.id
                      ? "bg-primary text-bg-cream"
                      : "text-accent-one hover:bg-primary/[0.06]",
                  )}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          <Field label="Eyebrow" value={copy.eyebrow} onChange={set("eyebrow")} />
          <Field label="Headline (Enter for line break)" value={copy.headline} onChange={set("headline")} textarea />
          <Field label="Subhead" value={copy.subhead} onChange={set("subhead")} textarea />

          <button
            type="button"
            onClick={writeCopy}
            disabled={writingCopy}
            className="rounded-full border border-primary/20 px-5 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary/[0.05] disabled:opacity-50"
          >
            {writingCopy ? "Writing…" : "✦ Write Copy with AI"}
          </button>
          <button
            type="button"
            onClick={generateImage}
            disabled={generating || !copy.headline.trim()}
            className="rounded-full bg-success px-5 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-deep transition-colors hover:bg-border-light disabled:opacity-50"
          >
            {generating ? "Generating…" : "⟳ Generate Image"}
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
          {error && (
            <p className="font-mono text-[11px] leading-relaxed text-red-500">{error}</p>
          )}
        </div>

        {/* Preview */}
        <div className="flex items-start justify-center">
          <div className="w-full max-w-3xl">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-primary/10 bg-deep ring-1 ring-primary/5">
              {imageUrl ? (
                <img src={imageUrl} alt="Generated ad" className="size-full object-cover" />
              ) : (
                <div className="flex size-full items-center justify-center px-8 text-center">
                  <p className="max-w-xs font-mono text-[12px] uppercase leading-relaxed tracking-[0.16em] text-accent-four">
                    {generating
                      ? "Generating your ad…"
                      : "Set your copy and a style, then Generate Image"}
                  </p>
                </div>
              )}
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-three">
              {TEMPLATES.find((t) => t.id === style)?.name} · 3:2 · AI-generated
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
