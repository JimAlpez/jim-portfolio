"use client";

import IntroSection from "./@intro/page";
import AboutSection from "./@about/page";
import SkillsSection from "./@skills/page";
import ExperienceSection from "./@experience/page";
import ProjectsSection from "./@projects/page";
import ContactSection from "./@contact/page";
import { useTheme } from "@/context/theme-context";

export default function Home() {
  const { theme } = useTheme();

  return (
    <main
      className={
        theme === "light"
          ? "text-primary bg-slate-50"
          : "text-slate-50 bg-primary"
      }>
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
