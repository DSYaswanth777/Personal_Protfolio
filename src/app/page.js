"use client";
import Header from "@/components/header";
import Hero_Section from "@/components/hero_Section";
import Personal_Info from "@/components/personal_Info";
import Projects_Section from "@/components/projects_Section";
import Skils_Section from "@/components/skils_Section";
import Contactme_Section from "@/components/contactme_section";
import Footer from "@/components/footer";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const personalRef = useRef(null);
  const projectsRef = useRef(null);


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

    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <Header scrollToSection={scrollToSection} />
      <Hero_Section ref={heroRef}/>
      <Skils_Section ref={skillsRef} />
      <Personal_Info ref={personalRef}/>
      <Projects_Section ref={projectsRef} />
      <Contactme_Section ref={contactRef}/>
      <Footer />
    </div>
  );
}
