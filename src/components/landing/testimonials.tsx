import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
    {
        text: "Absolutely amazing service! The staff is super friendly, and the atmosphere is very welcoming. I felt completely at ease throughout my visit. Highly recommended!",
        name: "James Anderson",
        location: "Jakarta",
        image: "/patient1.jpg" // Replace with actual image path
    },
    {
        text: "Best dental experience ever! Everything was explained clearly, and my concerns were addressed. I couldn't be happier with the results!",
        name: "Michael Brown",
        location: "Jakarta",
        image: "/patient2.jpg"
    },
    {
        text: "A fantastic clinic! The process was smooth, pain-free, and very efficient. I'm excited for my next visit already!",
        name: "David Wilson",
        location: "Jakarta",
        image: "/patient3.jpg"
    },
    {
        text: "Professional, caring, and skilled! The entire team made me feel comfortable and confident. I highly recommend this clinic to anyone!",
        name: "Sarah Johnson",
        location: "Jakarta",
        image: "/patient2.jpg"
    }
];

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Current testimonial only (single card display)
    const current = testimonials[currentIndex];

    // For desktop, show three visible testimonials in a grid
    const getVisibleTestimonials = () => {
        const visible = [] as typeof testimonials;
        for (let i = 0; i < 3; i++) {
            visible.push(testimonials[(currentIndex + i) % testimonials.length]);
        }
        return visible;
    };

    return (
        <section className="relative w-full min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 px-4 sm:px-6 md:px-10 lg:px-[88px]">
            <div className="w-full max-w-[1440px] mx-auto">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold font-Montagu leading-tight">
                            What Our <span className="text-[#4A9B8E]">Happy</span>
                            <br />
                            <span className="text-[#4A9B8E]">Patients</span> Say
                        </h2>
                    </div>

                    {/* Rating Badge */}
                    <div className="flex flex-col items-center gap-2 bg-white rounded-2xl shadow-lg p-6 min-w-[200px]">
                        <div className="flex items-center gap-2">
                            <svg className="w-8 h-8" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                            <span className="text-3xl font-bold">5.0</span>
                        </div>
                        <div className="text-center">
                            <p className="font-semibold text-sm">Customer Rating</p>
                            <p className="text-xs text-gray-600">(Google Reviews)</p>
                        </div>
                    </div>
                </div>

                {/* Testimonials Carousel */}
                <div className="relative">
                    {/* Mobile/Tablet: Single card with arrows */}
                    <div className="flex items-center justify-center gap-6 mb-12 lg:hidden">
                        {/* Previous Button */}
                        <button
                            onClick={prevTestimonial}
                            className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-[#4A9B8E] text-[#4A9B8E] hover:bg-[#4A9B8E] hover:text-white transition-all duration-300 shadow-md"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Single Testimonial Card */}
                        <Card className="flex flex-col items-center justify-between gap-6 p-8 sm:p-10 md:p-12 bg-[#88C3BA] rounded-[40px] shadow-xl w-full max-w-[360px] sm:max-w-[420px] md:max-w-[520px] min-h-[420px]">
                            <p className="text-black font-semibold text-center text-base sm:text-lg leading-relaxed flex-grow font-Poetsen">
                                "{current.text}"
                            </p>

                            <div className="flex flex-col items-center gap-4">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                    <img
                                        src={current.image}
                                        alt={current.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%234A9B8E'/%3E%3C/svg%3E";
                                        }}
                                    />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-bold text-lg sm:text-xl font-Montagu">{current.name}</h4>
                                    <p className="text-sm font-Poetsen">{current.location}</p>
                                </div>
                            </div>
                        </Card>

                        {/* Next Button */}
                        <button
                            onClick={nextTestimonial}
                            className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-[#4A9B8E] text-[#4A9B8E] hover:bg-[#4A9B8E] hover:text-white transition-all duration-300 shadow-md"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Desktop: Three-card grid with arrows */}
                    <div className="hidden lg:flex items-center justify-center gap-6 mb-12">
                        <button
                            onClick={prevTestimonial}
                            className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-[#4A9B8E] text-[#4A9B8E] hover:bg-[#4A9B8E] hover:text-white transition-all duration-300 shadow-md"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <div className="grid grid-cols-3 gap-8 flex-1 max-w-6xl">
                            {getVisibleTestimonials().map((testimonial, index) => (
                                <Card
                                    key={index}
                                    className="flex flex-col items-center justify-between gap-6 p-12 bg-[#88C3BA] rounded-[40px] shadow-xl min-h-[420px] w-[345px] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                                >
                                    <p className="text-black font-semibold text-center text-base leading-relaxed flex-grow font-Poetsen">
                                        "{testimonial.text}"
                                    </p>

                                    <div className="flex flex-col items-center gap-4">
                                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%234A9B8E'/%3E%3C/svg%3E";
                                                }}
                                            />
                                        </div>
                                        <div className="text-center">
                                            <h4 className="font-bold text-lg font-Montagu">{testimonial.name}</h4>
                                            <p className="text-sm font-Poetsen">{testimonial.location}</p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-[#4A9B8E] text-[#4A9B8E] hover:bg-[#4A9B8E] hover:text-white transition-all duration-300 shadow-md"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-16">
                    <div className="flex items-center gap-3">
                        <p className="text-2xl sm:text-3xl md:text-4xl font-Poetsen">
                            Patient Satisfaction: <span className="font-bold">99%</span> of our clients love their results!💙
                        </p>
                        {/* <Heart className="w-8 h-8 text-blue-500 fill-blue-500" />  */}
                    </div>
                    <button className="px-8 py-3 border-2 border-black rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 font-Lancelot text-lg">
                        Read More Reviews
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;