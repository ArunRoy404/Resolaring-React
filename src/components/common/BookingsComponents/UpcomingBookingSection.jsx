import React from 'react';
import EmptyBooking from './EmptyBooking';
import BookingCard from './BookingHeading';
import BookingAccordion from './BookingAccordion';

const UpcomingBookingSection = () => {
    return (
        <div>
            <BookingAccordion variant={'upcoming'} />
            <EmptyBooking />
        </div>
    );
};

export default UpcomingBookingSection;