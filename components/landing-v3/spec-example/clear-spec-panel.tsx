import { Check, FileText } from "lucide-react";
import { SPEC_EXAMPLE_COPY } from "./spec-example-copy";

export function ClearSpecPanel() {
  const { clear } = SPEC_EXAMPLE_COPY;

  return (
    <figure className="grid min-w-0 overflow-hidden rounded-3xl border border-(--line) bg-(--surface) min-[900px]:row-span-3 min-[900px]:grid-rows-subgrid">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-(--line) px-5 py-4 min-[900px]:px-7">
        <h3 className="flex items-center gap-3 text-xl font-medium [font-family:var(--heading-font)]">
          <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-xl border border-(--accent-line) bg-(--surface-2) text-(--accent-text)">
            <FileText size={16} />
          </span>
          {clear.heading}
        </h3>
        <span className="text-xs tracking-[0.08em] text-(--muted) uppercase [font-family:var(--mono-font)]">
          {clear.documentLabel}
        </span>
      </div>
      <div className="px-5 py-6 min-[900px]:px-7 min-[900px]:py-8">
        <dl>
          <div className="mb-5 border-l-2 border-(--accent) pl-4">
            <dt className="text-xs font-medium tracking-[0.08em] text-(--accent-text) uppercase [font-family:var(--mono-font)]">
              {clear.goal.label}
            </dt>
            <dd className="mt-1 text-2xl leading-snug font-medium tracking-[-0.02em] [font-family:var(--heading-font)]">
              {clear.goal.detail}
            </dd>
          </div>
          {clear.requirements.map(({ label, detail }) => (
            <div key={label} className="grid gap-x-4 gap-y-1 border-t border-(--line) py-2.5 text-sm leading-relaxed min-[540px]:grid-cols-[8rem_minmax(0,1fr)]">
              <dt className="font-medium">{label}</dt>
              <dd className="text-(--muted)">{detail}</dd>
            </div>
          ))}
          <div className="mt-3 rounded-2xl border border-(--line) bg-(--surface-2) p-4 text-sm leading-relaxed">
            <dt className="mb-2 font-medium">{clear.acceptance.label}</dt>
            <dd>
              <ul role="list" className="space-y-1.5 text-(--muted)">
                {clear.acceptance.checks.map((check) => (
                  <li key={check} className="flex gap-2">
                    <Check aria-hidden="true" size={15} className="mt-1 shrink-0 text-(--accent-text)" />
                    {check}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
      <figcaption className="border-t border-(--line) bg-(--surface-2) px-5 py-4 text-sm leading-relaxed text-(--muted) min-[900px]:px-7">
        {clear.caption}
      </figcaption>
    </figure>
  );
}
