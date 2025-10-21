import Hero from "@/components/resources/hero";
import CyberSecurity from "@/components/resources/cyber-security";
import Executive from "@/components/resources/executive";
import Resources from "@/components/resources/resources";
import ResourceText from "@/components/resources/resource-text";
const ResourcesPage = () => {
    return (
        <div>
            <Hero/> 
            <CyberSecurity/>
            <Executive/>
            <Resources/>
            <ResourceText/>
        </div>
    );
};
export default ResourcesPage;
