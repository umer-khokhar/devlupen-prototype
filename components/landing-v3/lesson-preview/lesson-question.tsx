import { Lightbulb } from "lucide-react";
import { LESSON_PREVIEW_COPY } from "./lesson-preview-copy";

export function LessonQuestion() {
  return (
    <div className="mx-auto grid max-w-lg justify-items-center rounded-(--radius-small) border border-(--accent-line) bg-(--accent-tint) px-4 py-6 text-center min-[900px]:px-8 min-[900px]:py-8">
      <Lightbulb size={22} aria-hidden="true" className="mb-3 text-(--accent-text)" />
      <h3 data-lesson-title>{LESSON_PREVIEW_COPY.promptLabel}</h3>
      <p className="mt-2 text-sm leading-relaxed text-(--muted)">{LESSON_PREVIEW_COPY.questionIntro}</p>
      <p className="mt-4 text-base font-medium">{LESSON_PREVIEW_COPY.question}</p>
    </div>
  );
}
