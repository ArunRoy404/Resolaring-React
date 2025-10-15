import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import GoogleSvg from '@/components/svg/GoogleSvg';
import car from "@/assets/Images/icon/car.svg"
import { Link } from 'react-router';

const CartPayment = () => {
    return (
        <div>
            <p className='py-2 text-primary'>Order Summary</p>
            <div className='w-[430px] sticky top-10 max-h-max p-6 bg-gray-100 rounded-2xl'>
                <div className=' rounded-md  flex items-center mb-5 justify-between bg-white p-3'>
                    <div className='flex items-center gap-2'>
                        <img src={car} alt="" />
                        <div>
                            <p>free</p>
                            <p>Shipping</p>
                        </div>
                    </div>
                    <p>Bangladesh</p>
                </div>

                <div className='flex items-center justify-between py-5 border-t'>
                    <p>Total Amount</p>
                    <p className='text-primary font-semibold'>$180</p>
                </div>

                <div className='flex flex-col w-full gap-4'>
                    <Link className='w-full' to={'/checkout/delivery-info'}>
                        <Button
                            className={'w-full hover:bg-white hover:text-primary border  '}
                        >
                            <ShoppingCart />
                            Checkout
                        </Button>
                    </Link>
                    <Button
                        className={'bg-primary text-white hover:bg-white border border-primary hover:text-black'}
                    >
                        <GoogleSvg />
                        Pay
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CartPayment;