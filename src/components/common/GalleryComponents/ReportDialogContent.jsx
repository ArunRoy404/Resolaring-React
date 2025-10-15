import React from 'react';
import { Label } from "@/components/ui/label"
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ReportDialogContent = ({ setOpenDialog }) => {
    return (
        <div className='w-full p-10 flex flex-col'>
            <p className='text-lg font-bold mb-4'>
                Report spam or abuse
            </p>

            <p className='font-bold text-sm mb-2'>
                Why are you reporting this?
            </p>
            <RadioGroup>
                <div className="flex items-center gap-3">
                    <RadioGroupItem value="spam" id="r1" />
                    <Label htmlFor="r1">Unwanted content or spam</Label>
                </div>
                <div className="flex items-center gap-3">
                    <RadioGroupItem value="bully" id="r2" />
                    <Label htmlFor="r2">Harassment or bullying</Label>
                </div>
                <div className="flex items-center gap-3">
                    <RadioGroupItem value="violentContent" id="r3" />
                    <Label htmlFor="r3">Inappropriate content</Label>
                </div>
                <div className="flex items-center gap-3">
                    <RadioGroupItem value="violent" id="r4" />
                    <Label htmlFor="r3">Hate speech or graphic violence</Label>
                </div>
            </RadioGroup>

            <Button
                onClick={() => {
                    setOpenDialog(false)
                    toast.success("Report Done")
                }}
                className={'mt-4 '}>
                Done
            </Button>
        </div>
    );
};


export default ReportDialogContent;