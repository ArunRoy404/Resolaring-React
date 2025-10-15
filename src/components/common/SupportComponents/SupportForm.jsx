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

const SupportForm = () => {
    const [selected, setSelected] = useState("Choose product")
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
        <CommonSection>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='space-y-6'
            >

                <div className='flex gap-8'>
                    <div className='flex-1'>
                        {/* name  */}
                        <Label htmlFor='name'> Name*</Label>
                        <Input
                            id='name'
                            type='text'
                            placeHolder='John Doe'
                            className={`bg-[#F5F6F7] rounded-md px-3  border-white/20 ${errors?.name ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                            {...register('name', { required: "This field is required" })}
                        />
                    </div>
                    <div className='flex-1'>
                        {/* email  */}
                        <Label htmlFor='email'> Email*</Label>
                        <Input
                            id='email'
                            type='email'
                            placeHolder='johndoe123@gmail.com'
                            className={`bg-[#F5F6F7] rounded-md px-3  border-white/20 ${errors?.email ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                            {...register('email', { required: "This field is required" })}
                        />
                    </div>

                    {/* dropdown  */}
                    <div className="flex-1">
                        <Label htmlFor="dropdown text-primary">Select Product*</Label>
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
                                <DropdownMenuItem onClick={() => setSelected("Option 1")}>
                                    Option 1
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setSelected("Option 2")}>
                                    Option 2
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setSelected("Option 3")}>
                                    Option 3
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {/* question  */}
                <Label htmlFor='question'> Add Your Question*</Label>
                <Textarea
                    id='question'
                    type='text'
                    placeHolder='Type here'
                    className={`bg-[#F5F6F7] min-h-28  border-white/20 ${errors?.question ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                    {...register('question', { required: "This field is required" })}
                />

                {/* submit  */}
                <div className='flex justify-center'>
                    <Button size={'lg'}>
                        Send Inquiry
                        <ArrowRight />
                    </Button>
                </div>
            </form>
        </CommonSection>
    );
};

export default SupportForm;