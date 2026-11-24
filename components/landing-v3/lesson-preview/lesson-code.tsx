import { LESSON_PREVIEW_COPY } from "./lesson-preview-copy";

export function LessonCode() {
  return (
    <div className="min-w-0 rounded-(--radius-small) bg-(--code-bg) p-3 text-(--code-text) min-[900px]:p-5">
      <div className="mb-2 text-xs tracking-[0.08em] uppercase [font-family:var(--mono-font)]">
        {LESSON_PREVIEW_COPY.codeLabel}
      </div>
      <pre className="text-xs leading-relaxed wrap-break-word whitespace-pre-wrap [font-family:var(--mono-font)] min-[900px]:text-[0.8125rem]">
        <code>{LESSON_PREVIEW_COPY.code}</code>
      </pre>
    </div>
  );
}
