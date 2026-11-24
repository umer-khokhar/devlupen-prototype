import type { EditorialLabelProps } from "./editorial-label.types";

export function EditorialLabel({ label }: EditorialLabelProps) {
  return (
    <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-[0.08em] text-(--accent-text) uppercase [font-family:var(--mono-font)]">
      <span aria-hidden="true" className="h-px w-5 bg-current" />
      {label}
    </p>
  );
}
