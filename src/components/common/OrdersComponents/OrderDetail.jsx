import { Button } from '@/components/ui/button';
import { File, Printer } from 'lucide-react';
import React from 'react';

const OrderDetail = () => {
    return (
        <div className=' p-12 bg-[#FAFAFB] rounded-2xl overflow-hidden border border-[#C1C4CC]'>
            <div className='pb-8 border-b-2 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img className='w-[100px] h-[100px] object-cover rounded-lg' src="https://static.vecteezy.com/system/resources/thumbnails/040/995/143/small/ai-generated-fields-of-solar-panels-and-systems-to-produce-green-electricity-ai-generated-photo.jpg" alt="" />
                    <p className='text-2xl font-semibold'>JA Solar 360w</p>
                </div>

                <div className='text-center'>
                    <p className='text-[#798090]'>Price</p>
                    <p className='text-primary text-2xl font-semibold'>$100</p>
                </div>

                <div className='text-center'>
                    <p className='text-[#798090]'>Quantity</p>
                    <p className='text-primary text-2xl font-semibold'>5</p>
                </div>

                <div className='text-center'>
                    <p className='text-[#798090]'>Total</p>
                    <p className='text-primary text-2xl font-semibold'>$500</p>
                </div>
            </div>




            <div className='border-b-2 border-dashed py-8'>
                <div className='grid grid-cols-2 text-right max-w-100 ml-auto'>
                    <p>Subtotal</p>
                    <p>€0.00</p>


                    <p>Promo code discount</p>
                    <p>€0.00</p>

                    <hr className='col-span-2 my-4' />

                    <h2 className='text-primary font-semibold text-2xl'>Total</h2>
                    <p className='text-primary font-semibold text-2xl'>€0.00</p>
                </div>
            </div>



            <div className='pt-8'>
                <p>Billing Information</p>
                <p>Paid with</p>

                <div className='flex items-center justify-between'>
                    <p className='text-gray-400'>John Doe</p>

                    <div className='flex items-center'>
                        <Button variant={'link'}
                            className={'text-brand-primary'}
                        >
                            <Printer />
                            Print
                        </Button>

                        <Button variant={'link'}
                            className={'text-brand-primary'}
                        >
                            <File />
                            Download
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;