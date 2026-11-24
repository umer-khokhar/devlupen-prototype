import { EditorialLabel } from "../shared/editorial-label";
import { LEARNING_OUTCOMES_COPY } from "./learning-outcomes-copy";
import { LearningOutcomesIllustration } from "./learning-outcomes-illustration";
import { LearningOutcomesList } from "./learning-outcomes-list";

export function LearningOutcomesSection() {
  return (
    <section
      id="what-youll-learn"
      aria-labelledby="learning-outcomes-heading"
      className="mx-auto grid w-full max-w-(--content-width) items-center gap-7 px-(--gutter) pt-6 pb-14 min-[900px]:grid-cols-2 min-[900px]:gap-14 min-[900px]:pt-10 min-[900px]:pb-24"
    >
      <div className="min-[900px]:col-start-2 min-[900px]:row-start-1">
        <EditorialLabel label={LEARNING_OUTCOMES_COPY.label} />
        <h2
          id="learning-outcomes-heading"
          className="max-w-[21ch] text-4xl leading-[1.1] font-medium tracking-[-0.025em] [font-family:var(--heading-font)] min-[900px]:text-[clamp(2.25rem,3.35vw,2.75rem)]"
        >
          {LEARNING_OUTCOMES_COPY.heading}
        </h2>
        <LearningOutcomesList />
      </div>
      <LearningOutcomesIllustration />
    </section>
  );
}
