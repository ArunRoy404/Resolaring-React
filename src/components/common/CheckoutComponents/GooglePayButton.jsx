import GoogleSvg from '@/components/svg/GoogleSvg';
import { Button } from '@/components/ui/button';
import React from 'react';

const GooglePayButton = () => {
    return (
        <div className='py-8  px-5 border relative border-[#C1C4CC] rounded-2xl'>
            <p className='absolute top-0 -translate-y-1/2 bg-white px-1 right-1/2 translate-x-1/2 text-primary md:text-lg'>Express checkout</p>

            <Button
                className={'w-full py-6 bg-primary text-white hover:bg-white border border-primary hover:text-black'}
            >
                <GoogleSvg />
                Pay
            </Button>
        </div>
    );
};

export default GooglePayButton;