import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import { caseFiles } from "@/contents/screens/homeV4";

const FileRow = ({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) => (
  <div className="flex gap-4 border-t border-hairline py-2.5 first:border-t-0">
    <p className="w-[104px] shrink-0 pt-0.5 font-mono text-xs uppercase tracking-[0.14em] text-primary">
      {label}
    </p>
    <p className={strong ? "text-sm font-medium text-ink" : "text-sm text-sub"}>
      {value}
    </p>
  </div>
);

/** Client work told as opened case files: situation, what we did, outcome. */
const CaseFiles = () => (
  <section className="border-t border-hairline bg-paper">
    <div className="container section-space-block">
      <Reveal>
        <Kicker>{caseFiles.eyebrow}</Kicker>
        <h2 className="mt-3 max-w-3xl font-display text-heading font-bold tracking-[-0.03em] text-ink">
          {caseFiles.title}
        </h2>
      </Reveal>

      <div className="mt-13 grid gap-x-9 gap-y-12 md:grid-cols-3">
        {caseFiles.cases.map((caseFile, index) => (
          <Reveal key={caseFile.title} delay={index * 0.08} as="article">
            <div className="border-t border-ink/35 pt-6">
              <h3 className="mb-3.5 text-lg font-bold text-ink">
                {caseFile.title}
              </h3>
              <FileRow label="Situation" value={caseFile.situation} />
              <FileRow label="What we did" value={caseFile.whatWeDid} />
              <FileRow label="Outcome" value={caseFile.outcome} strong />
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-10 font-mono text-xs uppercase tracking-[0.16em] text-sub/70">
          {caseFiles.note}
        </p>
      </Reveal>
    </div>
  </section>
);

export default CaseFiles;
