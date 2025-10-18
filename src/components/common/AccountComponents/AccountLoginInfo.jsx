import React from 'react';

const AccountLoginInfo = () => {
    return (
        <div className='grid grid-cols-2 gap-12 py-12 border-b '>
            <div className='space-y-8'>
                <div>
                    <h1
                        className="text-primary font-semibold text-3xl"
                    >
                        Login info
                    </h1>
                    <p
                        className='text-[#6A7283] '
                    >
                        View and update your login email and password.
                    </p>
                </div>


                <div>
                    <p
                        className='text-[#6A7283] '
                    >
                        Login email:
                    </p>
                    <p
                        className='text-[#6A7283] '
                    >
                        johndoe@gmail.com
                    </p>
                    <p
                        className='text-[#6A7283] underline '
                    >
                        Change Email
                    </p>
                </div>


                <div>
                    <p
                        className='text-[#6A7283] '
                    >
                        Password:
                    </p>
                    <p
                        className='text-[#6A7283] '
                    >
                        *****************
                    </p>
                    <p
                        className='text-[#6A7283] underline '
                    >
                        Change Password
                    </p>
                </div>
            </div>


            <div>
            </div>
        </div>
    );
};

export default AccountLoginInfo;