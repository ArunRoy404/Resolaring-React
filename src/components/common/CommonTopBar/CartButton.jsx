import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import React from 'react';

const CartButton = () => {
    return (
        <div className='flex items-center gap-3'>
            <Button variant={'icon'} className="bg-white rounded-full p-6 w-12" >
                <ShoppingCart />
            </Button>

            <p className='text-white font-semibold text-lg'>$98.29</p>

        </div>
    );
};

export default CartButton;