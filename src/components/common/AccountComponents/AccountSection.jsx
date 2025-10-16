import { Button } from '@/components/ui/button';
import React from 'react';
import AccountForm from './AccountForm';

const AccountSection = () => {
    return (
        <div>

            {/* account actions  */}
            <div className='grid grid-cols-2 py-12 border-b '>
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


            {/* display info  */}
            <div className='py-12 border-b '>
                <div className='mb-12' >
                    <h1
                        className="text-primary font-semibold text-3xl"
                    >
                        Display info
                    </h1>
                    <p
                        className='text-[#6A7283] '
                    >
                        This information will be visible to all members of this site.
                    </p>
                </div>

                <AccountForm />
            </div>
        </div>
    );
};

export default AccountSection;