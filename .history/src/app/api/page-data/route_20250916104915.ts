import { NextResponse } from "next/server";
import { title } from "process";
import { SiJavascript, SiPhp, SiPython, SiReact, SiLaravel, SiTensorflow } from 'react-icons/si';
import { MdEmail, MdCall, MdLanguage } from "react-icons/md";
import { FaDribbble, FaLinkedin, FaFacebook } from "react-icons/fa";



const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "constantinegumunyu25@gmail.com",
      icon: MdEmail,
      link: "mailto:constantinegumunyu25@gmail.com"
    },
    {
      type: "phone",
      label: "+27643319217",
      icon: MdCall,
      link: "tel:+27643319217"
    },
    {
      type: "website",
      label: "My Portfolio",
      icon: MdLanguage,
      link: "https://tendaicosta.vercel.app/"
    }
  ],
  socialItems: [
    {
      platform: "dribbble",
      icon: FaDribbble,
      link: "https://dribbble.com"
    },
    {
      platform: "linkedin",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/costathedeveloper"
    },
    {
      platform: "facebook",
      icon: FaFacebook,
      link: "https://web.facebook.com/tendai.gumunyu.1/"
    }
  ]
};


const educationData = {
  education: [
    {
      title: "Bachelor of Science in Computer Science - 2023",
      description: "Completed a comprehensive BSc program at Lovely Professional University, covering programming languages, algorithms, data structures, and software development methodologies."
    },
    {
      title: "Advanced Web Development Courses - 2024",
      description: "Completed advanced courses focused on full-stack JavaScript, PHP, and Python development, including hands-on projects and real-world applications."
    },
    {
      title: "Machine Learning & AI Fundamentals - 2025",
      description: "Studied AI and Machine Learning concepts, frameworks, and practical implementations to integrate intelligent features into web applications."
    }
  ],
  skills: [
    { name: "JavaScript", icon: SiJavascript, rating: 5 },
    { name: "PHP", icon: SiPhp, rating: 5 },
    { name: "Python", icon: SiPython, rating: 4 },
    { name: "React", icon: SiReact, rating: 4 },
    { name: "Laravel", icon: SiLaravel, rating: 4 },
    { name: "TensorFlow", icon: SiTensorflow, rating: 3 },
  ]
};
const contactLinks = {
  socialLinks: [
    {
      title: "Dribble",
      href: "/"
    },
    {
      title: "Facebook",
      href: "/"
    },
    {
      title: "LinkedIn",
      href: "/"
    },
  ],
  contactInfo: [
    {
      type: "email",
      label: "constantinegumunyu25@gmail.com",
      link: "mailto:constantinegumunyu25@gmail.com"
    },
    {
      type: "phone",
      label: "+27 64 331 9217",
      link: "tel:+27643319217"
    }
  ]
}



export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks
  });
};
