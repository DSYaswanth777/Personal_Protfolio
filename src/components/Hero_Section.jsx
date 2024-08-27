"use client";
//**Lottie Animated icon import */
import Animation from "../../public/icons/Hello-Lottie.json";
//**Lottie animated icon import  */
import Lottie from "lottie-react";
//**Nextjs image import */
import Image from "next/image";
//**forwardRef Import from react */
import { forwardRef } from "react";
import { Reveal } from "./Animations/Reveal";
import { Reveal2 } from "./Animations/Reveal2";
import { socialLinks } from "@/constants/socialLinks";

const Hero_Section = forwardRef((props, ref) => {
  const handleEmailClick = () => {
    window.location.href = "mailto:dsyaswanth777@gmail.com";
  };

  return (
    <section
      className="container md:mx-auto h-full flex flex-col justify-center items-center pt-16"
      ref={ref}
      aria-label="Hero Section"
    >
      <div className="text-center pt-12 md:pt-8">
        <Lottie animationData={Animation} loop={true} className=" w-72 md:w-96 mx-auto" />
      </div>
      <div className="text-center flex flex-col gap-2">
        <h1 className="text-4xl font-bold mb-2 ">
    I’m <br className="block md:hidden" /> <em className="font-extra-bold"> Yaswanth Dasari</em>,
        </h1>
        <h2 className="text-2xl mb-4">A Web Developer & UI/UX Enthusiast</h2>
        <p className="text-2xl mb- font-bold md:text-4xl  md:font-extra-bold ">
          Dedicated to crafting exceptional <br /> user experiences and visually
          stunning websites.
        </p>
        <div className="flex gap-12 justify-center align-center mt-6">
          <a href={"mailto:dsyaswanth777@gmail.com"} target="_blank">
            <Reveal2>
              <button className="  button" onClick={handleEmailClick}>
                Hire Me!
              </button>
            </Reveal2>
          </a>
          <a
            href="DSYaswanth_Resume.pdf"
            download="DSYaswanth_Resume.pdf"
            target="_blank"
          >
            <Reveal2>
              <button className="  button">Resume</button>
            </Reveal2>
          </a>
        </div>
      </div>
    </section>
  );
});
Hero_Section.displayName = "Hero_Section";

export default Hero_Section;
