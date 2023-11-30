import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { GrShare } from "react-icons/gr";
import { Reveal2 } from "./Animations/Reveal2";
import { Reveal } from "./Animations/Reveal";

const projects = [
  {
    id: 1,
    imageSrc: require("../../public/images/project.png"),
    title: "Digital Marketing Landing Page",
    description:
      " Crafted a dynamic Digital Marketing Landing Page that succinctly communicates diverse services and drives lead generation through engaging visuals and responsive design. Client success showcases further validate credibility, paving the way for business growth",
    githubLink: "https://github.com/DSYaswanth777/Marketing_Landing_Page",
    demoLink: "https://marketing-landing-page-gray.vercel.app/",
  },
  {
    id: 2,
    imageSrc: require("../../public/images/project2.png"),
    title: "Budget manager",
    description:
      "Experience the convenience of seamless budgeting and expense tracking with my Budget Manager project. Developed using React and Bootstrap, this intuitive web application empowers users to create budgets, log expenses, and visualize their financial journey with ease.  ",
    githubLink: "https://github.com/DSYaswanth777/Budget-Manger",
    demoLink: "https://budget-manger.vercel.app/",
  },
  {
    id: 3,
    imageSrc: require("../../public/images/project3.png"),
    title: "Simple shopping Cart",
    description:
      "   I combined Bootstrap and React custom hooks to craft an efficient application, showcasing impactful cart features and skillful state  management for a seamless user experience. Used React  custom hooks for efficient state management and easy flow of code.",
    githubLink: "https://github.com/DSYaswanth777/Simple-Shopping-Cart",
    demoLink: "https://simple-shopping-cart-chi.vercel.app/",
  },
];

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
    <div className="pt-16 px-5 flex flex-col gap-10">
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
