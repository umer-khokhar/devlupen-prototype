import { LESSON_PREVIEW_COPY } from "./lesson-preview-copy";
import { ReferenceDiagram } from "./reference-diagram";

export function LessonDiagramPanel() {
  return (
    <div className="grid max-w-2xl gap-4 min-[900px]:gap-5">
      <div>
        <h3 data-lesson-title>{LESSON_PREVIEW_COPY.diagramHeading}</h3>
        <p className="mt-2 leading-relaxed text-(--muted)">{LESSON_PREVIEW_COPY.diagramIntro}</p>
      </div>
      <ReferenceDiagram />
    </div>
  );
}
