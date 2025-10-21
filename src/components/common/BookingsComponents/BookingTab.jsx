import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import UpcomingBookingSection from "./UpcomingBookingSection";
import PastBookingSection from "./PastBookingSection";




export function BookingTab() {
    return (
        <div className="flex-col gap-6">

            {/* tabs  */}
            <Tabs defaultValue="upcoming">
                <div className="border-b-2">
                    <TabsList
                        className={'bg-transparent translate-y-1'}
                    >
                        <TabsTrigger
                            className={'cursor-pointer px-10 data-[state=active]:border-b-brand-primary rounded-none border-3 !shadow-none'}
                            value="upcoming"
                        >Upcoming
                        </TabsTrigger>


                        <TabsTrigger
                            className={'cursor-pointer px-10 data-[state=active]:border-b-brand-primary rounded-none border-3 !shadow-none'}
                            value="past">
                            Past
                        </TabsTrigger>
                    </TabsList>
                </div>



                {/* tab contents  */}
                <TabsContent value="upcoming">
                    <UpcomingBookingSection />
                </TabsContent>



                <TabsContent value="past">
                    <PastBookingSection />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default BookingTab;