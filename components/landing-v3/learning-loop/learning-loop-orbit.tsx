import { ChevronRight, Repeat2 } from "lucide-react";

export function LearningLoopOrbit() {
  return (
    <div className="landing-loop-orbit" aria-hidden="true">
      <div className="landing-loop-orbit-line" />
      <span className="landing-loop-orbit-arrow"><ChevronRight size={15} /></span>
      <span className="landing-loop-orbit-arrow"><ChevronRight size={15} /></span>
      <span className="landing-loop-orbit-arrow"><ChevronRight size={15} /></span>
      <span className="landing-loop-orbit-arrow"><ChevronRight size={15} /></span>

      <div className="landing-loop-hub">
        <svg viewBox="0 0 180 180" fill="none" className="landing-loop-hub-rings">
          <circle cx="90" cy="90" r="86" stroke="currentColor" strokeDasharray="2 6" />
          <circle cx="90" cy="90" r="71" stroke="currentColor" />
          <path d="M90 4v15m0 142v15M4 90h15m142 0h15" stroke="currentColor" />
          <circle cx="140" cy="40" r="3" fill="currentColor" />
          <circle cx="40" cy="140" r="3" fill="currentColor" />
        </svg>
        <span className="landing-loop-hub-emblem">
          <Repeat2 size={42} strokeWidth={1.5} />
        </span>
      </div>
    </div>
  );
}
