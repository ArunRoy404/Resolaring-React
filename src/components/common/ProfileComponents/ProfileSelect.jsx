import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '@/components/ui/select';
import { EllipsisVertical, FileText, Search, Trash } from 'lucide-react';
import React from 'react';

const ProfileSelect = () => {
    return (
        <Select
            value={''}
        >
            <SelectTrigger className="border-none shadow-none text-lg font-medium pr-0 [&>svg]:hidden">
                <span><EllipsisVertical color='white' className='scale-150' /></span>
            </SelectTrigger>
            <SelectContent
                side='right'
                align='start'
                className={'rounded text-[#6A7283]'}>
                <SelectGroup>
                    <SelectItem value='edit'>
                        View Public Profile
                    </SelectItem>


                    <SelectItem value='delete'>
                        Share My Profile
                    </SelectItem>

                    <SelectItem value='view-details'>
                        Edit Profile
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default ProfileSelect;