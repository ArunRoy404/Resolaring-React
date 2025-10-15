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
import ShareDialogContent from "./ShareDialogContent"

export function ShareEquipmentDialog({ openDialog, setOpenDialog }) {
    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent className="w-full z-[1000]">
                {
                    openDialog === 'share'
                        ? <ShareDialogContent />
                        : <></>
                }
            </DialogContent>
        </Dialog>
    )
}


export default ShareEquipmentDialog;