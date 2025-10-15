import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '@/components/ui/select';
import { Download, EllipsisVertical, Share, TriangleAlert } from 'lucide-react';
import React from 'react';

const EquipmentSelect = ({ setOpenDialog }) => {
    return (
        <Select
            value={''}
            onValueChange={(value)=>setOpenDialog(value)}
        >
            <SelectTrigger className="border-none shadow-none text-lg font-medium pr-0 [&>svg]:hidden">
                <span><EllipsisVertical /></span>
            </SelectTrigger>
            <SelectContent className={'rounded'}>
                <SelectGroup>
                    <SelectItem value='download'>
                        <Download />
                        Download
                    </SelectItem>


                    <SelectItem value='share'>
                        <Share />
                        Share
                    </SelectItem>

                    <SelectItem value='report'>
                        <TriangleAlert />
                        Report
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default EquipmentSelect;