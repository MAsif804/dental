import { Card, CardContent } from "../ui/card";

const CardTitle = [
    {
        id: 1,
        title: "James Anderson",
        imag: "/team-1.jpg"
    },
    {
        id: 2,
        title: "David Wilson ",
        imag: "/team-2.jpg"
    },
    {
        id: 3,
        title: "Michael Brown",
        imag: "/team-3.jpg"
    },
    {
        id: 4,
        title: "Daniel Smith",
        imag: "/team-4.jpg"
    },
    {
        id: 5,
        title: "William Carter",
        imag: "/team-5.jpg"
    },
    {
        id: 6,
        title: "Robert Johnson",
        imag: "/team-6.jpg"
    },
]

const MeetMyTeam = () => {
    return (
        <section
            style={{
                backgroundImage: "url('/meet-my-team.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="flex w-full  mx-auto px-4 sm:px-6 md:px-8 lg:px-[88px] py-8 sm:py-[35px] flex-col md:flex-row justify-between items-center gap-8 md:gap-10 lg:gap-12  overflow-hidden bg-no-repeat"
        >
            <div className="flex w-full flex-col items-start sm:items-center md:items-center gap-4 sm:gap-5 md:gap-[40px]">
                <div className="flex w-full flex-col items-center gap-3 sm:gap-[15px]">
                    <h6 className="text-black font-Montagu text-2xl sm:text-3xl md:text-[64px] font-semibold leading-normal sm:leading-normal text-center">
                        Meet Our Team
                    </h6>
                    <p className="text-black font-Montagu text-base sm:text-lg md:text-xl lg:text-[22px] text-center leading-relaxed sm:leading-[26px] font-normal px-2 sm:px-4 md:px-8 lg:px-16">
                        Experienced & Caring Professionals
                    </p>
                </div>
                <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-[40px]">
                    {CardTitle.map((item) => (
                        <Card
                            key={item.id} className="relative bg-[#000] flex flex-col items-center justify-center p-none gap-2 sm:gap-3 md:gap-[16px] w-[350px] h-[392px]  border-none rounded-[46px]">
                            <CardContent
                                style={{
                                    boxShadow: "-3px -3px 4px 0 rgba(0, 0, 0, 0.25), 0 96px 0 0 #000",
                                }}
                                className="flex p-0 flex-col items-start gap-2 sm:gap-3 md:gap-[16px]">
                                <img src={item.imag} alt={item.title} className="absolute top-[0px] left-0 rounded-[46px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[350px] md:h-[300px]" />
                                <p className="absolute bottom-[25px] left-[15%] text-white font-Montagu text-sm sm:text-base md:text-[26px] text-center sm:text-center md:text-center leading-relaxed sm:leading-normal font-semibold">

                                    {item.title}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </section >
    );
};
export default MeetMyTeam;
