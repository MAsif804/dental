import { Card, CardContent } from "../ui/card";
const CardTitle = [
  {
    id: 1,
    title: "Transparent Pricing",
    description: "No unexpected costs — every step is clearly explained",
    imag: "/profile.svg"
  },
  {
    id: 2,
    title: "All-Inclusive Services",
    description: "From diagnostics to final placement, everything is included",
    imag: "/appointment.svg"
  },
  {
    id: 3,
    title: "Experienced Specialists",
    description: "Highly skilled dentists using modern equipment and techniques",
    imag: "/vector.svg"
  },
  {
    id: 4,
    title: "Personalized Treatment Plans",
    description: "Packages adapted to your smile goals and oral health needs.",
    imag: "/cardiology.svg"
  },
]
const WhyChoose = () => {
  return (
    <section
      className="relative w-full min-h-[560px] px-4 sm:px-6  lg:px-[88px] py-10 sm:py-12 md:py-[42px] md:px-[40px] flex items-center justify-center"
    >
      {/* Subtle overlay to keep text readable across images */}
      <div className="absolute inset-0 bg-white/10" />
      <div className="relative z-10 max-w-[1440px] w-full mx-auto">
        <div className="flex w-full flex-col items-center gap-5 sm:gap-6 md:gap-[40px]">
          <h6 className="text-black font-Montagu text-2xl sm:text-3xl md:text-[48px] lg:text-[64px] font-semibold leading-snug text-center w-full">
            Why Choose Us? <span className="text-[#036E64]">Dental Packages?</span>
          </h6>
          <p className="text-black font-Poetsen text-sm sm:text-base md:text-[20px] text-center leading-relaxed sm:leading-[25px] font-normal w-full max-w-[900px]">
            Each package is thoughtfully curated to provide complete dental solutions with no hidden fees. From expert consultations to final restorations, we ensure a comfortable and smooth treatment experience.
          </p>
          <div className="grid w-full grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 md:gap-[40px] place-items-center">
            {CardTitle.map((item) => (
              <Card
                key={item.id}
                style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
                className="bg-[#6EAAA7]/90 flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 w-full max-w-[340px] sm:max-w-[360px] md:max-w-[250px] p-6 sm:p-8 border-none rounded-[24px] backdrop-blur-[2px]"
              >
                <CardContent className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 p-0">
                  <img
                    src={item.imag}
                    alt={item.title}
                    className="mt-2 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24"
                  />
                  <p className="text-black font-Montagu text-base sm:text-lg md:text-[26px] text-center leading-relaxed font-semibold">
                    {item.title}
                  </p>
                  <p className="text-black/90 font-Poetsen text-sm sm:text-base md:text-[18px] text-center leading-relaxed sm:leading-[25px] font-normal">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
