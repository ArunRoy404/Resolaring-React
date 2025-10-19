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

export function AccountPage() {
    return (
        <CommonSection>
            <div className="flex-col gap-6">

                {/* tabs  */}
                <Tabs defaultValue="account">
                    <div className="border-b-2">
                        <TabsList
                            className={'bg-transparent'}
                        >
                            <TabsTrigger
                                className={'cursor-pointer px-10 data-[state=active]:border-b-brand-primary rounded-none border-3 !shadow-none'}
                                value="account"
                            >Account
                            </TabsTrigger>


                            <TabsTrigger
                                className={'cursor-pointer px-10 data-[state=active]:border-b-brand-primary rounded-none border-3 !shadow-none'}
                                value="address">
                                Address
                            </TabsTrigger>


                            <TabsTrigger
                                className={'cursor-pointer px-10 data-[state=active]:border-b-brand-primary rounded-none border-3 !shadow-none'}
                                value="wallet">
                                Wallet
                            </TabsTrigger>
                        </TabsList>
                    </div>



                    {/* tab contents  */}
                    <TabsContent value="account">
                        <AccountSection />
                    </TabsContent>



                    <TabsContent value="address">
                        <AddressSection />
                    </TabsContent>



                    <TabsContent value="wallet">
                        <WalletSection />
                    </TabsContent>
                </Tabs>
            </div>
        </CommonSection>
    )
}

export default AccountPage;