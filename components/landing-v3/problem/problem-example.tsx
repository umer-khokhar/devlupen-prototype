import { CircleAlert, CodeXml } from "lucide-react";
import { PROBLEM_COPY } from "./problem-copy";

export function ProblemExample() {
  const { example } = PROBLEM_COPY;

  return (
    <figure data-editorial-stage className="relative isolate min-h-76 w-full min-w-0 overflow-hidden rounded-2xl min-[900px]:aspect-[1.65] min-[900px]:min-h-72">
      <figcaption className="absolute top-[6%] left-[6%] text-xs font-medium tracking-[0.08em] text-(--muted) uppercase [font-family:var(--mono-font)]">
        {example.label}
      </figcaption>
      <span aria-hidden="true" className="absolute -top-[45%] -right-[14%] h-[160%] w-[62%] bg-[radial-gradient(ellipse_at_center,var(--accent-line),transparent_68%)]" />
      <span aria-hidden="true" className="absolute top-[12%] -right-4 bottom-[13%] left-[18%] rounded-3xl border border-dashed border-(--accent-text)/45" />
      <div data-editorial-glass className="absolute top-[16%] -right-4 left-[24%] rounded-l-2xl">
        <div className="flex items-center justify-between gap-2 border-b border-(--line) px-3 py-2.5 pr-8">
          <div aria-hidden="true" className="flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-(--accent-text)" />
            <span className="size-1.5 rounded-full bg-(--accent-text)/55" />
            <span className="size-1.5 rounded-full bg-(--accent-text)/30" />
          </div>
          <CodeXml size={15} aria-hidden="true" className="text-(--accent-text)" />
        </div>
        <pre className="m-2 mr-7 rounded-lg bg-(--code-bg) p-2.5 text-xs leading-relaxed whitespace-pre-wrap text-(--code-text) [font-family:var(--mono-font)] min-[900px]:m-3 min-[900px]:mr-8 min-[900px]:p-3.5 min-[900px]:text-sm">
          <code>{example.code[0]}<span className="text-(--accent) underline underline-offset-4">{example.code[1]}</span>{example.code[2]}</code>
        </pre>
        <p className="sr-only">{example.goal}</p>
        <div aria-hidden="true" className="space-y-2 px-3 pb-5 min-[900px]:px-4 min-[900px]:pb-8">
          <div className="h-1.5 w-[70%] rounded-full bg-(--text)/10" />
          <div className="h-1.5 w-[48%] rounded-full bg-(--accent-text)/30" />
          <div className="h-1.5 w-[58%] rounded-full bg-(--text)/10" />
        </div>
      </div>
      <div data-editorial-glass className="absolute bottom-[10%] left-[6%] max-w-[88%] rounded-xl p-2 min-[900px]:bottom-[14%]">
        <div className="flex items-start gap-2 rounded-lg bg-(--surface) px-2.5 py-2 min-[900px]:items-center min-[900px]:gap-3 min-[900px]:px-3">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-(--accent-tint) text-(--accent-text)">
            <CircleAlert size={17} aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm leading-tight font-medium">{example.conclusion}</p>
            <p className="mt-1 text-xs text-(--muted) [font-family:var(--mono-font)]">
              <span className="sr-only">{example.inputLabel}: </span>
              {example.inputs}
            </p>
            <dl className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-(--muted) [font-family:var(--mono-font)]">
              {example.results.map(({ label, value }) => (
                <div key={label} className="flex gap-1.5">
                  <dt>{label}</dt>
                  <dd className="font-medium text-(--text)">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </figure>
  );
}
