import { ArrowDown } from "lucide-react";
import { LANDING_COPY } from "../shared/landing-copy";
import { StartLearningLink } from "../shared/start-learning-link";
import { HERO_COPY } from "./hero-copy";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto flex w-full max-w-(--content-width) flex-col items-center px-(--gutter) pt-18 pb-16 text-center min-[900px]:pt-28 min-[900px]:pb-20"
    >
      <p className="inline-flex items-center gap-2 rounded-(--radius-pill) border border-(--accent-line) bg-(--accent-tint) px-3 py-1.5 text-xs font-medium text-(--accent-text)">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
        {HERO_COPY.badge}
      </p>
      <h1
        id="hero-heading"
        className="mt-5 text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.05] font-semibold tracking-[-0.03em] [font-family:var(--heading-font)] min-[900px]:mt-6"
      >
        <span className="block text-balance">{HERO_COPY.headline}</span>{" "}
        <span className="block text-balance text-(--accent)">{HERO_COPY.accentHeadline}</span>
      </h1>
      <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-pretty text-(--muted) min-[900px]:mt-6 min-[900px]:text-lg">
        {LANDING_COPY.description}
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-2.5 min-[900px]:mt-8">
        <StartLearningLink />
        <span
          aria-disabled="true"
          className="inline-flex min-h-(--control-size) items-center justify-center gap-2 rounded-(--radius-pill) border border-(--line) px-4 text-sm font-medium text-(--muted)"
        >
          {HERO_COPY.modulesAction}
          <ArrowDown size={15} aria-hidden="true" />
        </span>
      </div>
    </section>
  );
}
