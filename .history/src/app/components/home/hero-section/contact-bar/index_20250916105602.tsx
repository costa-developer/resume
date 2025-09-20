"use client";
import { useEffect, useState } from "react";
import contactBarDefault from "@/app/data/contactBar";

const ContactBar = () => {
  const [contactBarData, setContactBarData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactBarData(data?.contactBar || contactBarDefault);
      } catch (error) {
        console.error("Error fetching contact bar:", error);
        setContactBarData(contactBarDefault); // fallback
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
              {contactBarData?.contactItems?.map((item: any, index: number) => {
                const Icon = item.icon; // React Icon component
                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 lg:gap-4 text-sm md:text-base hover:text-primary"
                  >
                    <Icon size={24} /> {/* React Icon */}
                    <h6 className="text-sm md:text-base xl:text-xl">{item.label}</h6>
                  </a>
                );
              })}
            </div>

            {/* Social Items */}
            <div className="flex items-center justify-center md:justify-end gap-4 md:gap-2.5">
              {contactBarData?.socialItems?.map((item: any, index: number) => {
                const Icon = item.icon; // React Icon component
                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80"
                  >
                    <Icon size={30} />
                  </a>
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
