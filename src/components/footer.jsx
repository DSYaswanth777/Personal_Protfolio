//**React Imports */
import React from "react";
//**React-Icon Imports */
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { Reveal2 } from "./Animations/Reveal2";
function footer() {
  return (
    <footer className="bg-customBlack">
      <div className=" container md:mx-auto flex justify-between items-center h-full py-16 gap-8  flex-col px-6">
        <Reveal2>
          <p className="text-white font-extra-bold">
            &copy;2023.Yaswanth Dasari
          </p>
        </Reveal2>
        <Reveal2>
          <nav aria-label="Footer Social Links">
            <div className="flex flex-row gap-3">
              <a
                href="https://github.com/DSYaswanth777"
                target="_blank"
                className="bg-white rounded-full p-3 border-4 shadow-xl relative group zoom-effect "
              >
                <div className="flex items-center">
                  <FaGithub size={20} />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/dasari-srinivasa-yaswanth-7a752619b/"
                target="_blank"
                className="bg-white rounded-full p-3  border-4 shadow-xl relative group zoom-effect "
              >
                <div className="flex items-center">
                  <FaLinkedinIn size={20} />
                </div>
              </a>
              <a
                href="mailto:dsyaswanth777@gmail.com"
                target="_blank"
                className="bg-white rounded-full p-3  border-4 shadow-xl relative group zoom-effect "
              >
                <div className="flex items-center">
                  <HiOutlineMailOpen size={20} />
                </div>
              </a>
            </div>
          </nav>
        </Reveal2>
      </div>
    </footer>
  );
}

export default footer;
