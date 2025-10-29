import { Card, CardContent } from "../ui/card";
const CardTitle = [
  {
    id: 1,
    title: "Experienced Dentists",
    description: "Providing top-notch dental care with expertise.",
    imag: "/profile.svg"
  },
  {
    id: 2,
    title: "Convenient Appointments ",
    description: " Flexible scheduling to fit your busy life.",
    imag: "/appointment.svg"
  },
  {
    id: 3,
    title: "Personalized Treatments",
    description: " Tailored solutions for your dental needs.",
    imag: "/vector.svg"
  }
]
const WhyChoose = () => {
  return (
    <section
      className="relative w-full min-h-[560px] px-4 sm:px-6 md:px-10 lg:px-[88px] py-10 sm:py-12 md:py-[42px] flex items-center justify-center bg-[url('/why-choose.jpg')] bg-cover bg-center bg-no-repeat"
    >
      {/* Subtle overlay to keep text readable across images */}
      <div className="absolute inset-0 bg-white/10" />
      <div className="relative z-10 max-w-[1440px] w-full mx-auto">
        <div className="flex w-full flex-col items-center gap-5 sm:gap-6 md:gap-[40px]">
          <h6 className="text-black font-Montagu text-2xl sm:text-3xl md:text-[48px] lg:text-[64px] font-semibold leading-snug text-center w-full">
            Why <span className="text-[#036E64]">Choose</span> Us?
          </h6>
          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-[40px] place-items-center">
            {CardTitle.map((item) => (
              <Card
                key={item.id}
                style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
                className="bg-[#6EAAA7]/90 flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 w-full max-w-[340px] sm:max-w-[360px] md:max-w-[380px] p-6 sm:p-8 border-none rounded-[24px] backdrop-blur-[2px]"
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
