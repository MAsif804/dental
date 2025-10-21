
const AboutUs = () => {
    return (
        <section className="flex w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[88px] py-8 sm:py-10 md:py-[60px] justify-center items-center bg-[#1A2236]">
            <div className="flex w-full flex-col items-start gap-3 sm:gap-4 md:gap-[15px]">
                <h6 className="text-[#FDED1B] font-Inter text-2xl sm:text-3xl md:text-[30px] font-semibold leading-normal sm:leading-tight md:leading-[24px]">
                    About Us
                </h6>
                <p className="text-[#F4F4F5] font-Inter text-base sm:text-lg md:text-xl lg:text-[22px] text-left sm:text-start leading-relaxed sm:leading-[25px] font-normal">
                    Firefly Security is dedicated to strengthening your cybersecurity posture by evolving your existing security strategy into a Zero Trust Architecture. We leverage industry-leading best practices to assess your current environment and guide the improvements necessary to achieve true Zero Trust alignment. Our team of seasoned cybersecurity and technology experts collaborates closely with your engineers and leadership to conduct in-depth assessments, ensuring the development of a practical, actionable implementation roadmap tailored to your organization.
                </p>
            </div>
        </section>
    );
};

export default AboutUs;