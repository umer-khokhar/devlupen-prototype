export const SPEC_EXAMPLE_COPY = {
  label: "Illustrative example",
  heading: "A vague request vs. a clear spec",
  vague: {
    heading: "Vague",
    prompt: "Make a login page.",
    // DRAFT COPY: illustrative conversation, open questions, and outcome.
    chatLabel: "Example chat",
    userLabel: "You",
    assistantLabel: "AI assistant",
    reply: "I’ll add email and password fields. I’ll send users to the home page after they sign in.",
    openQuestionsLabel: "Missing from the request",
    openQuestions: ["Validation", "Error messages", "Success destination"],
    caption: "The AI may build a form and guess how it should behave.",
  },
  clear: {
    heading: "Clear spec",
    // DRAFT COPY: illustrative document labels, requirements, and outcome.
    documentLabel: "Brief",
    goal: { label: "Goal", detail: "Let returning users sign in." },
    requirements: [
      { label: "Inputs", detail: "Email address and password." },
      {
        label: "Validation",
        detail: "Require both fields. Check the email format before submitting.",
      },
      {
        label: "Error messages",
        detail: "Show errors next to the field. If sign-in fails, show “Email or password is incorrect.”",
      },
      { label: "On success", detail: "Take the user to their dashboard." },
    ],
    acceptance: {
      label: "Acceptance criteria",
      checks: [
        "Invalid input blocks submission.",
        "Failed sign-in keeps the user on the form.",
        "Valid credentials open the dashboard.",
      ],
    },
    caption: "The AI is more likely to build a form you can test against the spec.",
  },
} as const;
