import { BookOpen, ClipboardList, Sparkles, ListChecks } from "lucide-react";

export const LEARNING_LOOP_COPY = {
  heading: "A simple loop for working with AI",
  // DRAFT COPY: screen reader equivalent for the return arrow.
  repeat: "Repeat from step one.",
  // DRAFT COPY: step descriptions and takeaway labels for the cards.
  steps: [
    {
      number: "01",
      label: "Learn the idea",
      icon: BookOpen,
      description: "Build a mental model of how the idea works. Try explaining it in your own words.",
      takeaway: "Mental model",
    },
    {
      number: "02",
      label: "Specify the task",
      icon: ClipboardList,
      description: "Write down what should change, what should stay the same, and how you’ll know it works.",
      takeaway: "Acceptance criteria",
    },
    {
      number: "03",
      label: "Work with AI",
      icon: Sparkles,
      description: "Give AI the spec and the context it needs. Ask for one change you can review at a time.",
      takeaway: "Small changes",
    },
    {
      number: "04",
      label: "Verify the result",
      icon: ListChecks,
      description: "Read the changes and test them against your spec. Use what you find to guide the next pass.",
      takeaway: "Review and tests",
    },
  ],
} as const;
