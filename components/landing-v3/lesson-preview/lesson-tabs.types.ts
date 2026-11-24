import type { ReactNode } from "react";
import type { LESSON_TABS } from "./lesson-tabs-data";

export type LessonTabId = (typeof LESSON_TABS)[number]["id"];
export type LessonTabsProps = { panels: Record<LessonTabId, ReactNode> };
