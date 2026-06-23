import type { CSSProperties } from "react";
import { AD_H, AD_W, C, F, type AdCopy } from "./templates";
import logoWhite from "@/assets/svg/elderOps-white-logo.svg";

/**
 * "Delivery Console" — headline left, a live delivery console (metrics + a
 * rising chart) on the right. Same brand world as the site's BuildWindow.
 */

const green = (o: number) => `rgba(15,180,94,${o})`;
const muted = (o: number) => `rgba(139,163,150,${o})`;

const labelStyle: CSSProperties = {
  fontFamily: F.mono,
  fontSize: 11,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: C.muted,
};

const Metric = ({ label, value }: { label: string; value: string }) => (
  <div
    style={{
      flex: 1,
      borderRadius: 12,
      border: `1px solid ${muted(0.16)}`,
      background: "rgba(252,252,244,0.04)",
      padding: "14px 16px",
    }}
  >
    <div style={labelStyle}>{label}</div>
    <div style={{ marginTop: 8, fontFamily: F.display, fontWeight: 600, fontSize: 30, color: C.cream }}>
      {value}
    </div>
  </div>
);

const AdConsole = ({ copy }: { copy: AdCopy }) => (
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
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(155deg,#02361b 0%,#012112 60%,#01180c 100%)" }} />
    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(48% 55% at 74% 50%, rgba(7,69,39,0.7) 0%, transparent 70%)" }} />
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage:
          "linear-gradient(rgba(252,252,244,0.028) 1px,transparent 1px),linear-gradient(90deg,rgba(252,252,244,0.028) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    {/* Left editorial */}
    <div style={{ position: "absolute", left: 84, top: 168, width: 470 }}>
      <div style={{ ...labelStyle, fontSize: 15, letterSpacing: "0.3em" }}>{copy.eyebrow}</div>
      <h1
        style={{
          margin: "26px 0 0",
          fontFamily: F.display,
          fontWeight: 600,
          fontSize: 78,
          lineHeight: 1.0,
          letterSpacing: "-0.02em",
          color: C.cream,
          whiteSpace: "pre-line",
        }}
      >
        {copy.headline}
      </h1>
      <div style={{ display: "flex", alignItems: "center", marginTop: 34 }}>
        <span style={{ height: 1, width: 220, background: `linear-gradient(90deg, ${green(0.6)}, ${green(0.12)})` }} />
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: C.bright, boxShadow: `0 0 10px ${green(0.9)}` }} />
      </div>
      <p style={{ margin: "30px 0 0", fontFamily: F.sans, fontWeight: 500, fontSize: 26, lineHeight: 1.4, color: "rgba(233,243,236,0.82)", maxWidth: 430 }}>
        {copy.subhead}
      </p>
    </div>

    {/* Console panel */}
    <div
      style={{
        position: "absolute",
        left: 624,
        top: 150,
        width: 492,
        height: 540,
        borderRadius: 22,
        border: `1px solid ${muted(0.18)}`,
        background: "rgba(1,33,18,0.55)",
        padding: 24,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: C.success, boxShadow: `0 0 9px ${green(0.8)}` }} />
          <span style={labelStyle}>ElderOps — Delivery</span>
        </div>
        <span style={{ ...labelStyle, color: C.deep, background: C.success, padding: "5px 12px", borderRadius: 999, fontSize: 10 }}>
          ● Live
        </span>
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        <Metric label="Deploys" value="1.2k" />
        <Metric label="Uptime" value="99.9%" />
        <Metric label="Lead Time" value="48h" />
      </div>

      {/* chart */}
      <div style={{ position: "relative", flex: 1, borderRadius: 14, border: `1px solid ${muted(0.14)}`, background: "rgba(252,252,244,0.03)", overflow: "hidden" }}>
        <svg viewBox="0 0 100 56" preserveAspectRatio="none" width="100%" height="100%" fill="none" style={{ display: "block" }}>
          <defs>
            <linearGradient id="cArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={green(0.34)} />
              <stop offset="100%" stopColor={green(0)} />
            </linearGradient>
          </defs>
          <path
            d="M0 47 C 14 43, 22 45, 33 37 C 44 30, 50 33, 60 24 C 70 16, 78 19, 88 11 C 94 7, 97 8, 100 5 L 100 56 L 0 56 Z"
            fill="url(#cArea)"
          />
          <path
            d="M0 47 C 14 43, 22 45, 33 37 C 44 30, 50 33, 60 24 C 70 16, 78 19, 88 11 C 94 7, 97 8, 100 5"
            stroke={C.bright}
            strokeWidth={2}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        {[1, 1, 1, 0].map((on, i) => (
          <span key={i} style={{ height: 6, flex: on ? 2 : 1, borderRadius: 3, background: on ? C.success : muted(0.25) }} />
        ))}
      </div>
    </div>

    <img src={logoWhite} alt="ElderOps" style={{ position: "absolute", left: 84, top: 712, height: 46 }} crossOrigin="anonymous" />
  </div>
);

export default AdConsole;
