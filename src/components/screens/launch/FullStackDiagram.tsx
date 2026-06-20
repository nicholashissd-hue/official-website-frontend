import { Fragment, useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { buildLayers } from "@/contents/screens/launch";
import { EASE } from "@/components/ui/reveal";
import { cn } from "@/lib/util";

/** Resting depth per layer — the top layer sits closest to the viewer. */
const depthZ = (i: number) => (buildLayers.length - 1 - i) * 26;

/** Small media-query hook so the 3D scene flattens on phones (legibility). */
const useIs3D = () => {
  const [is3D, setIs3D] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIs3D(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return is3D;
};

/** A data pulse cascading down the connector between two layers. */
const Connector = ({ delay }: { delay: number }) => (
  <div className="relative mx-auto my-1 h-6 w-px bg-bg-cream/15">
    <motion.span
      className="absolute left-1/2 top-0 size-1.5 -translate-x-1/2 rounded-full bg-success shadow-[0_0_10px_rgba(6,156,78,0.9)]"
      initial={{ top: "-10%", opacity: 0 }}
      animate={{ top: ["-10%", "110%"], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 1.4, ease: "easeIn", repeat: Infinity, repeatDelay: 1.1, delay }}
    />
  </div>
);

/**
 * "What We Build" centerpiece — a living full-stack system.
 * The layers assemble out of depth as you arrive, data pulses cascade through
 * the stack, light sweeps across each layer, and hovering a layer lifts it
 * out of the tower while the rest recede. Flattens cleanly on mobile and under
 * reduced motion; all loops pause when the diagram is off-screen.
 */
const FullStackDiagram = () => {
  const reduce = useReducedMotion() ?? false;
  const is3D = useIs3D();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const [hovered, setHovered] = useState<number | null>(null);

  const animate = inView && !reduce;
  const shown = inView || reduce;

  return (
    <div
      ref={ref}
      className="relative mx-auto max-w-3xl"
      style={{ perspective: is3D ? 1500 : undefined }}
    >
      <motion.div
        className="[transform-style:preserve-3d]"
        initial={false}
        animate={
          is3D && !reduce
            ? { rotateX: [15, 17, 15], rotateY: [-11, -9, -11] }
            : is3D
              ? { rotateX: 15, rotateY: -11 }
              : { rotateX: 0, rotateY: 0 }
        }
        transition={
          is3D && !reduce
            ? { duration: 9, ease: "easeInOut", repeat: Infinity }
            : { duration: 0.6 }
        }
        onMouseLeave={() => setHovered(null)}
      >
        {buildLayers.map((layer, i) => {
          const dimmed = hovered !== null && hovered !== i;
          const baseZ = is3D ? depthZ(i) : 0;
          const liftZ = hovered === i && is3D ? 46 : 0;

          return (
            <Fragment key={layer.key}>
              <motion.div
                tabIndex={0}
                onMouseEnter={() => setHovered(i)}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(null)}
                className={cn(
                  "group relative overflow-hidden rounded-2xl p-5 outline-none ring-1 transition-shadow duration-500 [transform-style:preserve-3d] focus-visible:ring-2 focus-visible:ring-success md:p-6",
                  hovered === i
                    ? "bg-bg-cream/[0.1] ring-success/40"
                    : "bg-bg-cream/[0.05] ring-bg-cream/12",
                )}
                style={{
                  boxShadow: is3D
                    ? "0 30px 55px rgba(1,20,10,0.5)"
                    : "0 16px 30px rgba(1,20,10,0.35)",
                }}
                initial={{ opacity: 0, z: -160, rotateX: 34 }}
                animate={
                  shown
                    ? {
                        opacity: dimmed ? 0.5 : 1,
                        z: baseZ + liftZ,
                        rotateX: 0,
                      }
                    : { opacity: 0, z: -160, rotateX: 34 }
                }
                transition={{
                  duration: 0.7,
                  ease: EASE,
                  delay: shown && !reduce ? i * 0.13 : 0,
                }}
              >
                {/* light sweep */}
                {animate && (
                  <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-success/15 to-transparent"
                    initial={{ left: "-40%" }}
                    animate={{ left: ["-40%", "130%"] }}
                    transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 2.2, delay: i * 0.6 }}
                  />
                )}

                <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                  <div className="flex items-center gap-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-success/15 font-mono text-[11px] font-medium text-border-light">
                      L{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold leading-tight tracking-[-0.01em] text-bg-cream md:text-[1.4rem]">
                        {layer.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-snug text-accent-four">
                        {layer.blurb}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:max-w-[56%] sm:justify-end">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className={cn(
                          "rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-500",
                          hovered === i
                            ? "bg-success/15 text-border-light"
                            : "bg-bg-cream/[0.06] text-bg-light/70",
                        )}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {i < buildLayers.length - 1 && animate && (
                <Connector delay={i * 0.45} />
              )}
              {i < buildLayers.length - 1 && !animate && (
                <div className="mx-auto my-1 h-6 w-px bg-bg-cream/15" />
              )}
            </Fragment>
          );
        })}
      </motion.div>
    </div>
  );
};

export default FullStackDiagram;
