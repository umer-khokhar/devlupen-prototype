import { ArrowRight, ChevronUp, Repeat2 } from "lucide-react";
import { LEARNING_LOOP_COPY } from "./learning-loop-copy";
import { LearningLoopOrbit } from "./learning-loop-orbit";
import "./learning-loop-diagram.css";

export function LearningLoopDiagram() {
  return (
    <div className="landing-loop-diagram">
      <div className="landing-loop-track">
        <LearningLoopOrbit />
        <ol role="list" className="landing-loop-steps">
          {LEARNING_LOOP_COPY.steps.map(({ number, label, icon: Icon }, index) => (
            <li key={number} className="landing-loop-step">
              <span className="landing-loop-number" aria-hidden="true">{number}</span>
              <span className="landing-loop-icon" aria-hidden="true">
                <Icon size={20} />
              </span>
              <span className="landing-loop-label">{label}</span>
              {index < LEARNING_LOOP_COPY.steps.length - 1 && (
                <ArrowRight className="landing-loop-next" size={17} aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
        <p className="sr-only">{LEARNING_LOOP_COPY.repeat}</p>
        <div className="landing-loop-return-path" aria-hidden="true">
          <ChevronUp className="landing-loop-return-arrow" size={16} />
          <span className="landing-loop-repeat"><Repeat2 size={16} /></span>
        </div>
      </div>
    </div>
  );
}
