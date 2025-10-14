import CommonBannerSection from "@/components/common/CommonSections/CommonBannerSection";
import galleryBannerImage from '@/assets/Images/galleryBannerImage.svg'
import NewsletterSection from "@/components/common/MarketplaceComponents/NewsletterSection";
import ProductsViewSection from "@/components/common/MarketplaceComponents/ProductsViewSection";
import EquipmentsSection from "@/components/HomeComponents/EquipmentsSection";
import CTASection from "@/components/common/CommonSections/CTASection";

const GalleryPage = () => {
    return (
        <>
            <CommonBannerSection
                image={galleryBannerImage}
                title={'The process of recycling photovoltaic panels'}
                subtitle={"Exploring Sustainable Methods to Maximize Material Recovery and Minimize Waste in Photovoltaic Panel Recycling."}
                button={{
                    label: 'Sell Your Equipment',
                    path: '/marketplace'
                }}
            />

            <EquipmentsSection />
            <CTASection />
        </>
    );
};

export default GalleryPage;