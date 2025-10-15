import BenefitsSection from "@/components/common/CommonSections/BenefitsSection";
import CTASection from "@/components/common/CommonSections/CTASection";
import FeaturesSection from "@/components/common/CommonSections/FeaturesSection";
import ProcedureSection from "@/components/common/CommonSections/ProcedureSection";
import TestimonialSection from "@/components/common/CommonSections/TestimonialSection";
import BannerSection from "@/components/HomeComponents/BannerSection";
import EquipmentsSection from "@/components/HomeComponents/EquipmentsSection";
import MembersSection from "@/components/common/CommonSections/MembersSection";
import StatsSection from "@/components/HomeComponents/StatsSection";


const HomePage = () => {
    return (
        <>
            <BannerSection />
            <StatsSection />
            <EquipmentsSection />
            <FeaturesSection />
            <ProcedureSection />
            <MembersSection/>
            <BenefitsSection/>
            <TestimonialSection/>
            <CTASection/>
        </>
    );
};

export default HomePage;