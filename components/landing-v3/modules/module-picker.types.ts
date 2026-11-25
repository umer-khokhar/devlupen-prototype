import type { ReactNode } from "react";
import type { LearningModule } from "./modules";

export type ModulePickerProps = { intro: ReactNode; panels: readonly ReactNode[] };
export type ModuleRoadmapProps = { module: LearningModule };
