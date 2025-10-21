
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
    <section className="flex w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-[88px] py-8 sm:py-10 md:py-[60px] justify-center items-center bg-[url('/about.png')] bg-cover bg-no-repeat overflow-auto">
      <div className="flex w-full flex-col items-start gap-6 sm:gap-8 md:gap-[37px]">
        <div className="flex w-full flex-col items-center gap-3 sm:gap-[15px]">
          <h6 className="text-black font-Montagu text-2xl sm:text-3xl md:text-[64px] font-semibold leading-normal sm:leading-normal text-center">
            About Us
          </h6>
          {/* <p className="text-white font-Inter text-base sm:text-lg md:text-xl lg:text-[22px] text-center leading-relaxed sm:leading-[25px] font-normal px-2 sm:px-4 md:px-8 lg:px-16">
            Zero Trust assumes breach is inevitable, focuses on least-privileged access, granular risk-based access control, security automation, real-time monitoring
          </p> */}
        </div>
        <div className="flex flex-col w-full items-center justify-center gap-4 sm:gap-5 md:gap-[25px] flex-wrap">
          {/* card-1 */}
          <Card className="flex w-full flex-col px-4 lg:px-[256px] lg:py-[36px] items-center gap-3 sm:gap-[12px] rounded-[20px] border border-none bg-[#FFFFFFC4] m-2">
            <img src="./about-1.svg" alt={` icon`} className="w-[20px] h-[20px] sm:w-[80px] sm:h-[80px] aspect-square" />
            <h6 className="text-[#000] font-Montagu text-sm sm:text-[26px] font-semibold leading-tight sm:leading-normal">
              Why Choose Us?
            </h6>
            <p className="text-[#000] text-left sm:text-center font-Poetsen text-[20px] leading-[18px] sm:leading-normal font-normal">
              We stand out because of our commitment to excellence, customer-first approach,
              <br />
              and dedication to continuous improvement.
              <br />
              Our team works tirelessly to ensure you receive the best products/services possible.
            </p>
          </Card>
          {/* card-2 & card-3 */}
          <div className="flex w-full  items-center gap-3 sm:gap-[12px]" >
            <Card className="flex w-1/2 h-[330px] flex-col px-4 lg:px-[46px] lg:py-[33px] items-center gap-3 sm:gap-[12px] rounded-[20px] border border-none bg-[#FFFFFFC4] m-2">
              <img src="./about-2.svg" alt={` icon`} className="w-[20px] h-[20px] sm:w-[80px] sm:h-[80px] aspect-square" />
              <h6 className="text-[#000] font-Montagu text-sm sm:text-[26px] font-semibold leading-tight sm:leading-normal">
                Our Mission
              </h6>
              <p className="text-[#000] text-left sm:text-center font-Poetsen text-[20px] leading-[18px] sm:leading-normal font-normal">
                To deliver innovative solutions that improve lives and contribute to a better future.
              </p>
            </Card>
            <Card className="flex w-1/2 h-[330px] flex-col px-4 lg:px-[46px] lg:py-[33px] items-center gap-3 sm:gap-[12px] rounded-[20px] border border-none bg-[#FFFFFFC4] m-2">
              <img src="./about-3.svg" alt={` icon`} className="w-[20px] h-[20px] sm:w-[80px] sm:h-[80px] aspect-square" />
              <h6 className="text-[#000] font-Montagu text-sm sm:text-[26px] font-semibold leading-tight sm:leading-normal">
                Our Vision
              </h6>
              <p className="text-[#000] text-left sm:text-center font-Poetsen text-[20px] leading-[18px] sm:leading-normal font-normal">
                To be a trusted leader in our industry,known for excellence, innovation, and customer satisfaction.
              </p>
            </Card>

          </div>
          {/* card-4 & card-5 */}
            <div className="flex w-full items-center gap-3 sm:gap-[12px]" >
            <Card className="flex w-1/2 h-[330px] flex-col px-4 lg:px-[46px] lg:py-[33px] items-center gap-3 sm:gap-[12px] rounded-[20px] border border-none bg-[#FFFFFFC4] m-2">
              <img src="./about-4.svg" alt={` icon`} className="w-[20px] h-[20px] sm:w-[80px] sm:h-[80px] aspect-square" />
              <h6 className="text-[#000] font-Montagu text-sm sm:text-[26px] font-semibold leading-tight sm:leading-normal">
                Who We Are
              </h6>
              <p className="text-[#000] text-left sm:text-center font-Poetsen text-[20px] leading-[18px] sm:leading-normal font-normal">
                To deliver innovative solutions that improve lives and contribute to a better future.
              </p>
            </Card>
            <Card className="flex w-1/2 h-[330px] flex-col px-4 lg:px-[46px] lg:py-[33px] items-center gap-3 sm:gap-[12px] rounded-[20px] border border-none bg-[#FFFFFFC4] m-2">
              <img src="./about-5.svg" alt={` icon`} className="w-[20px] h-[20px] sm:w-[80px] sm:h-[80px] aspect-square" />
              <h6 className="text-[#000] font-Montagu text-sm sm:text-[26px] font-semibold leading-tight sm:leading-normal">
                Who We Serve
              </h6>
              <p className="text-[#000] text-left sm:text-center font-Poetsen text-[20px] leading-[18px] sm:leading-normal font-normal">
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
          <Card className="flex w-full flex-col px-4 lg:px-[256px] lg:py-[36px] items-center gap-3 sm:gap-[12px] rounded-[20px] border border-none bg-[#FFFFFFC4] m-2">
            <img src="./about-1.svg" alt={` icon`} className="w-[20px] h-[20px] sm:w-[80px] sm:h-[80px] aspect-square" />
            <h6 className="text-[#000] font-Montagu text-sm sm:text-[26px] font-semibold leading-tight sm:leading-normal">
              Our Values
            </h6>
            <p className="text-[#000] text-left sm:text-center font-Poetsen text-[20px] leading-[18px] sm:leading-normal font-normal">
              Integrity – We believe in honesty and transparency.  Quality – Excellence is at the core of everything we do.  Customer Focus – Your satisfaction is our priority. Innovation – We embrace creativity and continuous improvement. Sustainability – We strive for a positive impact on the environment and society.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
