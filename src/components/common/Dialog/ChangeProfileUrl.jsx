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


export function ChangeProfileUrl() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <p
                        className='text-[#6A7283] underline cursor-pointer '
                    >
                        Make Profile Private
                    </p>
                </DialogTrigger>
                <DialogContent className=" z-[200]">
                    <DialogHeader>
                        <DialogTitle>
                            <p className="text-center">Set profile to private?</p>
                        </DialogTitle>
                        <DialogDescription>
                            <p className="text-center">Private profiles won’t be visible to other members and you won’t be able to interact with them.</p>
                        </DialogDescription>
                    </DialogHeader>



                    {/* footer  */}
                    <DialogFooter>
                        <DialogClose asChild>
                            <div className='w-full flex justify-center gap-4'>
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
                                    Set Private
                                </Button>
                            </div>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}


export default ChangeProfileUrl;