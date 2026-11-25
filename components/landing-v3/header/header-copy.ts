import { ABOUT_HREF, MODULES_HREF } from "../shared/landing-copy";

type NavItem = { label: string; href: string | null };

const NAV_LINKS: readonly NavItem[] = [
  { label: "Docs", href: null },
  { label: "Modules", href: MODULES_HREF },
  { label: "About", href: ABOUT_HREF },
];

export const HEADER_COPY = {
  navigation: "Main navigation",
  drawer: "Menu",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  toggleTheme: "Toggle theme",
  links: NAV_LINKS,
} as const;
