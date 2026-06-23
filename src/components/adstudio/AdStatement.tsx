import { AD_H, AD_W, C, F, type AdCopy } from "./templates";
import logoWhite from "@/assets/svg/elderOps-white-logo.svg";

/**
 * "Bold Statement" — a centred, type-forward ad over a faint node
 * constellation. Maximum headline impact; minimal furniture.
 */

const green = (o: number) => `rgba(15,180,94,${o})`;

const NODES: [number, number][] = [
  [110, 130], [300, 86], [600, 96], [900, 86], [1090, 140],
  [180, 300], [1040, 300], [120, 560], [1110, 540],
  [220, 730], [600, 752], [980, 730], [1080, 700],
];
const LINKS: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [4, 6], [5, 7], [6, 8],
  [7, 9], [9, 10], [10, 11], [11, 12], [8, 12],
];

const AdStatement = ({ copy }: { copy: AdCopy }) => (
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
    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(70% 70% at 50% 42%, #073f24 0%, #02361b 45%, #01160b 100%)" }} />
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage:
          "linear-gradient(rgba(252,252,244,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(252,252,244,0.025) 1px,transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />

    {/* constellation */}
    <svg viewBox={`0 0 ${AD_W} ${AD_H}`} width={AD_W} height={AD_H} style={{ position: "absolute", inset: 0 }} fill="none">
      <g stroke={green(0.14)} strokeWidth={1}>
        {LINKS.map(([a, b], i) => (
          <line key={i} x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]} />
        ))}
      </g>
      {NODES.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={9} fill={green(0.12)} />
          <circle cx={x} cy={y} r={3.5} fill={green(0.55)} />
        </g>
      ))}
    </svg>

    {/* centred column */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 120px",
      }}
    >
      <div style={{ fontFamily: F.mono, fontSize: 16, letterSpacing: "0.34em", textTransform: "uppercase", color: C.muted }}>
        {copy.eyebrow}
      </div>
      <h1
        style={{
          margin: "30px 0 0",
          fontFamily: F.display,
          fontWeight: 600,
          fontSize: 104,
          lineHeight: 0.98,
          letterSpacing: "-0.025em",
          color: C.cream,
          whiteSpace: "pre-line",
        }}
      >
        {copy.headline}
      </h1>
      <div style={{ display: "flex", alignItems: "center", gap: 0, marginTop: 38 }}>
        <span style={{ height: 1, width: 90, background: green(0.2) }} />
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: C.bright, boxShadow: `0 0 10px ${green(0.9)}`, margin: "0 4px" }} />
        <span style={{ height: 1, width: 90, background: green(0.2) }} />
      </div>
      <p style={{ margin: "32px 0 0", fontFamily: F.sans, fontWeight: 500, fontSize: 30, lineHeight: 1.4, color: "rgba(233,243,236,0.85)", maxWidth: 720 }}>
        {copy.subhead}
      </p>
    </div>

    <img
      src={logoWhite}
      alt="ElderOps"
      style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: 740, height: 42 }}
      crossOrigin="anonymous"
    />
  </div>
);

export default AdStatement;
