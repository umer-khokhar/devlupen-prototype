import type { LEARNING_OUTCOME_ICONS } from "./learning-outcomes-icons";

export type LearningOutcome = {
  icon: keyof typeof LEARNING_OUTCOME_ICONS;
  tab: string;
  label: string;
  title: string;
  file: string;
  steps: readonly string[];
  example: string;
};
