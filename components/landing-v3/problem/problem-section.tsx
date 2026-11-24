import { EditorialLabel } from "../shared/editorial-label";
import { PROBLEM_COPY } from "./problem-copy";
import { ProblemExample } from "./problem-example";
import { PROBLEM_POINT_ICONS } from "./problem-icons";

export function ProblemSection() {
  return (
    <section
      id="the-problem"
      aria-labelledby="problem-heading"
      className="mx-auto grid w-full max-w-(--content-width) items-center gap-7 px-(--gutter) py-12 min-[900px]:grid-cols-2 min-[900px]:gap-14 min-[900px]:py-16"
    >
      <div>
        <EditorialLabel label={PROBLEM_COPY.label} />
        <h2
          id="problem-heading"
          className="max-w-[21ch] text-4xl leading-[1.1] font-medium tracking-[-0.025em] [font-family:var(--heading-font)] min-[900px]:text-[clamp(2.25rem,3.35vw,2.75rem)]"
        >
          {PROBLEM_COPY.heading}
        </h2>
        <ul className="mt-5 grid gap-2.5 min-[900px]:mt-6">
          {PROBLEM_COPY.points.map((point, index) => {
            const Icon = PROBLEM_POINT_ICONS[index];

            return (
              <li key={point} className="flex items-center gap-2.5 text-base leading-relaxed text-(--muted) min-[900px]:text-lg">
                <Icon size={16} aria-hidden="true" className="shrink-0 text-(--accent-text)" />
                {point}
              </li>
            );
          })}
        </ul>
      </div>
      <ProblemExample />
    </section>
  );
}
