import CommonBannerSection from "@/components/common/CommonSections/CommonBannerSection";
import marketplaceBannerImage from '@/assets/Images/marketplaceBannerImage.svg'
import NewsletterSection from "@/components/common/MarketplaceComponents/NewsletterSection";
import ProductsViewSection from "@/components/common/MarketplaceComponents/ProductsViewSection";

const MarketplacePage = () => {
    return (
        <>
            <CommonBannerSection
                image={marketplaceBannerImage}
                title={'Your market for solar panels'}
                subtitle={"Exploring Market Opportunities, Industry Trends, and Growing Demand for Solar Panels in the Renewable Energy Sector"}
                button={{
                    label: 'Sell Your Equipment',
                    path: '/marketplace'
                }}
            />

            <ProductsViewSection />
            <NewsletterSection />
        </>
    );
};
export default MarketplacePage;