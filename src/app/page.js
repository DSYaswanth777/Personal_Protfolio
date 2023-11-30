// Import necessary components and modules
"use client";
import Header from "../components/header";
import Hero_Section from "../components/hero_Section";
import Personal_Info from "../components/personal_Info";
import Projects_Section from "../components/projects_Section";
import Skills_Section from "../components/skills_Section";
import Contactme_Section from "../components/contactme_section";
import Footer from "../components/footer";
import { useRef } from "react";
import "./globals.css"
// Define the main Home component
export default function Home() {
  // Create refs to scroll to specific sections
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const personalRef = useRef(null);
  const projectsRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (section) => {
    let elementRef;
    switch (section) {
      case "hero":
        elementRef = heroRef;
        break;
      case "skills":
        elementRef = skillsRef;
        break;
      case "personal":
        elementRef = personalRef;
        break;
      case "projects":
        elementRef = projectsRef;
        break;
      case "contact":
        elementRef = contactRef;
        break;
      default:
        break;
    }

    // Perform smooth scroll to the selected section
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Render the Home component
  return (
    <div>
      {/* Render the Header component and pass the scrollToSection function */}
      <Header scrollToSection={scrollToSection} />

      {/* Render each section using their respective components and attach the refs */}
      <Hero_Section ref={heroRef} />
      <Skills_Section ref={skillsRef} />
      <Personal_Info ref={personalRef} />
      <Projects_Section ref={projectsRef} />
      <Contactme_Section ref={contactRef} />
      <Footer />
    </div>
  );
}
