import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { GrShare } from "react-icons/gr";
import { Reveal2 } from "./Animations/Reveal2";

const ProjectCard = ({
  imageSrc,
  title,
  description,
  githubLink,
  techStack,
  demoLink,
}) => (
  <article className="project-card lg:p-5 p-5 my-12 rounded-xl flex gap-10 flex-col justify-center items-center">
    <div className="border-4 rounded-lg cursor-pointer relative group">
      <Reveal2>
        <Image src={imageSrc} alt="Project" />
      </Reveal2>
      <div className="content bg-normalWhite p-5 shadow-2xl">
        <div className="text-left">
          <div className="flex gap-5  justify-center items-center cursor-pointer">
            <h1 className="text-xl font-extra-bold uppercase">{title}</h1>
            {/* <div className="flex gap-2">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold hover:border-b-2"
              >
                Code
              </a>
              <FaGithub size={25} />
            </div> */}
            <div className="flex gap-2">
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold hover:border-b-2"
              >
                Demo
              </a>
              <GrShare size={20} />
            </div>
            <p className="text-xl"> <span className="font-extra-bold">Tech Stack: </span>&nbsp; {techStack.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  </article>
);

export default ProjectCard;
