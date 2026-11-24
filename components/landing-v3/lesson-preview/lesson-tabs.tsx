"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { LESSON_PREVIEW_COPY } from "./lesson-preview-copy";
import { LESSON_TABS } from "./lesson-tabs-data";
import type { LessonTabId, LessonTabsProps } from "./lesson-tabs.types";

export function LessonTabs({ panels }: LessonTabsProps) {
  const [active, setActive] = useState<LessonTabId>("overview");
  const list = useRef<HTMLDivElement>(null);
  const id = useId();

  function handleKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const end = LESSON_TABS.length - 1;
    let next: number;
    switch (event.key) {
      case "ArrowRight":
        next = index === end ? 0 : index + 1;
        break;
      case "ArrowLeft":
        next = index === 0 ? end : index - 1;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = end;
        break;
      default:
        return;
    }
    event.preventDefault();
    setActive(LESSON_TABS[next].id);
    list.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }

  return (
    <>
      <div
        ref={list}
        role="tablist"
        aria-label={LESSON_PREVIEW_COPY.frameLabel}
        className="absolute -top-5 left-1/2 z-10 flex w-max max-w-[calc(100%-0.75rem)] -translate-x-1/2 gap-0.5 rounded-(--radius-pill) border border-(--line) bg-(--surface) p-1 min-[900px]:-top-6 min-[900px]:gap-1"
      >
        {LESSON_TABS.map(({ id: tab, label }, index) => (
          <button
            key={tab}
            type="button"
            role="tab"
            id={`${id}-tab-${tab}`}
            aria-controls={`${id}-panel-${tab}`}
            aria-selected={active === tab}
            tabIndex={active === tab ? 0 : -1}
            onClick={() => setActive(tab)}
            onKeyDown={(event) => handleKey(event, index)}
            className="min-h-8 cursor-pointer rounded-(--radius-pill) px-1.5 text-xs font-medium text-(--muted) hover:bg-(--surface-2) aria-selected:bg-(--accent) aria-selected:text-(--accent-ink) aria-selected:hover:bg-(--accent) min-[900px]:min-h-9 min-[900px]:px-4 min-[900px]:text-sm"
          >
            {label}
          </button>
        ))}
      </div>
      {LESSON_TABS.map(({ id: tab }) => (
        <div
          key={tab}
          id={`${id}-panel-${tab}`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${tab}`}
          tabIndex={active === tab ? 0 : -1}
          hidden={active !== tab}
          className="min-w-0 p-5 focus-visible:outline-offset-[-4px] min-[900px]:px-9 min-[900px]:py-7"
        >
          {panels[tab]}
        </div>
      ))}
    </>
  );
}
