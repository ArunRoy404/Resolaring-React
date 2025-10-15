import BenefitsSection from "@/components/common/CommonSections/BenefitsSection";
import CommonBannerSection from "@/components/common/CommonSections/CommonBannerSection";
import CTASection from "@/components/common/CommonSections/CTASection";
import FeaturesSection from "@/components/common/CommonSections/FeaturesSection";
import ProcedureSection from "@/components/common/CommonSections/ProcedureSection";
import TestimonialSection from "@/components/common/CommonSections/TestimonialSection";
import AboutImage from '@/assets/Images/AboutImage.svg'

const AboutPage = () => {
    return (
        <>
            <CommonBannerSection
                image={AboutImage}
                title={'Reusing solar energy'}
                subtitle={"At Resolaring we are committed to giving photovoltaic panels a second life. We make agreements with suppliers and installers so that the panels do not end up in landfills."}
                button={{
                    label: 'Browse Marketplace',
                    path: '/marketplace'
                }}
            />
            <FeaturesSection />
            <ProcedureSection />
            <BenefitsSection />
            <TestimonialSection />
            <CTASection />
        </>
    );
};


export default AboutPage;