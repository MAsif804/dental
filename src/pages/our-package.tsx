

import CrownPackage from "@/components/our-package/crown-packages";
import Frequently from "@/components/our-package/frequently";
import GetForm from "@/components/our-package/get-form";
import Hero from "@/components/our-package/hero";
import ImplantPackage from "@/components/our-package/implant-package";
import OurSmile from "@/components/our-package/our-smile";
import WhyChoose from "@/components/our-package/why-choose";
const OurPackagePage = () => {
  return (
    <div className="w-full h-full">
     <Hero />
     <WhyChoose />
     <OurSmile />
     <ImplantPackage />
     <CrownPackage />
     <Frequently />
      <GetForm />
     
    </div>
  );
};

export default OurPackagePage;
