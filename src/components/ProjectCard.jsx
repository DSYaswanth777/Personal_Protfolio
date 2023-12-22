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
  <article className="bg-normalWhite p-10 rounded-xl shadow-xl flex gap-10 flex-col md:flex-col lg:flex-row justify-center items-center">
    <div className="border-4 rounded-lg hover:backdrop-blur-lg cursor-pointer relative group">
      <Reveal2>
        <Image src={imageSrc} alt="Project" />
      </Reveal2>
      <div className="absolute inset-0 flex items-center justify-center group-hover:backdrop-blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100">
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
    <div className="px-2">
      <Reveal>
        <h1 className="text-left underline underline-offset-4 text-xl font-extra-bold pb-3 uppercase">
          {title}
        </h1>
      </Reveal>
      <Reveal2>
        <p className="text-left text-customBlack font-bold">{description}</p>
      </Reveal2>
      <div className="flex justify-center gap-5 pt-5">
        <Reveal>
          <p className="uppercase p-2 bg-white rounded-md shadow-md">REACT</p>
        </Reveal>
        <Reveal>
          <p className="uppercase p-2 bg-white rounded-md shadow-md">
            Bootstrap
          </p>
        </Reveal>
      </div>
      <div className="flex gap-5 pt-5 justify-center cursor-pointer">
        <Reveal2>
          <div className="flex gap-2">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold hover:border-b-2 cursor-pointer"
            >
              Code
            </a>
            <FaGithub size={25} />
          </div>
        </Reveal2>
        <Reveal2>
          <div className="flex gap-2">
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold hover:border-b-2 cursor-pointer"
            >
              Demo
            </a>
            <GrShare size={20} />
          </div>
        </Reveal2>
      </div>
    </div>
  </article>
);

export default ProjectCard;
