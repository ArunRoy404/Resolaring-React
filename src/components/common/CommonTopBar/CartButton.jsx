import { Button } from '@/components/ui/button';
import { Badge, ShoppingCart } from 'lucide-react';
import React from 'react';

const CartButton = () => {
    return (
        <div className='flex items-center gap-3'>
            <div className='relative'>
                <Button variant={'icon'} className="bg-white rounded-full p-6 w-12" >
                    <ShoppingCart />
                </Button>

                <p className='bg-secondary rounded-full px-2 absolute top-0 -translate-y-2 translate-x-2 right-0'>
                    2
                </p>
            </div>

            <p className='text-white font-semibold text-lg'>$98.29</p>

        </div>
    );
};

export default CartButton;