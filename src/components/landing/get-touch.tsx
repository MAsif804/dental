export default function GetTouch() {
    return (
        <section className="flex w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[88px] py-8 sm:py-[35px] gap-6 sm:gap-[35px] flex-col items-center bg-[#27324D]">
            <h2 className="text-[#FDED1B] text-center font-Inter text-2xl sm:text-3xl md:text-[35px] font-bold leading-normal sm:leading-[21px]">Get In touch</h2>
            <p className="text-[#CACACA] w-full max-w-[340px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[800px] text-center font-Inter text-base sm:text-lg md:text-[18px] font-normal leading-relaxed sm:leading-[23px]">
                For more information on implementing Zero Trust architecture, contact our cybersecurity team at{' '}
                <span className="text-[#FDED1B] underline cursor-pointer inline-block">info@Firefly-Security.com</span>
            </p>
        </section>
    );
}