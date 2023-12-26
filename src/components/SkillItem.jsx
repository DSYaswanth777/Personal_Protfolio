import React from 'react'
import { Reveal2 } from './Animations/Reveal2';
import { Reveal } from './Animations/Reveal';

const SkillItem = ({ title, status }) => (
    <div className="flex justify-between items-center">
      <Reveal2>
        <div className="text-xl pt-2 pb-2">{title}</div>
      </Reveal2>
      <Reveal>
        <div className="bg-customBlack p-1 rounded text-white">{status}</div>
      </Reveal>
    </div>
  );
export default SkillItem