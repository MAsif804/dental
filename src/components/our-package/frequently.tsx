
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const CardTitle = [
    {
        id: 1,
        title: "How often should I visit the dentist?",
        describe:"It is recommended to visit the dentist every six months for a routine check-up and cleaning.However, some individuals may need more frequent visits based on their oral health condition.",
    },
    {
        id: 2,
        title: "Does teeth whitening damage enamel?",
        describe:"No, professional teeth whitening performed by dentist is safe and does not damage enamel.However,overuse of over-the-counter whitening products may cause sensitivity.",
    },
    {
        id: 3,
        title: "What should I do in a dental emergency?",
        describe:"If you experience severe tooth pain, a broken tooth, or bleeding, contact us immediately for an emergency appointment.If a tooth is knocked out, try to place it back in the socket or store it in milk and visit us as soon as possible.",
    },
    {
        id: 4,
        title: "Do you offer treatments for sensitive teeth?",
        describe:"Yes, we provide treatments for sensitive teeth, including fluoride treatments, desensitizing toothpaste recommendations, and gum protection solutions",
    },
    {
        id: 5,
        title: "What payment options do you accept?",
        describe:"We accept cash, credit/debit cards, and most insurance plans. We also offer flexible payment plans for certain treatments.",
    },
    {
        id: 6,
        title: "At what age should children have their first dental visit?",
        describe:"Children should visit the dentist by their first birthday or within six months after their first tooth appears. Early visits help establish good oral health habits",
    },
    {
        id: 7,
        title: "Do you offer sedation for anxious patients?",
        describe:"Yes, we provide sedation options such as nitrous oxide (laughing gas) and oral sedation to ensure a comfortable experience for anxious patients.",
    },
    {
        id: 8,
        title: "How can I prevent cavities?",
        describe:"Brush your teeth twice a day, floss daily,avoid sugary foods and drinks, and visit your dentist regularly for cleanings and check-ups.",
    },
]

const Frequently = () => {
    return (
        <section
            style={{
                backgroundImage: "url('/frequenty.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="relative w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[88px] py-10 sm:py-[35px] flex flex-col items-center overflow-hidden bg-no-repeat"
        >
            <div className="relative z-10 w-full max-w-[900px] flex flex-col items-center gap-6 sm:gap-8">
                <div className="flex w-full flex-col items-center gap-2 sm:gap-3">
                    <h6 className="text-black font-Montagu text-2xl sm:text-3xl md:text-[40px] lg:text-[48px] font-semibold text-center">
                        Frequently Asked Questions (FAQ)
                    </h6>
                </div>
                <div className="w-full">
                    <Accordion type="single" collapsible className="w-full">
                        {CardTitle.map((item, idx) => (
                            <AccordionItem className="w-full border-none" key={item.id} value={item.id.toString()}>
                                <AccordionTrigger className="text-black w-full font-Montagu text-base sm:text-lg md:text-xl lg:text-[22px] leading-relaxed font-semibold px-2 sm:px-3 md:px-4 lg:px-0">
                                    <span className="flex items-center gap-2">
                                        <span className="font-bold">{idx + 1}.</span>
                                        <span>{item.title}</span>
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="text-black font-Poetsen text-sm sm:text-base md:text-[18px] text-left leading-relaxed px-2 sm:px-3 md:px-4 lg:px-0">
                                    {item.describe}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};
export default Frequently;
