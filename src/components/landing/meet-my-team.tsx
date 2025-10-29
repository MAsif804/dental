import { useEffect, useState } from "react";
import { Card } from "../ui/card";

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
    const [activeIndex, setActiveIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(false);
    
    // Enable auto-move only on mobile/tablet (below lg: 1024px)
    useEffect(() => {
        const mq = window.matchMedia('(min-width: 1024px)');
        const update = () => setAutoPlay(!mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    // Auto advance slider when autoPlay is enabled
    useEffect(() => {
        if (!autoPlay) return;
        const id = setInterval(() => {
            setActiveIndex((i) => (i + 1) % CardTitle.length);
        }, 3000);
        return () => clearInterval(id);
    }, [autoPlay, activeIndex]);
    const active = CardTitle[activeIndex];

    return (
        <section
            style={{
                backgroundImage: "url('/meet-my-team.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="relative w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[88px] py-10 sm:py-[35px] flex flex-col items-center overflow-hidden bg-no-repeat"
        >
            {/* gradient corner to mirror reference look */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/40 via-teal-700/30 to-white/40" />

            <div className="relative z-10 max-w-[1440px] mx-auto w-full flex flex-col items-center gap-6 sm:gap-8">
                <div className="flex w-full flex-col items-center gap-2 sm:gap-3">
                    <h6 className="text-black font-Montagu text-3xl sm:text-4xl md:text-[48px] lg:text-[56px] font-semibold text-center">
                        Meet Our Team
                    </h6>
                    <p className="text-black font-Montagu text-base sm:text-lg md:text-xl text-center">
                        Experienced & Caring Professionals
                    </p>
                </div>

                {/* Mobile & Tablet: Single-card slider */}
                <div className="flex flex-col items-center gap-3 lg:hidden">
                    <Card
                        key={active.id}
                        className="w-full max-w-[360px] sm:max-w-[420px] md:max-w-[500px] rounded-[40px] overflow-hidden border-none shadow-xl bg-black"
                    >
                        <img
                            src={active.imag}
                            alt={active.title}
                            className="w-full h-[380px] sm:h-[420px] md:h-[480px] object-cover"
                        />
                        <div className="bg-black px-6 py-5">
                            <p className="text-white font-Montagu text-xl sm:text-2xl md:text-[26px] text-center">
                                {active.title}
                            </p>
                        </div>
                    </Card>

                    {/* Dot indicators */}
                    <div className="flex items-center gap-3 mt-2">
                        {CardTitle.map((_, i) => (
                            <button
                                key={i}
                                aria-label={`Show team member ${i + 1}`}
                                onClick={() => setActiveIndex(i)}
                                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                    activeIndex === i ? "bg-[#0EA5A6]" : "bg-gray-400/60"
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Desktop: Grid of cards */}
                <div className="hidden lg:grid w-full grid-cols-3 gap-6">
                    {CardTitle.map((member) => (
                        <Card key={member.id} className="rounded-[40px] overflow-hidden border-none shadow-xl bg-black">
                            <img src={member.imag} alt={member.title} className="w-full h-[260px] lg:h-[320px] object-cover" />
                            <div className="bg-black px-5 py-4">
                                <p className="text-white font-Montagu text-lg lg:text-xl text-center">{member.title}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default MeetMyTeam;
