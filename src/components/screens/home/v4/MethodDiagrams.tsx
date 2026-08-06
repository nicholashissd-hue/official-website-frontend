/**
 * The method told as one drawing in three states (Nicholas, 2026-08-06:
 * elegant diagrams, not photos). A single system of boxes, cylinders and
 * arrows: Assess rings the risk in emerald, Build lights the active path,
 * Own hands the whole boundary over. Hand-authored SVG: ink hairlines on
 * bone, one emerald accent, no text, square corners.
 */

const INK = "rgb(11 36 24 / 0.78)";
const INK_FAINT = "rgb(11 36 24 / 0.38)";
const EMERALD = "#0fb45e";

const Cylinder = ({
  x,
  y,
  w = 76,
  h = 88,
  stroke = INK,
  opacity = 1,
  dashed = false,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  stroke?: string;
  opacity?: number;
  dashed?: boolean;
}) => {
  const ry = w * 0.18;
  const dash = dashed ? "7 6" : undefined;
  return (
    <g stroke={stroke} strokeWidth={2.5} fill="none" opacity={opacity} strokeDasharray={dash}>
      <ellipse cx={x + w / 2} cy={y + ry} rx={w / 2} ry={ry} />
      <path
        d={`M ${x} ${y + ry} V ${y + h - ry} A ${w / 2} ${ry} 0 0 0 ${x + w} ${y + h - ry} V ${y + ry}`}
      />
    </g>
  );
};

const Box = ({
  x,
  y,
  w = 136,
  h = 68,
  stroke = INK,
  opacity = 1,
  dashed = false,
  fill = "none",
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  stroke?: string;
  opacity?: number;
  dashed?: boolean;
  fill?: string;
}) => (
  <rect
    x={x}
    y={y}
    width={w}
    height={h}
    stroke={stroke}
    strokeWidth={2.5}
    fill={fill}
    opacity={opacity}
    strokeDasharray={dashed ? "7 6" : undefined}
  />
);

const Arrow = ({
  d,
  tip,
  angle,
  stroke = INK,
  opacity = 1,
  width = 2,
}: {
  d: string;
  /** Tip position. */
  tip: [number, number];
  /** Tip rotation in degrees (0 = pointing right). */
  angle: number;
  stroke?: string;
  opacity?: number;
  width?: number;
}) => (
  <g stroke={stroke} fill="none" opacity={opacity}>
    <path d={d} strokeWidth={width} />
    <path
      d="M -11 -6 L 0 0 L -11 6"
      strokeWidth={width}
      transform={`translate(${tip[0]} ${tip[1]}) rotate(${angle})`}
    />
  </g>
);

/** Shared node coordinates so the three states read as one system. */
const N = {
  dbA: { x: 64, y: 116 },
  box1: { x: 220, y: 126 },
  box2: { x: 440, y: 126 },
  dbB: { x: 660, y: 116 },
  box3: { x: 220, y: 300 },
  box4: { x: 440, y: 300 },
  box5: { x: 330, y: 460 },
};

const Arrows = ({ stroke = INK, opacity = 1 }: { stroke?: string; opacity?: number }) => (
  <g>
    <Arrow d="M 140 160 H 206" tip={[214, 160]} angle={0} stroke={stroke} opacity={opacity} />
    <Arrow d="M 356 160 H 426" tip={[434, 160]} angle={0} stroke={stroke} opacity={opacity} />
    <Arrow d="M 576 160 H 646" tip={[654, 160]} angle={0} stroke={stroke} opacity={opacity} />
    <Arrow d="M 288 194 V 286" tip={[288, 294]} angle={90} stroke={stroke} opacity={opacity} />
    <Arrow d="M 508 194 V 286" tip={[508, 294]} angle={90} stroke={stroke} opacity={opacity} />
    <Arrow d="M 356 334 H 426" tip={[434, 334]} angle={0} stroke={stroke} opacity={opacity} />
    <Arrow d="M 288 368 V 430 H 316" tip={[324, 430]} angle={0} stroke={stroke} opacity={opacity} />
    <Arrow d="M 508 368 V 494 H 480" tip={[472, 494]} angle={180} stroke={stroke} opacity={opacity} />
  </g>
);

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div className="border border-hairline bg-bone">
    <svg viewBox="0 0 800 600" role="img" className="block w-full">
      {children}
    </svg>
  </div>
);

/** Assess: the system surveyed in faint ink, the risk ringed in emerald. */
export const AssessDiagram = () => (
  <Frame>
    <Cylinder {...N.dbA} stroke={INK_FAINT} />
    <Box {...N.box1} stroke={INK_FAINT} />
    <Box {...N.box2} stroke={INK_FAINT} />
    <Cylinder {...N.dbB} stroke={INK_FAINT} />
    <Box {...N.box3} stroke={INK_FAINT} />
    <Box {...N.box5} stroke={INK_FAINT} />
    <Arrows stroke={INK_FAINT} />
    <Box {...N.box4} stroke={INK} />
    <rect
      x={N.box4.x - 22}
      y={N.box4.y - 22}
      width={180}
      height={112}
      fill="none"
      stroke={EMERALD}
      strokeWidth={2.5}
      strokeDasharray="9 7"
    />
  </Frame>
);

/** Build: the active path runs emerald; later nodes still under construction. */
export const BuildDiagram = () => (
  <Frame>
    <Cylinder {...N.dbA} />
    <Box {...N.box1} />
    <Box {...N.box3} />
    <Box {...N.box2} stroke={EMERALD} fill="rgb(15 180 94 / 0.07)" />
    <Box {...N.box4} dashed stroke={INK_FAINT} />
    <Box {...N.box5} dashed stroke={INK_FAINT} />
    <Cylinder {...N.dbB} dashed stroke={INK_FAINT} />
    <g>
      <Arrow d="M 140 160 H 206" tip={[214, 160]} angle={0} stroke={EMERALD} width={2.5} />
      <Arrow d="M 356 160 H 426" tip={[434, 160]} angle={0} stroke={EMERALD} width={2.5} />
      <Arrow d="M 288 194 V 286" tip={[288, 294]} angle={90} stroke={INK} />
      <Arrow d="M 576 160 H 646" tip={[654, 160]} angle={0} stroke={INK_FAINT} />
      <Arrow d="M 508 194 V 286" tip={[508, 294]} angle={90} stroke={INK_FAINT} />
      <Arrow d="M 356 334 H 426" tip={[434, 334]} angle={0} stroke={INK_FAINT} />
      <Arrow d="M 288 368 V 430 H 316" tip={[324, 430]} angle={0} stroke={INK_FAINT} />
      <Arrow d="M 508 368 V 494 H 480" tip={[472, 494]} angle={180} stroke={INK_FAINT} />
    </g>
  </Frame>
);

/** Own: everything solid and calm; the whole boundary belongs to the client. */
export const OwnDiagram = () => (
  <Frame>
    <rect
      x={30}
      y={66}
      width={740}
      height={500}
      fill="none"
      stroke={EMERALD}
      strokeWidth={2.5}
    />
    <Cylinder {...N.dbA} />
    <Box {...N.box1} />
    <Box {...N.box2} />
    <Cylinder {...N.dbB} />
    <Box {...N.box3} />
    <Box {...N.box4} />
    <Box {...N.box5} />
    <Arrows />
  </Frame>
);
