import { Checkbox } from '@/components/ui/checkbox';
import React from 'react';

const BillingAddress = () => {
    return (
        <div className='pb-10 mb-10 border-b'>
            <div className='flex items-center justify-between mb-4'>
                <h1 className='text-primary text-2xl font-semibold'>
                    Billing Address
                </h1>
            </div>

            <div className='text-primary text-lg space-y-1'>
                <div className='flex gap-3 items-center'>
                    <Checkbox />
                    <p>Same as delivery address</p>
                </div>
            </div>
        </div>
    );
};

export default BillingAddress;