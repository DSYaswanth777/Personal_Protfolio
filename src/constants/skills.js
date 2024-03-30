import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap, FaGithub } from "react-icons/fa6";
import { FaSass } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";

export const skills = [
  { icon: <GrReactjs size={70}/>, label: "React.js",id:1 },
  { icon: <TbBrandNextjs size={70} />, label: "Next.js",id:2 },
  { icon: <IoLogoJavascript size={70} />, label: "JavaScript",id:3 },
  { icon: <IoLogoHtml5 size={70} />, label: "HTML",id:4 },
  { icon: <IoLogoCss3 size={70}/>, label: "CSS",id:4 },
  { icon: <FaBootstrap size={70}/>, label: "Bootstrap",id:5 },
  { icon: <FaSass size={70} />, label: "Sass",id:6 },
  { icon: <BiLogoTailwindCss size={70} />, label: "Tailwind CSS",id:7 },
  { icon: <FaGithub size={70} />, label: "GitHub",id:8 },
];
