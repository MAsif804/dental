
import { Card } from "@/components/ui/card";
// const tenants = [
//   {
//     id: 1,
//     title: "Why Choose Us?",
//     description: "We stand out because of our commitment to excellence, customer-first approach, and dedication to continuous improvement.Our team works tirelessly to ensure you receive the best products/services possible.",
//     image: "/about-1.svg",

//   },
//   {
//     id: 2,
//     title: "Our Mission",
//     description: "To deliver innovative solutions that improve lives and contribute to a better future.",
//     image: "/about-2.svg",
//   },
//   {
//     id: 3,
//     title: "Our Vision",
//     description: "To be a trusted leader in our industry, known for excellence, innovation, and customer satisfaction.",
//     image: "/about-3.svg",
//   },
//   {
//     id: 4,
//     title: "Who We Are",
//     description: "To deliver innovative solutions that improve lives and contribute to a better future.",
//     image: "/about-4.svg",
//   },
//   {
//     id: 5,
//     title: "Our Story",
//     description: "Founded in [Year], we started with a simple idea: to make a difference in Industry/Niche]. Over the years, we have grown and evolved, always staying true to our core principles.",
//     image: "/about-5.svg",
//   },
//   {
//     id: 6,
//     title: "Our Values",
//     description: "Integrity – We believe in honesty and transparency.  Quality – Excellence is at the core of everything we do.  Customer Focus – Your satisfaction is our priority. Innovation – We embrace creativity and continuous improvement. Sustainability – We strive for a positive impact on the environment and society.",
//     image: "/about-6.svg",
//   }
// ]



const AboutUs = () => {
  return (
    <section className="relative w-full px-4 sm:px-6 md:px-10 lg:px-[88px] py-10 sm:py-12 md:py-[60px] flex justify-center bg-[url('/about.png')] bg-cover bg-center bg-no-repeat">
      {/* Subtle overlay for legibility */}
      <div className="absolute inset-0 bg-white/5" />
      <div className="relative z-10 max-w-[1440px] mx-auto">
        <div className="flex w-full flex-col items-center gap-6 sm:gap-8 md:gap-[37px]">
          <div className="flex w-full flex-col items-center gap-3 sm:gap-[15px]">
            <h6 className="text-black font-Montagu text-2xl sm:text-3xl md:text-[48px] lg:text-[64px] font-semibold leading-tight text-center">
              About Us
            </h6>
            {/* <p className="text-white font-Inter text-base sm:text-lg md:text-xl lg:text-[22px] text-center leading-relaxed sm:leading-[25px] font-normal px-2 sm:px-4 md:px-8 lg:px-16">
            Zero Trust assumes breach is inevitable, focuses on least-privileged access, granular risk-based access control, security automation, real-time monitoring
          </p> */}
          </div>
          <div className="flex flex-col w-full items-center justify-center gap-4 sm:gap-5 md:gap-[25px]">
            {/* card-1 */}
            <Card className="flex w-full max-w-[720px] flex-col px-4 sm:px-8 md:px-[64px] py-6 sm:py-8 items-center gap-3 sm:gap-[12px] rounded-[20px] border-none bg-[#FFFFFFC4] m-2">
              <img src="./about-1.svg" alt={` icon`} className="w-10 h-10 sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px]" />
              <h6 className="text-[#000] font-Montagu text-base sm:text-xl md:text-[26px] font-semibold">
                Why Choose Us?
              </h6>
              <p className="text-[#000] text-left sm:text-center font-Poetsen text-sm sm:text-base md:text-[20px] leading-relaxed font-normal">
                We stand out because of our commitment to excellence, customer-first approach,
                <br />
                and dedication to continuous improvement.
                <br />
                Our team works tirelessly to ensure you receive the best products/services possible.
              </p>
            </Card>
            {/* card-2 & card-3 */}
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Card className="flex w-full flex-col px-4 sm:px-6 md:px-[46px] py-6 items-center gap-3 sm:gap-[12px] rounded-[20px] border-none bg-[#FFFFFFC4] ">
                <img src="./about-2.svg" alt={` icon`} className="w-10 h-10 sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px]" />
                <h6 className="text-[#000] font-Montagu text-base sm:text-xl md:text-[26px] font-semibold">
                  Our Mission
                </h6>
                <p className="text-[#000] text-left sm:text-center font-Poetsen text-sm sm:text-base md:text-[18px] leading-relaxed font-normal">
                  To deliver innovative solutions that improve lives and contribute to a better future.
                </p>
              </Card>
              <Card className="flex w-full flex-col px-4 sm:px-6 md:px-[46px] py-6 items-center gap-3 sm:gap-[12px] rounded-[20px] border-none bg-[#FFFFFFC4] ">
                <img src="./about-3.svg" alt={` icon`} className="w-10 h-10 sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px]" />
                <h6 className="text-[#000] font-Montagu text-base sm:text-xl md:text-[26px] font-semibold">
                  Our Vision
                </h6>
                <p className="text-[#000] text-left sm:text-center font-Poetsen text-sm sm:text-base md:text-[18px] leading-relaxed font-normal">
                  To be a trusted leader in our industry,known for excellence, innovation, and customer satisfaction.
                </p>
              </Card>

            </div>
            {/* card-4 & card-5 */}
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6" >
              <Card className="flex w-full flex-col px-4 sm:px-6 md:px-[46px] py-6 items-center gap-3 sm:gap-[12px] rounded-[20px] border-none bg-[#FFFFFFC4] ">
                <img src="./about-4.svg" alt={` icon`} className="w-10 h-10 sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px]" />
                <h6 className="text-[#000] font-Montagu text-base sm:text-xl md:text-[26px] font-semibold">
                  Who We Are
                </h6>
                <p className="text-[#000] text-left sm:text-center font-Poetsen text-sm sm:text-base md:text-[18px] leading-relaxed font-normal">
                  To deliver innovative solutions that improve lives and contribute to a better future.
                </p>
              </Card>
              <Card className="flex w-full flex-col px-4 sm:px-6 md:px-[46px] py-6 items-center gap-3 sm:gap-[12px] rounded-[20px] border-none bg-[#FFFFFFC4] ">
                <img src="./about-5.svg" alt={` icon`} className="w-10 h-10 sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px]" />
                <h6 className="text-[#000] font-Montagu text-base sm:text-xl md:text-[26px] font-semibold">
                  Who We Serve
                </h6>
                <p className="text-[#000] text-left sm:text-center font-Poetsen text-sm sm:text-base md:text-[18px] leading-relaxed font-normal">
                  Founded in [Year], we started with a simple idea:
                  <br />
                  to make a difference in Industry/Niche].
                  <br />
                  Over the years, we have grown and evolved,
                  <br />
                  always staying true to our core principles.
                </p>
              </Card>

            </div>
            {/* card-6 */}
            <Card className="flex w-full max-w-[720px] flex-col px-4 sm:px-8 md:px-[64px] py-6 sm:py-8 items-center gap-3 sm:gap-[12px] rounded-[20px] border-none bg-[#FFFFFFC4] m-2">
              <img src="./about-6.svg" alt={` icon`} className="w-10 h-10 sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px]" />
              <h6 className="text-[#000] font-Montagu text-base sm:text-xl md:text-[26px] font-semibold">
                Our Values
              </h6>
              <p className="text-[#000] text-left sm:text-center font-Poetsen text-sm sm:text-base md:text-[18px] leading-relaxed font-normal">
                Integrity – We believe in honesty and transparency.  Quality – Excellence is at the core of everything we do.  Customer Focus – Your satisfaction is our priority. Innovation – We embrace creativity and continuous improvement. Sustainability – We strive for a positive impact on the environment and society.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
