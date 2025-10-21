import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import ProfileTabSection from "./ProfileTabSection"
import ProfileGallerySection from "./ProfileGallerySection"
import GalleryUploadSection from "./GalleryUploadSection";
import GalleryLikeSection from "./GalleryLikeSection";



export function GalleryTab() {
    return (
        <div className="flex-col gap-6 py-8">

            {/* tabs  */}
            <Tabs defaultValue="upload">
                <div className="border-b-2">
                    <TabsList
                        className={'bg-transparent translate-y-1'}
                    >
                        <TabsTrigger
                            className={'cursor-pointer px-10 data-[state=active]:border-b-brand-primary rounded-none border-3 !shadow-none'}
                            value="upload"
                        >Upload
                        </TabsTrigger>


                        <TabsTrigger
                            className={'cursor-pointer px-10 data-[state=active]:border-b-brand-primary rounded-none border-3 !shadow-none'}
                            value="likes">
                            Likes
                        </TabsTrigger>
                    </TabsList>
                </div>



                {/* tab contents  */}
                <TabsContent value="upload">
                    <GalleryUploadSection />
                </TabsContent>



                <TabsContent value="likes">
                    <GalleryLikeSection />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default GalleryTab;