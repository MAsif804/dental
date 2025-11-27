
import { CheckIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";
const CardTitle = [
  {
    id: 1,
    title: "ALL ON 4 per jaw",
    price: "£1600",
    day: "6 working days",
    description:
      "The All-on-4 treatment concept is a cost-efficient, graft-less solution that provides patients with a fixed full-arch prosthesis on the week of surgery",
    subtitle: "PACKAGE DETAILS",
    subpoint: [
      "4 Straumann Neodent Dental Implants (Switzerland Brand)",
      "12 Temporary Teeth (Fixed Denture)",
      "Free Transfer (Airport, hotel, clinic)",
      "Hotel Stay",
      "Mouth Guard",
      "Consultation",
      "3D Dental tomography & Panoramic; X-Ray",
      "Local Anesthetics",
      "Anti-biotics, Pain killers, mouth wash etc.",
      "Laboratory Fees",
      "The Dentist’s Time & Work",
      "Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.",
    ],
  },
  {
    id: 2,
    title: "ALL ON 6 per jaw",
    price:"£2400",
    day: "4-5 working days",
    description:
      "The All-on-6 treatment concept is a cost-efficient, graft-less solution that provides patients with a fixed full-arch prosthesis on the week of surgery",
    subtitle: "PACKAGE DETAILS",
     subpoint: [
      "4 Straumann Neodent Dental Implants (Switzerland Brand)",
      "12 Temporary Teeth (Fixed Denture)",
      "Free Transfer (Airport, hotel, clinic)",
      "Hotel Stay",
      "Mouth Guard",
      "Consultation",
      "3D Dental tomography & Panoramic; X-Ray",
      "Local Anesthetics",
      "Anti-biotics, Pain killers, mouth wash etc.",
      "Laboratory Fees",
      "The Dentist’s Time & Work",
      "Requires 2 visits, each visit takes 6-7 days within 3 to 6 months’ time scale.",
    ],
  },
];
const ImplantPackage = () => {
  return (
    <section className="relative w-full min-h-[560px] px-4 sm:px-6  lg:px-[88px] py-10 sm:py-12 md:py-[42px] md:px-[40px] flex items-center justify-center">
      {/* Subtle overlay to keep text readable across images */}
      <div className="absolute inset-0 bg-white/10" />
      <div className="relative z-10 max-w-[1440px] w-full mx-auto">
        <div className="flex w-full flex-col items-center gap-5 sm:gap-6 md:gap-[40px]">
          <h6 className="text-black font-Montagu text-2xl sm:text-3xl md:text-[48px] lg:text-[64px] font-semibold leading-snug text-center w-full">
            <span className="text-[#036E64]">Implant</span> packages
          </h6>
          <p className="text-black font-Poetsen text-sm sm:text-base md:text-[20px] text-center leading-relaxed sm:leading-[25px] font-normal w-full max-w-[900px]">
            The dental implant package includes the chosen type of implant installation procedure, such as All-on-4, hotel accommodation and transfers.Dental implants are installed to replace severely damaged dentition and can help stop bone loss. They are the best type of restoration if you have missing teeth. The average cost of a dental implant package is <span className="text-[#036E64]"> £1900</span>
          </p>
          <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-[40px] place-items-center">
            {CardTitle.map((item) => (
              <Card
                key={item.id}
                style={{ boxShadow: "0 0 10px 0 rgba(3, 110, 100, 0.60)" }}
                className="bg-none border-[2px] border-[#036E64] flex flex-col items-start  gap-3 sm:gap-4 md:gap-6 w-full max-w-[340px] sm:max-w-[360px] md:max-w-[380px] md:h-[786px] p-6 sm:p-5 border-none rounded-[20px] backdrop-blur-[2px]"
              >
                <CardContent className="flex flex-col items-start  gap-3 sm:gap-4 md:gap-[12px] p-0">
                  <div className="flex flex-col items-center gap-[8px]">
                    <h2 className="text-black font-Montagu text-base sm:text-lg md:text-[26px] text-center leading-relaxed font-semibold">
                      {item.title}
                    </h2>
                    <p className="text-[#036E64] font-Montagu text-base sm:text-lg md:text-[28px] text-center leading-relaxed font-bold">
                      {item.price}
                    </p>
                    <p className="text-[#036E64] font-Montagu text-base sm:text-lg md:text-[18px] text-center leading-relaxed font-normal">
                      {item.day}
                    </p>
                    <p className="text-black/90 font-Poetsen text-sm sm:text-base md:text-[14px] text-center leading-relaxed sm:leading-[25px] font-normal">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <h2 className="text-black font-Montagu text-base sm:text-lg md:text-[18px] text-center leading-relaxed font-bold">
                      {item.subtitle}
                    </h2>
                    <div className="flex flex-col items-start gap-3 sm:gap-4 md:gap-[8px] p-0">
                      {item.subpoint.map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-center gap-2"
                        >
                            <CheckIcon className="size-[28px] aspect-square text-[#036E64]"/>
                          <p
                            className="text-black/90 font-Poetsen text-sm sm:text-base md:text-[10px] text-center leading-relaxed sm:leading-[25px] font-normal"
                          >
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplantPackage;

