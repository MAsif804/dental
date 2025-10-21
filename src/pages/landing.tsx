import Hero from "@/components/landing/hero";
import ZeroTrust from "@/components/landing/why-choose";
import ZeroTenants from "@/components/landing/about-us";
import Benefite from "@/components/landing/meet-my-team";
// import Approach from "@/components/landing/approach";
import GetTouch from "@/components/landing/get-touch";
import Frequently from "@/components/landing/frequently";
const LandingPage = () => {
  return (
    <div className="">
     <Hero />
     <ZeroTrust />
     <ZeroTenants />
     <Benefite />
     <Frequently />
     {/* <GetTouch /> */}
     
    </div>
  );
};

export default LandingPage;
