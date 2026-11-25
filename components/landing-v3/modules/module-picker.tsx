"use client";

import { Braces, Workflow } from "lucide-react";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { ModulePickerProps } from "./module-picker.types";
import { LEARNING_MODULES, MODULES_COPY } from "./modules";

export function ModulePicker({ intro, panels }: ModulePickerProps) {
  const [active, setActive] = useState(0);
  const tabs = useRef<HTMLDivElement>(null);
  const id = useId();

  function handleKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = LEARNING_MODULES.length - 1;
    let next: number;
    switch (event.key) {
      case "ArrowRight": next = index === last ? 0 : index + 1; break;
      case "ArrowLeft": next = index === 0 ? last : index - 1; break;
      case "Home": next = 0; break;
      case "End": next = last; break;
      default: return;
    }
    event.preventDefault();
    setActive(next);
    tabs.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }

  return (
    <div className="grid items-start gap-7 min-[900px]:grid-cols-[minmax(0,1.06fr)_minmax(0,1fr)] min-[900px]:items-center min-[900px]:gap-10 min-[1100px]:gap-18">
      <div className="min-w-0">
        {intro}
        <div
          ref={tabs}
          role="tablist"
          aria-label={MODULES_COPY.pickerLabel}
          className="mt-7 inline-grid max-w-full grid-cols-[repeat(2,minmax(0,1fr))] gap-1 rounded-xl border border-(--line) bg-(--surface-2) p-1 min-[900px]:mt-10"
        >
          {LEARNING_MODULES.map((module, index) => {
            const Icon = index === 0 ? Braces : Workflow;
            return (
              <button
                key={module.number}
                type="button"
                role="tab"
                id={`${id}-tab-${index}`}
                aria-controls={`${id}-panel-${index}`}
                aria-selected={index === active}
                tabIndex={index === active ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={(event) => handleKey(event, index)}
                className="flex min-h-(--control-size) min-w-0 cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-(--surface-2) px-2.5 py-2.5 text-center text-sm leading-snug font-medium text-(--muted) hover:bg-(--surface) hover:text-(--text) focus-visible:outline-offset-[-3px] aria-selected:bg-(--button-bg) aria-selected:text-(--button-text) aria-selected:hover:bg-(--button-bg) min-[375px]:gap-2 min-[375px]:px-3.5"
              >
                <Icon aria-hidden="true" size={16} className="shrink-0" />
                <span>{module.title}</span>
              </button>
            );
          })}
        </div>
      </div>
      {panels.map((panel, index) => (
        <div key={index} id={`${id}-panel-${index}`} role="tabpanel" aria-labelledby={`${id}-tab-${index}`} tabIndex={active === index ? 0 : -1} hidden={index !== active} className="min-w-0 rounded-3xl">
          {panel}
        </div>
      ))}
    </div>
  );
}
