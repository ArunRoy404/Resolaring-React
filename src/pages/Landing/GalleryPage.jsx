import CommonBannerSection from "@/components/common/CommonSections/CommonBannerSection";
import galleryBannerImage from '@/assets/Images/galleryBannerImage.svg'
import EquipmentsSection from "@/components/HomeComponents/EquipmentsSection";
import CTASection from "@/components/common/CommonSections/CTASection";

const GalleryPage = () => {
    return (
        <>
            <CommonBannerSection
                image={galleryBannerImage}
                title={'Publica els teus panells'}
                subtitle={"Aquí pots publicar els teus panells. Nosaltres ens posarem en contacte"}
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