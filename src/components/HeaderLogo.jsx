import React from 'react'
import { Reveal2 } from './Animations/Reveal2';
import Image from 'next/image';
import Logo from "../../public/icons/yaswanth.svg"
// HeaderLogo component
const HeaderLogo = ({ onClick }) => (
    <Reveal2>
      <h1 className="font-extra-bold text-lg uppercase cursor-pointer " onClick={onClick}>
        <Image src={Logo} alt='logo'/>
      </h1>
    </Reveal2>
  );
  
export default HeaderLogo