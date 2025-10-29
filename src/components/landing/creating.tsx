const Creating = () => {
    return (
        <section className="relative w-full min-h-[560px] md:min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/creating.png')`, // Replace with your actual image path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/50 via-teal-700/40 to-teal-600/20" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[88px] py-16 sm:py-20">
                <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10">
                    {/* Main Heading */}
                    <div className="text-center">
                        <h1 className="text-white font-Montagu text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight">
                            Creating Healthy,
                        </h1>
                        <h1 className="text-white font-Montagu text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight">
                            Beautiful Smiles for All
                        </h1>
                        <h1 className="text-white font-Montagu text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight">
                            Ages
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <div className="max-w-[780px] text-center">
                        <p className="text-white font-Poetsen text-base sm:text-lg md:text-xl leading-relaxed font-semibold">
                            Providing Compassionate Dental Care for Every Generation.
                            <br />
                            Your family's oral health is our priority. We offer
                            expert dental services tailored to bring you confident,
                            healthy smiles.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="w-full max-w-[640px] mt-2 sm:mt-4">
                        <button className="w-full bg-white text-black font-Lancelot text-lg sm:text-xl md:text-[22px] font-semibold py-4 sm:py-5 px-6 rounded-[24px] shadow-xl hover:bg-gray-50 transition-all duration-300">
                            Book your appointment today
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative Bottom Wave (Optional) */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/20 to-transparent"></div>
        </section>
    );
};

export default Creating;