import Header from "../ui/header";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[560px] h-[100svh] flex flex-col items-stretch bg-[url('/treatments-bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden">

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
        <div className="w-full max-w-[850px] px-0 sm:pl-4 md:pl-8 text-center lg:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[64px] font-Montagu font-bold text-black leading-normal md:leading-relaxed lg:leading-normal mb-3 sm:mb-4 md:mb-6">
            Book your <br /> <span className="text-white">Appointment</span> {""}of Dental <br /> Care
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
