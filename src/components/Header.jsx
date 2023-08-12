import React, { useEffect, useRef, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Header({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref to the menu container

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const handleScrollTo = (section, e) => {
    scrollToSection(section);
    closeMenu();
    e.preventDefault();
  };
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  const navItems = [
    { section: "hero", label: "Home" },
    { section: "personal", label: "About Me" },
    { section: "skills", label: "Skills" },
    { section: "projects", label: "Works" },
    { section: "contact", label: "Contact" },
  ];

  return (
    <div className="container mx-auto">
      <nav className="p-5 md:flex md:items-center md:justify-around bg-white border-b-4 container md:mx-auto z-10 fixed">
        <div className="flex justify-between items-center">
          <span className="font-bold text-md">Yaswanth</span>
          <span className="cursor-pointer md:hidden block" onClick={toggleMenu}>
            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </span>
        </div>
        <div ref={menuRef}>
          <ul
            className={`${
              isMenuOpen
                ? "md:flex "
                : "md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 backdrop-blur-md "
            } md:items-center gap-10 md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 backdrop-blur-lg text-center ${
              isMenuOpen
                ? "opacity-100 top-[68px] h-screen "
                : "opacity-0 top-[-400px]"
            } transition-all ease-in duration-500`}
          >
            {navItems.map((item) => (
              <li
                key={item.section}
                className="my-16 font-extra-bold text-xl md:my-0"
              >
                <a
                  href="#"
                  className="text-md nav-link nav-link-ltr"
                  onClick={(e) => handleScrollTo(item.section, e)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
