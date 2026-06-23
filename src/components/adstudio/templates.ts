/** Shared design tokens for the ad templates (kept self-contained so exports
 *  render identically regardless of the surrounding app styles). */
export const C = {
  deep: "#012112",
  primary: "#02361b",
  pine: "#074527",
  success: "#069c4e",
  bright: "#0fb45e",
  cream: "#fcfcf4",
  sage: "#e9f3ec",
  muted: "#8ba396",
};

export const F = {
  display: '"Clash Display", "Avenir Next", "Trebuchet MS", sans-serif',
  sans: '"Satoshi", system-ui, -apple-system, sans-serif',
  mono: '"IBM Plex Mono", ui-monospace, "SF Mono", Menlo, monospace',
};

/** The editable copy each template renders. */
export interface AdCopy {
  eyebrow: string;
  headline: string;
  subhead: string;
}

export const AD_W = 1200;
export const AD_H = 840;

export type TemplateId = "layers" | "console" | "statement";

export const TEMPLATES: { id: TemplateId; name: string }[] = [
  { id: "layers", name: "Layered Schematic" },
  { id: "console", name: "Delivery Console" },
  { id: "statement", name: "Bold Statement" },
];
