"use client";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaGreaterThan,
  FaLessThan,
} from "react-icons/fa";
import Animation from "../../public/icons/Hello-Lottie.json";
import Lottie from "lottie-react";
function Hero_Section() {
  return (
    <div className="container md:mx-auto h-screen ">
      <div className="flex justify-around pt-16 border-t-4 ">
        <div>
          <FaLessThan size={30} className="" />
          <div className="ml-10">
            <div className="w-2/3">
              <Lottie animationData={Animation} />
            </div>
            <div className="ml-10">
              
            <p>Welcome to my Portfolio!</p>
            <h1 className="text-3xl">I am Yaswanth Dasari.</h1>
            <p className="text-3xl">A Passionate Front-End Developer</p>
            <button className="bg-white p-3 rounded-full shadow hover:shadow-md mt-5">Hire Me</button>
            </div>
              
          </div>
          <div className="flex gap-1 mt-16 ml-16">
            <h1 className="font-extra-bold text-2xl"> /</h1>
            <FaGreaterThan size={30} className="" />
          </div>
        </div>

        <div className="">
          <div className="flex flex-col gap-7 cursor-pointer pt-20">
            <a className="bg-white rounded-full p-3 shadow-md relative group  ">
              <div className="flex items-center">
                <FaGithub size={20} />
                <span className="absolute -right-24 w-0 group-hover:w-24 h-8 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 flex items-center p-5">
                  Github
                </span>
              </div>
            </a>
            <a className="bg-white rounded-full p-3 shadow-md relative group  ">
              <div className="flex items-center">
                <span className="absolute -right-24 w-0 group-hover:w-24 h-8 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 flex items-center p-5">
                  Linkdlen
                </span>
                <FaLinkedinIn size={20} />
              </div>
            </a>
            {/* <a className="bg-white rounded-full p-3 relative group shadow-md ">
              <div className="flex items-center">
                <FaFacebook size={20} />
                <span className="absolute -right-24 w-0 group-hover:w-24 h-8 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 flex items-center p-5">
                  Facebook
                </span>
              </div>
            </a> */}
            <a className="bg-white rounded-full p-3 shadow-md relative group  ">
              <div className="flex items-center">
                <span className="absolute -right-24 w-0 group-hover:w-24 h-8 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 flex items-center p-5">
                  Twitter
                </span>
                <FaTwitter size={20} />
              </div>
            </a>
            <a className="bg-white rounded-full p-3 shadow-md relative group ">
              <div className="flex items-center">
                <span className="absolute -right-24 w-0 group-hover:w-24 h-8 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 flex items-center p-5">
                  Instagram
                </span>
                <FaInstagram size={20} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero_Section;
