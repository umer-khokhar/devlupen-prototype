import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ctaArtwork from "@/public/3d-abatracts/shape1.png";
import { MODULES_HREF } from "../shared/landing-copy";
import { StartLearningLink } from "../shared/start-learning-link";
import { FINAL_CTA_COPY } from "./final-cta-copy";

export function FinalCtaSection() {
  return (
    <section
      id="start-learning"
      aria-labelledby="final-cta-heading"
      className="relative isolate grid min-h-[clamp(26rem,35.5vw,44rem)] scroll-mt-6 place-items-center overflow-hidden bg-[color-mix(in_srgb,var(--bg)_96%,var(--text))] px-(--gutter) py-18 text-center"
    >
      <Image
        src={ctaArtwork}
        alt=""
        aria-hidden="true"
        loading="lazy"
        sizes="(max-width: 459px) 108vw, (max-width: 840px) 496px, (max-width: 1247px) 59vw, 736px"
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-auto w-[min(108%,clamp(31rem,59vw,46rem))] max-w-none -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.08] grayscale"
      />
      <div className="relative mx-auto flex max-w-full flex-col items-center">
        <h2
          id="final-cta-heading"
          className="text-[clamp(2.25rem,3.6vw,3.5rem)] leading-[1.02] font-medium tracking-[-0.045em] [font-family:var(--heading-font)]"
        >
          {FINAL_CTA_COPY.heading[0]}<br />
          {FINAL_CTA_COPY.heading[1]}
        </h2>
        <p className="mt-5 max-w-[34ch] text-base leading-relaxed text-balance text-(--muted)">
          {FINAL_CTA_COPY.description}
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2.5">
          <StartLearningLink />
          <Link
            href={MODULES_HREF}
            className="inline-flex min-h-(--control-size) items-center justify-center gap-2 rounded-(--radius-pill) bg-[color-mix(in_srgb,var(--bg)_91%,var(--text))] px-4 text-sm font-medium text-(--text) hover:bg-(--bg)"
          >
            {FINAL_CTA_COPY.modulesAction}
            <ArrowDown size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
