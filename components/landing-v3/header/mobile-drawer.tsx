"use client";

import { useEffect, useId, useRef } from "react";
import { Menu, X } from "lucide-react";
import { HEADER_COPY } from "./header-copy";
import type { MobileDrawerProps } from "./mobile-drawer.types";

export function MobileDrawer({ children }: MobileDrawerProps) {
  const drawer = useRef<HTMLDialogElement>(null);
  const drawerId = useId();
  const titleId = useId();

  useEffect(() => {
    const viewport = window.matchMedia("(min-width: 900px)");
    const closeAtDesktop = () => {
      if (viewport.matches) drawer.current?.close();
    };
    viewport.addEventListener("change", closeAtDesktop);
    return () => viewport.removeEventListener("change", closeAtDesktop);
  }, []);

  return (
    <div className="min-[900px]:hidden">
      <button
        type="button"
        aria-label={HEADER_COPY.openMenu}
        aria-haspopup="dialog"
        aria-controls={drawerId}
        onClick={() => drawer.current?.showModal()}
        className="grid size-(--control-size) cursor-pointer place-items-center rounded-(--radius-pill) border border-(--line) hover:bg-(--surface-2)"
      >
        <Menu size={19} aria-hidden="true" />
      </button>
      <dialog
        ref={drawer}
        id={drawerId}
        aria-labelledby={titleId}
        onClick={(event) => {
          const target = event.target;
          if (
            target === event.currentTarget ||
            (target instanceof Element &&
              target.closest('a[href^="#"]') &&
              !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey)
          ) {
            drawer.current?.close();
          }
        }}
        className="fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-none w-full max-w-xs border-l border-(--line) bg-(--surface) text-(--text) backdrop:bg-(--text)/25"
      >
        <div className="flex min-h-full flex-col gap-6 p-5">
          <div className="flex items-center justify-between gap-3">
            <h2 id={titleId} className="text-xl font-semibold [font-family:var(--heading-font)]">
              {HEADER_COPY.drawer}
            </h2>
            <button
              type="button"
              aria-label={HEADER_COPY.closeMenu}
              onClick={() => drawer.current?.close()}
              className="grid size-(--control-size) cursor-pointer place-items-center rounded-(--radius-pill) border border-(--line) hover:bg-(--surface-2)"
            >
              <X size={19} aria-hidden="true" />
            </button>
          </div>
          {children}
        </div>
      </dialog>
    </div>
  );
}
