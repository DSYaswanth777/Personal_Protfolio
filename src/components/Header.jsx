"use client";
import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }

  return (
    <div className="">
      <nav className="p-5 md:flex md:items-center md:justify-around container md:mx-auto">
        <div className="flex justify-between items-center  ">
          <span className="font-bold text-md">Yaswanth</span>
          <span className="cursor-pointer md:hidden block" onClick={toggleMenu}>
            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </span>
        </div>
        <ul
          className={`${
            isMenuOpen
              ? "md:flex "
              : "md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"
          } md:items-center gap-10 md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 ${
            isMenuOpen ? "opacity-100 top-[80px]" : "opacity-0 top-[-400px]"
          } transition-all ease-in duration-500`}
        >
          <li className="my-6 md:my-0">
            <a href="#" className="text-md hover:text-cyan-500 duration-500">
              Home
            </a>
          </li>
          <li className="my-6 md:my-0">
            <a href="#" className="text-md hover:text-cyan-500 duration-500">
              About Me
            </a>
          </li>
          
          <li className="my-6 md:my-0">
            <a href="#" className="text-md hover:text-cyan-500 duration-500">
              Works
            </a>
          </li>
          <li className="my-6 md:my-0">
            <a
              href="#"
              className="text-md hover:text-cyan-500 duration-500  mr-2"
            >
              Contact
            </a>
          </li>
          
        </ul>
      </nav>
    </div>
  );
}

export default Header;
