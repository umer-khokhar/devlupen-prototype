import { LEARNING_OUTCOMES_COPY } from "./learning-outcomes-copy";
import { LEARNING_OUTCOME_ICONS } from "./learning-outcomes-icons";

export function LearningOutcomesList() {
  return (
    <ul className="mt-5 grid gap-2.5 min-[900px]:mt-6">
      {LEARNING_OUTCOMES_COPY.items.map(({ icon, label }) => {
        const Icon = LEARNING_OUTCOME_ICONS[icon];

        return (
          <li key={icon} className="flex items-start gap-2.5 text-base leading-relaxed text-(--muted)">
            <Icon size={16} aria-hidden="true" className="mt-1 shrink-0 text-(--accent-text)" />
            {label}
          </li>
        );
      })}
    </ul>
  );
}
