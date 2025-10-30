import Header from "../ui/header";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[560px] h-[100svh] flex flex-col items-stretch bg-[url('/treatments-bg.jpg')] bg-cover bg-no-repeat bg-center overflow-hidden">

      {/* Background pattern */}
      <div className="absolute inset-0  bg-[#5D807300] opacity-90"
        style={{
          backgroundImage: `url("/treatment-bg-1.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-800/70 via-teal-700/40 to-transparent pointer-events-none" />
      <Header />
      <div className="relative z-10 w-full h-full px-4 sm:px-6 md:px-10 lg:px-[88px] max-w-[1440px] mx-auto flex items-center justify-center lg:justify-start">
        <div className="w-full max-w-[700px] px-0 sm:pl-4 md:pl-8 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[64px] font-Montagu font-bold text-black leading-tight md:leading-relaxed lg:leading-normal mb-3 sm:mb-4 md:mb-6">
            Healthy <span className="text-white">Smiles</span>,
            <br />
             <span className="text-white">Lasting</span> Confidence
          </h1>
          {/* <p className="text-xs sm:text-sm md:text-[20px] font-normal font-Poetsen leading-normal sm:leading-6 text-black mb-5 sm:mb-6 md:mb-8">
            A confident smile can change your life—
            <br />
            let us help you achieve it with expert dental care.
          </p>
          <Button
            className="bg-white hover:bg-[#F0F0F0] text-[#0D1323] text-base sm:text-lg font-medium px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 rounded-[20px] sm:rounded-[20px] border border-[#000]"
          >
            <span className="font-Langar text-[#171F31] text-sm sm:text-base md:text-[16px] font-medium leading-normal sm:leading-loose md:leading-[50px]"> Schedule Your Appointment Today</span> <Diamond className="ml-1 text-[#2F88FF] fill-[#2F88FF] sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 aspect-square" />
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
