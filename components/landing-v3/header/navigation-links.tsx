import Link from "next/link";
import { HEADER_COPY } from "./header-copy";

export function NavigationLinks() {
  return (
    <nav aria-label={HEADER_COPY.navigation}>
      <ul className="flex flex-col gap-1 min-[900px]:flex-row min-[900px]:gap-2">
        {HEADER_COPY.links.map(({ label, href }) => (
          <li key={label}>
            {href ? (
              <Link
                href={href}
                className="flex min-h-(--control-size) items-center rounded-(--radius-small) px-3 text-sm font-medium hover:text-(--accent-text)"
              >
                {label}
              </Link>
            ) : (
              <span aria-disabled="true" className="flex min-h-(--control-size) items-center px-3 text-sm font-medium text-(--muted)">
                {label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
