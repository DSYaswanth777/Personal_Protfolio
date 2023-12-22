"use client";

import { forwardRef } from "react";
import { Reveal } from "./Animations/Reveal";
import { contactInfoData } from "@/constants/contactInfo";
import ContactInfo from "./ContactInfo";
const ContactSection = forwardRef((props, ref) => {
  return (
    <section
      className="h-full pt-32 container md:mx-auto mb-20 flex flex-col justify-center items-center gap-10"
      ref={ref}
      aria-labelledby="contact-me-title"
    >
      <Reveal>
        <div className="text-3xl font-extra-bold text-center underline underline-offset-4">
          Contact
        </div>
      </Reveal>
      <div className="flex flex-col gap-10 items-center justify-center ">
        {contactInfoData.map((info, index) => (
          <ContactInfo key={index} {...info} />
        ))}
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactMeSection";

export default ContactSection;
