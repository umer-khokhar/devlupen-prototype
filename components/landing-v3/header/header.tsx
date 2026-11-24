import { BrandLink } from "../shared/brand-link";
import { LANDING_COPY } from "../shared/landing-copy";
import { StartLearningLink } from "../shared/start-learning-link";
import { MobileDrawer } from "./mobile-drawer";
import { NavigationLinks } from "./navigation-links";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="relative border-b border-(--line) bg-(--bg)">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-10 focus:rounded-(--radius-small) focus:bg-(--surface) focus:px-4 focus:py-2"
      >
        {LANDING_COPY.skipToContent}
      </a>
      <div className="mx-auto flex min-h-16 w-full max-w-(--content-width) items-center justify-between gap-2 px-(--gutter) min-[900px]:grid min-[900px]:min-h-18 min-[900px]:grid-cols-[1fr_auto_1fr]">
        <BrandLink />
        <div className="hidden min-[900px]:block">
          <NavigationLinks />
        </div>
        <div className="flex items-center justify-end gap-2 min-[900px]:gap-3">
          <ThemeToggle />
          <div className="hidden min-[900px]:block">
            <StartLearningLink />
          </div>
          <MobileDrawer>
            <NavigationLinks />
            <StartLearningLink />
          </MobileDrawer>
        </div>
      </div>
    </header>
  );
}
