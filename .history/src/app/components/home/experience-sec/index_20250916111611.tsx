import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2025 - Present",
            title: "PHP Developer",
            company: "Web2Web",
            type: "Full-time, On-site",
            description: "Building custom software solutions and managing backend development with PHP and Laravel. Optimize databases, ensure secure and scalable systems, and collaborate with teams to deliver robust digital solutions."
        },
        {
            year: "2024",
            title: "IT Head & Software Developer",
            company: "Cape Archives Tours",
            type: "Full-time, On-site",
            description: "Developed and optimized websites and marketing landing pages with a strong focus on SEO and user experience. Integrated IT systems to ensure smooth workflows between departments, while supporting marketing initiatives and driving online visibility."
        },
        {
            year: "2022 - 2023",
            title: "JavaScript Developer",
            company: "Signet Infosoft",
            type: "Full-time, On-site",
            description: "Developed dynamic, user-friendly web applications using JavaScript frameworks. Worked on frontend and backend integration, improved site performance, and implemented best coding practices."
        },
        {
            year: "2020 - 2021",
            title: "Software Developer (Internship)",
            company: "Quarks Systems",
            type: "Remote",
            description: "Designed and developed full-stack web and software applications. Focused on UI/UX, database management, and collaborating with clients to deliver customized digital solutions."
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