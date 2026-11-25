import type { Metadata } from "next";
import { AboutSection } from "@/components/landing-v3/about/about-section";
import { FaqSection } from "@/components/landing-v3/faq/faq-section";
import { FinalCtaSection } from "@/components/landing-v3/final-cta/final-cta-section";
import { Footer } from "@/components/landing-v3/footer/footer";
import { Header } from "@/components/landing-v3/header/header";
import { HeroSection } from "@/components/landing-v3/hero/hero-section";
import { LearningLoopSection } from "@/components/landing-v3/learning-loop/learning-loop-section";
import { LessonPreviewSection } from "@/components/landing-v3/lesson-preview/lesson-preview-section";
import { LearningOutcomesSection } from "@/components/landing-v3/learning-outcomes/learning-outcomes-section";
import { ModulesSection } from "@/components/landing-v3/modules/modules-section";
import { ProblemSection } from "@/components/landing-v3/problem/problem-section";
import { SpecExampleSection } from "@/components/landing-v3/spec-example/spec-example-section";
import { LANDING_COPY } from "@/components/landing-v3/shared/landing-copy";
import { LANDING_FONT_CLASSES } from "@/components/landing-v3/shared/fonts";
import "@/components/landing-v3/shared/landing.css";
import "@/components/landing-v3/shared/editorial-visual.css";

export const metadata: Metadata = {
  title: LANDING_COPY.brand,
  description: LANDING_COPY.description,
  openGraph: {
    title: LANDING_COPY.brand,
    description: LANDING_COPY.description,
    type: "website",
  },
};

export default function Home() {
  return (
    <div data-devlupen-landing className={LANDING_FONT_CLASSES}>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1">
        <HeroSection />
        <LessonPreviewSection />
        <ProblemSection />
        <LearningOutcomesSection />
        <LearningLoopSection />
        <ModulesSection />
        <SpecExampleSection />
        <AboutSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
