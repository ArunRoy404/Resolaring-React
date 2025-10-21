import { Button } from '@/components/ui/button';
import React from 'react';
import { toast } from 'sonner';
import BookingSelect from './BookingSelect';

const BookingHeading = ({ variant }) => {
    return (
        <div className='text-[#6A7283] flex items-center justify-between w-full'>
            <div>
                <p className='pb-4'>Time zone: Greenwich Mean Time (GMT)</p>
                <p className='pb-2 text-primary'>Free Intro Meeting</p>
                <p>February 17, 2025 at 10:00 AM</p>

                <p className='pt-4 hidden group-data-[state=closed]:block underline'>View Details</p>
                <p className='pt-4 hidden group-data-[state=open]:block underline'>Hide</p>
            </div>


            {
                variant === 'upcoming'
                    ? <BookingSelect />

                    : variant === 'past'
                        ? <Button
                            onClick={(e) => {
                                e.stopPropagation()
                                toast("Ok")
                            }}
                            variant={'outline'}
                            className={'border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white'}
                        >
                            Book Again
                        </Button>
                        : <></>
            }
        </div>
    );
};


export default BookingHeading;