import { LessonPreviewArt } from "./lesson-preview-art";
import { LessonPreviewFrame } from "./lesson-preview-frame";
import "./lesson-preview.css";

export function LessonPreviewSection() {
  return (
    <section id="lesson-preview" aria-labelledby="lesson-preview-heading" className="overflow-hidden pb-10 min-[900px]:pb-16">
      <div className="relative isolate mx-auto w-full max-w-(--content-width) px-(--gutter) pt-8 pb-8 min-[900px]:pt-14 min-[900px]:pb-12">
        <LessonPreviewArt />
        <LessonPreviewFrame />
      </div>
    </section>
  );
}
