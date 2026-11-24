import { BookOpen } from "lucide-react";
import { LEARNING_OUTCOMES_COPY } from "./learning-outcomes-copy";
import { LEARNING_OUTCOME_ICONS } from "./learning-outcomes-icons";

export function LearningOutcomesIllustration() {
  const { items } = LEARNING_OUTCOMES_COPY;

  return (
    <div
      data-editorial-stage
      aria-hidden="true"
      className="relative isolate aspect-[1.65] min-h-56 w-full min-w-0 overflow-hidden rounded-2xl min-[900px]:col-start-1 min-[900px]:row-start-1"
    >
      <svg
        viewBox="0 0 400 240"
        preserveAspectRatio="none"
        className="absolute inset-0 size-full text-(--accent-text)/55"
        fill="none"
      >
        <path
          d="M80 49v38q0 10 10 10h220q10 0 10-10V49 M160 49v48 M240 49v48 M200 97v46 M93 187v-34q0-10 10-10h194q10 0 10 10v34 M200 143v44"
          stroke="currentColor"
          strokeDasharray="2 3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="80" cy="97" r="2" fill="currentColor" />
        <circle cx="320" cy="97" r="2" fill="currentColor" />
        <circle cx="93" cy="143" r="2" fill="currentColor" />
        <circle cx="307" cy="143" r="2" fill="currentColor" />
      </svg>
      <div className="absolute inset-x-[10%] top-[20%] grid -translate-y-1/2 grid-cols-4 justify-items-center">
        {items.slice(0, 4).map(({ icon }) => {
          const Icon = LEARNING_OUTCOME_ICONS[icon];
          return (
            <span key={icon} className="grid size-10 place-items-center rounded-xl border border-(--line) bg-(--surface) text-(--accent-text) min-[900px]:size-12">
              <Icon size={19} />
            </span>
          );
        })}
      </div>
      <div className="absolute inset-x-[10%] bottom-[22%] grid translate-y-1/2 grid-cols-3 justify-items-center">
        {items.slice(4).map(({ icon }) => {
          const Icon = LEARNING_OUTCOME_ICONS[icon];
          return (
            <span key={icon} className="grid size-10 place-items-center rounded-xl border border-(--line) bg-(--surface) text-(--accent-text) min-[900px]:size-12">
              <Icon size={19} />
            </span>
          );
        })}
      </div>
      <div className="absolute top-1/2 left-1/2 h-[28%] w-[24%] -translate-1/2 rounded-2xl border border-(--accent-line) bg-(--accent-tint)" />
      <div
        data-editorial-glass
        className="absolute top-1/2 left-1/2 grid h-[31%] w-[31%] -translate-1/2 place-items-center rounded-2xl text-(--text)"
      >
        <BookOpen size={29} />
      </div>
    </div>
  );
}
