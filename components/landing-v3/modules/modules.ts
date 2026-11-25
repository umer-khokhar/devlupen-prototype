import type { TopicIcon } from "./module-icons";

type ModuleTopic = { title: string; icon: TopicIcon } & (
  | { status: "live"; href: string }
  | { status: "soon"; href: null }
);

export type LearningModule = {
  number: string;
  title: string;
  topics: readonly ModuleTopic[];
};

export const MODULES_COPY = {
  heading: "Two modules, one path",
  moduleLabel: "Module",
  comingSoon: "Coming soon",
  // DRAFT COPY: roadmap introduction and catalog labels.
  description: "Build your engineering foundations first, then learn to specify, review and verify work with AI.",
  pickerLabel: "Choose a module",
  topicsLabel: "topics",
  catalogHeading: "Explore all topics",
  catalogDescription: "See what’s covered in both modules and what’s still being written.",
  openCatalog: "See all topics",
  closeCatalog: "Hide topics",
} as const;

export const LEARNING_MODULES: readonly LearningModule[] = [
  {
    number: "01",
    title: "Think Like an Engineer",
    topics: [
      { title: "JavaScript Core Concepts", icon: "braces", href: null, status: "soon" },
      { title: "Problem Solving and Computational Thinking", icon: "brain", href: null, status: "soon" },
      { title: "How Applications Work", icon: "network", href: null, status: "soon" },
      { title: "Engineering Habits", icon: "checklist", href: null, status: "soon" },
      { title: "Approaching Frameworks and Libraries", icon: "layers", href: null, status: "soon" },
    ],
  },
  {
    number: "02",
    title: "Work With AI",
    topics: [
      { title: "The Mental Model Shift", icon: "compass", href: null, status: "soon" },
      { title: "How AI Coding Tools Work", icon: "terminal", href: null, status: "soon" },
      { title: "AI-Assisted Development", icon: "workflow", href: null, status: "soon" },
      { title: "Spec-Driven Development", icon: "file", href: null, status: "soon" },
      { title: "Verifying AI Output", icon: "flask", href: null, status: "soon" },
      { title: "Decisions and Judgment", icon: "split", href: null, status: "soon" },
      { title: "Worked Project", icon: "folder", href: null, status: "soon" },
    ],
  },
];
