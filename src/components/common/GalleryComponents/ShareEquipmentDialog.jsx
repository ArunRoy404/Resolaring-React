import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import ShareDialogContent from "./ShareDialogContent"
import ReportDialogContent from "./ReportDialogContent"

export function ShareEquipmentDialog({ openDialog, setOpenDialog }) {
    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent className="w-full z-[1000]">
                {
                    openDialog === 'share'
                        ? <ShareDialogContent setOpenDialog={setOpenDialog} />
                        : openDialog === 'report'
                            ? <ReportDialogContent setOpenDialog={setOpenDialog} />
                            : <>No Figma Provided</>
                }
            </DialogContent>
        </Dialog>
    )
}


export default ShareEquipmentDialog;