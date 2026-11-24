type NavItem = { label: string; href: string | null };

const NAV_LINKS: readonly NavItem[] = [
  { label: "Docs", href: null },
  { label: "Modules", href: null },
  { label: "About", href: null },
];

export const HEADER_COPY = {
  navigation: "Main navigation",
  drawer: "Menu",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  toggleTheme: "Toggle theme",
  links: NAV_LINKS,
} as const;
