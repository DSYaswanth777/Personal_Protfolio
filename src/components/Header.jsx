import React, { useEffect, useRef, useState } from "react";
import { navItems } from "@/constants/navItems";
import HeaderLogo from "./HeaderLogo";
import MobileMenuToggle from "./MobileMenuToggle";
import NavItem from "./NavItem";


// Header component
function Header({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

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

  return (
    <header className="container mx-auto">
      <nav className="p-3 md:flex md:items-center md:justify-around bg-white border-b-4 container md:mx-auto z-10 fixed">
        <div className="flex justify-between items-center">
          <HeaderLogo onClick={(e) => handleScrollTo("hero", e)} />
          <MobileMenuToggle onClick={toggleMenu} isMenuOpen={isMenuOpen} />
        </div>
        <div ref={menuRef}>
          <ul
            className={`${
              isMenuOpen
                ? "md:flex "
                : "md:flex md:items-center z-[-1] gap-10 md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 backdrop-blur-md "
            } md:items-center  md:static absolute w-full left-0 md:w-auto md:py-0  md:pl-0  backdrop-blur-xl text-center ${
              isMenuOpen
                ? "opacity-100 top-[71px] h-screen flex flex-col items-center justify-center"
                : "opacity-0 top-[-400px]"
            } transition-all ease-in duration-500`}
          >
            {navItems.map((item) => (
              <NavItem key={item.section} item={item} onClick={handleScrollTo} />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
