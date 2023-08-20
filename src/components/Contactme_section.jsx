"use client";
//**React-Icon Imports */
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import { forwardRef } from "react";
import { Reveal } from "./Reveal";
import { Reveal2 } from "./Reveal2";

const contactme_Section = forwardRef((props, ref) => {
  const handleEmailClick = () => {
    window.location.href = "mailto:dsyaswanth777@gmail.com";
  };
  const handleMobileClick = () => {
    window.location.href = "tel:+919100297633";
  };

  return (
    <div className="h-full pt-32 container md:mx-auto mb-20 flex flex-col justify-center items-center gap-10" ref={ref}>
      <Reveal>

      <div className="text-3xl font-extra-bold text-center underline underline-offset-4">
        Contact
      </div>
      </Reveal>
      <div className="flex  flex-col gap-10 items-center justify-center ">
        <div className="flex flex-col justify-center items-center">
          <Reveal2>

          <div
            className="p-5 shadow-lg rounded-full border-2 flex zoom-effect cursor-pointer  "
            onClick={handleEmailClick}
          >
            <HiOutlineMailOpen size={30} onClick={handleEmailClick} />
          </div>
          </Reveal2>
          <Reveal2>

          <p className="text-xl pt-5 font-extra-bold ">Email</p>
          </Reveal2>
          <Reveal2>

          <a
            href={"mailto:dsyaswanth777@gmail.com"}
            className="text-xl font-bold text-center pt-2"
          >
            {" "}
            dsyaswanth777@gmail.com
          </a>
          </Reveal2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Reveal2>

          <div
            className="p-5 shadow-lg rounded-full border-2 flex zoom-effect  cursor-pointer"
            onClick={handleEmailClick}
          >
            <BiPhone size={30} onClick={handleMobileClick} />
          </div>
          </Reveal2>
          <Reveal2>

          <p className="text-xl pt-5 font-extra-bold ">Phone</p>
          </Reveal2>
          <Reveal2>

          <a href="tel:+919100297633" className="text-xl font-bold text-center pt-2">
            {" "}
            +91 9100297633
          </a>
          </Reveal2>
        </div>
      </div>
    </div>
  );
});
contactme_Section.displayName = "ContactMeSection";

export default contactme_Section;
