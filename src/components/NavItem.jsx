import React from 'react'
import { Reveal2 } from './Animations/Reveal2';

// NavItem component
const NavItem = ({ item, onClick }) => (
    <Reveal2>
      <li className="my-8 text-center font-extra-bold text-xl md:my-0">
        <a href="#" className="text-md nav-link nav-link-ltr" onClick={(e) => onClick(item.section, e)}>
          {item.label}
        </a>
      </li>
    </Reveal2>
  );
export default NavItem