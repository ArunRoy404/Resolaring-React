import GooglePayButton from '@/components/common/CheckoutComponents/GooglePayButton';
import OrderSummary from '@/components/common/CheckoutComponents/OrderSummary';
import CommonSection from '@/components/common/CommonSection';
import SectionHeading from '@/components/common/SectionHeading';
import TopBar from '@/shared/TopBar';
import React from 'react';
import { Outlet } from 'react-router';

const CheckoutLayout = () => {
    return (
        <main>
            <TopBar />
            <CommonSection>
                <SectionHeading className={'text-left relative'}>
                    Resolaring.ES CHECKOUT
                    <p className='absolute font-medium text-2xl cursor-pointer hover:underline top-0 right-0'>
                        Continue Browsing
                    </p>
                </SectionHeading>

                <div className='flex gap-10'>
                    <div className='flex-1'>
                        <GooglePayButton />

                        <Outlet />
                    </div>

                    {/* order summary  */}
                    <OrderSummary />
                </div>
            </CommonSection>
        </main>
    );
};

export default CheckoutLayout;