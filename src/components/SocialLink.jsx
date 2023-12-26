import React from "react";

// Reusable Social Link component
const SocialLink = ({ href, icon, size }) => (
  <a
    href={href}
    target="_blank"
    className="bg-white rounded-full p-3 border-4  relative group zoom-effect"
  >
    <div className="flex items-center">{icon({ size })}</div>
  </a>
);

export default SocialLink;
