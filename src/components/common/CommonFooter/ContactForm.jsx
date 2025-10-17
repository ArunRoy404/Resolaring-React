import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@radix-ui/react-label';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        toast.success("Form Submitted Successfully.")
    }

    return (
        <div>
            <p className='text-white  font-semibold text-lg mb-5'>
                Contact
            </p>

            <p className='mb-2'>
                Our team is here to answer any questions you may have, so please contact us by filling out the following fields or directly via email or phone!
            </p>

            <div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='space-y-6'
                >
                    <div
                        className='space-y-6'
                    >
                        <div className='md:flex space-y-3 items-center justify-between gap-3'>
                            <div className='flex-1'>
                                <Label htmlFor='name'> Name*</Label>
                                <Input
                                    id='name'
                                    type='text'
                                    placeHolder='Name here'
                                    className={`bg-white/10 rounded-md text-white border-white/20 ${errors?.name ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                                    {...register('name', { required: "This field is required" })}
                                />
                            </div>
                            <div className='flex-1'>
                                <Label htmlFor='cognoms'> Cognoms*</Label>
                                <Input
                                    id='cognoms'
                                    type='text'
                                    placeHolder='Cognoms here'
                                    className={`bg-white/10 rounded-md text-white border-white/20 ${errors?.cognoms ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                                    {...register('cognoms', { required: "This field is required" })}
                                />
                            </div>
                        </div>


                        <div className='md:flex space-y-3 items-center justify-between gap-3'>
                            <div className='flex-1'>
                                <Label htmlFor='telephone'> Telephone*</Label>
                                <Input
                                    id='telephone'
                                    type='text'
                                    placeHolder='Telephone here'
                                    className={`bg-white/10 rounded-md text-white border-white/20 ${errors?.telephone ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                                    {...register('telephone', { required: "This field is required" })}
                                />

                            </div>
                            <div className='flex-1'>
                                <Label htmlFor='email'> Email*</Label>
                                <Input
                                    id='email'
                                    type='email'
                                    placeHolder='Email here'
                                    className={`bg-white/10 rounded-md text-white border-white/20 ${errors?.email ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                                    {...register('email', { required: "This field is required" })}
                                />
                            </div>
                        </div>


                        <Label htmlFor='message'> Message*</Label>
                        <Textarea
                            id='message'
                            type='text'
                            placeHolder='Message here'
                            className={`bg-white/10 min-h-28 text-white border-white/20 ${errors?.message ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                            {...register('message', { required: "This field is required" })}
                        />
                    </div>

                    <Button className={'w-full  '}>
                        Submit here
                        <ArrowRight />
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;