"use client";;
import { forwardRef } from "react";
import { Reveal } from "./Animations/Reveal";
import { Reveal2 } from "./Animations/Reveal2";
import { skills } from "@/constants/skills";

const Skills_Section = forwardRef((props, ref) => {
  return (
    <div className="h-full container md:mx-auto px-12 pt-32" ref={ref}>
      <div className="flex justify-center items-center flex-row gap-6 md:mx-auto ">
        <Reveal>
          <div className="text-center text-3xl underline underline-offset-4 pl-8 font-extra-bold">
            Skills
          </div>
        </Reveal>
      </div>
      <div className="flex justify-center items-center flex-col md:flex-col lg:flex-row   pt-10 ">
        <div className="flex flex-col">
          <div className="flex  justify-center items-center w-100">
              <div className="skills-section justify-center items-center d-flex  pt-5 px">
                {skills.map((skill, index) => (
                  <div className="d-flex justify-center items-center" key={index}>
                    <Reveal2>
                    <p
                      key={skill}
                      className="  d-flex justify-center items-center text-center "
                    >
                      {skill.icon}
                      <span>{skill.label}</span>
                    </p>
                </Reveal2>
                  </div>
                ))}
              </div>
          </div>
        </div>
 
      </div>
    </div>
  );
});

Skills_Section.displayName = "Skills_Section";

export default Skills_Section;
