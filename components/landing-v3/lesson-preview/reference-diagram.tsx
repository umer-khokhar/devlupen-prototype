import { ArrowRight } from "lucide-react";
import { LESSON_PREVIEW_COPY } from "./lesson-preview-copy";

export function ReferenceDiagram() {
  return (
    <figure className="flex min-w-0 flex-col justify-center rounded-(--radius-small) border border-(--line) bg-(--surface-2) p-3 min-[900px]:p-5">
      <figcaption className="mb-3 text-xs font-medium tracking-[0.08em] text-(--muted) uppercase [font-family:var(--mono-font)]">
        {LESSON_PREVIEW_COPY.diagramLabel}
      </figcaption>
      <ul className="flex flex-col gap-3 text-xs [font-family:var(--mono-font)]">
        {LESSON_PREVIEW_COPY.references.map(({ names, object }) => (
          <li
            key={object}
            className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1.2fr)] items-center gap-1.5"
          >
            <code className="grid gap-0.5 rounded-lg border border-(--line) bg-(--surface) px-2 py-1.5">
              {names.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </code>
            <ArrowRight size={14} role="img" aria-label="point to" className="text-(--accent-text)" />
            <code className="rounded-lg border border-(--accent-line) bg-(--surface) px-2 py-1.5 text-(--accent-text)">
              {object}
            </code>
          </li>
        ))}
      </ul>
    </figure>
  );
}
