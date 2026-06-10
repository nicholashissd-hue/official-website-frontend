import { useEffect, useRef } from "react";
import { cn } from "@/lib/util";

interface NetworkCanvasProps {
  className?: string;
  /** Grid spacing in px between lattice nodes. */
  spacing?: number;
}

interface Link {
  ax: number;
  ay: number;
  bx: number;
  by: number;
  /** Lifecycle 0 → 1 (draw, hold, fade handled from phase). */
  t: number;
  speed: number;
  pulse: boolean;
}

const DOT = "139, 163, 150"; // accent-four
const LINE = "6, 156, 78"; // success
const PULSE = "221, 227, 146"; // border-light

/**
 * The V2 signature graphic: a precise dot lattice with connection lines
 * that quietly draw themselves in and dissolve — engineering as a living
 * network. Monochrome-green, slow, restrained. Pure canvas, no deps.
 */
const NetworkCanvas = ({ className, spacing = 64 }: NetworkCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let raf = 0;
    let running = true;
    const links: Link[] = [];
    const maxLinks = 14;

    const nodeAt = (c: number, r: number) => ({
      x: c * spacing + spacing / 2,
      y: r * spacing + spacing / 2,
    });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / spacing);
      rows = Math.ceil(height / spacing);
    };

    const spawnLink = () => {
      const c = Math.floor(Math.random() * cols);
      const r = Math.floor(Math.random() * rows);
      const dirs = [
        [1, 0],
        [0, 1],
        [1, 1],
        [1, -1],
        [2, 0],
        [0, 2],
      ];
      const [dc, dr] = dirs[Math.floor(Math.random() * dirs.length)];
      const a = nodeAt(c, r);
      const b = nodeAt(
        Math.min(c + dc, cols - 1),
        Math.max(0, Math.min(r + dr, rows - 1)),
      );
      if (a.x === b.x && a.y === b.y) return;
      links.push({
        ax: a.x,
        ay: a.y,
        bx: b.x,
        by: b.y,
        t: 0,
        speed: 0.0016 + Math.random() * 0.0022,
        pulse: Math.random() < 0.3,
      });
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Lattice dots, breathing very slightly.
      for (let c = 0; c <= cols; c++) {
        for (let r = 0; r <= rows; r++) {
          const { x, y } = nodeAt(c, r);
          const breath = reduceMotion
            ? 0
            : Math.sin(time * 0.00045 + c * 0.7 + r * 1.3) * 0.08;
          ctx.fillStyle = `rgba(${DOT}, ${0.16 + breath})`;
          ctx.fillRect(x - 0.75, y - 0.75, 1.5, 1.5);
        }
      }

      // Connection lines with draw-in / hold / fade lifecycle.
      for (let i = links.length - 1; i >= 0; i--) {
        const link = links[i];
        link.t += link.speed * 16;
        if (link.t >= 1) {
          links.splice(i, 1);
          continue;
        }

        const drawIn = Math.min(link.t / 0.25, 1);
        const fade = link.t > 0.7 ? 1 - (link.t - 0.7) / 0.3 : 1;
        const ex = link.ax + (link.bx - link.ax) * drawIn;
        const ey = link.ay + (link.by - link.ay) * drawIn;

        ctx.strokeStyle = `rgba(${LINE}, ${0.34 * fade})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(link.ax, link.ay);
        ctx.lineTo(ex, ey);
        ctx.stroke();

        // Endpoint markers.
        ctx.fillStyle = `rgba(${LINE}, ${0.5 * fade})`;
        ctx.fillRect(link.ax - 1.25, link.ay - 1.25, 2.5, 2.5);

        // A bright pulse travelling the wire.
        if (link.pulse && link.t > 0.2 && link.t < 0.85) {
          const p = (link.t - 0.2) / 0.65;
          const px = link.ax + (link.bx - link.ax) * p;
          const py = link.ay + (link.by - link.ay) * p;
          ctx.fillStyle = `rgba(${PULSE}, ${0.85 * fade})`;
          ctx.beginPath();
          ctx.arc(px, py, 1.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (!reduceMotion && links.length < maxLinks && Math.random() < 0.06) {
        spawnLink();
      }
    };

    const loop = (time: number) => {
      if (!running) return;
      draw(time);
      raf = requestAnimationFrame(loop);
    };

    resize();

    if (reduceMotion) {
      // Static composition: a handful of fixed links, drawn once.
      for (let i = 0; i < 8; i++) spawnLink();
      links.forEach((link) => (link.t = 0.4));
      draw(0);
    } else {
      raf = requestAnimationFrame(loop);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (reduceMotion) return;
      if (entry.isIntersecting && !running) {
        running = true;
        raf = requestAnimationFrame(loop);
      } else if (!entry.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    observer.observe(canvas);

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(canvas);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, [spacing]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 size-full", className)}
    />
  );
};

export default NetworkCanvas;
