import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
                    <TabsList
                        className={'bg-transparent'}
                    >
                        <TabsTrigger
                            className={'px-10 data-[state=active]:border-b-brand-primary rounded-none border-3 !shadow-none'}
                            value="account"
                        >Account
                        </TabsTrigger>


                        <TabsTrigger
                            className={'px-10 data-[state=active]:border-b-brand-primary rounded-none border-3 !shadow-none'}
                            value="address">
                            Address
                        </TabsTrigger>


                        <TabsTrigger
                            className={'px-10 data-[state=active]:border-b-brand-primary rounded-none border-3 !shadow-none'}
                            value="wallet">
                            Wallet
                        </TabsTrigger>
                    </TabsList>



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