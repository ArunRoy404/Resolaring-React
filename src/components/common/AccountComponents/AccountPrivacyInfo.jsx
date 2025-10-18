import React from 'react';

const AccountPrivacyInfo = () => {
    return (
        <div className='grid grid-cols-2 gap-12 py-12 border-b '>
            <div className='space-y-8'>
                <div>
                    <h1
                        className="text-primary font-semibold text-3xl"
                    >
                        Visibility and privacy
                    </h1>
                    <p
                        className='text-[#6A7283] '
                    >
                        Update your personal information.
                    </p>
                </div>


                <div>
                    <p
                        className='text-primary '
                    >
                        Profile URL
                    </p>
                    <p
                        className='text-[#6A7283] '
                    >
                        https://www.resolaring.es/en/profile/siddik-bdcalling/profile
                    </p>
                    <p
                        className='text-[#6A7283] underline '
                    >
                        Edit URL
                    </p>
                </div>


                <div>
                    <p
                        className='text-primary '
                    >
                        Privacy Policy
                    </p>
                    <p
                        className='text-[#6A7283] '
                    >
                        Hide your profile page, and social aspects of your account.
                    </p>
                    <p
                        className='text-[#6A7283] underline '
                    >
                        Make Profile Private
                    </p>
                </div>


                <div>
                    <p
                        className='text-primary '
                    >
                      Block Members
                    </p>
                    <p
                        className='text-[#6A7283] '
                    >
                     You haven't blocked anyone.
                    </p>
            
                </div>
            </div>


            <div>
            </div>
        </div>
    );
};

export default AccountPrivacyInfo;