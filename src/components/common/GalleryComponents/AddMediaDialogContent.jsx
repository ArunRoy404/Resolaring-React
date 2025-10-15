import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@radix-ui/react-label';
import { ArrowRight, Image } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const AddMediaDialogContent = ({setOpenDialog}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        console.log(data);
        toast.success("Equipment Added Successfully.")
        setOpenDialog(false)
    }

    return (
        <div className='p-6'>
            <p className='text-2xl font-semibold text-primary'>
                Upload Media
            </p>

            {/* upload image  */}
            <div className='my-4 h-52 flex flex-col border-dashed border-2 rounded items-center justify-center gap-2'>
                <Button size={'lg'} className={'bg-brand-primary text-white hover:bg-brand-primary/70'}
                onClick={()=>toast.success('Image uploaded')}
                >
                    <Image />
                    Select Photos
                </Button>

                <p>
                    or drag photo here
                </p>
            </div>


            <img
                src="https://i.ibb.co.com/nqHHdhQZ/image-1.png"
                alt="Solar panel"
                className='w-30 rounded-2xl mb-6'
            />


            <form
                onSubmit={handleSubmit(onSubmit)}
                className='space-y-6'
            >

                {/* title  */}
                <Label htmlFor='title'> Title*</Label>
                <Input
                    id='title'
                    type='text'
                    placeHolder='Choose'
                    className={`bg-[#F5F6F7] rounded-md px-3  border-white/20 ${errors?.title ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                    {...register('title', { required: "This field is required" })}
                />

                {/* description  */}
                <Label htmlFor='description'> Description*</Label>
                <Textarea
                    id='description'
                    type='text'
                    placeHolder='Choose'
                    className={`bg-[#F5F6F7] min-h-28  border-white/20 ${errors?.description ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                    {...register('description', { required: "This field is required" })}
                />

                {/* submit  */}
                <div className='flex justify-center'>
                    <Button size={'lg'}>
                        Upload Now
                        <ArrowRight />
                    </Button>
                </div>
            </form>

        </div>
    );
};

export default AddMediaDialogContent;