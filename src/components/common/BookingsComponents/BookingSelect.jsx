import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '@/components/ui/select';
import { CalendarRange, Clock, Trash } from 'lucide-react';
import React from 'react';

const BookingSelect = () => {
    return (
        <Select
            value={''}
        >
            <SelectTrigger className="border-none shadow-none text-lg font-medium pr-0 [&>svg]:hidden">
                <Button
                    variant={'outline'}
                    className={'border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white'}
                >
                    Manage
                </Button>
            </SelectTrigger>
            <SelectContent
                side='right'
                align='start'
                className={'rounded'}>
                <SelectGroup>
                    <SelectItem value='bookAgain'>
                        <CalendarRange />
                        Book Again
                    </SelectItem>


                    <SelectItem value='reschedule'>
                        <Clock />
                        Reschedule
                    </SelectItem>

                    <SelectItem value='cancel'>
                        <Trash />
                        Cancel
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};


export default BookingSelect;