// React-Icon Imports
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
const handleEmailClick = () => {
  window.location.href = "mailto:dsyaswanth777@gmail.com";
};

const handleMobileClick = () => {
  window.location.href = "tel:+919100297633";
};
export const contactInfoData = [
  {
    icon: <HiOutlineMailOpen size={30} />,
    label: "Email",
    value: {
      link: "mailto:dsyaswanth777@gmail.com",
      display: "dsyaswanth777@gmail.com",
    },
    onClick: handleEmailClick,
  },
  {
    icon: <BiPhone size={30} />,
    label: "Phone",
    value: {
      link: "tel:+919100297633",
      display: "+91 9100297633",
    },
    onClick: handleMobileClick,
  },
];
