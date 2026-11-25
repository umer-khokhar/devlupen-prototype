import { ArrowDown, ArrowUp } from "lucide-react";
import Link from "next/link";
import { LEARNING_MODULES, MODULES_COPY } from "./modules";

export function ModuleCatalog() {
  return (
    <details className="group mt-8 rounded-2xl border border-(--line) bg-(--surface-2) min-[900px]:mt-14">
      <summary className="flex cursor-pointer list-none flex-wrap items-center justify-between gap-4 rounded-2xl px-5 py-5 min-[900px]:px-6 [&::-webkit-details-marker]:hidden">
        <span>
          <span className="block text-lg leading-tight font-medium [font-family:var(--heading-font)]">{MODULES_COPY.catalogHeading}</span>
          <span className="mt-1 block text-sm leading-relaxed text-(--muted)">{MODULES_COPY.catalogDescription}</span>
        </span>
        <span className="inline-flex min-h-(--control-size) items-center gap-2 rounded-xl bg-(--button-bg) px-4 text-sm font-medium text-(--button-text)">
          <span className="inline-flex items-center gap-2 group-open:hidden">{MODULES_COPY.openCatalog}<ArrowDown aria-hidden="true" size={15} /></span>
          <span className="hidden items-center gap-2 group-open:inline-flex">{MODULES_COPY.closeCatalog}<ArrowUp aria-hidden="true" size={15} /></span>
        </span>
      </summary>
      <div className="grid gap-6 border-t border-(--line) px-5 py-5 min-[900px]:grid-cols-2 min-[900px]:px-6">
        {LEARNING_MODULES.map((module) => (
          <div key={module.number}>
            <h3 className="font-medium [font-family:var(--heading-font)]">{module.title}</h3>
            <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm leading-relaxed marker:text-(--muted)">
              {module.topics.map((topic) => (
                <li key={topic.title}>
                  {topic.status === "live" ? (
                    <Link href={topic.href} className="rounded-sm underline underline-offset-2 hover:text-(--accent-text)">{topic.title}</Link>
                  ) : (
                    <>
                      {topic.title}
                      <span className="ml-2 inline-block rounded-sm border border-(--line) px-1.5 text-xs text-(--muted)">{MODULES_COPY.comingSoon}</span>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </details>
  );
}
