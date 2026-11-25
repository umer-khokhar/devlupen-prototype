import { MessageSquare } from "lucide-react";
import { SPEC_EXAMPLE_COPY } from "./spec-example-copy";

export function VagueChatPanel() {
  const { vague } = SPEC_EXAMPLE_COPY;

  return (
    <figure className="grid min-w-0 overflow-hidden rounded-3xl border border-(--line) bg-(--surface-2) min-[900px]:row-span-3 min-[900px]:grid-rows-subgrid">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-(--line) px-5 py-4 min-[900px]:px-7">
        <h3 className="flex items-center gap-3 text-xl font-medium [font-family:var(--heading-font)]">
          <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-xl border border-(--line) bg-(--surface) text-(--muted)">
            <MessageSquare size={16} />
          </span>
          {vague.heading}
        </h3>
        <span className="text-xs tracking-[0.08em] text-(--muted) uppercase [font-family:var(--mono-font)]">
          {vague.chatLabel}
        </span>
      </div>
      <div className="flex flex-col justify-between gap-8 px-5 py-6 min-[900px]:px-7 min-[900px]:py-8">
        <ol role="list" className="flex flex-col gap-5 rounded-2xl border border-(--line) bg-(--surface) p-4 min-[900px]:p-5">
          <li className="flex flex-col items-end gap-2 self-end">
            <p className="text-xs font-medium text-(--muted)">{vague.userLabel}</p>
            <p className="rounded-2xl rounded-br-sm border border-(--line) bg-(--surface-2) px-4 py-2.5 text-sm leading-relaxed">
              {vague.prompt}
            </p>
          </li>
          <li className="border-t border-(--line) pt-4">
            <p className="mb-1.5 text-xs font-medium text-(--muted)">{vague.assistantLabel}</p>
            <p className="text-[0.9375rem] leading-relaxed">{vague.reply}</p>
          </li>
        </ol>
        <div>
          <p className="text-xs font-medium tracking-[0.08em] text-(--muted) uppercase [font-family:var(--mono-font)]">
            {vague.openQuestionsLabel}
          </p>
          <ul role="list" className="mt-3 flex flex-wrap gap-2 text-xs leading-relaxed text-(--muted)">
            {vague.openQuestions.map((question) => (
              <li key={question} className="rounded-full border border-(--line) bg-(--surface) px-3 py-1">{question}</li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className="border-t border-(--line) px-5 py-4 text-sm leading-relaxed text-(--muted) min-[900px]:px-7">
        {vague.caption}
      </figcaption>
    </figure>
  );
}
