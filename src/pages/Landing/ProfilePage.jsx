import CommonSection from '@/components/common/CommonSection';
import ProfileBanner from '@/components/common/ProfileComponents/ProfileBanner';
import ProfileTab from '@/components/common/ProfileComponents/ProfileTab';

const ProfilePage = () => {
    return (
        <CommonSection>
            <ProfileBanner />
            <ProfileTab />
        </CommonSection>
    );
};

export default ProfilePage;        