import CommonBannerSection from "@/components/common/CommonSections/CommonBannerSection";
import CTASection from "@/components/common/CommonSections/CTASection";
import marketplaceImage from '@/assets/Images/marketplaceImage.svg'
import { useLoaderData, useParams } from "react-router";
import { useEffect, useState } from "react";
import EquipmentReviewSection from "@/components/common/GalleryReviewComponents/EquipmentReviewSection";

const ReviewPage = () => {

    const { id } = useParams()
    const allData = useLoaderData()
    const [equipment, setEquipment] = useState({})

    useEffect(() => {
        const data = allData?.filter(item => {
            return item?.id == id
        })
        setEquipment(data[0])
    }, [id, allData])


    return (
        <>
            <CommonBannerSection
                image={marketplaceImage}
                title={'JA Solar 200W'}
                subtitle={"Aquí pots publicar els teus panells. Nosaltres ens posarem en contacte"}
                button={{
                    label: 'List your Product',
                    path: '/'
                }}

                currentPath={" "}
            />

            <EquipmentReviewSection equipment={equipment} />
            <CTASection />
        </>
    );
};
export default ReviewPage;