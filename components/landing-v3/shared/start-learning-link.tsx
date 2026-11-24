import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LANDING_COPY } from "./landing-copy";

export function StartLearningLink() {
  return (
    <Link
      href={LANDING_COPY.startLearningHref}
      prefetch={false}
      className="inline-flex min-h-(--control-size) items-center justify-center gap-2 rounded-(--radius-pill) bg-(--button-bg) px-4 text-sm font-medium text-(--button-text) hover:bg-(--muted)"
    >
      {LANDING_COPY.startLearning}
      <ArrowUpRight size={15} aria-hidden="true" />
    </Link>
  );
}
