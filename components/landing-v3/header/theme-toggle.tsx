"use client";

import { Moon, Sun } from "lucide-react";
import { HEADER_COPY } from "./header-copy";
import { useLandingTheme } from "./use-landing-theme";

export function ThemeToggle() {
  const toggleTheme = useLandingTheme();

  // Adapted from Magic UI's Animated Theme Toggler. A scoped, instant
  // change avoids animating or modifying the rest of the application.
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={HEADER_COPY.toggleTheme}
      className="grid size-(--control-size) shrink-0 cursor-pointer place-items-center rounded-(--radius-pill) border border-(--line) text-(--muted) hover:bg-(--surface-2) hover:text-(--text)"
    >
      <Moon size={17} aria-hidden="true" className="[display:var(--moon-display)]" />
      <Sun size={17} aria-hidden="true" className="[display:var(--sun-display)]" />
    </button>
  );
}
