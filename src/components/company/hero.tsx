
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
        <div className="flex w-full flex-col px-4 sm:px-6 md:px-10 lg:px-[130px] py-8 sm:py-10 md:py-[60px] justify-center items-center gap-3 sm:gap-4 md:gap-[20px]">
           <h6 className="text-[#FDED1B] font-Inter text-base sm:text-lg md:text-[18px] font-normal leading-normal sm:leading-[20px]">
          Who We Are at Firefly Security
           </h6>
        <p className="text-[#FFFFFF] w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-[850px] text-center font-Inter text-xl sm:text-3xl md:text-4xl lg:text-[47px] font-semibold leading-tight sm:leading-snug md:leading-normal lg:leading-[55px] px-2">
          Driving secure digital transformation through Zero Trust expertise and a mission-led approach.
           </p>
        </div>
    </section>
  );
};

export default Hero;
