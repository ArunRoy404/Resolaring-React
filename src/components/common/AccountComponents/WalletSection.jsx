import React from 'react';
import EditAddressDialog from '../Dialog/EditAddressDialog';
import { CheckCircle, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EditPaymentDialog from '../Dialog/EditPaymentDialog';

const WalletSection = () => {
    return (
        <div className=' py-12 border-b '>
            <div className='space-y-8'>
                <div className='border-b w-full pb-12'>
                    <h1
                        className="text-primary font-semibold text-3xl"
                    >
                        Wallet
                    </h1>
                    <p
                        className='text-[#6A7283] '
                    >
                        Save your payment details for faster checkout.
                    </p>
                </div>




                <div>
                    <p
                        className='text-[#6A7283] '
                    >
                        John Doe
                    </p>
                    <p
                        className='text-[#6A7283] '
                    >
                        Company name
                    </p>
                    <p
                        className='text-[#6A7283] '
                    >
                        New York, 1212
                    </p>
                    <p
                        className='text-[#6A7283] '
                    >
                        USA
                    </p>
                    <p
                        className='text-[#6A7283] '
                    >
                        +44 20 3769 7855
                    </p>



                    {/* dialogs  */}
                    <div className='flex items-center justify-between gap-12'>
                        <div className='flex items-center gap-12'>
                            <EditPaymentDialog />
                            <p className='text-primary underline cursor-pointer '>
                                Remove
                            </p>
                        </div>

                        <p className='flex items-center gap-4'>
                            <CheckCircle color='green' />
                            <span className='text-[#6A7283]'>Default Address</span>
                        </p>
                    </div>
                </div>
            </div>


            <div className='max-w-max mx-auto text-center space-y-6 mt-12'>
                <p className='text-2xl'>You haven’t saved any payment methods yet</p>

                <p className='text-base text-[#6A7283] max-w-[500px]'>
                    Securely save your payment details for faster checkout whenever you place an order.
                </p>

                <Button
                    size={'lg'}
                    className={'bg-brand-primary text-white hover:bg-white hover:text-black border border-brand-primary'}
                >
                    <Plus />
                    Add Payment Method
                </Button>

            </div>
        </div>
    );
};

export default WalletSection;