import { LEARNING_LOOP_COPY } from "./learning-loop-copy";

export function LearningLoopCards() {
  return (
    <ol
      role="list"
      className="mx-auto mt-4 grid max-w-[64rem] gap-3 min-[900px]:mt-5 min-[900px]:grid-cols-4 min-[900px]:gap-4"
    >
      {LEARNING_LOOP_COPY.steps.map(({ number, label, icon: Icon, description, takeaway }) => (
        <li
          key={number}
          className="flex min-w-0 flex-col rounded-[1.25rem] border border-(--line) bg-transparent p-5"
        >
          <span
            aria-hidden="true"
            className="grid size-10 place-items-center rounded-[0.625rem] border border-(--line) bg-(--surface-2) text-(--text) shadow-[inset_0_1px_0_var(--surface),0_2px_0_var(--line)]"
          >
            <Icon size={19} />
          </span>
          <h3 className="mt-5 text-lg leading-snug font-medium [font-family:var(--heading-font)]">
            {label}
          </h3>
          <p className="mt-2 mb-5 text-base leading-relaxed text-(--muted)">{description}</p>
          <span className="mt-auto self-start rounded-(--radius-pill) bg-(--surface-2) px-3 py-1 text-xs font-medium">
            {takeaway}
          </span>
        </li>
      ))}
    </ol>
  );
}
