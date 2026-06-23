import type { CSSProperties } from "react";
import { AD_H, AD_W, C, F, type AdCopy } from "./templates";
import logoWhite from "@/assets/svg/elderOps-white-logo.svg";

/**
 * "Layered Schematic" — a faithful recreation of the reference ad: deep-green
 * field, mono eyebrow, large Clash headline, the connector motif, and an
 * isometric layered stack wired to three labelled cards. All text is real
 * text, so exports are pixel-perfect.
 */

const muted = (o: number) => `rgba(139,163,150,${o})`;
const green = (o: number) => `rgba(15,180,94,${o})`;

/** Node with a soft glow, faked with stacked circles (export-safe — no filter). */
const Node = ({ cx, cy, r = 4.5 }: { cx: number; cy: number; r?: number }) => (
  <>
    <circle cx={cx} cy={cy} r={r * 3.4} fill={green(0.18)} />
    <circle cx={cx} cy={cy} r={r * 2} fill={green(0.32)} />
    <circle cx={cx} cy={cy} r={r} fill={C.bright} />
  </>
);

/** A flat isometric diamond (wider than tall). */
const diamond = (cx: number, cy: number, w: number, h: number) =>
  `${cx},${cy - h} ${cx + w},${cy} ${cx},${cy + h} ${cx - w},${cy}`;

const labelStyle: CSSProperties = {
  fontFamily: F.mono,
  fontSize: 13,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: C.muted,
};

const Row = ({ dim = false }: { dim?: boolean }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 11, marginTop: 13 }}>
    <span
      style={{
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: dim ? muted(0.4) : C.bright,
        boxShadow: dim ? "none" : `0 0 9px ${green(0.85)}`,
        flexShrink: 0,
      }}
    />
    <span style={{ height: 5, flex: 1, borderRadius: 3, background: muted(dim ? 0.16 : 0.28) }} />
  </div>
);

const Card = ({
  left,
  top,
  width,
  label,
  children,
}: {
  left: number;
  top: number;
  width: number;
  label: string;
  children: React.ReactNode;
}) => (
  <div
    style={{
      position: "absolute",
      left,
      top,
      width,
      padding: "20px 22px",
      borderRadius: 18,
      border: `1px solid ${muted(0.22)}`,
      background: "rgba(1,33,18,0.55)",
    }}
  >
    <div style={labelStyle}>{label}</div>
    {children}
  </div>
);

const AdLayers = ({ copy }: { copy: AdCopy }) => {
  return (
    <div
      style={{
        position: "relative",
        width: AD_W,
        height: AD_H,
        overflow: "hidden",
        background: C.primary,
        fontFamily: F.sans,
      }}
    >
      {/* Ambient field: deep gradient + soft glow behind the diagram */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(155deg,#02361b 0%,#012112 55%,#01180c 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(46% 52% at 72% 46%, rgba(7,69,39,0.75) 0%, transparent 70%)",
        }}
      />
      {/* faint engineering grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(252,252,244,0.028) 1px,transparent 1px),linear-gradient(90deg,rgba(252,252,244,0.028) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Graphics layer (SVG) ─────────────────────────────────── */}
      <svg
        viewBox={`0 0 ${AD_W} ${AD_H}`}
        width={AD_W}
        height={AD_H}
        style={{ position: "absolute", inset: 0 }}
        fill="none"
      >
        <defs>
          <linearGradient id="diaTop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={green(0.55)} />
            <stop offset="100%" stopColor="rgba(7,69,39,0.22)" />
          </linearGradient>
          <radialGradient id="diaGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={green(0.5)} />
            <stop offset="100%" stopColor={green(0)} />
          </radialGradient>
          <pattern id="dots" width="13" height="13" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.4" fill={green(0.4)} />
          </pattern>
        </defs>

        {/* faint orbital arc behind the stack */}
        <circle cx={856} cy={430} r={330} stroke={green(0.1)} strokeWidth={1} />
        <circle cx={856} cy={430} r={250} stroke={green(0.07)} strokeWidth={1} />

        {/* soft glow under the stack */}
        <ellipse cx={856} cy={430} rx={210} ry={130} fill="url(#diaGlow)" opacity={0.5} />

        {/* connector lines (orthogonal elbows) */}
        <g stroke={green(0.45)} strokeWidth={1.4}>
          <path d="M856 372 L856 268 L956 268" />
          <path d="M824 470 L824 566 L760 566 L760 636" />
          <path d="M892 470 L892 588 L1000 588 L1000 636" />
        </g>

        {/* isometric layered stack (back → front) */}
        <polygon points={diamond(856, 486, 152, 90)} fill="none" stroke={green(0.3)} strokeWidth={1.4} />
        <polygon points={diamond(856, 446, 146, 86)} fill="url(#dots)" stroke={green(0.32)} strokeWidth={1.2} />
        <polygon points={diamond(856, 404, 140, 82)} fill="url(#diaTop)" stroke={green(0.7)} strokeWidth={1.6} />

        {/* node dots */}
        <Node cx={856} cy={404} r={5.5} />
        <Node cx={956} cy={268} />
        <Node cx={760} cy={636} />
        <Node cx={1000} cy={636} />
        <Node cx={856} cy={372} r={3.5} />
        <Node cx={824} cy={470} r={3.5} />
        <Node cx={892} cy={470} r={3.5} />
      </svg>

      {/* ── Cards (HTML text over the graphics) ──────────────────── */}
      <Card left={956} top={208} width={184} label="Operational Context">
        <Row />
        <Row />
        <Row dim />
      </Card>

      <Card left={622} top={636} width={236} label="Senior Engineering">
        <Row />
        <Row />
        <Row dim />
      </Card>

      <Card left={922} top={636} width={210} label="System Level Thinking">
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 16 }}>
          <span style={{ width: 26, height: 26, borderRadius: 7, border: `1.5px solid ${green(0.5)}`, background: green(0.12) }} />
          <span style={{ height: 1.5, width: 16, background: green(0.4) }} />
          <span style={{ width: 26, height: 26, borderRadius: 7, border: `1.5px solid ${green(0.5)}` }} />
          <span style={{ height: 1.5, width: 16, background: green(0.4) }} />
          <span
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: C.success,
              boxShadow: `0 0 12px ${green(0.7)}`,
              color: C.deep,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            ✓
          </span>
        </div>
      </Card>

      {/* ── Left editorial block ─────────────────────────────────── */}
      <div style={{ position: "absolute", left: 84, top: 150, width: 660 }}>
        <div style={{ ...labelStyle, fontSize: 16, letterSpacing: "0.3em" }}>
          {copy.eyebrow}
        </div>
        <h1
          style={{
            margin: "26px 0 0",
            fontFamily: F.display,
            fontWeight: 600,
            fontSize: 96,
            lineHeight: 0.98,
            letterSpacing: "-0.02em",
            color: C.cream,
            maxWidth: 640,
            whiteSpace: "pre-line",
          }}
        >
          {copy.headline}
        </h1>
        {/* connector motif */}
        <div style={{ display: "flex", alignItems: "center", marginTop: 40 }}>
          <span style={{ height: 1, width: 300, background: `linear-gradient(90deg, ${green(0.6)}, ${green(0.15)})` }} />
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: C.bright, boxShadow: `0 0 10px ${green(0.9)}`, marginLeft: -2 }} />
        </div>
        <p
          style={{
            margin: "34px 0 0",
            fontFamily: F.sans,
            fontWeight: 500,
            fontSize: 30,
            lineHeight: 1.35,
            color: "rgba(233,243,236,0.82)",
            maxWidth: 560,
          }}
        >
          {copy.subhead}
        </p>
      </div>

      {/* logo */}
      <img
        src={logoWhite}
        alt="ElderOps"
        style={{ position: "absolute", left: 84, top: 712, height: 46 }}
        crossOrigin="anonymous"
      />
    </div>
  );
};

export default AdLayers;
