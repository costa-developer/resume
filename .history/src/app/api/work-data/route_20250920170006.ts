import { NextResponse } from "next/server";

const workData = [
  {
    image: "/images/work/work-img-7.jpg",
    title: "Tillara POS System",
    client: "Your Company / Client Name",
    url: "#"
  },
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
    url: "https://capearchivestours.com/"
  },
  {
    image: "/images/work/work-img-3.jpg",
    title: "Chipato Joint Sealers",
    client: "Chipato Joint Sealers",
    url: "https://www.chipatojointsealers.co/"
  },
  {
    image: "/images/work/work-img-4.jpg",
    title: "Beatrice Guest House",
    client: "Beatrice Guest House",
    url: "https://beatriceguesthouse.com/"
  },
  {
    image: "/images/work/work-img-5.jpg",
    title: "Advanced Healthcare Management System",
    client: "Vital Care",
    url: "https://cms-ytg4.vercel.app/"
  },
  {
    image: "/images/work/work-img-6.jpg",
    title: "Sky Global Education",
    client: "Sky Global Education",
    url: "https://www.skyglobaleducation.com/"
  }
];


export const GET = async () => {
    return NextResponse.json({
        workData
    });
};
