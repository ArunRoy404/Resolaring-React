import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { ArrowRight, ChevronDown } from "lucide-react";
import React, { useState } from 'react';
import { Link } from "react-router";
import { toast } from "sonner";

const FinalDeliveryDetails = () => {
    const [selected, setSelected] = useState("")


    return (
        <div>
            <div className='flex items-center justify-between mb-4'>
                <h1 className='text-primary text-2xl font-semibold'>
                    Delivery details
                </h1>
            </div>

            <div className='relative text-[#798090] text-lg space-y-1 mb-6'>
                <p>Choose an address</p>


                {/* dropdown  */}
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


            {/* address summary  */}
            <div className='relative text-[#798090] text-lg space-y-1'>
                <p>Abu Bokkor Siddik</p>
                <p>Company name</p>
                <p>demotest@gmail.com</p>
                <p>mohakhali, Dhaka 1212, Bangladesh</p>
                <p>+44 20 0000 0000</p>

                <p className='absolute top-0 right-0 text-primary underline cursor-pointer text-lg'>
                    Edit
                </p>
            </div>

            {/* buttons  */}
            <div className='flex  justify-between gap-6 mt-10'>
                <Link
                className="w-full"
                    to={'/'}
                >
                    <Button
                        size={'lg'}
                        variant={'outline'}
                        className={'flex-1 py-6 w-full'}
                    >
                        Cancel
                    </Button>
                </Link>
                <Link
                    to={'/'}
                    className="w-full"
                >
                    <Button
                        size={'lg'}
                        className={'py-6 border border-secondary flex-1 w-full'}
                        onClick={() => toast.success("Order placed successfully.")}
                    >
                        Save and Continue
                        <ArrowRight />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default FinalDeliveryDetails;