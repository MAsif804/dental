
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
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-[88px]">
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:w-[560px] px-2 sm:pl-4 md:pl-8 mx-auto text-center lg:text-left lg:mx-0">
          <h1 className="text-xl sm:text-2xl md:text-[24px] lg:text-[40px] font-Inter font-medium text-white leading-normal sm:leading-relaxed md:leading-[50px] mb-4 sm:mb-6">
            Cybersecurity Resources, Insights & Tools
          </h1>
          
        </div>
        <p className="text-xs sm:text-sm md:text-[14px] w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[700px] px-2 sm:pl-4 md:pl-8 font-medium font-Inter leading-normal sm:leading-6 text-[#FDED1B] mb-4 sm:mb-6 md:mb-8 mx-auto lg:mx-0">
          Stay ahead of evolving cyber threats with our curated library of Zero Trust guides, whitepapers, case studies, and expert insights designed to strengthen your digital defense.
        </p>
      </div>
    </section>
  );
};

export default Hero;
