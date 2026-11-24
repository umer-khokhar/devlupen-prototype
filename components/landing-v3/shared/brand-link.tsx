import Link from "next/link";
import { LANDING_COPY } from "./landing-copy";

export function BrandLink() {
  // PLACEHOLDER: replace with final logo
  return (
    <Link href="/" className="inline-flex w-fit items-center gap-2.5 rounded-(--radius-small)">
      <svg
        aria-hidden="true"
        viewBox="0 0 36 36"
        className="size-9 shrink-0"
      >
        <rect width="36" height="36" rx="10" fill="var(--accent)" />
        <path
          fill="var(--logo-ink)"
          fillRule="evenodd"
          d="M11 9h6.8C23.2 9 27 12.6 27 18s-3.8 9-9.2 9H11V9Zm5 4.3v9.4h1.7c2.7 0 4.3-1.8 4.3-4.7s-1.6-4.7-4.3-4.7H16Z"
        />
      </svg>
      <span className="text-xl font-semibold tracking-tight [font-family:var(--heading-font)]">
        {LANDING_COPY.brand}
      </span>
    </Link>
  );
}
