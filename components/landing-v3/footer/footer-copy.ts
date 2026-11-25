import { ABOUT_HREF, MODULES_HREF } from "../shared/landing-copy";

export const FOOTER_COPY = {
  description: "Structured lessons for developers learning with AI.",
  // DRAFT COPY: label for the footer navigation.
  navigation: "Explore",
  links: [
    { label: "Modules", href: MODULES_HREF },
    { label: "About", href: ABOUT_HREF },
  ],
} as const;
