import { LearningLoopCards } from "./learning-loop-cards";
import { LEARNING_LOOP_COPY } from "./learning-loop-copy";
import { LearningLoopDiagram } from "./learning-loop-diagram";

export function LearningLoopSection() {
  return (
    <section
      id="learning-loop"
      aria-labelledby="learning-loop-heading"
      className="mx-auto w-full max-w-(--content-width) px-(--gutter) pt-8 pb-14 min-[900px]:pt-12 min-[900px]:pb-24"
    >
      <h2
        id="learning-loop-heading"
        className="mx-auto max-w-[24ch] text-center text-4xl leading-[1.1] font-medium tracking-[-0.025em] text-balance [font-family:var(--heading-font)] min-[900px]:text-[clamp(2.25rem,3.35vw,2.75rem)]"
      >
        {LEARNING_LOOP_COPY.heading}
      </h2>
      <LearningLoopDiagram />
      <LearningLoopCards />
    </section>
  );
}
