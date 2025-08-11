import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2025 - Present",
            title: "PHP Developer",
            company: "Web2Web",
            type: "Full-time, On-site",
            description: "Building and maintaining dynamic web applications using PHP and Laravel. Collaborating with teams to deliver secure, scalable, and high-performance solutions, focusing on frontend and backend logic, API integrations, and code optimization."
        },
        {
            year: "2024 - 2024",
            title: "Digital Marketing Specialist & IT Head",
            company: "Cape Archives Tours",
            type: "Full-time, On-site",
            description: "Led data-driven marketing campaigns on Google Ads and Facebook Ads, optimized ROI with A/B testing, and implemented SEO strategies. Managed IT infrastructure to ensure seamless website performance, enhanced security, and system integration."
        },
        {
            year: "2022 - 2023",
            title: "Performance Specialist & JavaScript Developer",
            company: "Signet Infosoft",
            type: "Full-time, On-site",
            description: "Executed multi-platform digital marketing campaigns, analyzed performance metrics, and developed user-friendly web applications using JavaScript. Integrated SEO best practices to improve digital presence and engagement."
        },
        {
            year: "2020 - 2021",
            title: "Software Developer & Performance Specialist (Internship)",
            company: "Quarks Systems",
            type: "Remote",
            description: "Designed and developed full-stack web and software applications, focusing on UI/UX, database management, and project collaboration to deliver robust and customized digital solutions."
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