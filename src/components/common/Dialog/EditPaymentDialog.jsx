import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function EditPaymentDialog() {
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
                        <div className="grid gap-2">
                            <Label htmlFor="card">Card number</Label>
                            <Input
                                id='card'
                                type='number'
                                placeHolder='Enter Number'
                            />
                        </div>



                        <div className="flex items-center gap-8">
                            <div className="grid gap-2 flex-1">
                                <Label htmlFor="expirationDate">Expiration date</Label>
                                <Input
                                    id='expirationDate'
                                    type='text'
                                    placeHolder='MM/YY'
                                />
                            </div>



                            <div className="grid gap-2 flex-1">
                                <Label htmlFor="cvv">CVV/CVC</Label>
                                <Input
                                    id='cvv'
                                    type='number'
                                    placeHolder='3-4 digits'
                                />
                            </div>
                        </div>



                        <div className="grid gap-2">
                            <Label htmlFor="cardHolderName">Cardholder name</Label>
                            <Input
                                id='cardHolderName'
                                type='text'
                                placeHolder='Enter name'
                            />
                        </div>



                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id='email'
                                type='email'
                                placeHolder='johndoe@gmail.com'
                            />
                        </div>




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



                        <div className="flex items-center gap-8">
                            <div className="grid gap-2 flex-1">
                                <Label htmlFor="address">Address</Label>
                                <Input
                                    id='address'
                                    type='text'
                                    placeHolder='New York'
                                />
                            </div>

                            <div className="grid gap-2 flex-1">
                                <Label htmlFor="city">City</Label>
                                <Input
                                    id='city'
                                    type='text'
                                    placeHolder='New York'
                                />
                            </div>
                        </div>




                        <div className="flex items-center gap-8">

                            <div className="grid gap-2 flex-1">
                                <Label htmlFor="country">Country</Label>
                                <Input
                                    id='country'
                                    type='text'
                                    placeHolder='Bangladesh'
                                />
                            </div>

                            <div className="grid gap-2 flex-1">
                                <Label htmlFor="zip">Zip / Postal code</Label>
                                <Input
                                    id='zip'
                                    type='number'
                                    placeHolder='1234'
                                />
                            </div>
                        </div>
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
                                    Add Payment Methods
                                </Button>
                            </div>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}

export default EditPaymentDialog;