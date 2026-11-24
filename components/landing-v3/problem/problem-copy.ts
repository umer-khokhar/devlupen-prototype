export const PROBLEM_COPY = {
  heading: "AI can write code. Can you tell if it's right?",
  // DRAFT COPY: section label
  label: "The problem",
  points: [
    "Knowing what to ask for",
    "Knowing if the result is correct",
    "Knowing what to learn next",
  ],
  // DRAFT COPY: illustrative code review example
  example: {
    label: "Illustrative example",
    goal: "Calculate the total by multiplying price by quantity.",
    code: ["const total = price ", "+", " quantity;"],
    inputs: "price = 12, quantity = 3",
    inputLabel: "Test inputs",
    results: [
      { label: "Expected", value: "36" },
      { label: "Actual", value: "15" },
    ],
    conclusion: "The values don’t match.",
  },
} as const;
