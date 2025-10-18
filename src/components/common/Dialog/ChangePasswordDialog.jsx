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

export function ChangePasswordDialog() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <p
                        className='text-[#6A7283] underline cursor-pointer '
                    >
                        Change Password
                    </p>
                </DialogTrigger>
                <DialogContent className=" z-[200]">
                    <DialogHeader>
                        <DialogTitle>Change password</DialogTitle>
                        <DialogDescription>
                            <p>This will be your new login email.</p>
                        </DialogDescription>
                    </DialogHeader>



                    {/* form  */}
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="password">Your password</Label>
                            <Input
                                id='password'
                                type='password'
                                placeHolder='********************'
                            />
                        </div>
                        <p className="text-[#6A7283] underline cursor-pointer">Reset or create password</p>


                        <div className="grid gap-3 mt-4">
                            <Label htmlFor="newPassword">New password</Label>
                            <Input
                                id='newPassword'
                                type='newPassword'
                                placeHolder='********************'
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="confirmPassword">Confirm password</Label>
                            <Input
                                id='confirmPassword'
                                type='confirmPassword'
                                placeHolder='********************'
                            />
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
                                    Save Changes
                                </Button>
                            </div>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}

export default ChangePasswordDialog;