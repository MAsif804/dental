import { Button } from "@/components/ui/button";
import { Diamond } from "lucide-react";
import Header from "../ui/header";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[560px] h-[100svh] flex flex-col items-stretch bg-[url('/hero-image.png')] bg-cover bg-center bg-no-repeat overflow-hidden">

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url('/bg-hero.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Gradient overlay to improve legibility on all screens */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-700/70 via-teal-600/40 to-transparent" />
      <Header />
      {/* Content container: vertically center and align left on large screens */}
      <div className="relative z-10 w-full h-full px-4 sm:px-6 md:px-10 lg:px-[88px] max-w-[1440px] mx-auto flex items-center justify-center lg:justify-start">
        <div className="w-full max-w-[650px] px-0 sm:pl-4 md:pl-8 text-center lg:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[64px] font-Montagu font-bold text-black leading-normal md:leading-relaxed lg:leading-normal mb-3 sm:mb-4 md:mb-6">
            Brighter Smiles,
            Healthier Lives
          </h1>
          <p className="text-xs sm:text-sm md:text-[20px] font-normal font-Poetsen leading-normal sm:leading-6 text-black mb-5 sm:mb-6 md:mb-8">
            A confident smile can change your life—
            <br />
            let us help you achieve it with expert dental care.
          </p>
          <Button
            className="bg-white hover:bg-[#F0F0F0] text-[#0D1323] text-base sm:text-lg font-medium px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 rounded-[20px] sm:rounded-[20px] border border-[#000]"
          >
            <span className="font-Langar text-[#171F31] text-sm sm:text-base md:text-[16px] font-medium leading-normal sm:leading-loose md:leading-[50px]"> Schedule Your Appointment Today</span> <Diamond className="ml-1 text-[#2F88FF] fill-[#2F88FF] sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 aspect-square" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
