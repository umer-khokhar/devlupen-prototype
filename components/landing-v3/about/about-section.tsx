import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ABOUT_ID, MODULES_HREF } from "../shared/landing-copy";
import { ABOUT_COPY } from "./about-copy";

export function AboutSection() {
  return (
    <section
      id={ABOUT_ID}
      aria-labelledby="about-heading"
      className="mx-auto w-full max-w-(--content-width) scroll-mt-6 px-(--gutter) pt-6 pb-18 min-[900px]:pt-12 min-[900px]:pb-28"
    >
      <div className="mx-auto grid max-w-[51.5rem] items-start gap-6 min-[900px]:grid-cols-[11.5rem_minmax(0,1fr)] min-[900px]:gap-8">
        <div className="flex w-42 flex-col items-center gap-2 rounded-xl border border-(--line) bg-(--surface-2) px-4 py-3.5 min-[900px]:w-full min-[900px]:gap-3 min-[900px]:py-5">
          {/* PLACEHOLDER: replace initials with Umer's profile photo. */}
          <span aria-hidden="true" className="grid size-16 place-items-center rounded-full border border-(--line) bg-(--surface) text-xl font-semibold text-(--accent-text) [font-family:var(--heading-font)] min-[900px]:size-20">
            {ABOUT_COPY.initials}
          </span>
          <span className="text-base font-semibold tracking-tight [font-family:var(--heading-font)] min-[900px]:text-lg">
            {ABOUT_COPY.author}
          </span>
        </div>
        <div>
          <h2
            id="about-heading"
            className="text-4xl leading-[1.1] font-medium tracking-[-0.025em] [font-family:var(--heading-font)]"
          >
            {ABOUT_COPY.heading}
          </h2>
          <p className="mt-4 text-xl leading-[1.45] tracking-[-0.02em] text-pretty min-[900px]:text-2xl">
            {ABOUT_COPY.body}
          </p>
          <Link
            href={MODULES_HREF}
            className="mt-6 inline-flex min-h-(--control-size) items-center gap-2 rounded-(--radius-pill) bg-(--button-bg) px-4 text-sm font-medium text-(--button-text) hover:ring-1 hover:ring-(--button-bg) hover:ring-offset-2 hover:ring-offset-(--bg)"
          >
            {ABOUT_COPY.modulesAction}
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
