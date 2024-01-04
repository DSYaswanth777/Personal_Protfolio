import React from "react";

import { Reveal2 } from "./Animations/Reveal2";
import { Reveal } from "./Animations/Reveal";
import { projects } from "@/constants/projects";
import ProjectCard from "./ProjectCard";




const Projects_Section = React.forwardRef((props, ref) => (
  <section className="container md:mx-auto md:px-10 h-full " ref={ref}  aria-labelledby="projects-title">
    <div className="flex justify-around flex-col  pt-32 ">
      <div className="flex justify-center flex-col items-center">
        <Reveal>
          <p className="font-extra-bold text-3xl underline underline-offset-4 text-center flex justify-center items-center">
            My Works
          </p>
        </Reveal>
        <div className="pb-5"></div>
        <Reveal2>
          <p className="text-xl text-center">
            Showcasing my diverse range of projects and creations in the world
            of technology.
          </p>
        </Reveal2>
      </div>
    </div>
    <div className="pt-8 px-5 flex  gap-10">
      <Reveal2>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        ))}
      </Reveal2>
    </div>
    <div className="text-center mt-10 flex  items-center justify-center">
      <Reveal2>
        <a
          href="https://github.com/DSYaswanth777"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center font-extra-bold text-2xl underline underline-offset-4"
        >
          More Projects
        </a>
      </Reveal2>
    </div>
  </section>
));

Projects_Section.displayName = "Projects_Section";

export default Projects_Section;
