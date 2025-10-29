import productsList from "@/data/products-list";
import { Card } from "../ui/card";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const DentalTreatments = () => {
    const navigate = useNavigate();
    const Treatments = productsList.filter((p) => p.categories?.includes("treatments"));
    return (
        <section className=" w-full flex flex-col items-center  p-[48px] overflow-hidden">
            <div className="w-full max-w-[1440px] flex flex-col items-center gap-[48px] mx-auto">
                {/* headeing */}
                <div className="w-ful flex flex-col items-center gap-[8px]">
                    <h2 className="text-black font-Montagu text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-normal text-center">
                        Dental <span className="text-[#4A9B8E]">Treatments</span>
                    </h2>
                    <p className="text-black font-Poetsen text-[20px] text-center font-normal leading-normal">
                        Our dental treatments are designed to combine advanced technology with expert care. A team of skilled and
                        <br />
                        experienced dentists ensures that every patient receives personalized solutions, whether it’s cosmetic
                        <br />
                        enhancements, restorative procedures, or routine dental care. With a focus on precision, comfort, and safety,
                        <br />
                        we deliver treatments that not only improve oral health but also create confident, beautiful smiles.
                    </p>
                </div>
                {/* Details */}
                <div className="flex flex-wrap gap-[24px] justify-center items-center w-full ">
                    {Treatments.map((item) => (
                        <Card
                            key={item.slug}
                            className=" flex w-[calc(25%-0px)] flex-col justify-center items-center gap-[16px] rounded-[46px] border-none bg-[#036E648C]  cursor-pointer shadow-[0_4px_4px_0_rgba(0,0,0,0.25),0_0_4px_1px_rgba(0,0,0,0.15)] backdrop-blur-[2.5px] px-[19px] py-[18px]"
                            onClick={() => navigate(`/treatments/${item.slug}`)}
                        >
                            <img
                                src={item.thumbnail}
                                alt=""
                                className=" h-[263px] rounded-[46px] object-cover"
                            />
                            <div className="flex  flex-col items-center gap-[18px]">
                                <div className="flex flex-col items-center gap-[4px]">
                                    <h4 className="text-black whitespace-nowrap text-center font-Montagu text-[26px] font-semibold leading-normal">
                                        {item.title}
                                    </h4>
                                    <p className="text-black text-center font-Poetsen text-[20px] font-normal leading-normal">
                                        {item.mainDescription}
                                    </p>
                                </div>
                                <Button
                                    className="flex h-[45px] w-[250px] justify-between items-center px-[20px] py-[9px] bg-transparent hover:bg-transparent rounded-[20px] border-[3px] border-white"
                                >
                                    <span className="text-white font-Langar text-[20px] font-normal leading-normal capitalize">
                                        More Information
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                                        <path d="M23.7334 12.1066C24.3192 11.5208 24.3192 10.571 23.7334 9.98524L14.1874 0.439297C13.6017 -0.14649 12.6519 -0.14649 12.0661 0.439297C11.4803 1.02508 11.4803 1.97483 12.0661 2.56062L20.5514 11.0459L12.0661 19.5312C11.4803 20.117 11.4803 21.0667 12.0661 21.6525C12.6519 22.2383 13.6017 22.2383 14.1874 21.6525L23.7334 12.1066ZM0 11.0459L-8.4029e-09 12.5459L22.6727 12.5459L22.6727 11.0459L22.6727 9.5459L8.4029e-09 9.5459L0 11.0459Z" fill="white" />
                                    </svg>
                                </Button>
                            </div>
                        </Card>
                    ))}

                </div>
            </div>
        </section>
    );
};
export default DentalTreatments;