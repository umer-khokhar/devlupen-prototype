import { Minus, Plus } from "lucide-react";
import { FAQ_HEADING, FAQ_INTRO, FAQ_ITEMS } from "./faq-copy";

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="mx-auto w-full max-w-(--content-width) scroll-mt-6 px-(--gutter) pb-18 min-[900px]:pb-28"
    >
      <div>
        <h2
          id="faq-heading"
          className="text-center text-4xl leading-[1.1] font-semibold tracking-[-0.025em] text-balance [font-family:var(--heading-font)] min-[900px]:text-5xl min-[900px]:whitespace-nowrap"
        >
          {FAQ_HEADING}
        </h2>
        <p className="mx-auto mt-4 max-w-[39rem] text-center leading-relaxed text-(--muted)">
          {FAQ_INTRO}
        </p>
        <div className="mx-auto mt-8 max-w-[39rem]">
          {FAQ_ITEMS.map(({ question, answer }) => (
            <details
              key={question}
              className="group border-b border-(--line)"
            >
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-base leading-snug font-medium hover:underline min-[900px]:min-h-17 min-[900px]:text-lg [&::-webkit-details-marker]:hidden">
                <span>{question}</span>
                <Plus
                  size={20}
                  aria-hidden="true"
                  className="shrink-0 bg-(--bg) text-(--muted) group-open:hidden"
                />
                <Minus
                  size={20}
                  aria-hidden="true"
                  className="hidden shrink-0 bg-(--bg) text-(--muted) group-open:block"
                />
              </summary>
              <p className="pb-5 leading-relaxed text-(--muted)">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
