import { Button } from '@/components/ui/button';
import React from 'react';
import AccountForm from './AccountForm';
import DecorationSolar2 from '../Decoration/DecorationSolar2';

const AccountSection = () => {
    return (
        <div>

            {/* account actions  */}
            <div className='grid grid-cols-2 gap-12 py-12 border-b '>
                <div >
                    <h1
                        className="text-primary font-semibold text-3xl"
                    >
                        Account
                    </h1>
                    <p
                        className='text-[#6A7283] '
                    >
                        View and edit your personal info below.
                    </p>
                </div>
                <div className='space-x-4'>
                    <Button
                        size={'lg'}
                        variant={'outline'}
                        className={''}
                    >
                        Discard
                    </Button>
                    <Button
                        size={'lg'}
                        className={'bg-brand-primary text-white hover:bg-white hover:text-black border border-brand-primary'}
                    >
                        Update Info
                    </Button>
                </div>
            </div>


            {/* Form  */}
            <AccountForm />

            <DecorationSolar2 reverse />
        </div>
    );
};

export default AccountSection;