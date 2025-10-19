import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileText, InfoIcon, Printer } from "lucide-react"

const orderDetail = {
    orderId: "#noon",
    date: "3/12/24",
    productName: "Solar Panel",
    buyerName: "John Doe",
    buyerEmail: "dennoname@gmail.com",
    buyerPhone: "+44 117 2345678",
    country: "England",
    city: "London",
    zipCode: "HPio oAA",
    state: "Buckinghamshire",
    deliveryAddress: "County Hall, Walton Street, Aylesbury, Buckinghamshire, HP20 YH",
    shippingFee: "Free"
};


export function OrderDetailsDialog() {

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <p
                        className='text-brand-primary underline cursor-pointer text-center '
                    >
                        View details
                    </p>
                </DialogTrigger>
                <DialogContent className="z-[200] !max-w-none !w-auto p-12">

                    <DialogHeader>
                        <DialogTitle>Product Order Details</DialogTitle>
                    </DialogHeader>



                    {/* actions  */}
                    <div
                    className="absolute top-10 right-10"
                    >
                        <Button
                            variant={'link'}
                            className={'text-brand-primary'}
                        >
                            <Printer />
                            Print
                        </Button>

                        <Button
                            variant={'link'}
                            className={'text-brand-primary'}
                        >
                            <FileText />
                            PDF Download
                        </Button>
                    </div>




                    {/* content */}
                    <div>
                        {
                            Object.entries(orderDetail).map(([key, value]) => {
                                return (
                                    <div className="flex py-3 border-b text-lg border-gray-200">
                                        <p className="text-primary w-70">{key}</p>
                                        <p className="text-[#798090] w-full">{value}</p>
                                    </div>
                                )
                            })
                        }
                    </div>


                </DialogContent>
            </form>
        </Dialog>
    )
}

export default OrderDetailsDialog;