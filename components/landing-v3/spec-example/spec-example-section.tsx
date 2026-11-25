import { EditorialLabel } from "../shared/editorial-label";
import { ClearSpecPanel } from "./clear-spec-panel";
import { SPEC_EXAMPLE_COPY } from "./spec-example-copy";
import { VagueChatPanel } from "./vague-chat-panel";

export function SpecExampleSection() {
  const { label, heading } = SPEC_EXAMPLE_COPY;

  return (
    <section
      id="spec-example"
      aria-labelledby="spec-example-heading"
      className="mx-auto w-full max-w-(--content-width) px-(--gutter) pt-8 pb-14 min-[900px]:pt-12 min-[900px]:pb-24"
    >
      <div className="text-center">
        <EditorialLabel label={label} />
        <h2
          id="spec-example-heading"
          className="mx-auto max-w-[24ch] text-4xl leading-[1.1] font-medium tracking-[-0.025em] text-balance [font-family:var(--heading-font)] min-[900px]:text-[clamp(2.25rem,3.35vw,2.75rem)]"
        >
          {heading}
        </h2>
      </div>
      <div className="mx-auto mt-8 grid max-w-[64rem] gap-6 min-[900px]:mt-12 min-[900px]:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] min-[900px]:grid-rows-[auto_1fr_auto] min-[900px]:gap-y-0">
        <VagueChatPanel />
        <ClearSpecPanel />
      </div>
    </section>
  );
}
