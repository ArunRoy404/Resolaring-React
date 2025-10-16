import { Button } from '@/components/ui/button';
import React from 'react';

const PlaceOrder = () => {
    return (
        <div>
            <div className='pb-10'>
                <div className='flex items-center justify-between mb-4'>
                    <h1 className='text-primary text-2xl font-semibold'>
                        Review & place order
                    </h1>
                </div>

                <div className='text-[#798090] text-lg space-y-1'>
                    <div className='flex items-center justify-between'>
                        <p>Review your details above and continue when you're ready.</p>
                    </div>
                </div>
            </div>

            <Button
            className={'py-7 w-full'}
            >
                Place Order & Pay
            </Button>
        </div>
    );
};

export default PlaceOrder;