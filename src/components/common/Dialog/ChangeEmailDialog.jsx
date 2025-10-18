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
import { InfoIcon } from "lucide-react"

export function ChangeEmailDialog() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <p
                        className='text-[#6A7283] underline cursor-pointer '
                    >
                        Change Email
                    </p>
                </DialogTrigger>
                <DialogContent className=" z-[200]">
                    <DialogHeader>
                        <DialogTitle>Change login email</DialogTitle>
                        <DialogDescription>
                            <p>This will be your new login email.</p>

                            <p className="flex mt-6 bg-[#F5F6F7] py-4 px-6 rounded-2xl items-center gap-2   ">
                                <InfoIcon />
                                If you used Google or Facebook to log in, use this new email to continue logging in that way.
                            </p>
                        </DialogDescription>
                    </DialogHeader>



                    {/* form  */}
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="email">New email</Label>
                            <Input
                                id='email'
                                type='email'
                                placeHolder='johndoe@gmail.com'
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="confirmEmail">Confirm new email</Label>
                            <Input
                                id='confirmEmail'
                                type='confirmEmail'
                                placeHolder='johndoe@gmail.com'
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="password">Your password</Label>
                            <Input
                                id='password'
                                type='password'
                                placeHolder='********************'
                            />
                        </div>
                        <p className="text-[#6A7283] underline cursor-pointer">Reset or create password</p>
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
                                    Update Info
                                </Button>
                            </div>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}


export default ChangeEmailDialog;