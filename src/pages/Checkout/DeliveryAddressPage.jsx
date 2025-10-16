import DeliveryAddressForm from '@/components/common/CheckoutComponents/DeliveryAddressForm';
import React from 'react';

const DeliveryAddressPage = () => {
    return (
        <div>
            <div className='flex items-center justify-between mb-4'>
                <h1 className='text-primary text-2xl font-semibold'>
                    Delivery details
                </h1>
            </div>

            <DeliveryAddressForm />
        </div>
    );
};

export default DeliveryAddressPage; 