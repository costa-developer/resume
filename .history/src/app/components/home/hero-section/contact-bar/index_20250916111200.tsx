// ContactBar.tsx

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Import React Icons
import { MdEmail, MdCall } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { SiDribbble, SiLinkedin, SiFacebook, SiInstagram, SiGithub } from "react-icons/si";

// Helper function to get contact icons
const getContactIcon = (type: string) => {
  switch (type) {
    case "email":
      return MdEmail;
    case "phone":
      return MdCall;
    case "website":
      return BiWorld;
    default:
      return MdEmail;
  }
};

// Helper function to get social icons
const getSocialIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "dribbble":
      return SiDribbble;
    case "linkedin":
      return SiLinkedin;
    case "facebook":
      return SiFacebook;
    case "instagram":
      return SiInstagram;
    case "github":
      return SiGithub;
    default:
      return SiGithub;
  }
};

const ContactBar = () => {
  const [contactBarData, setContactBarData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactBarData(data?.contactBar);
      } catch (error) {
        console.error("Error fetching contact bar:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="border-t border-softGray">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 md:py-7">
            
            {/* Contact Items */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 md:gap-5 lg:gap-11">
              {contactBarData?.contactItems?.map((value: any, index: number) => {
                const Icon = getContactIcon(value.type);
                return (
                  <Link
                    key={index}
                    href={value?.link}
                    className="flex items-center gap-2 lg:gap-4 text-sm md:text-base"
                  >
                    <Icon className="w-6 h-6 min-w-[24px] min-h-[24px]" />
                    <h6 className="text-sm md:text-base xl:text-xl hover:text-primary">
                      {value?.label}
                    </h6>
                  </Link>
                );
              })}
            </div>

            {/* Social Items */}
            <div className="flex items-center justify-center md:justify-end gap-4 md:gap-2.5">
              {contactBarData?.socialItems?.map((value: any, index: number) => {
                const Icon = getSocialIcon(value.platform);
                return (
                  <Link key={index} href={value?.link}>
                    <Icon className="w-8 h-8 hover:opacity-80" />
                  </Link>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;