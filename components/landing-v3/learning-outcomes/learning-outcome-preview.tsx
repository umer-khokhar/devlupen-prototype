import { FileCode } from "lucide-react";
import { LEARNING_OUTCOMES_COPY } from "./learning-outcomes-copy";
import { LEARNING_OUTCOME_ICONS } from "./learning-outcomes-icons";
import type { LearningOutcome } from "./learning-outcomes.types";

type LearningOutcomePreviewProps = { outcome: LearningOutcome };

export function LearningOutcomePreview({ outcome }: LearningOutcomePreviewProps) {
  const Icon = LEARNING_OUTCOME_ICONS[outcome.icon];

  return (
    <figure>
      <div className="outcome-glass rounded-3xl px-2 pb-2 min-[900px]:px-3 min-[900px]:pb-3">
        <div className="flex min-h-16 items-center justify-between gap-2 px-2 pt-3 min-[900px]:min-h-[4.5rem] min-[900px]:px-3 min-[900px]:pt-2">
          <div aria-hidden="true" className="flex items-center gap-2 text-(--accent)">
            <span className="size-3 rounded-full bg-current opacity-75" />
            <span className="size-3 rounded-full bg-current opacity-50" />
            <span className="size-3 rounded-full bg-current opacity-30" />
          </div>
          <span className="rounded-(--radius-pill) bg-(--surface) px-2.5 py-1 text-xs font-medium text-(--muted) [font-family:var(--mono-font)]">
            {LEARNING_OUTCOMES_COPY.previewLabel}
          </span>
        </div>
        <div className="outcome-window grid grid-rows-[auto_1fr] rounded-2xl border border-(--line) bg-(--surface) text-left min-[900px]:grid-cols-[12rem_minmax(0,1fr)] min-[900px]:grid-rows-[1fr]">
          <div className="min-w-0 rounded-t-[calc(1rem-1px)] border-b border-(--line) bg-(--surface-2) px-4 py-3 min-[900px]:rounded-tr-none min-[900px]:rounded-bl-[calc(1rem-1px)] min-[900px]:border-r min-[900px]:border-b-0 min-[900px]:p-4">
            <p className="flex items-center gap-2 text-xs font-medium text-(--muted)">
              <Icon size={15} aria-hidden="true" className="shrink-0 text-(--accent-text)" />
              {outcome.tab}
            </p>
            <ol className="mt-3 grid gap-2">
              {outcome.steps.map((step, index) => (
                <li key={step} className="flex items-start gap-2 rounded-lg border border-(--line) bg-(--surface) px-2.5 py-2 text-xs leading-relaxed text-(--muted)">
                  <span aria-hidden="true" className="text-(--accent-text) [font-family:var(--mono-font)]">
                    0{index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="min-w-0 p-5 min-[900px]:px-9 min-[900px]:py-7">
            <h3 className="text-[clamp(1.5rem,3vw,2rem)] leading-[1.12] font-semibold tracking-[-0.025em] text-balance [font-family:var(--heading-font)]">
              {outcome.title}
            </h3>
            <div className="mt-5 min-w-0 rounded-(--radius-small) bg-(--code-bg) p-3 text-(--code-text) min-[900px]:p-5">
              <div className="mb-3 flex items-center gap-2 text-xs [font-family:var(--mono-font)]">
                <FileCode size={15} aria-hidden="true" className="shrink-0" />
                <span className="wrap-anywhere">{outcome.file}</span>
              </div>
              <pre className="text-xs leading-relaxed wrap-anywhere whitespace-pre-wrap [font-family:var(--mono-font)] min-[900px]:text-[0.8125rem]">
                <code>{outcome.example}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mx-auto mt-5 max-w-[65ch] text-center text-base leading-relaxed text-balance text-(--muted) min-[900px]:mt-6 min-[900px]:text-lg">
        {outcome.label}
      </figcaption>
    </figure>
  );
}
