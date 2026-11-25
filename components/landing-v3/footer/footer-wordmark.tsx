import { WORDMARK_DOTS, WORDMARK_VIEW_BOX } from "./footer-wordmark-data";

export function FooterWordmark() {
  return (
    <svg
      aria-hidden="true"
      viewBox={WORDMARK_VIEW_BOX}
      fill="currentColor"
      className="block h-auto w-full select-none text-(--accent-text)"
    >
      {WORDMARK_DOTS.map(({ x, y }) => (
        <circle key={`${x}:${y}`} cx={x} cy={y} r={0.34} />
      ))}
    </svg>
  );
}
