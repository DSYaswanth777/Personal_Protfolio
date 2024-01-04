import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { Reveal2 } from "./Animations/Reveal2";
import SocialLink from "./SocialLink";

function Footer() {
  return (
    <footer className="bg-customBlack">
      <div className="container md:mx-auto flex justify-between items-center h-full py-16 gap-8 flex-col px-6">
        <Reveal2>
          <p className="text-white font-extra-bold">
            &copy; 2023. Yaswanth Dasari
          </p>
        </Reveal2>
        <Reveal2>
          <nav aria-label="Footer Social Links">
            <div className="flex flex-row gap-3">
              <SocialLink
                href="https://github.com/DSYaswanth777"
                icon={FaGithub}
                size={20}
              />
              <SocialLink
                href="https://www.linkedin.com/in/dasari-srinivasa-yaswanth-7a752619b/"
                icon={FaLinkedinIn}
                size={20}
              />
              <SocialLink
                href="mailto:dsyaswanth777@gmail.com"
                icon={HiOutlineMailOpen}
                size={20}
              />
            </div>
          </nav>
        </Reveal2>
      </div>
    </footer>
  );
}

export default Footer;
