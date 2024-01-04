"use client";
// Import necessary components and modules
import { useRef } from "react";
import Header from "../components/Header";
import Hero_Section from "../components/Hero_Section";
import Personal_Info from "../components/Personal_Info";
import Projects_Section from "../components/Projects_Section";
import Skills_Section from "../components/Skills_Section";
import Contactme_Section from "../components/Contactme_section"
import "./globals.css";
import useScrollToSection from "@/components/customHooks/useScrollToSection";
import Footer from "../components/Footer";
 
export default function Home() {
  // Refs for each section
  const sectionRefs = {
    hero: useRef(null),
    skills: useRef(null),
    personal: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
    resume:useRef(null)
  };

  // Custom hook to handle scrolling
  const scrollToSection = useScrollToSection(sectionRefs);

  // Render the Home component
  return (
    <div>
      <Header scrollToSection={scrollToSection} />
      <Hero_Section ref={sectionRefs.hero} />
      <Skills_Section ref={sectionRefs.skills} />
      <Personal_Info ref={sectionRefs.personal} />
      <Projects_Section ref={sectionRefs.projects} />
      {/* <Resume ref={sectionRefs.resume} /> */}
      <Contactme_Section ref={sectionRefs.contact} />
      <Footer />
    </div>
  );
}
