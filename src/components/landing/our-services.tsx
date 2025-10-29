
import { Card } from "../ui/card";
import { ArrowRightIcon } from "lucide-react";

const ServiceData = [
    {
        title: "Teeth Whitening",
        description: "Enhance your smile with advanced whitening treatments for long-lasting results.",
        buttonText: "Read More",
    },
    {
        title: "Routine Checkup",
        description: "Maintain optimal oral health with regular checkups and preventive care.",
        buttonText: "Read More",
    },
    {
        title: "Dental Implants",
        description: "Replace missing teeth with high-quality implants for a natural and lasting solution.",
        buttonText: "Read More",
    },
    {
        title: "Orthodontic Braces",
        description: "Align your teeth perfectly with modern orthodontic treatments for all ages.",
        buttonText: "Read More",
    },
    {
        title: "Dental Crowns",
        description: "Protect and restore damaged teeth with durable and natural-looking crowns.",
        buttonText: "Read More",
    },
    {
        title: "Tooth Filling",
        description: "Fix cavities and restore teeth with high-quality, long-lasting fillings.",
        buttonText: "Read More",
    },
]


const OurServices = () => {
    return (
        <section className="relative w-full min-h-screen flex justify-center py-20 bg-[url('/our-services.png')] bg-cover bg-no-repeat overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[#5D807300] opacity-90"
                style={{
                    backgroundImage: `url("/service-bg.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            <div className="relative z-2 px-4 sm:px-6 md:px-10 lg:px-[88px] w-full max-w-[1440px] mx-auto">
                <div className="flex w-full flex-col items-center gap-12 sm:gap-16 md:gap-20">
                  {/* Header Section */}
                  <div className="flex w-full flex-col items-center gap-4 sm:gap-6">
                        <h6 className="text-black font-Montagu text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold leading-tight text-center">
                            Our <span className="text-[#4A9B8E]">Services</span>
                        </h6>
                        <div className="max-w-4xl">
                            <p className="text-black font-bold text-lg sm:text-xl md:text-2xl text-center leading-relaxed font-Poetsen">
                                Comprehensive Dental Solutions for a Healthier Smile
                            </p>
                            <p className="text-black font-normal text-base sm:text-lg md:text-xl text-center leading-relaxed mt-2 font-Poetsen">
                                We offer a range of professional dental services to keep your smile bright and healthy.
                            </p>
                        </div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full place-items-center">
                        {ServiceData.map((item, index) => (
                            <Card
                                key={index}
                                style={{
                                    boxShadow: "0 8px 32px rgba(6, 61, 56, 0.4)",
                                    backdropFilter: "blur(8px)",
                                }}
                                className="flex w-full max-w-[320px] sm:max-w-[360px] md:max-w-[380px] lg:max-w-none flex-col items-center justify-between gap-6 p-8 sm:p-10 bg-[#4A9B8E]/70 rounded-[40px] border border-white/30 min-h-[320px] hover:bg-[#4A9B8E]/80 transition-all duration-300"
                            >
                                <div className="flex flex-col items-center gap-4 flex-grow">
                                    <h6 className="text-white font-Montagu  text-2xl sm:text-3xl md:text-[28px] font-semibold leading-tight">
                                        {item.title}
                                    </h6>
                                    <p className="text-white/90 font-Poetsen text-base sm:text-lg leading-relaxed font-normal">
                                        {item.description}
                                    </p>
                                </div>
                                <button className="w-full flex items-center justify-end gap-2 text-white font-Lancelot text-lg sm:text-xl md:text-[22px] font-normal leading-normal hover:gap-3 transition-all duration-300 group">
                                    {item.buttonText}
                                    <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;