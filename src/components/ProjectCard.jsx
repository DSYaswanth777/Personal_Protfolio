import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { GrShare } from "react-icons/gr";
import { Reveal2 } from "./Animations/Reveal2";
import { Reveal } from "./Animations/Reveal";
const ProjectCard = ({
  imageSrc,
  title,
  description,
  githubLink,
  demoLink,
}) => (
  <article className="bg-normalWhite lg:p-20 p-5  my-12 rounded-xl   flex gap-10 flex-col justify-center items-center">
    <div className="border-4 rounded-lg hover:backdrop-blur-lg cursor-pointer relative group">
      <Reveal2>
        <Image src={imageSrc} alt="Project" />
      </Reveal2>
      <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:backdrop-blur-lg transition-all duration-300 opacity-0 gap-5 group-hover:opacity-100">
              
        <div className="text-center">
          <div className="flex gap-5 cursor-pointer">
            <div className="flex gap-2">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold hover:border-b-2"
              >
                Code
              </a>
              <FaGithub size={25} />
            </div>
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
          </div>
        </div>
      </div>
    </div>
    
  </article>
);

export default ProjectCard;
