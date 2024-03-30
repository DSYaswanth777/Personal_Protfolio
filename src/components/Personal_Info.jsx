import React, { forwardRef } from "react";
import { Reveal } from "./Animations/Reveal";
import { Reveal2 } from "./Animations/Reveal2";
const Personal_Info = forwardRef((props, ref) => {
  return (
    <section
      className="container md:mx-auto h-full pt-36"
      ref={ref}
      aria-labelledby="about-me-title"
    >
      <div className="flex justify-around flex-col items-center">
        <div className="text-center">
          <Reveal>
            <p className="font-extra-bold text-3xl underline underline-offset-4 text-center px-12 ">
              About Me
            </p>
          </Reveal>
          <Reveal>
            <p className="text-xl pt-4 font-extra-bold underline underline-offset-4 text-center">
              Get to Know more about me
            </p>
          </Reveal>
        </div>
        <div className="flex justify-center flex-col  md:flex-col lg:flex-row pt-8 gap-16 px-12">
          <div className="relative">
            <div className="step-dot"></div>
            <div className="step-line"></div>
            <Reveal>
              <article>
                <h2 className="text-2xl text-center font-extra-bold underline underline-offset-4">
                  Experience
                </h2>
              </article>
            </Reveal>
            <div className="py-4">
              <Reveal>
                <div className="text-xl font-extra-bold">
                  Trainee Web Developer (Internship)
                </div>
              </Reveal>
              <Reveal2>
                <p>11/2022 - 05/2023</p>
              </Reveal2>
              <Reveal2>
                <div className="text-lg font-bold ">
                  Zignuts Techno Lab Pvt Ltd.
                </div>
              </Reveal2>
            </div>
            <div className="relative">
              <div className="step-dot"></div>
              <div className="pt-12"></div>
              <Reveal>
                <div className="text-xl font-extra-bold">
                  Freelance Web Developer
                </div>
              </Reveal>
              <Reveal2>
                <a
                  href={"mailto:dsyaswanth777@gmail.com"}
                  className="underline underline-offset-2 font-extra-bold"
                  target="_blank"
                >
                  Hire / Contact Me
                </a>
              </Reveal2>
            </div>
          </div>
          <div className="border-b-4 md:border-l-4 "></div>
          <div className="relative">
            <div className="step-dot"></div>
            <div className="step-line"></div>
            <Reveal>
              <article>
                <h2 className="text-2xl  text-center font-extra-bold underline underline-offset-4">
                  Education
                </h2>
              </article>
            </Reveal>
            <div className="py-4">
              <Reveal>
                <div className="text-xl font-extra-bold">
                  B.tech in Computer Science & Engineering
                </div>
              </Reveal>
              <Reveal2>
                <p className="text-lg font-bold">Parul University</p>
              </Reveal2>
            </div>
            <div className="relative">
              <div className="step-dot"></div>
              <div className="pt-8"></div>
              <Reveal2>
                <Reveal>
                  <div className="text-xl font-extra-bold">
                    Intermediate (+2/12th)
                  </div>
                </Reveal>
              </Reveal2>
              <Reveal2>
                <p className="text-lg font-bold">Narayana Junior college</p>
              </Reveal2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
Personal_Info.displayName = "Personal_Info";

export default Personal_Info;
