import { Button } from '@/components/ui/button';
import { Lock, ShoppingCart, Tags } from 'lucide-react';
import EquipmentImage from '@/assets/Images/EquipmentImage.svg'

const OrderSummary = () => {
    return (
        <div>
            <div className='py-2 flex justify-between items-center'>
                <p className='ext-primary'>Order Summary {'(02)'}</p>
                <p className='ext-primary underline cursor-pointer'>Edit Cart</p>
            </div>
            <div className='w-[430px] sticky top-10 max-h-max p-6 bg-gray-100 rounded-2xl'>
                <div className=' rounded-md  flex items-center mb-5 justify-between bg-white p-3'>
                    <div className='flex items-center gap-2'>
                        <img src={EquipmentImage} className='w-11 rounded' alt="" />
                        <div>
                            <p>JA Solar 360w </p>
                            <p className='text-sm text-gray-400'>Qty: 01</p>
                        </div>
                    </div>
                    <p>$60</p>
                </div>

                <div className=' rounded-md  flex items-center mb-5 justify-between bg-white p-3'>
                    <div className='flex items-center gap-2'>
                        <img src={EquipmentImage} className='w-11 rounded' alt="" />
                        <div>
                            <p>JA Solar 360w </p>
                            <p className='text-sm text-gray-400'>Qty: 01</p>
                        </div>
                    </div>
                    <p>$60</p>
                </div>


                <div className='flex items-center gap-1 mb-4 border-b pb-4'>
                    <Tags />
                    <p className='ext-primary underline cursor-pointer'>
                        Enter a promo code
                    </p>
                </div>

                <div className='space-y-4 border-b pb-4'>
                    <div className='flex items-center justify-between'>
                        <p>Subtotal</p>
                        <p className='text-primary font-semibold'>$180</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>Delivery</p>
                        <p className='text-primary font-semibold'>$0</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>Sales Tax</p>
                        <p className='text-primary font-semibold'>$0</p>
                    </div>
                </div>

                <div className='flex items-center justify-between pt-4'>
                    <p className='text-xl font-semibold text-primary'>Sales Tax</p>
                    <p className='text-primary font-semibold'>$180</p>
                </div>


                <div className='absolute -bottom-12 -translate-x-1/2 left-1/2'>
                    <Button variant={'link'} >
                        <Lock />
                        Secure Checkout
                    </Button>
                </div>
            </div>
        </div>
    );
};


export default OrderSummary;       