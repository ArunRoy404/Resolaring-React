import { Button } from '@/components/ui/button';
import { Badge, ShoppingCart } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const CartButton = () => {
    return (
        <div className='flex items-center gap-3'>
            <div className='relative'>
                <Link to={'/cart'}>
                    <Button variant={'icon'} className="bg-white rounded-full md:p-6 w-9 md:w-12" >
                        <ShoppingCart />
                    </Button>
                </Link>

                <p className='bg-secondary rounded-full px-2 absolute top-0 -translate-y-2 translate-x-2 right-0'>
                    2
                </p>
            </div>

            <p className='text-white font-semibold text-sm lg:text-lg hidden md:block'>$98.29</p>

        </div>
    );
};

export default CartButton;