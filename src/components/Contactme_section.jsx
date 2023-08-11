"use client";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

import { HiOutlineMailOpen } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
function contactme_Section() {
  const handleEmailClick = () => {
    window.location.href = "mailto:dsyaswanth777@gmail.com";
  };

  return (
    <div className="h-screen pt-32 container md:mx-auto mb-20">
      <div className="text-3xl font-extra-bold text-center underline underline-offset-4 pb-12 ">
        Contact
      </div>

      <div className="flex flex-col justify-center items-center">
        <div
          className="p-5 shadow-lg rounded-full border-2 flex zoom-effect  "
          onClick={handleEmailClick}
        >
          <HiOutlineMailOpen size={30} onClick={handleEmailClick} />
        </div>
        <p className="text-xl pt-5 font-extra-bold ">Email</p>
        <a
          href={`mailto:{dsyaswanth777@gmail.com}`}
          className="text-xl font-bold text-center pt-2"
        >
          {" "}
          dsyaswanth777@gmail.com
        </a>
        <div className="p-5 shadow-lg rounded-full border-2 mt-10 flex zoom-effect ">
          <BiPhone size={30} />
        </div>
        <p className="text-xl pt-5 font-extra-bold ">Phone</p>
        <a
          href="mailto:dsyaswanth777@gmail.com"
          className="text-xl font-bold text-center pt-2 "
        >
          {" "}
          +91 9100297633
        </a>
      </div>
    </div>
  );
}

export default contactme_Section;