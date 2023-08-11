import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
function footer() {
  return (
    <div className="bg-customBlack">
      <div className=" container md:mx-auto flex justify-between items-center h-full py-16 gap-8  flex-col px-6">
        <p className="text-white font-extra-bold">&copy;2023.Yaswanth Dasari</p>

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
            href="https://www.linkedin.com/in/dasari-srinivasa-yaswanth-7a752619b/"
            target="_blank"
            className="bg-white rounded-full p-3  border-4 shadow-xl relative group zoom-effect "
          >
            <div className="flex items-center">
          <HiOutlineMailOpen size={20} />
              
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default footer;
