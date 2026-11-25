type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_HEADING = "Frequently Asked Questions";
// DRAFT COPY: subtitle for the FAQ layout.
export const FAQ_INTRO =
  "A few things to know before you start learning with Devlupen.";

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: "Who is Devlupen for?",
    answer: "Self-taught developers who know basic JavaScript.",
  },
  {
    question: "Do I need to know JavaScript already?",
    answer: "Basic JavaScript, yes. The lessons build on it.",
  },
  {
    question: "Is it free?",
    // DRAFT COPY: owner to confirm pricing.
    answer: "TODO: owner to confirm",
  },
  {
    question: "Will there be videos or an AI tutor?",
    answer: "The docs come first. Other formats may follow.",
  },
  {
    question: "Where should I begin?",
    answer: "Start with Module 1, or jump to Module 2 if you're comfortable with the basics.",
  },
];
