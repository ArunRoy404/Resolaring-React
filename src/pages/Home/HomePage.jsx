import BannerSection from '@/components/HomeComponents/BannerSection';
import EquipmentsSection from '@/components/HomeComponents/EquipmentsSection';
import StatsSection from '@/components/HomeComponents/StatsSection';

const HomePage = () => {
    return (
        <>
            <BannerSection />
            <StatsSection/>
            <EquipmentsSection/>
        </>
    );
};

export default HomePage;