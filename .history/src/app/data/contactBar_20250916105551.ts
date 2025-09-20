import { MdEmail, MdCall, MdLanguage } from "react-icons/md";
import { FaDribbble, FaLinkedin, FaFacebook } from "react-icons/fa";

const contactBarDefault = {
  contactItems: [
    { type: "email", label: "constantinegumunyu25@gmail.com", icon: MdEmail, link: "mailto:constantinegumunyu25@gmail.com" },
    { type: "phone", label: "+27643319217", icon: MdCall, link: "tel:+27643319217" },
    { type: "website", label: "My Portfolio", icon: MdLanguage, link: "https://tendaicosta.vercel.app/" },
  ],
  socialItems: [
    { platform: "dribbble", icon: FaDribbble, link: "https://dribbble.com" },
    { platform: "linkedin", icon: FaLinkedin, link: "https://www.linkedin.com/in/costathedeveloper" },
    { platform: "facebook", icon: FaFacebook, link: "https://web.facebook.com/tendai.gumunyu.1/" },
  ],
};

export default contactBarDefault;
