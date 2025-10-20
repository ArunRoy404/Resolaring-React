import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const ProfileTabSection = () => {
    return (
        <div className=' py-12'>
            <div className='space-y-8'>

                {/* heading  */}
                <div className='border-b w-full pb-12'>
                    <h1
                        className="text-primary font-semibold text-3xl"
                    >
                        Profile
                    </h1>
                    <p
                        className='text-[#6A7283] '
                    >
                        Join date: Feb 13, 2025
                    </p>
                </div>




                {/* about  */}
                <div className='w-full pb-12 space-y-4'>
                    <h1
                        className="text-primary font-semibold text-3xl"
                    >
                        About
                    </h1>


                    <Textarea
                        placeHolder='Share something about yourself...'
                        className={'min-h-[200px] p-8 bg-[#F5F6F7]'}
                    />
                </div>




                {/* if empty about  */}
                <div
                    className='space-y-2 text-center max-w-[550px] mx-auto'
                >
                    <h2 className='text-primary text-3xl'>This member hasn't shared any info about themselves yet</h2>

                    <p className='text-gray-400'>This member hasn't written about themselves.</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileTabSection;