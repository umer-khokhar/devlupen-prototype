import Link from "next/link";
import { TOPIC_ICONS } from "./module-icons";
import type { ModuleRoadmapProps } from "./module-picker.types";
import { MODULES_COPY } from "./modules";

export function ModuleRoadmap({ module }: ModuleRoadmapProps) {
  const hasThirdRow = module.topics.length > 6;

  return (
    <div className="overflow-hidden rounded-3xl border border-(--line) bg-(--surface)">
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-b border-(--line) bg-(--surface-2) px-4 py-3.5 min-[540px]:px-5">
        <h3 className="module-roadmap-title rounded-md px-2.5 py-1.5 text-sm leading-tight font-medium">{module.title}</h3>
        <span className="text-xs font-medium whitespace-nowrap text-(--accent-text) [font-family:var(--mono-font)]">
          {module.topics.length} {MODULES_COPY.topicsLabel}
        </span>
      </div>
      <div className="relative px-4 py-5 min-[540px]:px-6 min-[540px]:pt-8 min-[540px]:pb-3">
        <svg aria-hidden="true" className="module-roadmap-wire pointer-events-none absolute hidden overflow-visible text-(--accent-text) opacity-60 min-[540px]:block" viewBox={hasThirdRow ? "0 0 600 360" : "0 0 600 240"} preserveAspectRatio="none">
          <path
            d={hasThirdRow
              ? "M100 0 H500 C610 0 610 120 500 120 H100 C-10 120 -10 240 100 240"
              : "M100 0 H500 C610 0 610 120 500 120 H300"}
            fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="1 6" strokeLinecap="round" vectorEffect="non-scaling-stroke"
          />
        </svg>
        <ol role="list" data-third-row={hasThirdRow || undefined} className="module-roadmap-grid relative grid gap-3 min-[540px]:grid-cols-3 min-[540px]:gap-0">
          {module.topics.map((topic, index) => {
            const Icon = TOPIC_ICONS[topic.icon];
            return (
              <li key={topic.title} className="module-roadmap-node relative flex min-w-0 items-center gap-3 min-[540px]:flex-col min-[540px]:gap-1.5 min-[540px]:px-1.5 min-[540px]:text-center">
                <span className="relative grid size-12 shrink-0 place-items-center rounded-[0.875rem] border border-(--accent-line) bg-(--surface-2) text-(--accent-text)">
                  <Icon size={21} strokeWidth={1.75} aria-hidden="true" />
                  <span aria-hidden="true" className="module-roadmap-number absolute -top-1.5 -right-1.5 grid size-5 place-items-center rounded-full text-[0.625rem] leading-none font-medium text-(--text) [font-family:var(--mono-font)]">
                    {index + 1}
                  </span>
                </span>
                {topic.status === "live" ? (
                  <Link href={topic.href} className="rounded-sm text-xs leading-snug font-medium underline underline-offset-2 hover:text-(--accent-text)">{topic.title}</Link>
                ) : (
                  <div className="min-w-0">
                    <p className="text-xs leading-snug font-medium">{topic.title}</p>
                    <span className="mt-1 inline-block rounded-sm bg-(--surface-2) px-1.5 py-0.5 text-[0.625rem] leading-none text-(--muted)">{MODULES_COPY.comingSoon}</span>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
