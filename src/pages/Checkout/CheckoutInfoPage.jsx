import BillingAddress from '@/components/common/CheckoutComponents/BillingAddress';
import DeliveryDetails from '@/components/common/CheckoutComponents/DeliveryDetails';
import DeliveryMethod from '@/components/common/CheckoutComponents/DeliveryMethod';
import PlaceOrder from '@/components/common/CheckoutComponents/PlaceOrder';
import React from 'react';

const CheckoutInfoPage = () => {
    return (
        <div>
            <DeliveryDetails />
            <DeliveryMethod />
            <BillingAddress />
            <PlaceOrder/>
        </div>
    );
};

export default CheckoutInfoPage;