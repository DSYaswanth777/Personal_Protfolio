"use client";
//**Lottie Animated icon import */
import Animation from "../../public/icons/Hello-Lottie.json";
//**Lottie animated icon import  */
import Lottie from "lottie-react";
//**Nextjs image import */
import Image from "next/image";
//**Social media icon svg import */
import LinkedinIn from "../../public/icons/linkedin_icon.svg";
import Twitter from "../../public/icons/twitter_icon.svg";
import Instagram from "../../public/icons/instagram_icon.svg";
import Github from "../../public/icons/github_icon.svg";
//**forwardRef Import from react */
import { forwardRef } from "react";
import { Reveal } from "./Reveal";

const Hero_Section = forwardRef((props, ref) => {
  const handleEmailClick = () => {
    window.location.href = "mailto:dsyaswanth777@gmail.com";
  };
  return (
    <div className="container md:mx-auto h-full " ref={ref}>
      <div className="flex flex-col md:flex-row  justify-around items-center pt-16 section1 ">
        <div className="mt-10">
          <div className="ml-10 mt-10">
            <div className="w-2/3">
              <Lottie animationData={Animation} />
            </div>
            <div className="ml-0">
              <Reveal>
                <p className="pb-2 text-md">Welcome to my Portfolio!</p>
              </Reveal>
              <Reveal>
                <h1 className="text-2xl md:text-3xl pb-2 ">
                  I am Yaswanth Dasari.
                </h1>
              </Reveal>
              <Reveal>
                <p className="text-2xl md:text-3xl font-extra-bold pb-5">
                  A Passionate Front-End Developer
                </p>
              </Reveal>
              <div className="flex gap-3">
                <a href={"mailto:dsyaswanth777@gmail.com"} target="_blank">
                  <button
                    className="bg-customBlack p-3 rounded-md shadow-xl  hover:bg-white text-white hover:text-customBlack mt-5 "
                    onClick={handleEmailClick}
                  >
                    Hire Me!
                  </button>
                </a>
                <a
                  href="DSYaswanth_Resume.pdf"
                  download="DSYaswanth_Resume.pdf"
                  target="_blank"
                >
                  <button className="bg-customBlack p-3 rounded-md shadow-xl  hover:bg-white text-white hover:text-customBlack mt-5 ">
                    Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-">
          <div className="flex flex-row md:flex-col gap-7  cursor-pointer pt-20 section2">
            <a
              href="https://github.com/DSYaswanth777"
              target="_blank"
              className="bg-white rounded-full p-3 shadow-xl relative group zoom-effect "
            >
              <div className="flex items-center">
                <Image src={Github} alt="Github"></Image>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/dasari-srinivasa-yaswanth-7a752619b/"
              target="_blank"
              className="bg-white rounded-full p-3 shadow-xl relative group zoom-effect "
            >
              <div className="flex items-center">
                <Image src={LinkedinIn} size={12} alt="LinkedinIn"></Image>
              </div>
            </a>
            <a
              href="https://twitter.com/dsyaswanth"
              target="_blank"
              className="bg-white rounded-full p-3 shadow-xl relative group zoom-effect "
            >
              <div className="flex items-center">
                <Image src={Twitter} size={12} alt="Twitter"></Image>
              </div>
            </a>
            <a
              href="https://www.instagram.com/dasari_yaswanthh/"
              target="_blank"
              className="bg-white rounded-full p-3 shadow-xl relative group zoom-effect"
            >
              <div className="flex items-center">
                <Image src={Instagram} size={12} alt="Instagram"></Image>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
Hero_Section.displayName = "Hero_Section";

export default Hero_Section;
