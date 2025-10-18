import React from 'react';

const DeliveryDetails = () => {
    return (
        <div className='pb-4 md:pb-10 mb-4 md:mb-10 border-b'>
            <div className='flex items-center justify-between mb-4'>
                <h1 className='text-primary md:text-2xl font-semibold'>
                    Delivery details
                </h1>
                <p className='text-primary underline cursor-pointer md:text-lg'>
                    Change
                </p>
            </div>

            <div className='text-[#798090] text-sm md:text-lg space-y-1'>
                <p>Abu Bokkor Siddik</p>
                <p>demotest@gmail.com</p>
                <p>mohakhali, Dhaka 1212, Bangladesh</p>
                <p>+44 20 0000 0000</p>
            </div>
        </div>
    );
};

export default DeliveryDetails;