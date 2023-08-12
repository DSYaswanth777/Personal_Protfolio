"use client";
import Animation from "../../public/icons/Hello-Lottie.json";
import Lottie from "lottie-react";
import Image from "next/image";
import LinkedinIn from "../../public/icons/linkedin_icon.svg";
import Twitter from "../../public/icons/twitter_icon.svg";
import Instagram from "../../public/icons/instagram_icon.svg";
import Github from "../../public/icons/github_icon.svg";
import { forwardRef } from "react";

const Hero_Section = forwardRef((props, ref) => {
  return (
    <div className="container md:mx-auto h-full " ref={ref}>
      <div className="flex flex-col md:flex-row  justify-around items-center pt-16 section1 ">
        <div className="mt-10">
          <div className="ml-10 mt-10">
            <div className="w-2/3">
              <Lottie animationData={Animation} />
            </div>
            <div className="ml-0">
              <p className="pb-2 text-md">Welcome to my Portfolio!</p>
              <h1 className="text-2xl md:text-3xl pb-2 ">
                I am Yaswanth Dasari.
              </h1>
              <p className="text-2xl md:text-3xl font-extra-bold pb-5">
                A Passionate Front-End Developer
              </p>
              <a
                href="https://drive.google.com/file/d/1n9yvqz1C8oNqxGtHAlLFN5KyKGNKEPiw/view?usp=sharing
              "
                target="_blank"
              >
                <button className="bg-customBlack p-3 rounded-md shadow-xl  hover:bg-white text-white hover:text-customBlack mt-5 ">
                  Hire Me
                </button>
              </a>
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
                {/* <FaLinkedinIn size={20} /> */}
                <Image src={LinkedinIn} size={12} alt="LinkedinIn"></Image>
              </div>
            </a>
            <a
              href="https://twitter.com/dsyaswanth"
              target="_blank"
              className="bg-white rounded-full p-3 shadow-xl relative group zoom-effect "
            >
              <div className="flex items-center">
                {/* <FaTwitter size={20} /> */}
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

export default Hero_Section;
