"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { LEARNING_OUTCOMES_COPY } from "./learning-outcomes-copy";
import { LEARNING_OUTCOME_ICONS } from "./learning-outcomes-icons";
import { LearningOutcomePreview } from "./learning-outcome-preview";

export function LearningOutcomesShowcase() {
  const { items } = LEARNING_OUTCOMES_COPY;
  const [active, setActive] = useState(0);
  const list = useRef<HTMLDivElement>(null);
  const id = useId();

  function selectTab(index: number, button?: HTMLButtonElement) {
    setActive(index);
    button?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }

  function handleKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const end = items.length - 1;
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
    const button = list.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next];
    button?.focus({ preventScroll: true });
    selectTab(next, button);
  }

  return (
    <div className="mt-7 min-[900px]:mt-10">
      <div className="outcome-tab-scroll mx-auto w-fit max-w-full overflow-x-auto">
        <div
          ref={list}
          role="tablist"
          aria-labelledby="learning-outcomes-heading"
          className="flex w-max gap-0.5 rounded-(--radius-pill) border border-(--line) bg-(--surface) p-1"
        >
          {items.map(({ tab, icon }, index) => {
            const Icon = LEARNING_OUTCOME_ICONS[icon];
            return (
              <button
                key={icon}
                type="button"
                role="tab"
                id={`${id}-tab-${icon}`}
                aria-controls={`${id}-panel-${icon}`}
                aria-selected={active === index}
                tabIndex={active === index ? 0 : -1}
                onClick={(event) => selectTab(index, event.currentTarget)}
                onKeyDown={(event) => handleKey(event, index)}
                className="outcome-tab flex min-h-(--control-size) shrink-0 cursor-pointer items-center gap-1.5 rounded-(--radius-pill) px-2 text-xs font-medium whitespace-nowrap text-(--muted)"
              >
                <Icon size={13} aria-hidden="true" className="shrink-0 text-(--accent-text)" />
                {tab}
              </button>
            );
          })}
        </div>
      </div>
      {items.map((outcome, index) => (
        <div
          key={outcome.icon}
          id={`${id}-panel-${outcome.icon}`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${outcome.icon}`}
          tabIndex={active === index ? 0 : -1}
          hidden={active !== index}
          className="mt-5 rounded-3xl min-[900px]:mt-7"
        >
          <LearningOutcomePreview outcome={outcome} />
        </div>
      ))}
    </div>
  );
}
