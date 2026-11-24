# codestandards.md

Code standards for the Devlupen landing page. Follow these together with `AGENTS.md`. If they conflict, `AGENTS.md` wins.

## 1. UI components: Magic UI only

- Build UI with **Magic UI** components wherever one fits the need.
- Do **not** add or use any other UI library (no MUI, Chakra, Ant, Mantine, Radix-based kits, or other component packs).
- If Magic UI has no suitable component, build it from **react and tailwindcss**, as a small custom component, and note it in your summary.
- Copy Magic UI components into the landing folder and adapt them. Do not edit shared project components.
- Check the current Magic UI docs for installation and usage. Do not rely on memory.
- Magic UI components may need helper packages (for example Tailwind utilities or an animation library). **Ask before adding any dependency.**

## 2. One component, one job

- Each component does **one thing** only: layout, content, data, or behavior, not several.
- Keep components small. If a component grows past about 100 lines, split it.
- Separate **structure** (layout and sections) from **content** (data) and **behavior** (interaction).
- Compose small components into sections. Sections compose into the page.

## 3. One component per file

- **Exactly one component per file.** No second component, even a small helper, in the same file.
- Name the file after the component, in kebab-case (`hero-section.tsx` for `HeroSection`).
- Use named exports, and one default export only where Next.js requires it (`page.tsx`, `layout.tsx`).
- Put types, constants and hooks in their own files (`types.ts`, `constants.ts`, `use-theme.ts`), not inside component files.

## 4. Modular structure

```text
components/landing-v3/
├── header/
├── hero/
├── lesson-preview/
├── ... one folder per section
└── shared/        (small pieces used by two or more sections)
```

- One folder per section, with its components, styles and data beside it.
- Move something to `shared/` only when two or more sections use it.
- No circular imports. Sections never import from other sections; they import from `shared/`.
- Keep content (copy, module and topic lists, links) in typed data files, not inside JSX.

## 5. React and Next.js

- **Server components by default.** Add `"use client"` only for interaction (theme toggle, mobile menu, animated Magic UI components), and keep client components small and leaf-level.
- Use `next/image` for images and `next/font` for fonts.
- Use `next/link` for internal links.
- No data fetching inside the landing components. Pass data in through props.
- No `any`. Type all props with a named `type` or `interface`.
- Keep props small and explicit. Avoid passing large objects when two fields will do.

## 6. Styling

- Use the design tokens from `AGENTS.md`. **Never hard-code colors, fonts or spacing values** inside components.
- Use TailwindCSS v4 Uitilities, or the project's existing approach. Be consistent: do not mix styling approaches.
- No inline styles, except for dynamic values that can't be a class.
- No `!important`.
- Mobile first. Use the same breakpoints everywhere (stack below 900px).

## 7. Accessibility

- Semantic elements first (`header`, `nav`, `main`, `section`, `footer`, `button`, `a`). One `h1` per page and a logical heading order.
- Every interactive element is keyboard-usable and has a visible focus style.
- Images have meaningful `alt` text, or empty alt and `aria-hidden` when decorative.
- Respect `prefers-reduced-motion`. Disable or reduce every animation under it.
- Check text contrast against the background. Never put small white text on the orange accent.

## 8. Naming and style

- Components: `PascalCase`. Files and folders: `kebab-case`. Hooks: `useThing`. Constants: `UPPER_SNAKE_CASE`.
- Names say what the thing is (`ModuleCard`, not `Card2`).
- No abbreviations that aren't obvious.
- Keep functions short and single-purpose. Early returns over deep nesting.
- Comments explain **why**, not what. Remove dead code, commented-out blocks and `console.log`.
- Mark unfinished work with `// PLACEHOLDER:` or `// DRAFT COPY:` only, and nothing else.

## 9. Quality checks before finishing

- [ ] Only Magic UI plus tailwind CSS used for UI
- [ ] One component per file, each with a single job
- [ ] Content lives in data files, not in JSX
- [ ] No hard-coded colors, fonts or breakpoints
- [ ] No `any`, no unused code, no new dependencies without approval
- [ ] Lint, type-check and build run, and results reported
- [ ] Nothing outside the landing folder changed