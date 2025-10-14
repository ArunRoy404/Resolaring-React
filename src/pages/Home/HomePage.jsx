import BannerSection from '@/components/HomeComponents/BannerSection';
import EquipmentsSection from '@/components/HomeComponents/EquipmentsSection';
import StatsSection from '@/components/HomeComponents/StatsSection';
import FeaturesSection from '@/components/common/CommonSections/FeaturesSection';
import ProcedureSection from '@/components/HomeComponents/ProcedureSection';
import MembersSection from '@/components/HomeComponents/MembersSection';
import BenefitsSection from '@/components/common/CommonSections/BenefitsSection';
import TestimonialSection from '@/components/common/CommonSections/TestimonialSection';
import CTASection from '@/components/common/CommonSections/CTASection';

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