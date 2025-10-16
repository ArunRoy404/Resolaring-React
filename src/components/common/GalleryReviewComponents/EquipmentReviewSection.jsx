import React from 'react';
import CommonSection from '../CommonSection';
import avatar from '@/assets/Images/Avatar.svg'
import { ArrowRight, CalendarDays } from 'lucide-react';
import marketplaceImage from '@/assets/Images/marketplaceImage.svg'
import SectionHeading from '../SectionHeading';
import { useForm } from 'react-hook-form';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import DecorationSolar2 from '../Decoration/DecorationSolar2';

const EquipmentReviewSection = ({ equipment }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        console.log(data);
        toast.success("Comment Added Successfully.")
    }


    return (
        <div>
            <CommonSection>

                {/* title  */}
                <SectionHeading className={'text-left'}>
                    {equipment?.title}
                </SectionHeading>


                {/* equipment details  */}
                <div className='space-y-3 lg:space-y-6'>
                    {/* seller details  */}
                    <div className='flex items-center gap-12 text-primary/60'>
                        <div className='flex items-center gap-2 '>
                            <img src={avatar} alt="" />
                            <p>
                                {equipment?.author}
                            </p>
                        </div>

                        {/* date  */}
                        <p className='flex items-center gap-2'>
                            <CalendarDays />
                            20 Nov, 2024
                        </p>
                    </div>


                    {/* equipment image  */}
                    <img className='w-full rounded-2xl' src={marketplaceImage} alt="" />


                    {/* equipment title   */}
                    <p className='text-primary font-semibold text-xl md:text-2xl  lg:text-5xl max-w-6xl'>
                        {equipment?.title}
                        {" – Specifications, Features, and Performance Details"}
                    </p>


                    {/* description  */}
                    <p className='text-primary/50 text-sm md:text-base'>
                        {equipment?.details}
                    </p>
                </div>





                {/* reviews  */}
                <div className='mt-12 space-y-6'>
                    {
                        [...Array(4)].map(() => {
                            return (
                                <div className='flex items-start gap-3'>
                                    {/* avatar  */}
                                    <img src={avatar} alt="user" />
                                    {/* comment container  */}
                                    <div>
                                        {/* comment  */}
                                        <div className='p-4 bg-gray-100 rounded-xl'>
                                            {/* user  */}
                                            <p className='text-primary lg:text-2xl'>John Doe</p>

                                            <p className='text-gray-500 text-xs lg:text-base'>
                                                It seems like I tried to add comments without having the document open. If you’d like me to review or enhance your solar panel description, just let me know, and I’ll open it in the editor for detailed feedback!
                                            </p>
                                        </div>
                                        {/* time  */}
                                        <p className='text-xs lg:text-sm text-gray-800'>8 m</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>




                {/* Write Comment  */}
                <div className='mt-12'>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='space-y-6'
                    >
                        <Label htmlFor='comment'> Comment*</Label>
                        <Textarea
                            id='comment'
                            type='text'
                            placeHolder='Type your message here'
                            className={`bg-[#F5F6F7] min-h-28  border-white/20 ${errors?.comment ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                            {...register('comment', { required: "This field is required" })}
                        />

                        {/* send  */}
                        <Button size={'lg'}
                        className={'w-full md:w-auto'}
                        >
                            Send
                            <ArrowRight />
                        </Button>
                    </form>
                </div>


                <DecorationSolar2 reverse />
            </CommonSection>
        </div>
    );
};

export default EquipmentReviewSection;