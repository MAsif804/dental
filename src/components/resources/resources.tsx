const Resources = () => {
    return (
        <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[88px] py-6 sm:py-8 md:py-[35px] bg-[#171F31]">
            <div className="w-full flex flex-col items-start gap-6 sm:gap-8 md:gap-[45px]">
                <h6 className="text-[#FDED1B] text-left font-Inter text-xl sm:text-2xl md:text-[27px] font-medium leading-tight sm:leading-tight md:leading-[25px]">
                    Resources
                </h6>
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="w-full max-w-full overflow-hidden">
                        <img
                            src="/resources-3.png"
                            alt="Resources illustration"
                            className="w-full h-auto max-w-[826px] mx-auto"
                        />
                    </div>
                    <p className="text-[#FDED1B] text-center sm:text-left font-Inter text-base sm:text-lg md:text-[18px] font-normal leading-normal mt-3 sm:mt-4 px-2 sm:px-0">
                        The DoD Zero Trust Strategy is part of a family of strategies
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Resources;