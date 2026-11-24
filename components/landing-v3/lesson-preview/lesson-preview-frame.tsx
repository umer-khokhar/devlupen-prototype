import { BookOpen } from "lucide-react";
import { LessonCodePanel } from "./lesson-code-panel";
import { LessonDiagramPanel } from "./lesson-diagram-panel";
import { LessonOverview } from "./lesson-overview";
import { LESSON_PREVIEW_COPY } from "./lesson-preview-copy";
import { LessonQuestion } from "./lesson-question";
import { LessonTabs } from "./lesson-tabs";

export function LessonPreviewFrame() {
  return (
    <div className="relative mx-auto max-w-(--preview-frame-width) px-2 pb-2 min-[900px]:px-3 min-[900px]:pb-3" data-lesson-glass>
      <div className="flex min-h-16 items-center justify-between gap-2 px-2 pt-3 min-[900px]:min-h-[4.5rem] min-[900px]:px-3 min-[900px]:pt-2">
        <div aria-hidden="true" className="flex items-center gap-2 text-(--accent)">
          <span className="size-3 rounded-full bg-current opacity-75" />
          <span className="size-3 rounded-full bg-current opacity-50" />
          <span className="size-3 rounded-full bg-current opacity-30" />
        </div>
        <h2 id="lesson-preview-heading" className="rounded-(--radius-pill) bg-(--surface) px-2.5 py-1 text-xs font-medium text-(--muted) [font-family:var(--mono-font)]">
          {LESSON_PREVIEW_COPY.frameLabel}
        </h2>
      </div>
      <article className="grid min-h-(--preview-body-height) grid-rows-[auto_1fr] rounded-[1rem] border border-(--line) bg-(--surface) text-left min-[900px]:grid-cols-[12rem_minmax(0,1fr)] min-[900px]:grid-rows-[1fr]">
        <div className="min-w-0 rounded-t-[calc(1rem-1px)] border-b border-(--line) bg-(--surface-2) px-4 py-3 min-[900px]:rounded-tr-none min-[900px]:rounded-bl-[calc(1rem-1px)] min-[900px]:border-r min-[900px]:border-b-0 min-[900px]:p-4">
          <p className="flex items-center gap-2 text-xs font-medium text-(--muted)">
            <BookOpen size={15} aria-hidden="true" className="shrink-0 text-(--accent-text)" />
            {LESSON_PREVIEW_COPY.topicLabel}
          </p>
          <p className="mt-3 hidden rounded-lg border border-(--accent-line) bg-(--accent-tint) px-2.5 py-2 text-xs leading-relaxed font-medium text-(--accent-text) min-[900px]:block">
            {LESSON_PREVIEW_COPY.title}
          </p>
        </div>
        <LessonTabs
          panels={{
            overview: <LessonOverview />,
            diagram: <LessonDiagramPanel />,
            code: <LessonCodePanel />,
            question: <LessonQuestion />,
          }}
        />
      </article>
    </div>
  );
}
