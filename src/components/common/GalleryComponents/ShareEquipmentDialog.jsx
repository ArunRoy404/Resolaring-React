import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import ShareDialogContent from "./ShareDialogContent"
import ReportDialogContent from "./ReportDialogContent"
import AddMediaDialogContent from "./AddMediaDialogContent"

export function ShareEquipmentDialog({ openDialog, setOpenDialog }) {
    let dialogContent = <p className="text-primary font-bold">No Figma Provided</p>

    switch (openDialog) {
        case 'share':
            dialogContent = <ShareDialogContent setOpenDialog={setOpenDialog} />
            break;
        case 'report':
            dialogContent = <ReportDialogContent setOpenDialog={setOpenDialog} />
            break;
        case 'addMedia':
            dialogContent = <AddMediaDialogContent setOpenDialog={setOpenDialog} />
            break;
    }

    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent className="z-[1000] min-w-3xl">
                {dialogContent}
            </DialogContent>
        </Dialog>
    )
}


export default ShareEquipmentDialog;