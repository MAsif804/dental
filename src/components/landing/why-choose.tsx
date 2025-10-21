import { Card, CardContent } from "../ui/card";
const CardTitle =[
  {
    id:1,
    title:"Experienced Dentists",
    description:"Providing top-notch dental care with expertise.",
    imag:"/profile.svg"
  },
  {
    id:2,
    title:"Convenient Appointments ",
    description:" Flexible scheduling to fit your busy life.",
    imag:"/appointment.svg"
  },
  {
    id:3,
    title:"Personalized Treatments",
    description:" Tailored solutions for your dental needs.",
    imag:"/vector.svg"
  }
]
const WhyChoose = () => {
  return (
    <section className="relative flex w-full h-screen  px-4 sm:px-6 md:px-10 lg:px-[88px] py-6 sm:py-8 md:py-[42px] justify-center items-center bg-[url('/why-choose.jpg')]  bg-cover bg-no-repeat overflow-hidden">
      <div className="flex w-full flex-col items-start sm:items-center md:items-center gap-4 sm:gap-5 md:gap-[40px]">
        <h6 className="text-black font-Montagu text-2xl sm:text-3xl md:text-[64px] font-semibold leading-normal sm:leading-tight md:leading-[24px] text-center sm:text-center md:text-center w-full">
          Why <span className="text-[#036E64]">Choose</span> Us?
        </h6>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-[40px]">
          {CardTitle.map((item) => (
            <Card key={item.id} className="bg-[#6EAAA7] flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-[16px] w-[350px] h-[392px] p-[15px] border-none rounded-[20px]">
            <CardContent className="flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-[16px]">
              <img src={item.imag} alt={item.title} className="w-[40px] mt-[20px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-[100px]" />
              <p className="text-black font-Montagu text-sm sm:text-base md:text-[26px] text-center sm:text-center md:text-center leading-relaxed sm:leading-normal font-semibold">

                {item.title}
              </p>
              <p className="text-black font-Poetsen text-sm sm:text-base md:text-[20px] text-center sm:text-center md:text-center leading-relaxed sm:leading-[25px] font-normal">
                {item.description}
              </p>
            </CardContent>
          </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
