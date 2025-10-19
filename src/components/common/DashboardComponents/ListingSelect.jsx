import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '@/components/ui/select';
import { EllipsisVertical, FileText, Search, Trash } from 'lucide-react';
import React from 'react';

const ListingSelect = ({ setOpenDialog }) => {
    return (
        <Select
            value={''}
            onValueChange={(value) => setOpenDialog(value)}
        >
            <SelectTrigger className="border-none shadow-none text-lg font-medium pr-0 [&>svg]:hidden">
                <span><EllipsisVertical /></span>
            </SelectTrigger>
            <SelectContent
                side='right'
                align='start'
                className={'rounded text-[#6A7283]'}>
                <SelectGroup>
                    <SelectItem value='edit'>
                        <FileText />
                        Edit
                    </SelectItem>


                    <SelectItem value='delete'>
                        <Trash />
                        Delete
                    </SelectItem>

                    <SelectItem value='view-details'>
                        <Search/>
                        View Details
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default ListingSelect;