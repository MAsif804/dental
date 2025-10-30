import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const productsList = [
  {
    slug: "zirconia-crowns",
    title: "Zirconia Crowns",
    mainDescription: "Durable, natural-looking crowns for strength and beauty.",
    thumbnail: "/zirconia-thum.png",
    description: "Zirconia Crowns are highly durable, biocompatible dental restorations designed to protect damaged teeth while maintaining a natural, aesthetic appearance. They combine strength with beauty, making them one of the most popular choices in modern dentistry.",
    images: [
      "/zirconia-1.png",
      "/zirconia-2.png",
      "/zirconia-3.png",
      // "/zirconia-4.jpg",
      // "/zirconia-5.jpg",
      // "/zirconia-6.jpg",
    ],
    details: (
      <div className="flex flex-col items-start justify-center gap-[40px]">
        {/* Treatment Duration */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-bold leading-normal">
            Treatment <span className="text-[#036E64]">Duration</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Typically 1–3 visits depending on your case.
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Average time:</span> 5–7 days from preparation to final placement.
            </li>
          </ul>
        </div>
        {/* Advantages of Zirconia Crowns */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Advantages of <span className="text-[#036E64]">Zirconia Crowns</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Aesthetics: <span className="text-black">Natural appearance, blends seamlessly with surrounding teeth, resistant to discoloration and staining</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Strength & Durability: <span className="text-black"> High resistance to fractures, chips, and wear; biocompatible and safe for long-term use</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Precision Fit:<span className="text-black"> Designed with CAD/CAM technology for accuracy and comfort</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Preservation of tooth structure:<span className="text-black"> Requires minimal tooth reduction compared to other crowns</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Longevity:<span className="text-black"> Provides a durable and reliable solution when maintained properly</span>
            </li>
          </ul>
        </div>
        {/* Limitations for Zirconia Crowns */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Limitations for <span className="text-[#036E64]">Zirconia Crowns</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Insufficient tooth structure to support the crown
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Severe malocclusion or untreated misalignment
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Active gum disease or untreated tooth decay
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Patients requiring significant reshaping that may compromise tooth health
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Rare ceramic material sensitivities
            </li>
          </ul>
        </div>
        {/* Stages of Treatment */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Stages of <span className="text-[#036E64]">Treatment</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Consultation & Examination <span className="text-black">–The first stage involves a comprehensive consultation and evaluation with a dental professional to assess the patient’s oral health, determine the suitability for Zirconia Crowns, and develop a customized treatment plan</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Tooth Preparation <span className="text-black">  – The dentist will remove any decay or damage from the tooth and prepare it for the crown. This may involve reshaping the tooth to accommodate the crown or placing a temporary crown until the permanent one is ready</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Impression & Digital Scan<span className="text-black"> – The dentist will take an impression of the prepared tooth and send it to a dental laboratory, where the zirconia crown will be fabricated</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Crown Placement<span className="text-black">– Once the crown is ready, the dentist will place it over the prepared tooth and check the fit and bite. Any necessary adjustments will be made before the crown is permanently cemented in place</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Follow-up care<span className="text-black"> – Regular follow-up appointments are necessary to ensure the health and stability of the crown. Patients are advised to maintain good oral hygiene and schedule regular check-ups with their dental professional to monitor their oral health and detect any potential issues early</span>
            </li>
          </ul>
        </div>
        {/* Image section */}
        <div className="flex items-center gap-[40px]">
          <img src="/zirconia-4.jpg" alt="" className="w-[391px] h-[430px]" />
          <img src="/zirconia-5.jpg" alt="" className="w-[391px] h-[430px]" />
          <img src="/zirconia-6.jpg" alt="" className="w-[391px] h-[430px]" />
        </div>
        {/* Aftercare Tips*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            <span className="text-[#036E64]">Aftercare</span>Trips
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Brush and floss regularly to prevent gum problems
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Avoid chewing excessively hard objects (ice, pens, hard nuts)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Schedule regular dental visits for monitoring
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Use a night guard if teeth grinding is a concern
            </li>
          </ul>
        </div>
        <p className="text-black font-Poetsen text-[20px] font-light leading-normal"> Zirconia Crowns combine strength, aesthetics, and long-lasting performance, making them one of the most reliable dental restorations available. They are ideal for patients who want both durability and a natural-looking smile.
        </p>
        {/* form */}
        <div className="flex w-full max-w-[790px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 flex-col items-center gap-4 sm:gap-5 md:gap-6 border-[2px] rounded-[20px] border-[#028D80] shadow-[0_0_20px_0_#036E64]">
          <h2 className="text-center text-black font-Montagu font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-normal">Get A Free Quote!</h2>
          {/* Name */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Full Name</h4>
            <Input
              placeholder="Full Name"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Email */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Email*</h4>
            <Input
              placeholder="Email"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Phone */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Phone*</h4>
            <Input
              placeholder="Phone"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Message */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Message*</h4>
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
              I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </p>
          </div>
        </div>
      </div>
    ),
    categories: ["treatments"],
  },
  {
    slug: "implants",
    title: "Implants",
    mainDescription: "Permanent tooth replacement with natural function and feel.",
    thumbnail: "/implants-thum.png",
    description: "Dental implants are titanium posts placed into the jawbone to replace missing tooth roots. Once healed, a crown or bridge is fixed on top, restoring both appearance and function. Implants look and feel like natural teeth and can last a lifetime with proper care.",
    images: [
      "/implants-1.png",
      "/implants-2.png",
    ],
    details: (
      <div className="flex flex-col items-start gap-[40px]">
        {/* Treatment Duration */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-bold leading-normal">
            Treatment <span className="text-[#036E64]">Duration</span>
          </h2>
          <ul className="flex flex-col items-start">
            {/* <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Typically 1–3 visits depending on your case.
            </li> */}
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Average time:</span> 3–6 months (including healing time).
            </li>
          </ul>
        </div>
        {/* Advantages of Implants */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Advantages of <span className="text-[#036E64]">Implants</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Permanent and durable solution
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Natural look and feel
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Restores chewing and speaking ability
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Prevents bone loss and maintains facial structure
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Longevity:<span className="text-black"> Provides a durable and reliable solution when maintained properly</span>
            </li>
          </ul>
        </div>
        {/* Indications for Implants */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Indications for <span className="text-[#036E64]">Implants</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Missing one or more teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Loose or uncomfortable dentures
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Tooth loss due to injury, decay, or gum disease
            </li>
          </ul>
        </div>
        {/* Limitations for Implants */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Limitations for<span className="text-[#036E64]">Implants</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Poor oral health (active gum disease, untreated decay)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Longer treatment time due to healing
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Not suitable for patients with uncontrolled health conditions or severe gum issues
            </li>
          </ul>
        </div>
        {/* Stages of Treatment */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Stages of <span className="text-[#036E64]">Treatment</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Consultation & Examination <span className="text-black">–X-rays, scans, and treatment plan</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Implant Placement <span className="text-black">  – Titanium post inserted into the jawbone</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Healing Phase<span className="text-black">  –  2–4 months for bone to fuse with implant</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Final Crown Placement <span className="text-black">– Permanent crown/bridge fixed for natural function</span>
            </li>
          </ul>
        </div>
        {/* Image section */}
        {/* <div className="flex items-center gap-[40px]">
          <img src="/zirconia-4.jpg" alt="" className="w-[391px] h-[430px]" />
          <img src="/zirconia-5.jpg" alt="" className="w-[391px] h-[430px]" />
          <img src="/zirconia-6.jpg" alt="" className="w-[391px] h-[430px]" />
        </div> */}
        {/* Aftercare Tips*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            <span className="text-[#036E64]">Aftercare</span>Trips
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Brush and floss regularly to prevent gum problems
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Avoid chewing excessively hard objects (ice, pens, hard nuts)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Schedule regular dental visits for monitoring
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Use a night guard if teeth grinding is a concern
            </li>
          </ul>
        </div>
        {/* <p className="text-black font-Poetsen text-[20px] font-light leading-normal"> Porcelain Crowns combine strength, aesthetics, and long-lasting performance, making them one of the most reliable dental restorations available. They are ideal for patients who want both durability and a natural-looking smile.
        </p> */}
        {/* form */}
        <div className="flex w-full max-w-[790px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 flex-col items-center gap-4 sm:gap-5 md:gap-6 border-[2px] rounded-[20px] border-[#028D80] shadow-[0_0_20px_0_#036E64]">
          <h2 className="text-center text-black font-Montagu font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-normal">Get A Free Quote!</h2>
          {/* Name */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Full Name</h4>
            <Input
              placeholder="Full Name"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Email */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Email*</h4>
            <Input
              placeholder="Email"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Phone */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Phone*</h4>
            <Input
              placeholder="Phone"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Message */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Message*</h4>
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
              I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </p>
          </div>
        </div>
      </div>
    ),
    categories: ["treatments"],
  },
  {
    slug: "hollywood-smile",
    title: "Hollywood Smile",
    mainDescription: "Complete smile makeover for a flawless, radiant look.",
    thumbnail: "/hollywood-thum.png",
    description: " A Hollywood Smile is a full cosmetic dental makeover designed to give you perfectly aligned, bright, and natural-looking teeth. Using a combination of treatments such as veneers, crowns, whitening, or implants, it enhances both appearance and confidence for a radiant smile.",
    images: [
      "/hollywood-1.png",
      "/hollywood-2.png",
      "/hollywood-3.png",
    ],
    details: (
      <div className="flex flex-col items-start gap-[40px]">
        {/* Treatment Duration */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-bold leading-normal">
            Treatment <span className="text-[#036E64]">Duration</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">5–10 days</span>(depending on the number of procedures involved)
            </li>
          </ul>
        </div>
        {/* Advantages of Hollywood Smile */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Advantages of <span className="text-[#036E64]">Hollywood Smile</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Complete smile transformation
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Bright, natural-looking teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Boosts confidence and appearance
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Long-lasting results with proper care
            </li>
          </ul>
        </div>
        {/* Limitations for Hollywood Smile */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Limitations for<span className="text-[#036E64]">Hollywood Smiles</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Cosmetic solution, not for severe dental diseases
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Requires healthy gums and teeth as a base
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              May involve multiple procedures (veneers, crowns, whitening, implants)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Higher cost compared to single treatments
            </li>
          </ul>
        </div>
        {/* Stages of Treatment */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Stages of <span className="text-[#036E64]">Treatment</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Consultation & Examination <span className="text-black">–Digital planning to design the perfect smile</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Preparation– Teeth shaping, impressions, and temporary restorations if needed
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Treatment Procedures<span className="text-black">–  Veneers, crowns, whitening, or implants depending on the case</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Final Placement<span className="text-black">– Permanent restorations fixed for a complete smile makeover</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Follow-up care<span className="text-black">– Routine checkups and maintenance advice</span>
            </li>
          </ul>
        </div>
        {/* Image section */}
        {/* <div className="flex items-center gap-[40px]">
          <img src="/zirconia-4.jpg" alt="" className="w-[391px] h-[430px]" />
          <img src="/zirconia-5.jpg" alt="" className="w-[391px] h-[430px]" />
          <img src="/zirconia-6.jpg" alt="" className="w-[391px] h-[430px]" />
        </div> */}
        {/* Aftercare Tips*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            <span className="text-[#036E64]">Aftercare</span>Trips
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Brush and floss regularly to prevent gum problems
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Avoid chewing excessively hard objects (ice, pens, hard nuts)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Schedule regular dental visits for monitoring
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Use a night guard if teeth grinding is a concern
            </li>
          </ul>
        </div>
        {/* <p className="text-black font-Poetsen text-[20px] font-light leading-normal"> Porcelain Crowns combine strength, aesthetics, and long-lasting performance, making them one of the most reliable dental restorations available. They are ideal for patients who want both durability and a natural-looking smile.
        </p> */}
        {/* form */}
        <div className="flex w-full max-w-[790px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 flex-col items-center gap-4 sm:gap-5 md:gap-6 border-[2px] rounded-[20px] border-[#028D80] shadow-[0_0_20px_0_#036E64]">
          <h2 className="text-center text-black font-Montagu font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-normal">Get A Free Quote!</h2>
          {/* Name */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Full Name</h4>
            <Input
              placeholder="Full Name"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Email */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Email*</h4>
            <Input
              placeholder="Email"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Phone */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Phone*</h4>
            <Input
              placeholder="Phone"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Message */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Message*</h4>
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
              I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </p>
          </div>
        </div>
      </div>
    ),
    categories: ["treatments"],
  },
  {
    slug: "laminate-veneers",
    title: "Laminate Veneers",
    mainDescription: "Ultra-thin shells to enhance teeth shape and color.",
    thumbnail: "/laminate-thum.png",
    description: "Laminate Veneers, also known as dental veneers, are ultra-thin shells made of porcelain or composite resin that are bonded to the front surface of teeth. They are designed to enhance the appearance of discolored, chipped, cracked, misaligned, or gapped teeth. Veneers deliver quick, long-lasting results while maintaining a natural look and feel.",
    images: [
      "/laminate-1.jpg",
      "/laminate-2.jpg",
      // "/laminate-3.jpg",
      // "/laminate-4.jpg",
      // "/laminate-5.jpg",

    ],
    details: (
      <div className="flex flex-col items-start gap-[40px]">
        {/* Treatment Duration */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-bold leading-normal">
            Treatment <span className="text-[#036E64]">Duration</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Visit Required:</span> 2–3 appointments
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Average time:</span> 2–5 days
            </li>
          </ul>
        </div>
        {/* Advantages of Laminate Veneers */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-[#036E64] capitalize font-Montagu text-[34px] font-medium leading-normal">
            Advantages of <span className="text-[#036E64]">Laminate Veneers</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Durability:<span className="text-black"> Long-lasting porcelain material withstands daily use</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Minimal Tooth Reduction: <span className="text-black"> Preserves natural tooth structure</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Stain-Resistance:<span className="text-black"> Porcelain veneers resist staining from food and drinks</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Low Maintenance:<span className="text-black">Easy to care for—brush, floss, and maintain as normal</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Quick Results:<span className="text-black"> Transform your smile in just a few visits</span>
            </li>
          </ul>
        </div>
        {/* Indications for Laminate Veneers */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Indications for <span className="text-[#036E64]">Laminate Veneers</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Severely discolored or stained teeth unresponsive to whitening
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Chipped, cracked, or worn-down teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Misshapen or irregularly shaped teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Small gaps between teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Mild misalignment not requiring orthodontics
            </li>
          </ul>
        </div>
        {/* Limitations for Laminate Veneers */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Limitations for<span className="text-[#036E64]">Laminate Veneers</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Poor oral health (active gum disease, untreated decay)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Severe malocclusion or untreated misalignment
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Teeth grinding/clenching (bruxism) that may damage veneers
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Significant enamel loss or erosion
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Active TMJ disorders
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Patients with budget limitations, as veneers are considered cosmetic
            </li>
          </ul>
        </div>
        {/* Stages of Treatment */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Stages of <span className="text-[#036E64]">Treatment</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Consultation & Examination <span className="text-black">– Oral evaluation and treatment planning, Discuss goals, shade options, and suitability</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Tooth Preparation <span className="text-black"> – A thin layer of enamel is removed, Impressions or digital scans are taken</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Impression & Digital Scan<span className="text-black"> – Temporary veneers are placed for protection and aesthetics, Worn until permanent veneers are ready</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Crown Placement<span className="text-black"> – Permanent veneers are bonded using special adhesive, Adjustments made for fit, bite, and appearance</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Follow-up care<span className="text-black"> –Check-ups ensure veneers function properly, Regular oral hygiene helps maintain longevity</span>
            </li>
          </ul>
        </div>
        {/* Image section */}
        <div className="flex items-center gap-[40px]">
          <img src="/laminate-3.jpg" alt="" className="w-[391px] h-[430px]" />
          <img src="/laminate-4.jpg" alt="" className="w-[391px] h-[430px]" />
          <img src="/laminate-5.jpg" alt="" className="w-[391px] h-[430px]" />
        </div>
        {/* Aftercare Tips*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            <span className="text-[#036E64]">Aftercare</span>Trips
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Brush and floss regularly to prevent gum problems
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Avoid chewing excessively hard objects (ice, pens, hard nuts)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Schedule regular dental visits for monitoring
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Use a night guard if teeth grinding is a concern
            </li>
          </ul>
        </div>
        <p className="text-black font-Poetsen text-[20px] font-light leading-normal"> Laminate Veneers provide a fast, durable, and highly aesthetic solution for improving your smile. With minimal tooth preparation and natural-looking results, they are one of the most popular cosmetic dentistry treatments today.
        </p>
        {/* form */}
        <div className="flex w-full max-w-[790px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 flex-col items-center gap-4 sm:gap-5 md:gap-6 border-[2px] rounded-[20px] border-[#028D80] shadow-[0_0_20px_0_#036E64]">
          <h2 className="text-center text-black font-Montagu font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-normal">Get A Free Quote!</h2>
          {/* Name */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Full Name</h4>
            <Input
              placeholder="Full Name"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Email */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Email*</h4>
            <Input
              placeholder="Email"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Phone */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Phone*</h4>
            <Input
              placeholder="Phone"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Message */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Message*</h4>
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
              I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </p>
          </div>
        </div>
      </div>
    ),
    categories: ["treatments"],
  },
  {
    slug: "porcelain-crowns",
    title: "Porcelain Crowns",
    mainDescription: "Strong and aesthetic crowns with a natural finish.",
    thumbnail: "/porcelain-thum.png",
    description: "Porcelain Crowns, also known as dental veneers, are ultra-thin shells made of porcelain or composite resin that are bonded to the front surface of teeth. They are designed to enhance the appearance of discolored, chipped, cracked, misaligned, or gapped teeth. Veneers deliver quick, long-lasting results while maintaining a natural look and feel.",
    images: [
      "/porcelain-1.png",
      "/porcelain-2.png",
      // "/porcelain-3.png",
      // "/porcelain-4.png",
      // "/porcelain-5.png",
    ],
    details: (
      <div className="flex flex-col items-start gap-[40px]">
        {/* Treatment Duration */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-bold leading-normal">
            Treatment <span className="text-[#036E64]">Duration</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Visit Required:</span> 2–3 appointments
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Average time:</span> 2–5 days
            </li>
          </ul>
        </div>
        {/* Advantages of Porcelain Crowns */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Advantages of <span className="text-[#036E64]">Porcelain Crowns</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Enhanced Aesthetics: <span className="text-black"> Corrects discoloration, chips, cracks, and uneven shapes</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Durability: <span className="text-black">Long-lasting porcelain material withstands daily use</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Minimal Tooth Reduction: <span className="text-black"> Preserves natural tooth structure</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Stain-Resistance: <span className="text-black"> Porcelain veneers resist staining from food and drinks</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Quick Results: <span className="text-black"> Easy to care for—brush, floss, and maintain as normal</span>
            </li>
          </ul>
        </div>
        {/* Indications for Porcelain Crowns */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Indications for <span className="text-[#036E64]">Porcelain Crowns</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Severely discolored or stained teeth unresponsive to whitening
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Chipped, cracked, or worn-down teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Misshapen or irregularly shaped teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Small gaps between teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Mild misalignment not requiring orthodontics
            </li>
          </ul>
        </div>
        {/* Limitations for Porcelain Crowns */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Limitations for<span className="text-[#036E64]">Porcelain Crowns</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Poor oral health (active gum disease, untreated decay)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Teeth grinding/clenching (bruxism) that may damage veneers
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Significant enamel loss or erosion
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Active TMJ disorders
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Patients with budget limitations, as veneers are considered cosmetic
            </li>
          </ul>
        </div>
        {/* Stages of Treatment */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Stages of <span className="text-[#036E64]">Treatment</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Consultation & Examination <span className="text-black">– Oral evaluation and treatment planning, Discuss goals, shade options, and suitability</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Tooth Preparation <span className="text-black">– A thin layer of enamel is removed, Impressions or digital scans are taken</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Impression & Digital Scan<span className="text-black"> – Temporary veneers are placed for protection and aesthetics, Worn until permanent veneers are ready</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Crown Placement<span className="text-black"> – Permanent veneers are bonded using special adhesive, Adjustments made for fit, bite, and appearance</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Follow-up care<span className="text-black"> –Check-ups ensure veneers function properly, Regular oral hygiene helps maintain longevity</span>
            </li>
          </ul>
        </div>
        {/* Image section */}
        <div className="flex items-center gap-[40px]">
          <img src="/porcelain-3.png" alt="" className="w-[391px] h-[430px]" />
          <img src="/porcelain-4.png" alt="" className="w-[391px] h-[430px]" />
          <img src="/porcelain-5.png" alt="" className="w-[391px] h-[430px]" />
        </div>
        {/* Aftercare Tips*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            <span className="text-[#036E64]">Aftercare</span>Trips
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Brush and floss regularly to prevent gum problems
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Avoid chewing excessively hard objects (ice, pens, hard nuts)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Schedule regular dental visits for monitoring
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Use a night guard if teeth grinding is a concern
            </li>
          </ul>
        </div>
        <p className="text-black font-Poetsen text-[20px] font-light leading-normal"> Laminate veneers provide a fast, durable, and highly aesthetic solution for improving your smile. With minimal tooth preparation and natural-looking results, they are one of the most popular cosmetic dentistry treatments today.
        </p>
        {/* form */}
        <div className="flex w-full max-w-[790px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 flex-col items-center gap-4 sm:gap-5 md:gap-6 border-[2px] rounded-[20px] border-[#028D80] shadow-[0_0_20px_0_#036E64]">
          <h2 className="text-center text-black font-Montagu font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-normal">Get A Free Quote!</h2>
          {/* Name */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Full Name</h4>
            <Input
              placeholder="Full Name"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Email */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Email*</h4>
            <Input
              placeholder="Email"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Phone */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Phone*</h4>
            <Input
              placeholder="Phone"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Message */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Message*</h4>
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
              I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </p>
          </div>
        </div>
      </div>
    ),
    categories: ["treatments"],
  },
  {
    slug: "e-max-crowns",
    title: "E-max Crowns",
    mainDescription: "Premium all-ceramic crowns with superior translucency.",
    thumbnail: "/e-max-thum.png",
    description: "E-max Crowns, also known as dental veneers, are ultra-thin shells made of porcelain or composite resin that are bonded to the front surface of teeth. They are designed to enhance the appearance of discolored, chipped, cracked, misaligned, or gapped teeth. Veneers deliver quick, long-lasting results while maintaining a natural look and feel.",
    images: [
      "/e-max-1.png",
      "/e-max-2.png",
      // "/e-max-3.png",
      // "/e-max-4.jpg",
      // "/e-max-5.png",
    ],
    details: (
      <div className="flex flex-col items-start gap-[40px]">
        {/* Treatment Duration */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-bold leading-normal">
            Treatment <span className="text-[#036E64]">Duration</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Visit Required:</span> 2–3 appointments
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Average time:</span> 2–5 days
            </li>
          </ul>
        </div>
        {/* Advantages of E-max Crowns */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Advantages of <span className="text-[#036E64]">E-max Crowns</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Enhanced Aesthetics: <span className="text-black"> Corrects discoloration, chips, cracks, and uneven shapes</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Durability: <span className="text-black">Long-lasting porcelain material withstands daily use</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Minimal Tooth Reduction: <span className="text-black"> Preserves natural tooth structure</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Stain-Resistance: <span className="text-black"> Porcelain veneers resist staining from food and drinks</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Quick Results: <span className="text-black"> Easy to care for—brush, floss, and maintain as normal</span>
            </li>
          </ul>
        </div>
        {/* Indications for E-max Crowns */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Indications for <span className="text-[#036E64]">E-max Crowns</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Severely discolored or stained teeth unresponsive to whitening
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Chipped, cracked, or worn-down teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Misshapen or irregularly shaped teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Small gaps between teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Mild misalignment not requiring orthodontics
            </li>
          </ul>
        </div>
        {/* Limitations for E-max Crowns */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Limitations for<span className="text-[#036E64]">E-max Crowns</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Poor oral health (active gum disease, untreated decay)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Teeth grinding/clenching (bruxism) that may damage veneers
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Significant enamel loss or erosion
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Active TMJ disorders
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Patients with budget limitations, as veneers are considered cosmetic
            </li>
          </ul>
        </div>
        {/* Stages of Treatment */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Stages of <span className="text-[#036E64]">Treatment</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Consultation & Examination <span className="text-black">– Oral evaluation and treatment planning, Discuss goals, shade options, and suitability</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Tooth Preparation <span className="text-black">– A thin layer of enamel is removed, Impressions or digital scans are taken</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Impression & Digital Scan<span className="text-black"> – Temporary veneers are placed for protection and aesthetics, Worn until permanent veneers are ready</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Crown Placement<span className="text-black"> – Permanent veneers are bonded using special adhesive, Adjustments made for fit, bite, and appearance</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Follow-up care<span className="text-black"> –Check-ups ensure veneers function properly, Regular oral hygiene helps maintain longevity</span>
            </li>
          </ul>
        </div>
        {/* Image section */}
        <div className="flex items-center gap-[40px]">
          <img src="/e-max-3.png" alt="" className="w-[391px] h-[430px]" />
          <img src="/e-max-4.jpg" alt="" className="w-[391px] h-[430px]" />
          <img src="/e-max-5.png" alt="" className="w-[391px] h-[430px]" />
        </div>
        {/* Aftercare Tips*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            <span className="text-[#036E64]">Aftercare</span>Trips
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Brush and floss regularly to prevent gum problems
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Avoid chewing excessively hard objects (ice, pens, hard nuts)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Schedule regular dental visits for monitoring
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Use a night guard if teeth grinding is a concern
            </li>
          </ul>
        </div>
        <p className="text-black font-Poetsen text-[20px] font-light leading-normal"> Laminate veneers provide a fast, durable, and highly aesthetic solution for improving your smile. With minimal tooth preparation and natural-looking results, they are one of the most popular cosmetic dentistry treatments today.
        </p>
        {/* form */}
        <div className="flex w-full max-w-[790px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 flex-col items-center gap-4 sm:gap-5 md:gap-6 border-[2px] rounded-[20px] border-[#028D80] shadow-[0_0_20px_0_#036E64]">
          <h2 className="text-center text-black font-Montagu font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-normal">Get A Free Quote!</h2>
          {/* Name */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Full Name</h4>
            <Input
              placeholder="Full Name"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Email */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Email*</h4>
            <Input
              placeholder="Email"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Phone */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Phone*</h4>
            <Input
              placeholder="Phone"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Message */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Message*</h4>
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
              I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </p>
          </div>
        </div>
      </div>
    ),
    categories: ["treatments"],
  },
  {
    slug: "monolithic-crowns",
    title: "Monolithic Crowns",
    mainDescription: "High-strength crowns designed for lasting durability.",
    thumbnail: "/monolithic-thum.png",
    description: "Monolithic Crowns, also known as dental veneers, are ultra-thin shells made of porcelain or composite resin that are bonded to the front surface of teeth. They are designed to enhance the appearance of discolored, chipped, cracked, misaligned, or gapped teeth. Veneers deliver quick, long-lasting results while maintaining a natural look and feel.",
    images: [
      "/monolithic-1.png",
      "/monolithic-2.png",
      // "/e-max-3.png",
      // "/e-max-4.jpg",
      // "/e-max-5.png",
    ],
    details: (
      <div className="flex flex-col items-start gap-[40px]">
        {/* Treatment Duration */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-bold leading-normal">
            Treatment <span className="text-[#036E64]">Duration</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Visit Required:</span> 2–3 appointments
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Average time:</span> 2–5 days
            </li>
          </ul>
        </div>
        {/* Advantages of Monolithic Crowns */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Advantages of <span className="text-[#036E64]">Monolithic Crowns</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Enhanced Aesthetics: <span className="text-black"> Corrects discoloration, chips, cracks, and uneven shapes</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Durability: <span className="text-black">Long-lasting porcelain material withstands daily use</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Minimal Tooth Reduction: <span className="text-black"> Preserves natural tooth structure</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Stain-Resistance: <span className="text-black"> Porcelain veneers resist staining from food and drinks</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Quick Results: <span className="text-black"> Easy to care for—brush, floss, and maintain as normal</span>
            </li>
          </ul>
        </div>
        {/* Indications for Monolithic Crowns */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Indications for <span className="text-[#036E64]">Monolithic Crowns</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Severely discolored or stained teeth unresponsive to whitening
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Chipped, cracked, or worn-down teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Misshapen or irregularly shaped teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Small gaps between teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Mild misalignment not requiring orthodontics
            </li>
          </ul>
        </div>
        {/* Limitations for Monolithic Crowns */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Limitations for<span className="text-[#036E64]">Monolithic Crowns</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Poor oral health (active gum disease, untreated decay)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Teeth grinding/clenching (bruxism) that may damage veneers
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Significant enamel loss or erosion
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Active TMJ disorders
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Patients with budget limitations, as veneers are considered cosmetic
            </li>
          </ul>
        </div>
        {/* Stages of Treatment */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Stages of <span className="text-[#036E64]">Treatment</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Consultation & Examination <span className="text-black">– Oral evaluation and treatment planning, Discuss goals, shade options, and suitability</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Tooth Preparation <span className="text-black">– A thin layer of enamel is removed, Impressions or digital scans are taken</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Impression & Digital Scan<span className="text-black"> – Temporary veneers are placed for protection and aesthetics, Worn until permanent veneers are ready</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Crown Placement<span className="text-black"> – Permanent veneers are bonded using special adhesive, Adjustments made for fit, bite, and appearance</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Follow-up care<span className="text-black"> –Check-ups ensure veneers function properly, Regular oral hygiene helps maintain longevity</span>
            </li>
          </ul>
        </div>
        {/* Image section */}
        {/* <div className="flex items-center gap-[40px]">
          <img src="/e-max-3.png" alt="" className="w-[391px] h-[430px]" />
          <img src="/e-max-4.jpg" alt="" className="w-[391px] h-[430px]" />
          <img src="/e-max-5.png" alt="" className="w-[391px] h-[430px]" />
        </div> */}
        {/* Aftercare Tips*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            <span className="text-[#036E64]">Aftercare</span>Trips
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Brush and floss regularly to prevent gum problems
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Avoid chewing excessively hard objects (ice, pens, hard nuts)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Schedule regular dental visits for monitoring
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Use a night guard if teeth grinding is a concern
            </li>
          </ul>
        </div>
        <p className="text-black font-Poetsen text-[20px] font-light leading-normal"> Laminate veneers provide a fast, durable, and highly aesthetic solution for improving your smile. With minimal tooth preparation and natural-looking results, they are one of the most popular cosmetic dentistry treatments today.
        </p>
        {/* form */}
        <div className="flex w-full max-w-[790px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 flex-col items-center gap-4 sm:gap-5 md:gap-6 border-[2px] rounded-[20px] border-[#028D80] shadow-[0_0_20px_0_#036E64]">
          <h2 className="text-center text-black font-Montagu font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-normal">Get A Free Quote!</h2>
          {/* Name */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Full Name</h4>
            <Input
              placeholder="Full Name"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Email */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Email*</h4>
            <Input
              placeholder="Email"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Phone */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Phone*</h4>
            <Input
              placeholder="Phone"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Message */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Message*</h4>
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
              I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </p>
          </div>
        </div>
      </div>
    ),
    categories: ["treatments"],
  },
  {
    slug: "root-canal",
    title: "Root Canal",
    mainDescription: "Pain-relieving treatment to save and protect your tooth.",
    thumbnail: "/root-thum.png",
    description: "Root Canal, also known as dental veneers, are ultra-thin shells made of porcelain or composite resin that are bonded to the front surface of teeth. They are designed to enhance the appearance of discolored, chipped, cracked, misaligned, or gapped teeth. Veneers deliver quick, long-lasting results while maintaining a natural look and feel.",
    images: [
      "/root-1.png",
      "/root-2.png",
      // "/root-3.png",
      // "/root-4.jpg",
      // "/root-5.png",
    ],
    details: (
      <div className="flex flex-col items-start gap-[40px]">
        {/* Treatment Duration */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-bold leading-normal">
            Treatment <span className="text-[#036E64]">Duration</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Visit Required:</span> 2–3 appointments
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Average time:</span> 2–5 days
            </li>
          </ul>
        </div>
        {/* Advantages of Root Canal */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Advantages of <span className="text-[#036E64]">Root Canal</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Enhanced Aesthetics: <span className="text-black"> Corrects discoloration, chips, cracks, and uneven shapes</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Durability: <span className="text-black">Long-lasting porcelain material withstands daily use</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Minimal Tooth Reduction: <span className="text-black"> Preserves natural tooth structure</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Stain-Resistance: <span className="text-black"> Porcelain veneers resist staining from food and drinks</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Quick Results: <span className="text-black"> Easy to care for—brush, floss, and maintain as normal</span>
            </li>
          </ul>
        </div>
        {/* Indications for Root Canal */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Indications for <span className="text-[#036E64]">Root Canal</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Severely discolored or stained teeth unresponsive to whitening
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Chipped, cracked, or worn-down teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Misshapen or irregularly shaped teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Small gaps between teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Mild misalignment not requiring orthodontics
            </li>
          </ul>
        </div>
        {/* Limitations for Root Canal */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Limitations for<span className="text-[#036E64]">Root Canal</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Poor oral health (active gum disease, untreated decay)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Teeth grinding/clenching (bruxism) that may damage veneers
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Significant enamel loss or erosion
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Active TMJ disorders
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Patients with budget limitations, as veneers are considered cosmetic
            </li>
          </ul>
        </div>
        {/* Stages of Treatment */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Stages of <span className="text-[#036E64]">Treatment</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Consultation & Examination <span className="text-black">– Oral evaluation and treatment planning, Discuss goals, shade options, and suitability</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Tooth Preparation <span className="text-black">– A thin layer of enamel is removed, Impressions or digital scans are taken</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Impression & Digital Scan<span className="text-black"> – Temporary veneers are placed for protection and aesthetics, Worn until permanent veneers are ready</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Crown Placement<span className="text-black"> – Permanent veneers are bonded using special adhesive, Adjustments made for fit, bite, and appearance</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Follow-up care<span className="text-black"> –Check-ups ensure veneers function properly, Regular oral hygiene helps maintain longevity</span>
            </li>
          </ul>
        </div>
        {/* Image section */}
        <div className="flex items-center gap-[40px]">
          <img src="/root-3.png" alt="" className="w-[391px] h-[430px]" />
          <img src="/root-4.jpg" alt="" className="w-[391px] h-[430px]" />
          <img src="/root-5.png" alt="" className="w-[391px] h-[430px]" />
        </div>
        {/* Aftercare Tips*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            <span className="text-[#036E64]">Aftercare</span>Trips
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Brush and floss regularly to prevent gum problems
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Avoid chewing excessively hard objects (ice, pens, hard nuts)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Schedule regular dental visits for monitoring
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Use a night guard if teeth grinding is a concern
            </li>
          </ul>
        </div>
        <p className="text-black font-Poetsen text-[20px] font-light leading-normal"> Laminate veneers provide a fast, durable, and highly aesthetic solution for improving your smile. With minimal tooth preparation and natural-looking results, they are one of the most popular cosmetic dentistry treatments today.
        </p>
        {/* form */}
        <div className="flex w-full max-w-[790px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 flex-col items-center gap-4 sm:gap-5 md:gap-6 border-[2px] rounded-[20px] border-[#028D80] shadow-[0_0_20px_0_#036E64]">
          <h2 className="text-center text-black font-Montagu font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-normal">Get A Free Quote!</h2>
          {/* Name */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Full Name</h4>
            <Input
              placeholder="Full Name"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Email */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Email*</h4>
            <Input
              placeholder="Email"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Phone */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Phone*</h4>
            <Input
              placeholder="Phone"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Message */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Message*</h4>
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
              I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </p>
          </div>
        </div>
      </div>
    ),
    categories: ["treatments"],
  },
  {
    slug: "full-mouth-implant",
    title: "Full Mouth Implant",
    mainDescription: "Complete restoration with multiple dental implants.",
    thumbnail: "/full-mouth-thum.png",
    description: "Full Mouth Implant,  also known as dental veneers, are ultra-thin shells made of porcelain or composite resin that are bonded to the front surface of teeth. They are designed to enhance the appearance of discolored, chipped, cracked, misaligned, or gapped teeth. Veneers deliver quick, long-lasting results while maintaining a natural look and feel.",
    images: [
      "/full-mouth-1.png",
      "/full-mouth-2.png",
      // "/root-3.png",
      // "/root-4.jpg",
      // "/root-5.png",
    ],
    details: (
      <div className="flex flex-col items-start gap-[40px]">
        {/* Treatment Duration */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-bold leading-normal">
            Treatment <span className="text-[#036E64]">Duration</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Visit Required:</span> 2–3 appointments
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Average time:</span> 2–5 days
            </li>
          </ul>
        </div>
        {/* Advantages of Full Mouth Implant */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Advantages of <span className="text-[#036E64]">Full Mouth Implant</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Enhanced Aesthetics: <span className="text-black"> Corrects discoloration, chips, cracks, and uneven shapes</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Durability: <span className="text-black">Long-lasting porcelain material withstands daily use</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Minimal Tooth Reduction: <span className="text-black"> Preserves natural tooth structure</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Stain-Resistance: <span className="text-black"> Porcelain veneers resist staining from food and drinks</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Quick Results: <span className="text-black"> Easy to care for—brush, floss, and maintain as normal</span>
            </li>
          </ul>
        </div>
        {/* Indications for Full Mouth Implant */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Indications for <span className="text-[#036E64]">Full Mouth Implant</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Severely discolored or stained teeth unresponsive to whitening
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Chipped, cracked, or worn-down teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Misshapen or irregularly shaped teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Small gaps between teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Mild misalignment not requiring orthodontics
            </li>
          </ul>
        </div>
        {/* Limitations for Full Mouth Implant */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Limitations for<span className="text-[#036E64]">Full Mouth Implant</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Poor oral health (active gum disease, untreated decay)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Teeth grinding/clenching (bruxism) that may damage veneers
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Significant enamel loss or erosion
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Active TMJ disorders
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Patients with budget limitations, as veneers are considered cosmetic
            </li>
          </ul>
        </div>
        {/* Stages of Treatment */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Stages of <span className="text-[#036E64]">Treatment</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Consultation & Examination <span className="text-black">– Oral evaluation and treatment planning, Discuss goals, shade options, and suitability</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Tooth Preparation <span className="text-black">– A thin layer of enamel is removed, Impressions or digital scans are taken</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Impression & Digital Scan<span className="text-black"> – Temporary veneers are placed for protection and aesthetics, Worn until permanent veneers are ready</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Crown Placement<span className="text-black"> – Permanent veneers are bonded using special adhesive, Adjustments made for fit, bite, and appearance</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Follow-up care<span className="text-black"> –Check-ups ensure veneers function properly, Regular oral hygiene helps maintain longevity</span>
            </li>
          </ul>
        </div>
        {/* Image section */}
        {/* <div className="flex items-center gap-[40px]">
          <img src="/root-3.png" alt="" className="w-[391px] h-[430px]" />
          <img src="/root-4.jpg" alt="" className="w-[391px] h-[430px]" />
          <img src="/root-5.png" alt="" className="w-[391px] h-[430px]" />
        </div> */}
        {/* Aftercare Tips*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            <span className="text-[#036E64]">Aftercare</span>Trips
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Brush and floss regularly to prevent gum problems
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Avoid chewing excessively hard objects (ice, pens, hard nuts)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Schedule regular dental visits for monitoring
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Use a night guard if teeth grinding is a concern
            </li>
          </ul>
        </div>
        <p className="text-black font-Poetsen text-[20px] font-light leading-normal"> Laminate veneers provide a fast, durable, and highly aesthetic solution for improving your smile. With minimal tooth preparation and natural-looking results, they are one of the most popular cosmetic dentistry treatments today.
        </p>
        {/* form */}
       <div className="flex w-full max-w-[790px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 flex-col items-center gap-4 sm:gap-5 md:gap-6 border-[2px] rounded-[20px] border-[#028D80] shadow-[0_0_20px_0_#036E64]">
          <h2 className="text-center text-black font-Montagu font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-normal">Get A Free Quote!</h2>
          {/* Name */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Full Name</h4>
            <Input
              placeholder="Full Name"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Email */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Email*</h4>
            <Input
              placeholder="Email"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Phone */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Phone*</h4>
            <Input
              placeholder="Phone"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Message */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Message*</h4>
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
              I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </p>
          </div>
        </div>
      </div>
    ),
    categories: ["treatments"],
  },
  {
    slug: "all-on-6-dental-implant",
    title: "All on 6 Dental Implant",
    mainDescription: "Fixed prosthetic solution supported by six implants.",
    thumbnail: "/all-on-6-dental-thum.png",
    description: "All on 6 Dental Implant, also known as dental veneers, are ultra-thin shells made of porcelain or composite resin that are bonded to the front surface of teeth. They are designed to enhance the appearance of discolored, chipped, cracked, misaligned, or gapped teeth. Veneers deliver quick, long-lasting results while maintaining a natural look and feel.",
    images: [
      "/all-on-6-dental-1.png",
      "/all-on-6-dental-2.png",
      // "/root-3.png",
      // "/root-4.jpg",
      // "/root-5.png",
    ],
    details: (
      <div className="flex flex-col items-start gap-[40px]">
        {/* Treatment Duration */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-bold leading-normal">
            Treatment <span className="text-[#036E64]">Duration</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Visit Required:</span> 2–3 appointments
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Average time:</span> 2–5 days
            </li>
          </ul>
        </div>
        {/* Advantages of 6 Dental Implant */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Advantages of <span className="text-[#036E64]">6 Dental Implant</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Enhanced Aesthetics: <span className="text-black"> Corrects discoloration, chips, cracks, and uneven shapes</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Durability: <span className="text-black">Long-lasting porcelain material withstands daily use</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Minimal Tooth Reduction: <span className="text-black"> Preserves natural tooth structure</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Stain-Resistance: <span className="text-black"> Porcelain veneers resist staining from food and drinks</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Quick Results: <span className="text-black"> Easy to care for—brush, floss, and maintain as normal</span>
            </li>
          </ul>
        </div>
        {/* Indications for 6 Dental Implant */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Indications for <span className="text-[#036E64]">6 Dental Implant</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Severely discolored or stained teeth unresponsive to whitening
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Chipped, cracked, or worn-down teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Misshapen or irregularly shaped teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Small gaps between teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Mild misalignment not requiring orthodontics
            </li>
          </ul>
        </div>
        {/* Limitations for 6 Dental Implant */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Limitations for<span className="text-[#036E64]">6 Dental Implant</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Poor oral health (active gum disease, untreated decay)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Teeth grinding/clenching (bruxism) that may damage veneers
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Significant enamel loss or erosion
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Active TMJ disorders
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Patients with budget limitations, as veneers are considered cosmetic
            </li>
          </ul>
        </div>
        {/* Stages of Treatment */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Stages of <span className="text-[#036E64]">Treatment</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Consultation & Examination <span className="text-black">– Oral evaluation and treatment planning, Discuss goals, shade options, and suitability</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Tooth Preparation <span className="text-black">– A thin layer of enamel is removed, Impressions or digital scans are taken</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Impression & Digital Scan<span className="text-black"> – Temporary veneers are placed for protection and aesthetics, Worn until permanent veneers are ready</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Crown Placement<span className="text-black"> – Permanent veneers are bonded using special adhesive, Adjustments made for fit, bite, and appearance</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Follow-up care<span className="text-black"> –Check-ups ensure veneers function properly, Regular oral hygiene helps maintain longevity</span>
            </li>
          </ul>
        </div>
        {/* Image section */}
        {/* <div className="flex items-center gap-[40px]">
          <img src="/root-3.png" alt="" className="w-[391px] h-[430px]" />
          <img src="/root-4.jpg" alt="" className="w-[391px] h-[430px]" />
          <img src="/root-5.png" alt="" className="w-[391px] h-[430px]" />
        </div> */}
        {/* Aftercare Tips*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            <span className="text-[#036E64]">Aftercare</span>Trips
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Brush and floss regularly to prevent gum problems
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Avoid chewing excessively hard objects (ice, pens, hard nuts)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Schedule regular dental visits for monitoring
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Use a night guard if teeth grinding is a concern
            </li>
          </ul>
        </div>
        <p className="text-black font-Poetsen text-[20px] font-light leading-normal"> Laminate veneers provide a fast, durable, and highly aesthetic solution for improving your smile. With minimal tooth preparation and natural-looking results, they are one of the most popular cosmetic dentistry treatments today.
        </p>
        {/* form */}
        <div className="flex w-full max-w-[790px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 flex-col items-center gap-4 sm:gap-5 md:gap-6 border-[2px] rounded-[20px] border-[#028D80] shadow-[0_0_20px_0_#036E64]">
          <h2 className="text-center text-black font-Montagu font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-normal">Get A Free Quote!</h2>
          {/* Name */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Full Name</h4>
            <Input
              placeholder="Full Name"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Email */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Email*</h4>
            <Input
              placeholder="Email"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Phone */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Phone*</h4>
            <Input
              placeholder="Phone"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Message */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Message*</h4>
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
              I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </p>
          </div>
        </div>
      </div>
    ),
    categories: ["treatments"],
  },
  {
    slug: "all-on-4-dental-implant",
    title: "All on 4 Dental Implant",
    mainDescription: "Cost-effective full-arch replacement using four implants.",
    thumbnail: "/all-on-4-dental-thum.png",
    description: "All on 4 Dental Implant, also known as dental veneers, are ultra-thin shells made of porcelain or composite resin that are bonded to the front surface of teeth. They are designed to enhance the appearance of discolored, chipped, cracked, misaligned, or gapped teeth. Veneers deliver quick, long-lasting results while maintaining a natural look and feel.",
    images: [
      "/all-on-4-dental-1.png",
      "/all-on-4-dental-2.png",
      // "/root-3.png",
      // "/root-4.jpg",
      // "/root-5.png",
    ],
    details: (
      <div className="flex flex-col items-start gap-[40px]">
        {/* Treatment Duration */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-bold leading-normal">
            Treatment <span className="text-[#036E64]">Duration</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Visit Required:</span> 2–3 appointments
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Average time:</span> 2–5 days
            </li>
          </ul>
        </div>
        {/* Advantages of 4 Dental Implant */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Advantages of <span className="text-[#036E64]">4 Dental Implant</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Enhanced Aesthetics: <span className="text-black"> Corrects discoloration, chips, cracks, and uneven shapes</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Durability: <span className="text-black">Long-lasting porcelain material withstands daily use</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Minimal Tooth Reduction: <span className="text-black"> Preserves natural tooth structure</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Stain-Resistance: <span className="text-black"> Porcelain veneers resist staining from food and drinks</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Quick Results: <span className="text-black"> Easy to care for—brush, floss, and maintain as normal</span>
            </li>
          </ul>
        </div>
        {/* Indications for 4 Dental Implant*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Indications for <span className="text-[#036E64]">4 Dental Implant</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Severely discolored or stained teeth unresponsive to whitening
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Chipped, cracked, or worn-down teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Misshapen or irregularly shaped teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Small gaps between teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Mild misalignment not requiring orthodontics
            </li>
          </ul>
        </div>
        {/* Limitations for 4 Dental Implant */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Limitations for<span className="text-[#036E64]">4 Dental Implant</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Poor oral health (active gum disease, untreated decay)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Teeth grinding/clenching (bruxism) that may damage veneers
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Significant enamel loss or erosion
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Active TMJ disorders
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Patients with budget limitations, as veneers are considered cosmetic
            </li>
          </ul>
        </div>
        {/* Stages of Treatment */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Stages of <span className="text-[#036E64]">Treatment</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Consultation & Examination <span className="text-black">– Oral evaluation and treatment planning, Discuss goals, shade options, and suitability</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Tooth Preparation <span className="text-black">– A thin layer of enamel is removed, Impressions or digital scans are taken</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Impression & Digital Scan<span className="text-black"> – Temporary veneers are placed for protection and aesthetics, Worn until permanent veneers are ready</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Crown Placement<span className="text-black"> – Permanent veneers are bonded using special adhesive, Adjustments made for fit, bite, and appearance</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Follow-up care<span className="text-black"> –Check-ups ensure veneers function properly, Regular oral hygiene helps maintain longevity</span>
            </li>
          </ul>
        </div>
        {/* Image section */}
        {/* <div className="flex items-center gap-[40px]">
          <img src="/root-3.png" alt="" className="w-[391px] h-[430px]" />
          <img src="/root-4.jpg" alt="" className="w-[391px] h-[430px]" />
          <img src="/root-5.png" alt="" className="w-[391px] h-[430px]" />
        </div> */}
        {/* Aftercare Tips*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            <span className="text-[#036E64]">Aftercare</span>Trips
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Brush and floss regularly to prevent gum problems
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Avoid chewing excessively hard objects (ice, pens, hard nuts)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Schedule regular dental visits for monitoring
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Use a night guard if teeth grinding is a concern
            </li>
          </ul>
        </div>
        <p className="text-black font-Poetsen text-[20px] font-light leading-normal"> Laminate veneers provide a fast, durable, and highly aesthetic solution for improving your smile. With minimal tooth preparation and natural-looking results, they are one of the most popular cosmetic dentistry treatments today.
        </p>
        {/* form */}
        <div className="flex w-full max-w-[790px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 flex-col items-center gap-4 sm:gap-5 md:gap-6 border-[2px] rounded-[20px] border-[#028D80] shadow-[0_0_20px_0_#036E64]">
          <h2 className="text-center text-black font-Montagu font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-normal">Get A Free Quote!</h2>
          {/* Name */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Full Name</h4>
            <Input
              placeholder="Full Name"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Email */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Email*</h4>
            <Input
              placeholder="Email"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Phone */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Phone*</h4>
            <Input
              placeholder="Phone"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Message */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Message*</h4>
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
              I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </p>
          </div>
        </div>
      </div>
    ),
    categories: ["treatments"],
  },
  {
    slug: "immediate-implant",
    title: "Immediate Implant",
    mainDescription: "Same-day implant placement for quick tooth replacement.",
    thumbnail: "/immediate-thum.png",
    description: "Immediate Implant, also known as dental veneers, are ultra-thin shells made of porcelain or composite resin that are bonded to the front surface of teeth. They are designed to enhance the appearance of discolored, chipped, cracked, misaligned, or gapped teeth. Veneers deliver quick, long-lasting results while maintaining a natural look and feel.",
    images: [
      "/immediate-1.png",
      "/immediate-2.png",
      // "/root-3.png",
      // "/root-4.jpg",
      // "/root-5.png",
    ],
    details: (
      <div className="flex flex-col items-start gap-[40px]">
        {/* Treatment Duration */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-bold leading-normal">
            Treatment <span className="text-[#036E64]">Duration</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Visit Required:</span> 2–3 appointments
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Average time:</span> 2–5 days
            </li>
          </ul>
        </div>
        {/* Advantages of Immediate Implant */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Advantages of <span className="text-[#036E64]">Immediate Implant</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Enhanced Aesthetics: <span className="text-black"> Corrects discoloration, chips, cracks, and uneven shapes</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Durability: <span className="text-black">Long-lasting porcelain material withstands daily use</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Minimal Tooth Reduction: <span className="text-black"> Preserves natural tooth structure</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Stain-Resistance: <span className="text-black"> Porcelain veneers resist staining from food and drinks</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Quick Results: <span className="text-black"> Easy to care for—brush, floss, and maintain as normal</span>
            </li>
          </ul>
        </div>
        {/* Indications for 4 Immediate Implant*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Indications for <span className="text-[#036E64]">Immediate Implant</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Severely discolored or stained teeth unresponsive to whitening
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Chipped, cracked, or worn-down teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Misshapen or irregularly shaped teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Small gaps between teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Mild misalignment not requiring orthodontics
            </li>
          </ul>
        </div>
        {/* Limitations for Immediate Implant */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Limitations for<span className="text-[#036E64]">Immediate Implant</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Poor oral health (active gum disease, untreated decay)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Teeth grinding/clenching (bruxism) that may damage veneers
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Significant enamel loss or erosion
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Active TMJ disorders
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Patients with budget limitations, as veneers are considered cosmetic
            </li>
          </ul>
        </div>
        {/* Stages of Treatment */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Stages of <span className="text-[#036E64]">Treatment</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Consultation & Examination <span className="text-black">– Oral evaluation and treatment planning, Discuss goals, shade options, and suitability</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Tooth Preparation <span className="text-black">– A thin layer of enamel is removed, Impressions or digital scans are taken</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Impression & Digital Scan<span className="text-black"> – Temporary veneers are placed for protection and aesthetics, Worn until permanent veneers are ready</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Crown Placement<span className="text-black"> – Permanent veneers are bonded using special adhesive, Adjustments made for fit, bite, and appearance</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Follow-up care<span className="text-black"> –Check-ups ensure veneers function properly, Regular oral hygiene helps maintain longevity</span>
            </li>
          </ul>
        </div>
        {/* Image section */}
        {/* <div className="flex items-center gap-[40px]">
          <img src="/root-3.png" alt="" className="w-[391px] h-[430px]" />
          <img src="/root-4.jpg" alt="" className="w-[391px] h-[430px]" />
          <img src="/root-5.png" alt="" className="w-[391px] h-[430px]" />
        </div> */}
        {/* Aftercare Tips*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            <span className="text-[#036E64]">Aftercare</span>Trips
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Brush and floss regularly to prevent gum problems
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Avoid chewing excessively hard objects (ice, pens, hard nuts)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Schedule regular dental visits for monitoring
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Use a night guard if teeth grinding is a concern
            </li>
          </ul>
        </div>
        <p className="text-black font-Poetsen text-[20px] font-light leading-normal"> Laminate veneers provide a fast, durable, and highly aesthetic solution for improving your smile. With minimal tooth preparation and natural-looking results, they are one of the most popular cosmetic dentistry treatments today.
        </p>
        {/* form */}
        <div className="flex w-full max-w-[790px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 flex-col items-center gap-4 sm:gap-5 md:gap-6 border-[2px] rounded-[20px] border-[#028D80] shadow-[0_0_20px_0_#036E64]">
          <h2 className="text-center text-black font-Montagu font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-normal">Get A Free Quote!</h2>
          {/* Name */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Full Name</h4>
            <Input
              placeholder="Full Name"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Email */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Email*</h4>
            <Input
              placeholder="Email"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Phone */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Phone*</h4>
            <Input
              placeholder="Phone"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Message */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Message*</h4>
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
              I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </p>
          </div>
        </div>
      </div>
    ),
    categories: ["treatments"],
  },
  {
    slug: "laser-teeth-whitening",
    title: "Laser Teeth Whitening",
    mainDescription: "Advanced whitening for a brighter, whiter smile.",
    thumbnail: "/laser-teeth-thum.png",
    description: "Laser Teeth Whitening, also known as dental veneers, are ultra-thin shells made of porcelain or composite resin that are bonded to the front surface of teeth. They are designed to enhance the appearance of discolored, chipped, cracked, misaligned, or gapped teeth. Veneers deliver quick, long-lasting results while maintaining a natural look and feel.",
    images: [
      "/laser-teeth-1.png",
      "/laser-teeth-2.png",
      // "/laser-teeth-3.png",
      // "/laser-teeth-4.png",
      // "/laser-teeth-5.png",
    ],
    details: (
      <div className="flex flex-col items-start gap-[40px]">
        {/* Treatment Duration */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-bold leading-normal">
            Treatment <span className="text-[#036E64]">Duration</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Visit Required:</span> 2–3 appointments
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Average time:</span> 2–5 days
            </li>
          </ul>
        </div>
        {/* Advantages of Laser Teeth Whitening*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Advantages of <span className="text-[#036E64]">Laser Teeth Whitening</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Enhanced Aesthetics: <span className="text-black"> Corrects discoloration, chips, cracks, and uneven shapes</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Durability: <span className="text-black">Long-lasting porcelain material withstands daily use</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Minimal Tooth Reduction: <span className="text-black"> Preserves natural tooth structure</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Stain-Resistance: <span className="text-black"> Porcelain veneers resist staining from food and drinks</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Quick Results: <span className="text-black"> Easy to care for—brush, floss, and maintain as normal</span>
            </li>
          </ul>
        </div>
        {/* Indications for Laser Teeth Whitening*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Indications for <span className="text-[#036E64]">Laser Teeth Whitening</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Severely discolored or stained teeth unresponsive to whitening
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Chipped, cracked, or worn-down teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Misshapen or irregularly shaped teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Small gaps between teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Mild misalignment not requiring orthodontics
            </li>
          </ul>
        </div>
        {/* Limitations for Laser Teeth Whitening*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Limitations for<span className="text-[#036E64]">Laser Teeth Whitening</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Poor oral health (active gum disease, untreated decay)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Teeth grinding/clenching (bruxism) that may damage veneers
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Significant enamel loss or erosion
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Active TMJ disorders
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Patients with budget limitations, as veneers are considered cosmetic
            </li>
          </ul>
        </div>
        {/* Stages of Treatment */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Stages of <span className="text-[#036E64]">Treatment</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Consultation & Examination <span className="text-black">– Oral evaluation and treatment planning, Discuss goals, shade options, and suitability</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Tooth Preparation <span className="text-black">– A thin layer of enamel is removed, Impressions or digital scans are taken</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Impression & Digital Scan<span className="text-black"> – Temporary veneers are placed for protection and aesthetics, Worn until permanent veneers are ready</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Crown Placement<span className="text-black"> – Permanent veneers are bonded using special adhesive, Adjustments made for fit, bite, and appearance</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Follow-up care<span className="text-black"> –Check-ups ensure veneers function properly, Regular oral hygiene helps maintain longevity</span>
            </li>
          </ul>
        </div>
        {/* Image section */}
        <div className="flex items-center gap-[40px]">
          <img src="/laser-teeth-3.png" alt="" className="w-[391px] h-[430px]" />
          <img src="/laser-teeth-4.png" alt="" className="w-[391px] h-[430px]" />
          <img src="/laser-teeth-5.png" alt="" className="w-[391px] h-[430px]" />
        </div>
        {/* Aftercare Tips*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            <span className="text-[#036E64]">Aftercare</span>Trips
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Brush and floss regularly to prevent gum problems
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Avoid chewing excessively hard objects (ice, pens, hard nuts)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Schedule regular dental visits for monitoring
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Use a night guard if teeth grinding is a concern
            </li>
          </ul>
        </div>
        <p className="text-black font-Poetsen text-[20px] font-light leading-normal"> Laminate veneers provide a fast, durable, and highly aesthetic solution for improving your smile. With minimal tooth preparation and natural-looking results, they are one of the most popular cosmetic dentistry treatments today.
        </p>
        {/* form */}
        <div className="flex w-full max-w-[790px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 flex-col items-center gap-4 sm:gap-5 md:gap-6 border-[2px] rounded-[20px] border-[#028D80] shadow-[0_0_20px_0_#036E64]">
          <h2 className="text-center text-black font-Montagu font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-normal">Get A Free Quote!</h2>
          {/* Name */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Full Name</h4>
            <Input
              placeholder="Full Name"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Email */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Email*</h4>
            <Input
              placeholder="Email"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Phone */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Phone*</h4>
            <Input
              placeholder="Phone"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Message */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Message*</h4>
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
              I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </p>
          </div>
        </div>
      </div>
    ),
    categories: ["treatments"],
  },
  {
    slug: "teeth-deep-cleaning",
    title: "Teeth Deep Cleaning",
    mainDescription: "Professional cleaning to remove tartar and plaque buildup.",
    thumbnail: "/teeth-deep-thum.png",
    description: "Teeth Deep Cleaning, also known as dental veneers, are ultra-thin shells made of porcelain or composite resin that are bonded to the front surface of teeth. They are designed to enhance the appearance of discolored, chipped, cracked, misaligned, or gapped teeth. Veneers deliver quick, long-lasting results while maintaining a natural look and feel.",
    images: [
      "/teeth-deep-1.png",
      "/teeth-deep-2.png",
      // "/teeth-deep-3.png",
      // "/teeth-deep-4.png",
      // "/teeth-deep-5.png",
    ],
    details: (
      <div className="flex flex-col items-start gap-[40px]">
        {/* Treatment Duration */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-bold leading-normal">
            Treatment <span className="text-[#036E64]">Duration</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Visit Required:</span> 2–3 appointments
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Average time:</span> 2–5 days
            </li>
          </ul>
        </div>
        {/* Advantages of Teeth Deep Cleaning */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Advantages of <span className="text-[#036E64]">Teeth Deep Cleaning</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Enhanced Aesthetics: <span className="text-black"> Corrects discoloration, chips, cracks, and uneven shapes</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Durability: <span className="text-black">Long-lasting porcelain material withstands daily use</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Minimal Tooth Reduction: <span className="text-black"> Preserves natural tooth structure</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Stain-Resistance: <span className="text-black"> Porcelain veneers resist staining from food and drinks</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Quick Results: <span className="text-black"> Easy to care for—brush, floss, and maintain as normal</span>
            </li>
          </ul>
        </div>
        {/* Indications for Teeth Deep Cleaning */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Indications for <span className="text-[#036E64]">Teeth Deep Cleaning</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Severely discolored or stained teeth unresponsive to whitening
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Chipped, cracked, or worn-down teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Misshapen or irregularly shaped teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Small gaps between teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Mild misalignment not requiring orthodontics
            </li>
          </ul>
        </div>
        {/* Limitations for Teeth Deep Cleaning */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Limitations for<span className="text-[#036E64]">Teeth Deep Cleaning</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Poor oral health (active gum disease, untreated decay)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Teeth grinding/clenching (bruxism) that may damage veneers
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Significant enamel loss or erosion
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Active TMJ disorders
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Patients with budget limitations, as veneers are considered cosmetic
            </li>
          </ul>
        </div>
        {/* Stages of Treatment */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Stages of <span className="text-[#036E64]">Treatment</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Consultation & Examination <span className="text-black">– Oral evaluation and treatment planning, Discuss goals, shade options, and suitability</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Tooth Preparation <span className="text-black">– A thin layer of enamel is removed, Impressions or digital scans are taken</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Impression & Digital Scan<span className="text-black"> – Temporary veneers are placed for protection and aesthetics, Worn until permanent veneers are ready</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Crown Placement<span className="text-black"> – Permanent veneers are bonded using special adhesive, Adjustments made for fit, bite, and appearance</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Follow-up care<span className="text-black"> –Check-ups ensure veneers function properly, Regular oral hygiene helps maintain longevity</span>
            </li>
          </ul>
        </div>
        {/* Image section */}
        <div className="flex items-center gap-[40px]">
          <img src="/teeth-deep-3.png" alt="" className="w-[391px] h-[430px]" />
          <img src="/teeth-deep-4.png" alt="" className="w-[391px] h-[430px]" />
          <img src="/teeth-deep-5.png" alt="" className="w-[391px] h-[430px]" />
        </div>
        {/* Aftercare Tips*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            <span className="text-[#036E64]">Aftercare</span>Trips
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Brush and floss regularly to prevent gum problems
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Avoid chewing excessively hard objects (ice, pens, hard nuts)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Schedule regular dental visits for monitoring
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Use a night guard if teeth grinding is a concern
            </li>
          </ul>
        </div>
        <p className="text-black font-Poetsen text-[20px] font-light leading-normal"> Laminate veneers provide a fast, durable, and highly aesthetic solution for improving your smile. With minimal tooth preparation and natural-looking results, they are one of the most popular cosmetic dentistry treatments today.
        </p>
        {/* form */}
        <div className="flex w-full max-w-[790px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 flex-col items-center gap-4 sm:gap-5 md:gap-6 border-[2px] rounded-[20px] border-[#028D80] shadow-[0_0_20px_0_#036E64]">
          <h2 className="text-center text-black font-Montagu font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-normal">Get A Free Quote!</h2>
          {/* Name */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Full Name</h4>
            <Input
              placeholder="Full Name"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Email */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Email*</h4>
            <Input
              placeholder="Email"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Phone */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Phone*</h4>
            <Input
              placeholder="Phone"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Message */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Message*</h4>
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
              I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </p>
          </div>
        </div>
      </div>
    ),
    categories: ["treatments"],
  },
  {
    slug: "composite-bonding",
    title: "Composite Bonding",
    mainDescription: "Quick aesthetic fix for chips, cracks, and gaps.",
    thumbnail: "/composite-thum.png",
    description: "Composite Bonding, also known as dental veneers, are ultra-thin shells made of porcelain or composite resin that are bonded to the front surface of teeth. They are designed to enhance the appearance of discolored, chipped, cracked, misaligned, or gapped teeth. Veneers deliver quick, long-lasting results while maintaining a natural look and feel.",
    images: [
      "/composite-1.png",
      "/composite-2.png",
      // "/composite-3.png",
      // "/composite-4.png",
      // "/composite-5.png",
    ],
    details: (
      <div className="flex flex-col items-start gap-[40px]">
        {/* Treatment Duration */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-bold leading-normal">
            Treatment <span className="text-[#036E64]">Duration</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Visit Required:</span> 2–3 appointments
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Average time:</span> 2–5 days
            </li>
          </ul>
        </div>
        {/* Advantages of Composite Bonding*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Advantages of <span className="text-[#036E64]">Composite Bonding</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Enhanced Aesthetics: <span className="text-black"> Corrects discoloration, chips, cracks, and uneven shapes</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Durability: <span className="text-black">Long-lasting porcelain material withstands daily use</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Minimal Tooth Reduction: <span className="text-black"> Preserves natural tooth structure</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Stain-Resistance: <span className="text-black"> Porcelain veneers resist staining from food and drinks</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Quick Results: <span className="text-black"> Easy to care for—brush, floss, and maintain as normal</span>
            </li>
          </ul>
        </div>
        {/* Indications for Composite Bonding */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Indications for <span className="text-[#036E64]">Composite Bonding</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Severely discolored or stained teeth unresponsive to whitening
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Chipped, cracked, or worn-down teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Misshapen or irregularly shaped teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Small gaps between teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Mild misalignment not requiring orthodontics
            </li>
          </ul>
        </div>
        {/* Limitations for Composite Bonding */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Limitations for<span className="text-[#036E64]">Composite Bonding</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Poor oral health (active gum disease, untreated decay)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Teeth grinding/clenching (bruxism) that may damage veneers
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Significant enamel loss or erosion
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Active TMJ disorders
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Patients with budget limitations, as veneers are considered cosmetic
            </li>
          </ul>
        </div>
        {/* Stages of Treatment */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Stages of <span className="text-[#036E64]">Treatment</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Consultation & Examination <span className="text-black">– Oral evaluation and treatment planning, Discuss goals, shade options, and suitability</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Tooth Preparation <span className="text-black">– A thin layer of enamel is removed, Impressions or digital scans are taken</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Impression & Digital Scan<span className="text-black"> – Temporary veneers are placed for protection and aesthetics, Worn until permanent veneers are ready</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Crown Placement<span className="text-black"> – Permanent veneers are bonded using special adhesive, Adjustments made for fit, bite, and appearance</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Follow-up care<span className="text-black"> –Check-ups ensure veneers function properly, Regular oral hygiene helps maintain longevity</span>
            </li>
          </ul>
        </div>
        {/* Image section */}
        <div className="flex items-center gap-[40px]">
          <img src="/composite-3.png" alt="" className="w-[391px] h-[430px]" />
          <img src="/composite-4.png" alt="" className="w-[391px] h-[430px]" />
          <img src="/composite-5.png" alt="" className="w-[391px] h-[430px]" />
        </div>
        {/* Aftercare Tips*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            <span className="text-[#036E64]">Aftercare</span>Trips
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Brush and floss regularly to prevent gum problems
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Avoid chewing excessively hard objects (ice, pens, hard nuts)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Schedule regular dental visits for monitoring
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Use a night guard if teeth grinding is a concern
            </li>
          </ul>
        </div>
        <p className="text-black font-Poetsen text-[20px] font-light leading-normal"> Laminate veneers provide a fast, durable, and highly aesthetic solution for improving your smile. With minimal tooth preparation and natural-looking results, they are one of the most popular cosmetic dentistry treatments today.
        </p>
        {/* form */}
        <div className="flex w-full max-w-[790px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 flex-col items-center gap-4 sm:gap-5 md:gap-6 border-[2px] rounded-[20px] border-[#028D80] shadow-[0_0_20px_0_#036E64]">
          <h2 className="text-center text-black font-Montagu font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-normal">Get A Free Quote!</h2>
          {/* Name */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Full Name</h4>
            <Input
              placeholder="Full Name"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Email */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Email*</h4>
            <Input
              placeholder="Email"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Phone */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Phone*</h4>
            <Input
              placeholder="Phone"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Message */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Message*</h4>
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
              I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </p>
          </div>
        </div>
      </div>
    ),
    categories: ["treatments"],
  },
  {
    slug: "bone-grafting",
    title: "Bone Grafting",
    mainDescription: "Strengthening jawbone for implant success.",
    thumbnail: "/bone-thum.png",
    description: "Bone Grafting, also known as dental veneers, are ultra-thin shells made of porcelain or composite resin that are bonded to the front surface of teeth. They are designed to enhance the appearance of discolored, chipped, cracked, misaligned, or gapped teeth. Veneers deliver quick, long-lasting results while maintaining a natural look and feel.",
    images: [
      "/bone-1.png",
      "/bone-2.png",
      // "/bone-3.png",
      // "/bone-4.png",
      // "/bone-5.png",
    ],
    details: (
      <div className="flex flex-col items-start gap-[40px]">
        {/* Treatment Duration */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-bold leading-normal">
            Treatment <span className="text-[#036E64]">Duration</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Visit Required:</span> 2–3 appointments
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Average time:</span> 2–5 days
            </li>
          </ul>
        </div>
        {/* Advantages of Bone Grafting */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Advantages of <span className="text-[#036E64]">Bone Grafting</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Enhanced Aesthetics: <span className="text-black"> Corrects discoloration, chips, cracks, and uneven shapes</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Durability: <span className="text-black">Long-lasting porcelain material withstands daily use</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Minimal Tooth Reduction: <span className="text-black"> Preserves natural tooth structure</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Stain-Resistance: <span className="text-black"> Porcelain veneers resist staining from food and drinks</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Quick Results: <span className="text-black"> Easy to care for—brush, floss, and maintain as normal</span>
            </li>
          </ul>
        </div>
        {/* Indications for Bone Grafting */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Indications for <span className="text-[#036E64]">Bone Grafting</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Severely discolored or stained teeth unresponsive to whitening
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Chipped, cracked, or worn-down teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Misshapen or irregularly shaped teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Small gaps between teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Mild misalignment not requiring orthodontics
            </li>
          </ul>
        </div>
        {/* Limitations for Bone Grafting */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Limitations for<span className="text-[#036E64]">Bone Grafting</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Poor oral health (active gum disease, untreated decay)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Teeth grinding/clenching (bruxism) that may damage veneers
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Significant enamel loss or erosion
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Active TMJ disorders
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Patients with budget limitations, as veneers are considered cosmetic
            </li>
          </ul>
        </div>
        {/* Stages of Treatment */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Stages of <span className="text-[#036E64]">Treatment</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Consultation & Examination <span className="text-black">– Oral evaluation and treatment planning, Discuss goals, shade options, and suitability</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Tooth Preparation <span className="text-black">– A thin layer of enamel is removed, Impressions or digital scans are taken</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Impression & Digital Scan<span className="text-black"> – Temporary veneers are placed for protection and aesthetics, Worn until permanent veneers are ready</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Crown Placement<span className="text-black"> – Permanent veneers are bonded using special adhesive, Adjustments made for fit, bite, and appearance</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Follow-up care<span className="text-black"> –Check-ups ensure veneers function properly, Regular oral hygiene helps maintain longevity</span>
            </li>
          </ul>
        </div>
        {/* Image section */}
        <div className="flex items-center gap-[40px]">
          <img src="/bone-3.png" alt="" className="w-[391px] h-[430px]" />
          <img src="/bone-4.png" alt="" className="w-[391px] h-[430px]" />
          <img src="/bone-5.png" alt="" className="w-[391px] h-[430px]" />
        </div>
        {/* Aftercare Tips*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            <span className="text-[#036E64]">Aftercare</span>Trips
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Brush and floss regularly to prevent gum problems
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Avoid chewing excessively hard objects (ice, pens, hard nuts)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Schedule regular dental visits for monitoring
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Use a night guard if teeth grinding is a concern
            </li>
          </ul>
        </div>
        <p className="text-black font-Poetsen text-[20px] font-light leading-normal"> Laminate veneers provide a fast, durable, and highly aesthetic solution for improving your smile. With minimal tooth preparation and natural-looking results, they are one of the most popular cosmetic dentistry treatments today.
        </p>
        {/* form */}
        <div className="flex w-full max-w-[790px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 flex-col items-center gap-4 sm:gap-5 md:gap-6 border-[2px] rounded-[20px] border-[#028D80] shadow-[0_0_20px_0_#036E64]">
          <h2 className="text-center text-black font-Montagu font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-normal">Get A Free Quote!</h2>
          {/* Name */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Full Name</h4>
            <Input
              placeholder="Full Name"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Email */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Email*</h4>
            <Input
              placeholder="Email"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Phone */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Phone*</h4>
            <Input
              placeholder="Phone"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Message */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Message*</h4>
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
              I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </p>
          </div>
        </div>
      </div>
    ),
    categories: ["treatments"],
  },
  {
    slug: "sinus-lifting",
    title: "Sinus Lifting",
    mainDescription: "Creating space for secure upper jaw implants.",
    thumbnail: "/sinus-thum.png",
    description: "Sinus Lifting, also known as dental veneers, are ultra-thin shells made of porcelain or composite resin that are bonded to the front surface of teeth. They are designed to enhance the appearance of discolored, chipped, cracked, misaligned, or gapped teeth. Veneers deliver quick, long-lasting results while maintaining a natural look and feel.",
    images: [
      "/sinus-1.png",
      "/sinus-2.png",
      // "/sinus-3.png",
      // "/sinus-4.png",
      // "/sinus-5.png",
    ],
    details: (
      <div className="flex flex-col items-start gap-[40px]">
        {/* Treatment Duration */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-bold leading-normal">
            Treatment <span className="text-[#036E64]">Duration</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Visit Required:</span> 2–3 appointments
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Average time:</span> 2–5 days
            </li>
          </ul>
        </div>
        {/* Advantages of Sinus Lifting */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Advantages of <span className="text-[#036E64]">Sinus Lifting</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Enhanced Aesthetics: <span className="text-black"> Corrects discoloration, chips, cracks, and uneven shapes</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Durability: <span className="text-black">Long-lasting porcelain material withstands daily use</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Minimal Tooth Reduction: <span className="text-black"> Preserves natural tooth structure</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Stain-Resistance: <span className="text-black"> Porcelain veneers resist staining from food and drinks</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Quick Results: <span className="text-black"> Easy to care for—brush, floss, and maintain as normal</span>
            </li>
          </ul>
        </div>
        {/* Indications for Sinus Lifting */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Indications for <span className="text-[#036E64]">Sinus Lifting</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Severely discolored or stained teeth unresponsive to whitening
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Chipped, cracked, or worn-down teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Misshapen or irregularly shaped teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Small gaps between teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Mild misalignment not requiring orthodontics
            </li>
          </ul>
        </div>
        {/* Limitations for Sinus Lifting*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Limitations for<span className="text-[#036E64]">Sinus Lifting</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Poor oral health (active gum disease, untreated decay)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Teeth grinding/clenching (bruxism) that may damage veneers
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Significant enamel loss or erosion
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Active TMJ disorders
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Patients with budget limitations, as veneers are considered cosmetic
            </li>
          </ul>
        </div>
        {/* Stages of Treatment */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Stages of <span className="text-[#036E64]">Treatment</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Consultation & Examination <span className="text-black">– Oral evaluation and treatment planning, Discuss goals, shade options, and suitability</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Tooth Preparation <span className="text-black">– A thin layer of enamel is removed, Impressions or digital scans are taken</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Impression & Digital Scan<span className="text-black"> – Temporary veneers are placed for protection and aesthetics, Worn until permanent veneers are ready</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Crown Placement<span className="text-black"> – Permanent veneers are bonded using special adhesive, Adjustments made for fit, bite, and appearance</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Follow-up care<span className="text-black"> –Check-ups ensure veneers function properly, Regular oral hygiene helps maintain longevity</span>
            </li>
          </ul>
        </div>
        {/* Image section */}
        <div className="flex items-center gap-[40px]">
          <img src="/sinus-3.png" alt="" className="w-[391px] h-[430px]" />
          <img src="/sinus-4.png" alt="" className="w-[391px] h-[430px]" />
          <img src="/sinus-5.png" alt="" className="w-[391px] h-[430px]" />
        </div>
        {/* Aftercare Tips*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            <span className="text-[#036E64]">Aftercare</span>Trips
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Brush and floss regularly to prevent gum problems
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Avoid chewing excessively hard objects (ice, pens, hard nuts)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Schedule regular dental visits for monitoring
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Use a night guard if teeth grinding is a concern
            </li>
          </ul>
        </div>
        <p className="text-black font-Poetsen text-[20px] font-light leading-normal"> Laminate veneers provide a fast, durable, and highly aesthetic solution for improving your smile. With minimal tooth preparation and natural-looking results, they are one of the most popular cosmetic dentistry treatments today.
        </p>
        {/* form */}
        <div className="flex w-full max-w-[790px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 flex-col items-center gap-4 sm:gap-5 md:gap-6 border-[2px] rounded-[20px] border-[#028D80] shadow-[0_0_20px_0_#036E64]">
          <h2 className="text-center text-black font-Montagu font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-normal">Get A Free Quote!</h2>
          {/* Name */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Full Name</h4>
            <Input
              placeholder="Full Name"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Email */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Email*</h4>
            <Input
              placeholder="Email"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Phone */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Phone*</h4>
            <Input
              placeholder="Phone"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Message */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Message*</h4>
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
              I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </p>
          </div>
        </div>
      </div>
    ),
    categories: ["treatments"],
  },
  {
    slug: "tooth-filling",
    title: "Tooth Filling",
    mainDescription: "Restores tooth structure while preventing decay.",
    thumbnail: "/tooth-thum.png",
    description: "Tooth Filling, also known as dental veneers, are ultra-thin shells made of porcelain or composite resin that are bonded to the front surface of teeth. They are designed to enhance the appearance of discolored, chipped, cracked, misaligned, or gapped teeth. Veneers deliver quick, long-lasting results while maintaining a natural look and feel.",
    images: [
      "/tooth-1.png",
      "/tooth-2.png",
      // "/tooth-3.png",
      // "/tooth-4.png",
      // "/tooth-5.png",
    ],
    details: (
      <div className="flex flex-col items-start gap-[40px]">
        {/* Treatment Duration */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-bold leading-normal">
            Treatment <span className="text-[#036E64]">Duration</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Visit Required:</span> 2–3 appointments
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              <span className="text-[#036E64]">Average time:</span> 2–5 days
            </li>
          </ul>
        </div>
        {/* Advantages of Tooth Filling */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Advantages of <span className="text-[#036E64]">Tooth Filling</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Enhanced Aesthetics: <span className="text-black"> Corrects discoloration, chips, cracks, and uneven shapes</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Durability: <span className="text-black">Long-lasting porcelain material withstands daily use</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Minimal Tooth Reduction: <span className="text-black"> Preserves natural tooth structure</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Stain-Resistance: <span className="text-black"> Porcelain veneers resist staining from food and drinks</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Quick Results: <span className="text-black"> Easy to care for—brush, floss, and maintain as normal</span>
            </li>
          </ul>
        </div>
        {/* Indications for Tooth Filling */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Indications for <span className="text-[#036E64]">Tooth Filling</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Severely discolored or stained teeth unresponsive to whitening
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Chipped, cracked, or worn-down teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Misshapen or irregularly shaped teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Small gaps between teeth
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Mild misalignment not requiring orthodontics
            </li>
          </ul>
        </div>
        {/* Limitations for Tooth Filling */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Limitations for<span className="text-[#036E64]">Tooth Filling</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Poor oral health (active gum disease, untreated decay)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Teeth grinding/clenching (bruxism) that may damage veneers
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Significant enamel loss or erosion
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Active TMJ disorders
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Patients with budget limitations, as veneers are considered cosmetic
            </li>
          </ul>
        </div>
        {/* Stages of Treatment */}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            Stages of <span className="text-[#036E64]">Treatment</span>
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Consultation & Examination <span className="text-black">– Oral evaluation and treatment planning, Discuss goals, shade options, and suitability</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Tooth Preparation <span className="text-black">– A thin layer of enamel is removed, Impressions or digital scans are taken</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Impression & Digital Scan<span className="text-black"> – Temporary veneers are placed for protection and aesthetics, Worn until permanent veneers are ready</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Crown Placement<span className="text-black"> – Permanent veneers are bonded using special adhesive, Adjustments made for fit, bite, and appearance</span>
            </li>
            <li className="text-[#036E64] font-Poetsen text-[20px] font-light leading-normal">
              Follow-up care<span className="text-black"> –Check-ups ensure veneers function properly, Regular oral hygiene helps maintain longevity</span>
            </li>
          </ul>
        </div>
        {/* Image section */}
        <div className="flex items-center gap-[40px]">
          <img src="/tooth-3.png" alt="" className="w-[391px] h-[430px]" />
          <img src="/tooth-4.png" alt="" className="w-[391px] h-[430px]" />
          <img src="/tooth-5.png" alt="" className="w-[391px] h-[430px]" />
        </div>
        {/* Aftercare Tips*/}
        <div className="flex flex-col items-start gap-[8px]">
          <h2 className="text-black capitalize font-Montagu text-[34px] font-medium leading-normal">
            <span className="text-[#036E64]">Aftercare</span>Trips
          </h2>
          <ul className="flex flex-col items-start">
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Brush and floss regularly to prevent gum problems
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Avoid chewing excessively hard objects (ice, pens, hard nuts)
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Schedule regular dental visits for monitoring
            </li>
            <li className="text-black font-Poetsen text-[20px] font-light leading-normal">
              Use a night guard if teeth grinding is a concern
            </li>
          </ul>
        </div>
        <p className="text-black font-Poetsen text-[20px] font-light leading-normal"> Laminate veneers provide a fast, durable, and highly aesthetic solution for improving your smile. With minimal tooth preparation and natural-looking results, they are one of the most popular cosmetic dentistry treatments today.
        </p>
        {/* form */}
        <div className="flex w-full max-w-[790px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 flex-col items-center gap-4 sm:gap-5 md:gap-6 border-[2px] rounded-[20px] border-[#028D80] shadow-[0_0_20px_0_#036E64]">
          <h2 className="text-center text-black font-Montagu font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-normal">Get A Free Quote!</h2>
          {/* Name */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Full Name</h4>
            <Input
              placeholder="Full Name"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Email */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Email*</h4>
            <Input
              placeholder="Email"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Phone */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Phone*</h4>
            <Input
              placeholder="Phone"
              className="w-full rounded-[12px] border border-black px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] placeholder:font-Montagu placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-black"
            />
          </div>
          {/* Message */}
          <div className="flex w-full flex-col items-start gap-[6px] sm:gap-[8px]">
            <h4 className="text-black font-Montagu text-[16px] sm:text-[18px] font-normal leading-normal">Message*</h4>
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
              I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </p>
          </div>
        </div>
      </div>
    ),
    categories: ["treatments"],
  },
];

export default productsList;
