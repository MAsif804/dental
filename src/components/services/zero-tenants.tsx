
import { Card } from "@/components/ui/card";
const  tenants =[
  {
    id:1,
    title:"Zero Trust Assessment",
    description:"We partner with your organization to thoroughly assess your IT infrastructure, evaluate the maturity of your existing capabilities against the Zero Trust framework, and identify gaps in alignment with industry best practices. Guided by your specific needs and strategic objectives, we develop an actionable, phased roadmap to advance your Zero Trust adoption. Our process culminates in a comprehensive report detailing compliance gaps, current status, and prioritized recommendations to help you achieve a secure, Zero Trust-aligned environment..",
    image:"/services-1.png",
  
},
{
  id:2,
  title:"Zero Trust Strategy development",
  description:"In conjunction with the Zero Trust assessment, we will help you develop a Zero Trust vision, strategy, and guiding principles. These will inform the development of a roadmap and reference architecture(s) that can leverage existing investments and identify technology and process gaps that can be addressed through reconfiguring existing technology, acquiring new technology, or inheriting the functionality from an underlying provider. Our process will and define the implementation and integration of modernized controls to help you address gaps and enhance Zero Trust maturity.",
  image:"/services-2.png",
},  
{
  id:3,
  title:"Zero Trust Implementation",
  description:"Based on our client’s technical, business, functional, and non-functional requirements, we help identify and recommend tailored solutions to meet their unique needs. Firefly Security provides expert support through both augmented staffing and hands-on management of solution implementation, ensuring alignment with Zero Trust principles and achieving measurable progress toward Zero Trust compliance",
  image:"/services-3.png",
},
{
  id:4,
  title:"Zero Trust Managed Services",
  description:"With outcome-based managed services aligned to the latest Zero Trust best practices, Firefly Security offers an array of managed services to help you secure the enterprise environment as well as plan your enterprise Zero Trust journey.",
  image:"/serices-4.png",
},

]
     
    

const ZeroTenants = () => {
  return (
    <section className="flex w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[88px] py-8 sm:py-10 md:py-[60px] justify-center items-center bg-[#1A2236]">
      <div className="flex w-full flex-col items-start gap-6 sm:gap-8 md:gap-[37px]">
        <div className="flex w-full items-center justify-center gap-4 sm:gap-5 md:gap-[25px] flex-wrap">
          {tenants.map((item) => (
            <Card key={item.id} className="flex w-full sm:w-[calc(50%-24px)] lg:w-[calc(50%-48px)] h-auto min-h-[300px] sm:min-h-[400px] md:min-h-[539px] flex-col p-3 sm:p-4 items-start gap-2 sm:gap-3 md:gap-[12px] rounded-[8px] border border-[#6380A9] bg-[#33415533]">
            <img src={item.image} alt={`${item.title} service`} className="w-full h-auto sm:h-[200px] md:h-[250px] lg:h-[289px] object-cover" />
            <h6 className="text-[#FDED1B] font-Inter text-sm sm:text-[14px] md:text-[16px] font-semibold leading-tight sm:leading-[20px]">
              {item.title}
            </h6>
            <p className="text-[#D6DEEA] text-left sm:text-justify font-Inter text-xs sm:text-[12px] leading-relaxed sm:leading-[25px] font-normal">
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
