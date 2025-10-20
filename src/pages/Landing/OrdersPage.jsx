import CommonSection from '@/components/common/CommonSection';
import OrdersAccordion from '@/components/common/OrdersComponents/OrdersAccordion';
import SectionHeading from '@/components/common/SectionHeading';
import React from 'react';

const OrdersPage = () => {
    return (
        <CommonSection>

            {/* heading  */}
            <div className='mb-8'>
                <h1 className='text-primary font-semibold text-3xl'>
                    My Orders
                </h1>
                <p className='text-gray-400'>
                    View your order history or check the status of a recent order.
                </p>
            </div>




            <div>

                {/* accordion header  */}
                <div
                    className='grid grid-cols-5 w-full border-b-2 border-dashed py-8 mb-8 text-primary font-semt
                     text-2xl'
                >
                    <h1>Title</h1>
                    <h1>Date</h1>
                    <h1>Order</h1>
                    <h1>Status</h1>       
                    <h1>Total</h1>
                </div>
            </div>

            {/* accordion  */}
            <OrdersAccordion/>
        </CommonSection>
    );
};

export default OrdersPage;