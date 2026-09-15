import { ContactCard } from "@/components/contact/contact-card";
import { Hero } from "@/components/hero/hero";
import { Projects } from "@/components/projects/projects";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { Experience } from "@/components/about/experience";
import { SkillsMarquee } from "@/components/home/skills-marquee";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description: `Welcome to ${siteConfig.name}. ${siteConfig.description}`,
  path: "/",
});

export default function HomePage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col gap-20 sm:gap-28">
      <div className="flex flex-col gap-12 sm:gap-20">
        <Hero />
        <SkillsMarquee />
      </div>
      <Projects withHeadline viewMoreVisible />
      <section id="experience" className="mx-auto w-full max-w-275 px-6 sm:px-10 mt-12 sm:mt-16">
        <div className="mx-auto max-w-3xl">
          <Experience />
        </div>
      </section>
      <section className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <div className="flex flex-col gap-10">
          <Skills />
          <Stack />
        </div>
      </section>
      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
