import BannerSection from '@/components/HomeComponents/BannerSection';
import EquipmentsSection from '@/components/HomeComponents/EquipmentsSection';
import StatsSection from '@/components/HomeComponents/StatsSection';
import FeaturesSection from '@/components/HomeComponents/FeaturesSection';
import ProcedureSection from '@/components/HomeComponents/ProcedureSection';
import MembersSection from '@/components/HomeComponents/MembersSection';
import BenefitsSection from '@/components/HomeComponents/BenefitsSection';
import TestimonialSection from '@/components/HomeComponents/TestimonialSection';
import CTASection from '@/components/HomeComponents/CTASection';

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