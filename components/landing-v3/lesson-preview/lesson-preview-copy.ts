export const LESSON_PREVIEW_COPY = {
  frameLabel: "Lesson preview",
  promptLabel: "Think it through",
  // DRAFT COPY: illustrative lesson content, not a published lesson
  title: "Object references vs. copies",
  outcome: "Predict which object changes when you update a property.",
  topicLabel: "JavaScript core concepts",
  overviewLabel: "In this lesson",
  diagramHeading: "Follow the references",
  diagramIntro: "Two names can point to one object. A shallow copy points to a different object.",
  codeHeading: "Read the example",
  codeIntro: "The copy is made before the count changes, so it keeps the original value.",
  questionIntro: "Predict the result before you run the code.",
  overviewItems: [
    "Two variables can share the same object.",
    "A shallow copy separates top-level properties.",
  ],
  explanation:
    "Assigning an object to another variable shares the same object. Spreading it into a new object makes a shallow copy: top-level properties can change independently, but nested objects are still shared.",
  diagramLabel: "After the update",
  references: [
    { names: ["original", "alias"], object: "{ count: 2 }" },
    { names: ["copy"], object: "{ count: 1 }" },
  ],
  codeLabel: "JavaScript",
  code: [
    "const original = { count: 1 };",
    "const alias = original;",
    "const copy = { ...original };",
    "",
    "alias.count = 2;",
    "",
    "original.count; // 2",
    "copy.count;     // 1",
  ].join("\n"),
  question: "If you set copy.count to 3, what does original.count return?",
} as const;
