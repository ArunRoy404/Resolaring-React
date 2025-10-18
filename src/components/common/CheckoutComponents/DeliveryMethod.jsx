import React from 'react';

const DeliveryMethod = () => {
    return (
        <div className='pb-4 md:pb-10 mb-4 md:mb-10 border-b'>
            <div className='flex items-center justify-between mb-4'>
                <h1 className='text-primary md:text-2xl font-semibold'>
                    Delivery method
                </h1>
            </div>

            <div className='text-[#798090] text-sm md:text-lg space-y-1'>
                <div className='flex items-center justify-between'>
                    <p>Free Shipping</p>
                    <p>Free</p>
                </div>

            </div>
        </div>
    );
};

export default DeliveryMethod;