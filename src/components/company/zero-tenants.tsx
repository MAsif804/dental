
import { Card } from "@/components/ui/card";
const  tenants =[
  {
    id:1,
    title:"Proven Expertise",
    description:"Years of hands-on experience delivering cybersecurity at scale for enterprise and government sectors.",
    image:"/security.svg",
  
},
{
  id:2,
  title:"Zero Trust Leadership",
  description:"We specialize in secure-by-design Zero Trust strategies aligned with modern compliance and business needs.",
  image:"/alert-circle.svg",
},  
{
  id:3,
  title: "Mission-Driven Team",
  description: "Our team is driven by values — integrity, innovation, and dedication to client success.",
  image:"/fingerprint.svg",
},
// {
//   id:4,
//   title:"Mission-Driven Team",
//   description:"Our team is driven by values — integrity, innovation, and dedication to client success.",
//   image:"/search.svg",
// },
// {
//   id:5,
//   title:"Apply Unified Analytics",
//   description:"Apply unified analytics for Data, Applications, Assets, Services (DAAS) to include behavioristics, and log each transaction",
//   image:"/bar-chart.svg",
// },
]
     
    

const ZeroTenants = () => {
  return (
    <section className="flex w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[88px] py-8 sm:py-10 md:py-[60px] justify-center items-center bg-[#1A2236]">
      <div className="flex w-full flex-col items-start gap-6 sm:gap-8 md:gap-[37px]">
        <div className="flex w-full flex-col items-center gap-3 sm:gap-4 md:gap-[15px]">
          <h6 className="text-[#FDED1B] font-Inter text-2xl sm:text-3xl md:text-[30px] font-semibold leading-normal sm:leading-tight md:leading-[24px] text-center">
            Our Mission & Vision
          </h6>
          <p className="text-white font-Inter text-base sm:text-lg md:text-xl lg:text-[22px] text-center leading-relaxed sm:leading-[25px] font-normal px-2">
            "Our mission is to advance resilient, adaptive cybersecurity by embedding Zero Trust principles into every layer of our operations—ensuring that no user, device, or system is inherently trusted, and access is continuously verified to protect critical assets, data, and infrastructure."
          </p>
        </div>
        <div className="flex w-full items-center justify-center gap-4 sm:gap-6 md:gap-[45px] flex-wrap">
          {tenants.map((item) => (
            <Card key={item.id} className="flex w-[300px] h-[280px] flex-col p-4 items-start gap-3 rounded-[8px] border border-[#6380A9] bg-[#33415533] m-2">
            <img src={item.image} alt={`${item.title} icon`} className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] aspect-square" />
            <h6 className="text-[#FDED1B] font-Inter text-sm sm:text-base md:text-[16px] font-semibold leading-tight sm:leading-[20px]">
              {item.title}
            </h6>
            <p className="text-[#D6DEEA] font-Inter text-xs sm:text-[12px] leading-relaxed sm:leading-[25px] font-normal">
              {item.description}
            </p>
          </Card>
         ))}
       
        </div>
      </div>
    </section>
  );
};

export default ZeroTenants;
