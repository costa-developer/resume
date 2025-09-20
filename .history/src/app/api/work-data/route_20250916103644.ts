import { NextResponse } from "next/server";

const workData = [
    {
      image: "/images/work/work-img-1.jpg",
      title: "Connectai - AI Email Marketing Platform (In progress)",
      client: "MailItMaster SaaS",
      url: "https://connectai-dev.vercel.app/"
    },
    {
      image: "/images/work/work-img-2.jpg",
      title: "Cape Archives Tours",
      client: "Cape Town Tourism",
      url: "/work/cape-town-tourism-website"
    },
    {
      image: "/images/work/work-img-3.jpg",
      title: "Chipato Joint Sealers",
      client: "Chipato Joint Sealers",
      url: "/work/safari-adventures-website"
    },
    {
      image: "/images/work/work-img-4.jpg",
      title: "Beatrice Guest House",
      client: "Beatrice Guest House",
      url: "/work/tendai-gumunyu-portfolio"
    },
    {
      image: "/images/work/work-img-5.jpg",
      title: "Advanced Healthcare Management System",
      client: "Vital Care",
      url: "/work/advanced-healthcare-management-system"
    },
    {
      image: "/images/work/work-img-6.jpg",
      title: "Sky Global Education",
      client: "Sky Global Education",
      url: "/work/mailitmaster-ai-email-marketing-platform-2"
    }
  ];
  

export const GET = async () => {
    return NextResponse.json({
        workData
    });
};
