import React from 'react'
import { HiMenuAlt3, HiX } from "react-icons/hi";

// MobileMenuToggle component
const MobileMenuToggle = ({ onClick, isMenuOpen }) => (
    <button
      aria-label="Toggle Menu"
      className="cursor-pointer md:hidden block"
      onClick={onClick}
    >
      {isMenuOpen ? <HiX size={25} /> : <HiMenuAlt3 size={25} />}
    </button>
  );

export default MobileMenuToggle