


const Executive = () => {
    return (
        <section className="flex w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[88px] py-6 sm:py-8 md:py-[35px] justify-center items-center bg-[#171F31]">
            <div className="flex w-full flex-col items-start gap-6 sm:gap-8 md:gap-[45px]">
                <h6 className="text-[#FDED1B] font-Inter text-xl sm:text-2xl md:text-[27px] font-medium leading-normal sm:leading-tight md:leading-[25px] text-center md:text-left w-full">
                    Executive Order (EO) 1408 May 12, 2021
                </h6>
                <img 
                    src="/resources-2.png" 
                    alt="Executive Order 14028 infographic" 
                    className="w-full h-auto object-contain rounded-lg shadow-lg"
                    loading="lazy"
                />
            </div>
        </section>
    );
};
export default Executive;
