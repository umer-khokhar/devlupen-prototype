import { Check } from "lucide-react";
import { LESSON_PREVIEW_COPY } from "./lesson-preview-copy";

export function LessonOverview() {
  const copy = LESSON_PREVIEW_COPY;

  return (
    <div className="grid items-start gap-5 min-[900px]:grid-cols-[1.25fr_1fr] min-[900px]:gap-7">
      <div>
        <h3 data-lesson-title>{copy.title}</h3>
        <p className="mt-3 font-medium">{copy.outcome}</p>
        <p className="mt-3 leading-relaxed text-(--muted)">{copy.explanation}</p>
      </div>
      <div className="rounded-(--radius-small) border border-(--line) bg-(--surface-2) p-4 min-[900px]:p-5">
        <h4 className="text-sm font-medium">{copy.overviewLabel}</h4>
        <ul className="mt-3 grid gap-3 text-sm leading-relaxed text-(--muted)">
          {copy.overviewItems.map((item) => (
            <li key={item} className="flex gap-2">
              <Check size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-(--accent-text)" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
