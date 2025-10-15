import CommonBannerSection from "@/components/common/CommonSections/CommonBannerSection";
import CTASection from "@/components/common/CommonSections/CTASection";
import supportImage from '@/assets/Images/supportImage.svg'
import SupportForm from "@/components/common/SupportComponents/SupportForm";
const SupportPage = () => {
    return (
        <>
            <CommonBannerSection
                image={supportImage}
                title={'Ask a Question about Product'}
                subtitle={"Check out our availability and book the date and time that works for you"}

            />
            <SupportForm />
            <CTASection />
        </>
    );
};

export default SupportPage;