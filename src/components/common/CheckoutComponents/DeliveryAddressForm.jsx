import React, { useState } from 'react';
import CommonSection from '../CommonSection';
import { useForm } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { ChevronDown } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { useNavigate } from 'react-router';

const DeliveryAddressForm = () => {
    const navigate = useNavigate()
    const [selected, setSelected] = useState("")
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        toast.success("Address Saved.")
        navigate('/checkout/delivery-details')
    }


    return (
        <CommonSection>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='space-y-6'
            >

                <div className='flex gap-8'>
                    <div className='flex-1'>
                        {/* first name  */}
                        <Label htmlFor='firstName'> First Name*</Label>
                        <Input
                            id='firstName'
                            type='text'
                            className={`bg-[#F5F6F7] rounded-md px-3  border-white/20 ${errors?.firstName ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                            {...register('firstName', { required: "This field is required" })}
                        />
                    </div>
                    <div className='flex-1'>
                        {/* Last Name  */}
                        <Label htmlFor='lastName'> Last name*</Label>
                        <Input
                            id='lastName'
                            type='lastName'
                            className={`bg-[#F5F6F7] rounded-md px-3  border-white/20 ${errors?.lastName ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                            {...register('lastName', { required: "This field is required" })}
                        />
                    </div>
                </div>


                <div className='flex gap-8'>
                    <div className='flex-1'>
                        {/* Phone Number  */}
                        <Label htmlFor='phone'> Phone number*</Label>
                        <Input
                            id='phone'
                            type='number'
                            className={`bg-[#F5F6F7] rounded-md px-3  border-white/20 ${errors?.phone ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                            {...register('phone', { required: "This field is required" })}
                        />
                    </div>

                    {/* dropdown  */}
                    <div className="flex-1">
                        <Label htmlFor="dropdown text-primary">Country/Region*</Label>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    id="dropdown"
                                    type="button"
                                    variant="outline"
                                    className={`w-full py-6 justify-between bg-[#F5F6F7] rounded-md px-3 border-white/20 text-left font-normal text-sm shadow-none hover:bg-[#F5F6F7] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring`}
                                >
                                    {selected}
                                    <ChevronDown className="h-4 w-4 opacity-50" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
                                <DropdownMenuItem onClick={() => setSelected("United States")}>
                                    United States
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setSelected("Bangladesh")}>
                                    Bangladesh
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setSelected("Bidesh")}>
                                    Bidesh
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>


                <div className='flex gap-8'>
                    <div className='flex-1'>
                        {/* address  */}
                        <Label htmlFor='address'>Address*</Label>
                        <Input
                            id='address'
                            type='text'
                            className={`bg-[#F5F6F7] rounded-md px-3  border-white/20 ${errors?.address ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                            {...register('address', { required: "This field is required" })}
                        />
                    </div>
                    <div className='flex-1'>
                        {/* City  */}
                        <Label htmlFor='city'> City*</Label>
                        <Input
                            id='city'
                            type='text'
                            className={`bg-[#F5F6F7] rounded-md px-3  border-white/20 ${errors?.city ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                            {...register('city', { required: "This field is required" })}
                        />
                    </div>
                </div>


                <div className='flex gap-8'>
                    <div className='flex-1'>
                        {/* state  */}
                        <Label htmlFor='state'> State*</Label>
                        <Input
                            id='state'
                            type='text'
                            className={`bg-[#F5F6F7] rounded-md px-3  border-white/20 ${errors?.state ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                            {...register('state', { required: "This field is required" })}
                        />
                    </div>
                    <div className='flex-1'>
                        {/* zip  */}
                        <Label htmlFor='zipCode'> Zip/Postal code*</Label>
                        <Input
                            id='zipCode'
                            type='number'
                            className={`bg-[#F5F6F7] rounded-md px-3  border-white/20 ${errors?.zipCode ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                            {...register('zipCode', { required: "This field is required" })}
                        />
                    </div>
                </div>



                {/* submit  */}
                <div className='flex  justify-between gap-6'>
                    <Button
                        size={'lg'}
                        variant={'outline'}
                        className={'flex-1 py-6'}
                    >
                        Use Different Address
                    </Button>
                    <Button
                        size={'lg'}
                        className={'py-6 border border-secondary flex-1'}
                    >
                        Save and Continue
                        <ArrowRight />
                    </Button>
                </div>
            </form>
        </CommonSection>
    );
};

export default DeliveryAddressForm;