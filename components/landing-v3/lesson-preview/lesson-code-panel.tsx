import { LessonCode } from "./lesson-code";
import { LESSON_PREVIEW_COPY } from "./lesson-preview-copy";

export function LessonCodePanel() {
  return (
    <div className="grid items-start gap-4 min-[900px]:grid-cols-[0.8fr_1.2fr] min-[900px]:gap-6">
      <div>
        <h3 data-lesson-title>{LESSON_PREVIEW_COPY.codeHeading}</h3>
        <p className="mt-2 leading-relaxed text-(--muted)">{LESSON_PREVIEW_COPY.codeIntro}</p>
      </div>
      <LessonCode />
    </div>
  );
}
