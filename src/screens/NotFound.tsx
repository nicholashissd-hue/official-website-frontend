import Button from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";

const NotFound = () => {
  return (
    <section className="grain relative flex min-h-svh flex-col overflow-hidden bg-primary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_50%_100%,#01220f_0%,transparent_65%)]"
      />

      <div className="container relative z-10 flex flex-1 flex-col items-center justify-center py-40 text-center">
        <Reveal immediate y={20}>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-border-light">
            Error — 404
          </p>
        </Reveal>

        <Reveal immediate delay={0.12} y={26}>
          <h1 className="mt-8 font-display text-[clamp(3.5rem,12vw,8rem)] leading-none tracking-[-0.02em] text-bg-cream">
            4<em className="italic text-border-light">0</em>4
          </h1>
        </Reveal>

        <Reveal immediate delay={0.24} y={22}>
          <p className="mt-7 max-w-md text-[15px] leading-[1.8] text-accent-four">
            This page doesn't exist — or it was decommissioned with proper
            documentation and a clean rollback plan.
          </p>
        </Reveal>

        <Reveal immediate delay={0.36} y={20}>
          <div className="mt-10">
            <Button to="/" variant="light" withArrow>
              Return Home
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default NotFound;
