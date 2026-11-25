import { ArrowUpRight, Braces, Workflow } from "lucide-react";
import Link from "next/link";
import { MODULES_COPY, type LearningModule } from "./modules";

type ModuleCardProps = {
  module: LearningModule;
};

export function ModuleCard({ module }: ModuleCardProps) {
  const Icon = module.number === "01" ? Braces : Workflow;
  const headingId = `module-${module.number}-heading`;

  return (
    <article
      aria-labelledby={headingId}
      className="flex min-w-0 flex-col rounded-3xl border border-(--line) bg-(--surface) p-2"
    >
      <header data-module-header className="rounded-2xl border border-(--line) bg-(--surface-2) p-4 min-[900px]:p-6">
        <div className="flex items-start justify-between gap-3">
          <span
            aria-hidden="true"
            className="grid size-10 place-items-center rounded-[0.625rem] border border-(--line) bg-(--surface-2) text-(--text) shadow-[inset_0_1px_0_var(--surface),0_2px_0_var(--line)]"
          >
            <Icon size={19} />
          </span>
          <p className="rounded-(--radius-pill) border border-(--line) bg-(--surface) px-2.5 py-1 text-xs font-medium tracking-[0.08em] whitespace-nowrap text-(--accent-text) uppercase [font-family:var(--mono-font)]">
            {MODULES_COPY.moduleLabel} {module.number}
          </p>
        </div>
        <h3
          id={headingId}
          className="mt-5 text-2xl leading-tight font-medium tracking-[-0.025em] [font-family:var(--heading-font)] min-[900px]:mt-7 min-[900px]:text-3xl"
        >
          {module.title}
        </h3>
      </header>
      <ol role="list" className="divide-y divide-(--line) px-3 pt-1 pb-2 min-[900px]:px-5">
        {module.topics.map((topic, index) => (
          <li
            key={topic.title}
            className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-2.5 py-2.5 text-sm min-[900px]:gap-x-3 min-[900px]:py-3"
          >
            <span aria-hidden="true" className="grid size-7 place-items-center rounded-lg border border-(--line) bg-(--surface-2) text-xs tabular-nums text-(--muted) [font-family:var(--mono-font)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            {topic.status === "live" ? (
              <Link
                href={topic.href}
                className="flex min-h-(--control-size) items-center justify-between gap-2.5 rounded-sm font-medium hover:text-(--accent-text)"
              >
                {topic.title}
                <ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
              </Link>
            ) : (
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1.5 py-1 min-[900px]:grid min-[900px]:grid-cols-[minmax(0,1fr)_auto]">
                <span className="font-medium">{topic.title}</span>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-(--radius-pill) border border-(--line) px-2 py-0.5 text-xs font-medium text-(--muted)">
                  <span aria-hidden="true" className="size-1.5 rounded-full border border-current" />
                  {MODULES_COPY.comingSoon}
                </span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </article>
  );
}
