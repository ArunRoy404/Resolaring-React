import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, EllipsisVertical, Share, TriangleAlert } from 'lucide-react';
import React from 'react';

const EquipmentSelect = () => {
    return (
        <Select
            value={''}
        >
            <SelectTrigger className=" border-none text-[#6A7283] shadow-none text-lg font-medium pr-0 [&>svg]:hidden">
                <Button
                    size={'icon'}
                    className={'hover:bg-gray-100 bg-transparent shadow-none'}
                >
                    <EllipsisVertical />
                </Button>
            </SelectTrigger>
            <SelectContent className={'rounded'}>
                <SelectGroup>
                    <SelectItem >
                        <Button variant={'ghost'}>
                            <Download />
                            Download
                        </Button>
                    </SelectItem>
                    <SelectItem >
                        <Button variant={'ghost'}>
                            <Share />
                            Share
                        </Button>
                    </SelectItem>
                    <SelectItem >
                        <Button variant={'ghost'}>
                            <TriangleAlert />
                            Report
                        </Button>
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default EquipmentSelect;