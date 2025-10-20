import { Camera, Dot, RefreshCcw, Trash } from 'lucide-react';
import avatar from "@/assets/Images/avatarBig.svg"
import { Button } from '@/components/ui/button';
import ProfileSelect from '@/components/common/ProfileComponents/ProfileSelect';


const ProfileBanner = () => {
    return (
        <div>
            <div className='bg-brand-primary p-10 rounded-2xl space-y-36'>
                <Camera fill='white' className='text-brand-primary' />


                <div className='text-white flex items-center h-full gap-6'>
                    {/* avatar  */}
                    <div className='cursor-pointer text-white relative max-w-max group transition-all ease-in-out duration-300'>
                        <img src={avatar} alt="" />
                        <div className='opacity-0 group-hover:opacity-100'>
                            <RefreshCcw className='absolute top-1/2 -translate-y-[50%] left-2' />
                            <Trash className='absolute top-1/2 -translate-y-[50%] right-2' />
                        </div>
                    </div>


                    {/* info */}
                    <div className='flex items-end justify-between w-full'>
                        <div className='space-y-3'>
                            <div>
                                <p className='text-3xl font-semibold'>John Doe</p>

                                <div className='flex items-center gap-4'>
                                    <p>0 Followers</p>
                                    <Dot />
                                    <p>0 Following</p>
                                </div>
                            </div>

                            <p>Businessman</p>
                        </div>




                        <div
                            className='flex items-center'
                        >
                            <Button
                                variant={'outline'}
                                className={'bg-transparent border-white rounded font-normal'}
                            >
                                Edit Details
                            </Button>

                            <ProfileSelect />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileBanner;