import GooglePayButton from '@/components/common/CheckoutComponents/GooglePayButton';
import OrderSummary from '@/components/common/CheckoutComponents/OrderSummary';
import CommonSection from '@/components/common/CommonSection';
import SectionHeading from '@/components/common/SectionHeading';
import { Separator } from '@/components/ui/separator';
import TopBar from '@/shared/TopBar';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import AOS from 'aos';
import Lenis from 'lenis';

const CheckoutLayout = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });

        const lenis = new Lenis({
            autoRaf: true,
        });

        return () => {
            lenis.destroy()
        }

    }, []);

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
                    <div className='flex-1 space-y-8'>
                        <GooglePayButton />

                        <div className='flex items-center justify-center gap-3 font-bold text-primary'>
                            <div className='w-full'><Separator /></div>
                            <span>Or</span>
                            <div className='w-full'><Separator /></div>
                        </div>


                        {/* outlet  */}
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