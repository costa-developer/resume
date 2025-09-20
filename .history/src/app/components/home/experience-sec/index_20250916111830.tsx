import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "May 2025 - Present",
            title: "PHP Developer",
            company: "Web2Web",
            type: "Full-time, On-site",
            description: "Building custom software solutions and managing backend development with PHP and Laravel. Optimize databases, ensure secure and scalable systems, and collaborate with teams to deliver robust digital solutions."
        },
        {
            year: "Jan 2024 - Dec 2024",
            title: "Web Developer",
            company: "Cape Archives Tours",
            type: "Full-time, On-site",
            description: "Developed and optimized websites and marketing landing pages with a strong focus on SEO and user experience. Integrated IT systems to ensure smooth workflows between departments, while supporting marketing initiatives and driving online visibility."
        },
        {
            year: "Jan 2022 - Nov 2023",
            title: "Web Developer",
            company: "Signet Infosoft",
            type: "Full-time, On-site",
            description: "Designed and developed web software, mobile applications, and client websites with a focus on performance and user experience. Built marketing landing pages, implemented SEO strategies, and managed PPC campaigns to boost visibility, traffic, and conversions. Collaborated across teams to deliver digital solutions tailored to client needs."
        },
        {
            year: "Jan 2021 - Dec 2021",
            title: "Software Developer",
            company: "Quarks Systems",
            type: "Remote",
            description: "Developed web software, mobile applications, and responsive websites tailored to client requirements. Built and optimized marketing landing pages, integrating SEO best practices to improve visibility and engagement. Contributed to end-to-end development workflows, ensuring high-quality and scalable digital solutions."
        }
    ];
    

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;