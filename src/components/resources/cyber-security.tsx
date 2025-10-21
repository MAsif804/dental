

const CyberSecurity = () => {
    return (
        <section className="flex w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[88px] py-8 sm:py-10 md:py-[60px] justify-center items-center bg-[#171F31]">
            <div className="flex w-full flex-col md:flex-row items-center justify-between gap-8 md:gap-6 lg:gap-10">
                <div className="flex w-full md:w-1/2 flex-col items-start gap-5 sm:gap-6 md:gap-[25px]">
                    <h6 className="text-[#FDED1B] font-Inter text-xl sm:text-2xl md:text-[27px] font-medium leading-normal sm:leading-tight md:leading-[25px]">
                        What is the purpose of Cyber Security?
                    </h6>
                    <p className="text-[#ffffff] font-Inter text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[22px] font-normal">
                        The main purpose of Cyber Security is to protect data. Previous versions of cybersecurity Frameworks focused on users. strong complex passwords, rotate every 30 days MFA build strong parameters to keep unauthorized users out.
                    </p>
                    <h6 className="text-[#FDED1B] font-Inter text-xl sm:text-2xl md:text-[27px] font-medium leading-normal sm:leading-tight md:leading-[25px]">
                        Zero Trust - The focus in the data
                    </h6>
                    <p className="text-[#ffffff] font-Inter text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[22px] font-normal">
                        This shift in philosophy ia a significant change for the cyber security approach and represents a major cultural change throughout the DoD Cybersecurity system.
                    </p>
                </div>
                <img src="/resources-1.png" alt="Cybersecurity illustration" className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[402px] h-auto object-contain" />
            </div>
        </section>
    );
};
export default CyberSecurity;