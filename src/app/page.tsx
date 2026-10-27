import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F3F5ED] text-[#111713]">
      {/* Fixed / Sticky Header */}
      <Navbar />

      {/* Main Landmark */}
      <main id="main-content" className="flex-1">
        {/* 1. Dark Hero Section */}
        <Hero />

        {/* 2. Light Projects Showcase */}
        <ProjectsSection />

        {/* 3. Light / Editorial About Section */}
        <AboutSection />

        {/* 4. Light Skills Grid */}
        <SkillsSection />

        {/* 5. Light Experience & Journey Timeline */}
        <ExperienceSection />

        {/* 6. Dark Contact Section */}
        <ContactSection />
      </main>

      {/* 7. Dark Footer */}
      <Footer />
    </div>
  );
}
