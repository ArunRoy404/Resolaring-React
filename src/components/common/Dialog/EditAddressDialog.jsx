import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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
import { InfoIcon } from "lucide-react"

export function EditAddressDialog() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <p
                        className='text-primary underline cursor-pointer '
                    >
                        Edit
                    </p>
                </DialogTrigger>
                <DialogContent className="!max-w-none w-[800px] z-[200]">
                    <DialogHeader>
                        <DialogTitle>Add New Address</DialogTitle>
                    </DialogHeader>


                    {/* form  */}
                    <div className=" border-t py-8 space-y-4">
                        <div className="flex items-center gap-8">
                            <div className="grid gap-2 flex-1">
                                <Label htmlFor="firstName">First Name*</Label>
                                <Input
                                    id='firstName'
                                    type='text'
                                    placeHolder='john'
                                />
                            </div>
                            <div className="grid gap-2 flex-1">
                                <Label htmlFor="lastName">last Name*</Label>
                                <Input
                                    id='lastName'
                                    type='text'
                                    placeHolder='Doe'
                                />
                            </div>
                        </div>



                        <div className="grid gap-2">
                            <Label htmlFor="companyName">Company name</Label>
                            <Input
                                id='companyName'
                                type='text'
                                placeHolder='Company'
                            />
                        </div>



                        <div className="grid gap-2">
                            <Label htmlFor="address">Address</Label>
                            <Input
                                id='address'
                                type='text'
                                placeHolder='New York'
                            />
                        </div>



                        <div className="grid gap-2">
                            <Label htmlFor="address2">Address Line-2</Label>
                            <Input
                                id='address2'
                                type='text'
                                placeHolder='New York'
                            />
                        </div>



                        <div className="grid gap-2">
                            <Label htmlFor="city">City</Label>
                            <Input
                                id='city'
                                type='text'
                                placeHolder='New York'
                            />
                        </div>



                        <div className="grid gap-2">
                            <Label htmlFor="country">Country</Label>
                            <Input
                                id='country'
                                type='text'
                                placeHolder='Bangladesh'
                            />
                        </div>


                        <div className="flex items-center gap-8">
                            <div className="grid gap-2  flex-1">
                                <Label htmlFor="zip">Zip / Postal code</Label>
                                <Input
                                    id='zip'
                                    type='number'
                                    placeHolder='1234'
                                />
                            </div>
                            <div className="grid gap-2  flex-1">
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                    id='phone'
                                    type='number'
                                    placeHolder='01755563224'
                                />
                            </div>
                        </div>

                        <p className="flex items-center gap-2">
                            <Checkbox />
                            Make this my default address
                        </p>
                    </div>



                    {/* footer  */}
                    <DialogFooter>
                        <DialogClose asChild>
                            <div className='space-x-4'>
                                <Button
                                    size={'lg'}
                                    variant={'outline'}
                                    className={''}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    size={'lg'}
                                    className={'bg-brand-primary text-white hover:bg-white hover:text-black border border-brand-primary'}
                                >
                                    Add Address
                                </Button>
                            </div>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}


export default EditAddressDialog;