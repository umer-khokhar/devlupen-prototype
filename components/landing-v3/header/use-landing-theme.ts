"use client";

import { useEffect } from "react";

const STORAGE_KEY = "devlupen-landing-theme";
const LANDING_SELECTOR = "[data-devlupen-landing]";

export function useLandingTheme() {
  useEffect(() => {
    try {
      const theme = window.localStorage.getItem(STORAGE_KEY);
      const landing = document.querySelector<HTMLElement>(LANDING_SELECTOR);
      if (landing && (theme === "light" || theme === "dark")) {
        landing.dataset.theme = theme;
      }
    } catch {
      // The system theme still works if storage is unavailable.
    }
  }, []);

  return function toggleTheme() {
    const landing = document.querySelector<HTMLElement>(LANDING_SELECTOR);
    if (!landing) return;

    const current =
      landing.dataset.theme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const theme = current === "dark" ? "light" : "dark";
    landing.dataset.theme = theme;
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Keep the current choice even when storage is unavailable.
    }
  };
}
