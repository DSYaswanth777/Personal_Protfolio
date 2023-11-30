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
import { Reveal } from "./Animations/Reveal";
import { Reveal2 } from "./Animations/Reveal2";

const Hero_Section = forwardRef((props, ref) => {
  const handleEmailClick = () => {
    window.location.href = "mailto:dsyaswanth777@gmail.com";
  };
  const socialLinks = [
    {
      id: 1,
      link: "https://github.com/DSYaswanth777",
      icon: Github,
      alt: "Github",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/dasari-srinivasa-yaswanth-7a752619b/",
      icon: LinkedinIn,
      alt: "LinkedIn",
    },
    {
      id: 3,
      link: "https://twitter.com/dsyaswanth",
      icon: Twitter,
      alt: "Twitter",
    },
    {
      id: 4,
      link: "https://www.instagram.com/dasari_yaswanthh/",
      icon: Instagram,
      alt: "Instagram",
    },
  ];

  return (
    <section className="container md:mx-auto h-full " ref={ref} aria-label="Hero Section">
      <div className="flex flex-col md:flex-row  justify-around items-center pt-16 section1 ">
        <div className="mt-10">
          <div className="ml-10 mt-10">
            <div className="w-2/3">
              <Lottie animationData={Animation} aria-hidden="true"  />
            </div>
            <article className="ml-0">
              <Reveal>
                <p className="pb-2 text-md">Welcome to my Portfolio!</p>
              </Reveal>
              <Reveal>
                <h1 className="text-2xl md:text-2xl pb-2 ">
                  I am Yaswanth Dasari.
                </h1>
              </Reveal>
              <Reveal>
                <p className="text-2xl md:text-2xl font-extra-bold pb-5">
                  A Passionate Front-End Developer
                </p>
              </Reveal>
              <div className="flex gap-3">
                <a href={"mailto:dsyaswanth777@gmail.com"} target="_blank">
                  <Reveal2>
                    <button
                      className="bg-customBlack p-3 rounded-md shadow-xl  hover:bg-white text-white hover:text-customBlack mt-5 hover:border-dark border "
                      onClick={handleEmailClick}
                    >
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
                    <button className="bg-customBlack p-3 rounded-md shadow-xl  hover:bg-white text-white hover:text-customBlack hover:border-dark border mt-5 ">
                      Resume
                    </button>
                  </Reveal2>
                </a>
              </div>
            </article>
          </div>
        </div>
        <Reveal2>
          <aside className="flex flex-row md:flex-col gap-7  cursor-pointer pt-20 section2 p-1">
            {socialLinks.map((socialLink) => (
              <a
                href={socialLink.link}
                target="_blank"
                rel="noopener noreferrer"
                key={socialLink.id}
                aria-label={`Follow on ${socialLink.alt}`}
                className="bg-white rounded-full p-3 shadow-md relative group zoom-effect "
              >
                <div className="flex items-center">
                  <Image src={socialLink.icon} size={12} alt={socialLink.alt} />
                </div>
              </a>
            ))}
          </aside>
        </Reveal2>
      </div>
    </section>
  );
});
Hero_Section.displayName = "Hero_Section";

export default Hero_Section;
