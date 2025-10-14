import BenefitsSection from "@/components/common/CommonSections/BenefitsSection";
import CommonBannerSection from "@/components/common/CommonSections/CommonBannerSection";
import CTASection from "@/components/common/CommonSections/CTASection";
import FeaturesSection from "@/components/common/CommonSections/FeaturesSection";
import ProcedureSection from "@/components/common/CommonSections/ProcedureSection";
import TestimonialSection from "@/components/common/CommonSections/TestimonialSection";
import recycleImage from '@/assets/Images/recycleImage.svg'
import RecyclePanelSection from "@/components/common/RecyclePageComponents/RecyclePanelSection";
import MembersSection from "@/components/common/CommonSections/MembersSection";

const RecyclingPage = () => {
    return (
        <>
            <CommonBannerSection
                image={recycleImage}
                title={'The process of recycling photovoltaic panels'}
                subtitle={"Exploring Sustainable Methods to Maximize Material Recovery and Minimize Waste in Photovoltaic Panel Recycling."}
                button={{
                    label: 'Browse Marketplace',
                    path: '/marketplace'
                }}
            />

            <RecyclePanelSection/>
            <MembersSection/>
            <TestimonialSection />
            <BenefitsSection />
            <CTASection />
        </>
    );
};
export default RecyclingPage;