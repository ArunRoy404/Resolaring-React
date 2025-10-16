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
            <CommonSection
                className={'!overflow-visible'}
            >
                <SectionHeading className={'text-left relative'}>
                    Resolaring.ES CHECKOUT
                    <p className='lg:absolute font-medium text-sm lg:text-2xl cursor-pointer hover:underline top-0 right-0'>
                        Continue Browsing
                    </p>
                </SectionHeading>

                <div className='items-start flex flex-col-reverse lg:flex-row gap-10'>
                    <div className='flex-1 space-y-8 w-full'>
                        <GooglePayButton />

                        <div className='flex items-center justify-center gap-3 font-bold text-primary'>
                            <div className='w-full'><Separator /></div>
                            <span>Or</span>
                            <div className='w-full'><Separator /></div>
                        </div>


                        {/* outlet  */}
                        <Outlet />
                    </div>

                    <div className=' lg:sticky top-10 w-full lg:w-auto'>
                        {/* order summary  */}
                        <OrderSummary />
                    </div>
                </div>
            </CommonSection>
        </main>
    );
};

export default CheckoutLayout;