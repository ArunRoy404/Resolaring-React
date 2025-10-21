import { Button } from '@/components/ui/button';
import React from 'react';

const EmptyBooking = () => {
    return (
        <div>
            {/* for empty upcoming  */}
            <div
                className='space-y-2 py-16 text-center max-w-[550px] mx-auto'
            >
                <p className='text-gray-400'>
                    Looks like you don’t have any bookings yet.
                </p>

                <Button
                    className={'mt-4 bg-brand-primary text-white border border-brand-primary hover:text-brand-primary hover:bg-white'}
                >
                    Continue Browsing
                </Button>
            </div>
        </div>
    );
};

export default EmptyBooking;