import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

const GetForm = () => {
  return (
    <section className="relative w-full min-h-[560px] px-4 sm:px-6  lg:px-[88px] py-10 sm:py-12 md:py-[42px] md:px-[40px] flex items-center justify-center">
      <div className="flex w-full max-w-[790px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 flex-col items-start gap-4 sm:gap-5 md:gap-6 border-[2px] rounded-[20px] border-[#028D80] shadow-[0_0_20px_0_#036E64]">
        <h2 className="text-center text-black font-Montagu font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-normal">
          Get A Free Quote!
        </h2>
        {/* Name */}
        <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
          <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">
            Full Name
          </h4>
          <Input
            placeholder="Full Name"
            className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
          />
        </div>
        {/* Email */}
        <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
          <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">
            Email*
          </h4>
          <Input
            placeholder="Email"
            className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
          />
        </div>
        {/* Phone */}
        <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
          <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">
            Phone*
          </h4>
          <Input
            placeholder="Phone"
            className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
          />
        </div>
        {/* Message */}
        <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
          <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">
            Message*
          </h4>
          <textarea
            placeholder=""
            className="flex h-[140px] sm:h-[160px] md:h-[178px] w-full resize-none items-center gap-[8px] self-stretch rounded-[12px] border border-black bg-transparent px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:text-[12px] sm:placeholder:text-[13px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-[#989FA4] focus:outline-none focus-visible:ring-0"
          />
        </div>
        {/* check */}
        <div className="flex items-start gap-[16px] sm:gap-[24px] md:gap-[32px]">
          <Checkbox
            checked={false}
            className="flex size-[24px] sm:size-[26px] md:size-[28px] items-center justify-center rounded-[4px] border border-[#000] bg-white p-[2.1px] shadow-none data-[state=checked]:bg-[#EBF3F9] data-[state=checked]:text-black [&>span>svg]:h-2.5 [&>span>svg]:w-2.5 [&>span>svg]:stroke-[3.5] flex-shrink-0 mt-1"
          />
          <p className="text-black font-Montagu text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[1.4] sm:leading-[1.3] md:leading-normal">
            I agree to terms & conditions provided by the company. By providing
            my phone number, I agree to receive text messages from the business.
          </p>
        </div>
        <Button className="bg-[#036E64] text-white font-Montagu text-base sm:text-lg md:text-[18px] text-center leading-relaxed font-normal w-[191px] h-[52px] rounded-[10px]">
          Send Message 
        </Button>
      </div>
    </section>
  );
};

export default GetForm;
