import React from 'react'
import { Reveal } from './Animations/Reveal';

const SectionWithReveal = ({ title, children }) => (
    <Reveal>
      <h2 className="text-2xl text-center font-extra-bold underline underline-offset-4">
        {title}
      </h2>
      {children}
    </Reveal>
  );

export default SectionWithReveal