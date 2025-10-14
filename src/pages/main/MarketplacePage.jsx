import BenefitsSection from "@/components/common/CommonSections/BenefitsSection";
import CommonBannerSection from "@/components/common/CommonSections/CommonBannerSection";
import CTASection from "@/components/common/CommonSections/CTASection";
import TestimonialSection from "@/components/common/CommonSections/TestimonialSection";
import recycleImage from '@/assets/Images/recycleImage.svg'
import RecyclePanelSection from "@/components/common/RecyclePageComponents/RecyclePanelSection";
import MembersSection from "@/components/common/CommonSections/MembersSection";
import NewsletterSection from "@/components/common/MarketplaceComponents/NewsletterSection";

const MarketplacePage = () => {
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

            <NewsletterSection/>
        </>
    );
};
export default MarketplacePage;