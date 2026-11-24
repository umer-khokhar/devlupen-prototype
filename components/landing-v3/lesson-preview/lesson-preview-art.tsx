import Image from "next/image";
import { LESSON_PREVIEW_ABSTRACT } from "./lesson-preview-assets";

export function LessonPreviewArt() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
      <Image
        {...LESSON_PREVIEW_ABSTRACT}
        alt=""
        loading="eager"
        className="absolute top-10 -left-12 hidden h-auto w-(--preview-art-width) -rotate-30 min-[900px]:block"
      />
      <Image
        {...LESSON_PREVIEW_ABSTRACT}
        alt=""
        loading="eager"
        className="absolute -top-6 -right-24 h-auto w-80 rotate-18 min-[900px]:-top-11 min-[900px]:-right-12 min-[900px]:w-(--preview-art-width)"
      />
    </div>
  );
}
