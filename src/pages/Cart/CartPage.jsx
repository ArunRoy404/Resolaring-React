import CartTable from '@/components/common/CartComponents/CartTable';
import CommonSection from '@/components/common/CommonSection';
import car from "@/assets/Images/icon/car.svg"
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import GoogleSvg from '@/components/svg/GoogleSvg';

const CartPage = () => {
    return (
        <CommonSection>
            <div className='flex gap-13'>
                <CartTable />


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

                        <div className='flex flex-col gap-4'>
                            <Button
                                className={' hover:bg-primary hover:text-white '}
                            >
                                <ShoppingCart />
                                Checkout
                            </Button>
                            <Button
                                className={'bg-primary text-white hover:bg-white border border-primary hover:text-black'}
                            >
                                <GoogleSvg />
                                Pay
                            </Button>
                        </div>
                    </div>
                </div>


            </div>


        </CommonSection>
    );
};

export default CartPage;