import BenefitsSection from "@/components/common/CommonSections/BenefitsSection";
import CTASection from "@/components/common/CommonSections/CTASection";
import FeaturesSection from "@/components/common/CommonSections/FeaturesSection";
import ProcedureSection from "@/components/common/CommonSections/ProcedureSection";
import TestimonialSection from "@/components/common/CommonSections/TestimonialSection";
import AboutBannerSection from "@/components/HomeComponents/AboutBannerSection";

const AboutPage = () => {
    return (
        <>
            <AboutBannerSection />
            <FeaturesSection />
            <ProcedureSection />
            <BenefitsSection />
            <TestimonialSection />
            <CTASection />
        </>
    );
};


export default AboutPage;