"use client";
//**Importing forwardRef from react */
import { forwardRef } from "react";
import { Reveal } from "./Reveal";
import { Reveal2 } from "./Reveal2";
const Skills_Section = forwardRef((props, ref) => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Bootstrap",
    "Sass",
    "tailwind CSS",
    "Git",
    "React.Js",
    "Next.Js",
    "Github",
    "Python",
    "C++",
  ];
  return (
    <div className="h-full container md:mx-auto px-12 pt-32" ref={ref}>
      <div className="flex justify-center items-center flex-row gap-6 md:mx-auto ">
        <Reveal>
          <div className="text-center text-3xl underline underline-offset-4 pl-8 font-extra-bold">
            Skills
          </div>
        </Reveal>
      </div>
      <div className="flex justify-around flex-col md:flex-col lg:flex-row gap-16  pt-10 ">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center">
            <Reveal>
              <p className="text-2xl font-extra-bold text-center">
                My Skill Set
              </p>
            </Reveal>
            <Reveal>
              <h1 className="pt-2 text-lg text-center">
                List of tech/tools I &apos; ve worked with
              </h1>
            </Reveal>
            <Reveal2>
              <div className="skills-section  pt-10">
                {skills.map((skill, index) => (
                  <>
                    <p key={index} className="p-3 bg-customBlack">
                      {skill}
                    </p>
                  </>
                ))}
              </div>
            </Reveal2>
          </div>
        </div>
        <div className="border-b-4 md:border-l-4"></div>

        <div className="flex flex-col justify-center">
          <Reveal>
            <h1 className="text-2xl font-extra-bold text-center">
              What Am I Learning?
            </h1>
          </Reveal>
          <Reveal>
            <p className="pt-2 text-lg pb-4 text-center">
              List of things I’m learning, thought I’d share this.
            </p>
          </Reveal>

          <div className="border-t-4"></div>
          <SkillItem title="TypeScript" status="Learning" />
          <div className="border-t-4"></div>
          <SkillItem title="MongoDB, Express Js, Node Js" status="Learning" />
          <div className="border-t-4"></div>
          <SkillItem title="Devops" status="Queued" />
          <div className="border-t-4"></div>
        </div>
      </div>
    </div>
  );
});

const SkillItem = ({ title, status }) => (
  <div className="flex justify-between items-center">
    <Reveal2>
      <div className="text-xl pt-2 pb-2">{title}</div>
    </Reveal2>
    <Reveal>
      <div className="bg-customBlack p-1 rounded text-white">{status}</div>
    </Reveal>
  </div>
);
Skills_Section.displayName = "Skills_Section";

export default Skills_Section;
