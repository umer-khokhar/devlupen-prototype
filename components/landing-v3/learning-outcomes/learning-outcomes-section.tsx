import { EditorialLabel } from "../shared/editorial-label";
import { LEARNING_OUTCOMES_COPY } from "./learning-outcomes-copy";
import { LearningOutcomesShowcase } from "./learning-outcomes-showcase";
import "./learning-outcomes.css";

export function LearningOutcomesSection() {
  return (
    <section
      id="what-youll-learn"
      aria-labelledby="learning-outcomes-heading"
      className="mx-auto w-full max-w-(--content-width) px-(--gutter) pt-10 pb-14 min-[900px]:pt-16 min-[900px]:pb-24"
    >
      <div className="text-center">
        <EditorialLabel label={LEARNING_OUTCOMES_COPY.label} />
        <h2
          id="learning-outcomes-heading"
          className="mx-auto max-w-[24ch] text-4xl leading-[1.1] font-medium tracking-[-0.025em] text-balance [font-family:var(--heading-font)] min-[900px]:text-[clamp(2.25rem,3.35vw,2.75rem)]"
        >
          {LEARNING_OUTCOMES_COPY.heading}
        </h2>
      </div>
      <LearningOutcomesShowcase />
    </section>
  );
}
