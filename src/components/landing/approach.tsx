

export default function Approach() {
    return (
        <section className="flex flex-col w-full max-w-[1440px] mx-auto px-[88px] py-[45px] gap-[30px] items-center bg-[#1A2236]">
            <h2 className="text-[#FDED1B] font-Inter text-[35px] font-bold leading-[21px]">Zero Trust Approach</h2>
            <div className="flex flex-col items-center gap-[11px]">
                <img src="/apporach-1.png" alt="" className=" h-[500px] " />
                <p className="text-[#CACACA] text-center font-Inter text-[22px] font-normal leading-[21px] underline cursor-pointer">DoD Zero Trust Capabilities</p>
            </div>
            <div className="flex w-full flex-col items-center gap-[11px]">
                <img src="/apporach-2.png" alt="" className=" w-full h-[514px] " />
                <p className="text-[#CACACA] text-center font-Inter text-[22px] font-normal leading-[21px] underline cursor-pointer">Zero Trust Target Level</p>
            </div>
        </section>
    );
}