
const Hero = () => {
  return (
    <section className="relative w-full min-h-[500px] h-screen flex items-center bg-[#0D1323] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[#1E293BB2] opacity-20" 
           style={{
             backgroundImage: `url("/hero.png")`,
             backgroundSize: "cover",
             backgroundPosition: "center",
           }}
      />
      <div className="px-4 sm:px-6 md:px-10 lg:px-[88px] w-full max-w-[1440px] mx-auto">
        <div className="w-full max-w-[320px] sm:max-w-[350px] md:max-w-[390px] px-0 sm:px-4 md:pl-8 mx-auto text-center lg:text-left lg:mx-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-Inter font-medium text-white leading-normal md:leading-relaxed lg:leading-[50px] mb-3 sm:mb-4 md:mb-6">
            Comprehensive Zero Trust Services
          </h1>
          
        </div>
        <p className="text-xs sm:text-sm md:text-[14px] w-full max-w-full sm:max-w-[400px] md:max-w-[560px] px-0 sm:px-4 md:pl-8 font-medium font-Inter leading-normal sm:leading-6 text-[#FDED1B] mb-5 sm:mb-6 md:mb-8 mx-auto lg:mx-0 text-center lg:text-left">
          From assessment to implementation, we help you build a secure and resilient infrastructure aligned with modern Zero Trust principles.
        </p>
      </div>
    </section>
  );
};

export default Hero;
