import React from 'react'
import { Reveal2 } from './Animations/Reveal2';

// HeaderLogo component
const HeaderLogo = ({ onClick }) => (
    <Reveal2>
      <h1 className="font-extra-bold text-lg uppercase cursor-pointer" onClick={onClick}>
        Yaswanth
      </h1>
    </Reveal2>
  );
  
export default HeaderLogo