import Image from "next/image"

const index = () => {
    return (
        <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
            <div className="container">
                <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
                    <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
                        <div>
                            <div className="flex items-center gap-8">
                                <h1>Hi, I'm Tendai </h1>
                                <div className="wave">
                                <Image src={"/images/home/banner/wave-icon.svg"} alt="wave-icon" width={62} height={62} className=""/>
                                </div>
                            </div>
                        </div>
                        <p className="text-secondary font-normal max-w-md xl:max-w-xl">
                        🌐 <strong>Web Developer | JavaScript & PHP | Python & AI/ML</strong>
                        {/* 🚀 Building smart, scalable web solutions with modern technologies.<br />
                        🤖 Exploring the intersection of code and intelligence through AI & Machine Learning. */}
                        <br />

                        💻 <strong>Open Source Contributor</strong><br />
                        🔧 Giving back to the developer community and helping build better tools.<br /><br />

                        🌍 <strong>Adventurer & Philosopher</strong><br />
                        🧠 Curious about the world, driven by ideas, always exploring new perspectives.<br /><br />

                        💼 <strong>Strategic Technologist</strong><br />
                        📈 Leveraging coding expertise to solve real-world problems with precision and purpose.
                        </p>

                    </div>
                    <Image src={"/images/home/banner/banner-img.jpg"} alt="banner-img" width={685} height={650} className="block lg:hidden" />
                </div>
            </div>
            <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
                <Image src={"/images/home/banner/banner-img.jpg"} alt="banner-img" width={685} height={650} className=" absolute right-0 top-0 z-1" />
            </div>
        </section>
    )
}

export default index