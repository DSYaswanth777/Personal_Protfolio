import React from 'react'
import { Reveal2 } from './Animations/Reveal2';

const ContactInfo = ({ icon, label, value, onClick }) => (
    <div className="flex flex-col justify-center items-center">
      <Reveal2>
        <div
          className="p-5 shadow-lg rounded-full border-2 flex zoom-effect cursor-pointer"
          onClick={onClick}
        >
          {icon}
        </div>
      </Reveal2>
      <Reveal2>
        <p className="text-xl pt-5 font-extra-bold">{label}</p>
      </Reveal2>
      <Reveal2>
        <a href={value.link} className="text-xl font-bold text-center pt-2">
          {value.display}
        </a>
      </Reveal2>
    </div>
  );

export default ContactInfo