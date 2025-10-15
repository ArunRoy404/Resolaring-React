import GoogleSvg from '@/components/svg/GoogleSvg';
import { Button } from '@/components/ui/button';
import React from 'react';

const GooglePayButton = () => {
    return (
        <div className='py-10 px-5 border relative border-[#C1C4CC] rounded-2xl'>
            <p className='absolute top-0 -translate-y-1/2 bg-white px-1 right-1/2 translate-x-1/2 text-primary text-lg'>Express checkout</p>

            <Button
                className={'w-full bg-primary text-white hover:bg-white border border-primary hover:text-black'}
            >
                <GoogleSvg />
                Pay
            </Button>
        </div>
    );
};

export default GooglePayButton;