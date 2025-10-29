import Hero from "@/components/landing/hero";
import ZeroTrust from "@/components/landing/why-choose";
import ZeroTenants from "@/components/landing/about-us";
import Benefite from "@/components/landing/meet-my-team";
// import Approach from "@/components/landing/approach";
// import GetTouch from "@/components/landing/get-touch";
import Frequently from "@/components/landing/frequently";
import OurServices from "@/components/landing/our-services";
import TestimonialsSection from "@/components/landing/testimonials";
import Creating from "@/components/landing/creating";
const LandingPage = () => {
  return (
    <div className="w-full h-full">
     <Hero />
     <ZeroTrust />
     <ZeroTenants />
     <Benefite />
     <Frequently />
     <OurServices />
     <TestimonialsSection />
     <Creating />
     {/* <GetTouch /> */}
     
    </div>
  );
};

export default LandingPage;
