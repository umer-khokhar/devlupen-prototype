import { ArrowUpRight, Terminal } from "lucide-react";
import Link from "next/link";
import { BrandLink } from "../shared/brand-link";
import { FOOTER_COPY } from "./footer-copy";
import { FooterWordmark } from "./footer-wordmark";

export function Footer() {
  return (
    <footer id="footer" className="border-t border-(--line) bg-(--bg)">
      <div className="mx-auto w-full max-w-(--content-width) px-(--gutter) pt-12 pb-(--gutter) min-[900px]:pt-18">
        <div className="grid gap-8 pb-10 min-[900px]:grid-cols-[minmax(0,1fr)_minmax(15rem,20rem)] min-[900px]:gap-16 min-[900px]:pb-14">
          <div>
            <BrandLink />
            <p className="mt-4 max-w-[28ch] text-lg leading-relaxed text-pretty text-(--muted)">
              {FOOTER_COPY.description}
            </p>
          </div>
          <nav aria-labelledby="footer-navigation">
            <p
              id="footer-navigation"
              className="mb-2 text-xs tracking-[0.08em] text-(--muted) uppercase [font-family:var(--mono-font)]"
            >
              {FOOTER_COPY.navigation}
            </p>
            <ul className="divide-y divide-(--line) border-y border-(--line)">
              {FOOTER_COPY.links.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group flex min-h-12 items-center justify-between gap-4 bg-(--bg) ps-1 text-sm font-medium hover:text-(--accent-text)"
                  >
                    {label}
                    <span className="grid size-7 place-items-center rounded-full border border-(--line) bg-(--surface) text-(--muted) group-hover:border-(--accent-line) group-hover:text-(--accent-text)">
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div
          aria-hidden="true"
          className="overflow-hidden rounded-3xl border border-(--line) bg-(--surface-2)"
        >
          <div className="flex items-center justify-between border-b border-(--line) bg-(--surface) px-4 py-2.5 min-[900px]:px-6">
            <div className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-(--accent)" />
              <span className="size-1.5 rounded-full bg-(--line)" />
              <span className="size-1.5 rounded-full bg-(--line)" />
            </div>
            <Terminal size={16} className="text-(--muted)" />
          </div>
          <div className="p-4 sm:p-7 min-[900px]:p-10">
            <FooterWordmark />
          </div>
        </div>
      </div>
    </footer>
  );
}
