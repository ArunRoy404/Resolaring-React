import BookingTab from '@/components/common/BookingsComponents/BookingTab';
import CommonSection from '@/components/common/CommonSection';
import React from 'react';

const BookingPage = () => {
    return (
        <CommonSection>
            <div className='space-y-8'>

                {/* heading  */}
                <div className='border-b w-full pb-12'>
                    <h1
                        className="text-primary font-semibold text-3xl"
                    >
                        Manage your bookings
                    </h1>
                    <p
                        className='text-[#6A7283] '
                    >
                        Review your bookings and make any needed changes.
                    </p>
                </div>


                {/* Bookings tab  */}
                <BookingTab />
            </div>
        </CommonSection>
    );
};
export default BookingPage;