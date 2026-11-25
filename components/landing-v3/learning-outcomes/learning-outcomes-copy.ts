import type { LearningOutcome } from "./learning-outcomes.types";

export const LEARNING_OUTCOMES_COPY = {
  heading: "What you'll be able to do",
  // DRAFT COPY: section label
  label: "What you’ll learn",
  // DRAFT COPY: showcase labels and illustrative examples
  previewLabel: "Illustrative preview",
  items: [
    {
      icon: "javascript",
      tab: "JavaScript",
      label: "Understand how JavaScript really works: references, async and the event loop",
      title: "Follow an object reference",
      file: "object-references.js",
      steps: ["Create an object", "Assign a reference", "Check what changed"],
      example: `const original = { count: 0 };\nconst alias = original;\nconst copy = { ...original };\n\nalias.count += 1;\n\nconsole.log(original.count); // 1\nconsole.log(copy.count);     // 0`,
    },
    {
      icon: "problemSolving",
      tab: "Problem solving",
      label: "Think through a problem like an engineer",
      title: "Break down a total",
      file: "cart-total.txt",
      steps: ["Identify the inputs", "Split the work", "Check an edge case"],
      example: `Input: a list of cart items\nOutput: the total in cents\n\nFor each item:\n  Multiply its price by its quantity.\n  Add that amount to the total.\n\nCheck: an empty cart returns 0.`,
    },
    {
      icon: "architecture",
      tab: "Applications",
      label: "See how the parts of an application fit together",
      title: "Trace a request",
      file: "task-list.txt",
      steps: ["Send the request", "Read the data", "Render the result"],
      example: `Browser → GET /tasks → Server\nServer → Read tasks → Data store\n\nData store → Task records → Server\nServer → JSON response → Browser\n\nBrowser: render the list or show an empty state.`,
    },
    {
      icon: "frameworks",
      tab: "Frameworks",
      label: "Learn any framework or library without getting lost",
      title: "Start with one small feature",
      file: "framework-notes.md",
      steps: ["Find the entry point", "Trace the data", "Change one thing"],
      example: `# Build a counter\n\nFind where the first page is rendered.\nAdd a button and a count.\nUpdate the count on click.\n\nCheck: what controls when the page updates?`,
    },
    {
      icon: "specification",
      tab: "Specs",
      label: "Write specs that tell an AI agent what you want",
      title: "Turn a request into a spec",
      file: "task-filter.md",
      steps: ["State the goal", "Set the rules", "Define done"],
      example: `# Filter a task list\n\nGoal: help people find unfinished tasks.\nControls: All, Active, Completed.\nDefault: All.\n\nDone when: Active hides completed tasks\nwithout changing the stored list.`,
    },
    {
      icon: "verification",
      tab: "Verification",
      label: "Review, test and verify AI-written code",
      title: "Test the behavior, not the appearance",
      file: "cart-total.test.js",
      steps: ["Read the requirement", "Test a normal case", "Test an edge case"],
      example: `test("includes the item quantity", () => {\n  const items = [{ price: 250, quantity: 2 }];\n  expect(total(items)).toBe(500);\n});\n\ntest("handles an empty cart", () => {\n  expect(total([])).toBe(0);\n});`,
    },
    {
      icon: "judgment",
      tab: "Judgment",
      label: "Decide when to use AI, and when not to",
      title: "Choose what to delegate",
      file: "decision-notes.md",
      steps: ["Name the task", "Weigh the risk", "Decide what to keep"],
      example: `# Rename a field across a project\n\nUse AI to suggest references to inspect.\nReview each suggested change yourself.\n\nIf a public API uses the field, decide how\nexisting clients will keep working first.`,
    },
  ] satisfies LearningOutcome[],
} as const;
