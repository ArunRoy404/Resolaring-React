import React from 'react';
import ChangeEmailDialog from '../Dialog/ChangeEmailDialog';
import ChangePasswordDialog from '../Dialog/ChangePasswordDialog';
import EditAddressDialog from '../Dialog/EditAddressDialog';

const AddressSection = () => {
    return (
        <div className=' py-12 border-b '>
            <div className='space-y-8'>
                <div className='border-b w-full pb-12'>
                    <h1
                        className="text-primary font-semibold text-3xl"
                    >
                        My Addresses
                    </h1>
                    <p
                        className='text-[#6A7283] '
                    >
                        Add and manage the addresses you use often.
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
                    <div className='flex items-center gap-12'>
                        <EditAddressDialog />
                        <p className='text-primary underline cursor-pointer '>
                            Remove
                        </p>
                    </div>
                </div>
            </div>


            <div>
            </div>
        </div>
    );
};

export default AddressSection;