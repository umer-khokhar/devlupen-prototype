import { MODULES_ID } from "../shared/landing-copy";
import { ModuleCatalog } from "./module-catalog";
import { ModulePicker } from "./module-picker";
import { ModuleRoadmap } from "./module-roadmap";
import { LEARNING_MODULES, MODULES_COPY } from "./modules";
import "./modules.css";

export function ModulesSection() {
  return (
    <section
      id={MODULES_ID}
      aria-labelledby="modules-heading"
      className="mx-auto w-full max-w-(--content-width) scroll-mt-6 px-(--gutter) pt-8 pb-14 min-[900px]:pt-12 min-[900px]:pb-24"
    >
      <div className="mx-auto max-w-[68rem]">
        <ModulePicker
          intro={
            <>
              <h2 id="modules-heading" className="text-4xl leading-[1.1] font-medium tracking-[-0.03em] text-balance [font-family:var(--heading-font)] min-[900px]:text-5xl">
                {MODULES_COPY.heading}
              </h2>
              <p className="mt-5 max-w-[38ch] text-base leading-relaxed text-(--muted) min-[900px]:mt-6 min-[900px]:text-lg">
                {MODULES_COPY.description}
              </p>
            </>
          }
          panels={LEARNING_MODULES.map((module) => <ModuleRoadmap key={module.number} module={module} />)}
        />
        <ModuleCatalog />
      </div>
    </section>
  );
}
