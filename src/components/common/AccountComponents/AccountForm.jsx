import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { ArrowRight, Info, RefreshCcw, Trash } from 'lucide-react';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import avatar from "@/assets/Images/avatarBig.svg"



const AccountForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        toast.success("Your Questions has been submitted.")
    }


    return (
        <div className='py-12 border-b '>

            {/* header  */}
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



            {/* form  */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='space-y-6'
            >


                {/* name, title, profile image  */}
                <div className='grid grid-cols-2 gap-12 pb-12 border-b '>
                    <div className='flex flex-col gap-8'>
                        <div className='flex-1'>
                            {/* name  */}
                            <Label htmlFor='displayName'>Display Name*</Label>
                            <Input
                                id='displayName'
                                type='text'
                                placeHolder='John Doe'
                                className={`bg-[#F5F6F7] rounded-md px-3  border-white/20 ${errors?.displayName ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                                {...register('displayName', { required: "This field is required" })}
                            />
                        </div>
                        <div className='flex-1'>
                            {/* name  */}
                            <Label htmlFor='title'>Title*</Label>
                            <Input
                                id='title'
                                type='text'
                                placeHolder='Write your title here'
                                className={`bg-[#F5F6F7] rounded-md px-3  border-white/20 ${errors?.title ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                                {...register('title', { required: "This field is required" })}
                            />
                        </div>
                    </div>


                    {/* profile avatar  */}
                    <div>
                        <p className='flex items-center gap-2 text-gray-400'>
                            Profile image
                            <Info />
                        </p>

                        {/* avatar  */}
                        <div className='cursor-pointer text-white relative max-w-max group transition-all ease-in-out duration-300'>
                            <img src={avatar} alt="" />
                            <div className='opacity-0 group-hover:opacity-100'>
                                <RefreshCcw className='absolute top-1/2 -translate-y-[50%] left-2' />
                                <Trash className='absolute top-1/2 -translate-y-[50%] right-2' />
                            </div>
                        </div>
                    </div>
                </div>





                {/* header  */}
                <div className='mb-12' >
                    <h1
                        className="text-primary font-semibold text-3xl"
                    >
                        Personal info
                    </h1>
                    <p
                        className='text-[#6A7283] '
                    >
                        Update your personal information.
                    </p>
                </div>

                {/* personal Info  */}
                <div className='grid grid-cols-2 gap-12 pb-12'>
                    <div className='flex-1'>
                        {/* name  */}
                        <Label htmlFor='firstName'>First Name*</Label>
                        <Input
                            id='firstName'
                            type='text'
                            placeHolder='First name'
                            className={`bg-[#F5F6F7] rounded-md px-3  border-white/20 ${errors?.firstName ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                            {...register('firstName', { required: "This field is required" })}
                        />
                    </div>
                    <div className='flex-1'>
                        {/* name  */}
                        <Label htmlFor='lastName'>Last Name*</Label>
                        <Input
                            id='lastName'
                            type='text'
                            placeHolder='last name'
                            className={`bg-[#F5F6F7] rounded-md px-3  border-white/20 ${errors?.lastName ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                            {...register('title', { required: "This field is required" })}
                        />
                    </div>
                    <div className='flex-1'>
                        {/* name  */}
                        <Label htmlFor='phone'>Phone*</Label>
                        <Input
                            id='phone'
                            type='number'
                            placeHolder='123456789'
                            className={`bg-[#F5F6F7] rounded-md px-3  border-white/20 ${errors?.phone ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                            {...register('phone', { required: "This field is required" })}
                        />
                    </div>
                </div>


                {/* submit  */}
                <div className='flex justify-end'>
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
            </form>
        </div>
    );
};

export default AccountForm;