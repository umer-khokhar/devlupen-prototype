# Devlupen landing v3 — progress

Build one section at a time. Pause for review before starting the next.

| Stage | Status |
| --- | --- |
| 1. Header | Approved. Desktop nav, mobile drawer, theme toggle, and skip link. About now links to `#about` from both menus. |
| 2. Hero | Approved. Two-tone headline, audience badge, and two CTAs. |
| 3. Lesson preview | Approved. Enlarged glass frame, local orange artwork, and four tabs: Overview, Diagram, Code, Question. |
| 4. The problem | Approved. Glass code window and floating test result. |
| 5. What you’ll learn | Approved. Seven illustrative examples in a glass browser frame that matches the hero lesson preview. The compact, centered tab rail stays at its natural width and scrolls horizontally on narrow screens. |
| 6. Learning loop | Approved. Four-step orbit on desktop and a vertical loop on mobile, followed by four transparent cards with raised icon tiles. |
| 7. Modules | Redesigned for review. A black-and-white segmented switcher selects one of two dotted roadmaps backed by typed data. The roadmap stacks vertically on narrow screens. **See all topics** expands an inline catalog; all 12 topics are marked Coming soon until docs routes exist. The header and hero still link here. |
| 8. Spec example | Redesigned for review. The illustrative AI chat and structured login brief sit in separate thin-bordered cards with orange accents. The cards stack below 900 px. |
| 9. About | Built and revised for review. A wider author card shows Umer Khokhar with a larger portrait area. The owner’s draft copy and **See the modules** link sit alongside it on desktop and below it on mobile. The portrait shows **UK** until a photo is supplied. |
| 10. FAQ | Pending. Use native disclosures; pricing is unconfirmed. |
| 11. Final CTA | Pending. Repeat the learning and modules CTAs. |
| 12. Footer | Pending. Brand, description, and working links only. |

**Next section:** FAQ, after About review.

**Open items:** Replace the temporary logo. Swap the **UK** portrait placeholder for Umer’s photo once supplied. Confirm the docs destination (`/docs` is currently missing) and the FAQ pricing answer.

**Design rules:** The light-mode page background is pure white (`#ffffff`); the dark background is unchanged. Buttons, icon backgrounds, and numbered badges use opaque fills unless the owner explicitly requests transparency. Both rules are recorded in `AGENTS.md`.

**Latest checks:** Lint passed after widening the About card. The production build and TypeScript passed after adding the author name and portrait placeholder, before the final width and background changes. The Spec example and the About layout before the author-card changes passed overflow and text contrast checks in both themes at seven widths from 320 to 1920 px. The Modules switcher passed keyboard selection and stayed on one row at the widths tested; both roadmaps were checked in both themes from 320 to 1920 px.
