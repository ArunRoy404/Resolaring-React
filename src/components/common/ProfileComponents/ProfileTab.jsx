import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import CommonSection from "@/components/common/CommonSection"
import AccountSection from "@/components/common/AccountComponents/AccountSection"
import AddressSection from "@/components/common/AccountComponents/AddressSection"
import WalletSection from "@/components/common/AccountComponents/WalletSection"
import ProfileTabSection from "./ProfileTabSection"
import ProfileGallerySection from "./ProfileGallerySection"

export function ProfileTab() {
    return (
        <div className="flex-col gap-6 py-8">

            {/* tabs  */}
            <Tabs defaultValue="profile">
                <div className="border-b-2">
                    <TabsList
                        className={'bg-transparent'}
                    >
                        <TabsTrigger
                            className={'cursor-pointer px-10 data-[state=active]:border-b-brand-primary rounded-none border-3 !shadow-none'}
                            value="profile"
                        >Profile
                        </TabsTrigger>


                        <TabsTrigger
                            className={'cursor-pointer px-10 data-[state=active]:border-b-brand-primary rounded-none border-3 !shadow-none'}
                            value="gallery">
                            Gallery
                        </TabsTrigger>
                    </TabsList>
                </div>



                {/* tab contents  */}
                <TabsContent value="profile">
                    <ProfileTabSection />
                </TabsContent>



                <TabsContent value="gallery">
                    <ProfileGallerySection />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default ProfileTab;