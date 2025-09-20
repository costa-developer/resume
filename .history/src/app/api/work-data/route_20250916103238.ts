import { NextResponse } from "next/server";

const workData = [
    {
        image: "/images/work/work-img-1.jpg",
        title: "MailItMaster - AI Email Marketing Platform",
        client: "MailItMaster SaaS",
        slug: "mailitmaster-ai-email-marketing-platform"
    },
    {
        image: "/images/work/work-img-2.jpg",
        title: "Cape Town Tourism Website",
        client: "Cape Town Tourism",
        slug: "cape-town-tourism-website"
    },
    {
        image: "/images/work/work-img-3.jpg",
        title: "Chipato Joint Sealers",
        client: "Chipato Joint Sealers",
        slug: "safari-adventures-website"
    },
    {
        image: "/images/work/work-img-4.jpg",
        title: "Beatrice Guest House",
        client: "Personal Project",
        slug: "tendai-gumunyu-portfolio"
    },
    {
        image: "/images/work/work-img-5.jpg",
        title: "Advanced Healthcare Management System",
        client: "Vital Care",
        slug: "advanced-healthcare-management-system"
    },
    {
        image: "/images/work/work-img-6.jpg",
        title: "MailItMaster - AI Email Marketing Platform",
        client: "MailItMaster SaaS",
        slug: "mailitmaster-ai-email-marketing-platform-2"
    }
];

export const GET = async () => {
    return NextResponse.json({
        workData
    });
};
