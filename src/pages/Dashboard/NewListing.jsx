import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ChevronDown, Image } from 'lucide-react';
import React, { useState } from 'react';

const NewListing = () => {
    const [selectedBrand, setSelectedBrand] = useState("Iphone")
    const [selectedCondition, setSelectedCondition] = useState("New")


    return (
        <div className='space-y-12'>


            {/* media upload  */}
            <div>
                <p className='text-primary font-semibold text-2xl mb-4'>Upload Media</p>
                <div
                    className='flex items-center justify-center flex-col gap-2 py-[100px] bg-[#F5F6F7] border-dashed rounded-2xl border-3'
                >
                    <Button
                        size={'lg'}
                        className={'bg-brand-primary text-white border border-brand-primary text-sm hover:bg-white hover:text-black'}
                    >
                        <Image />
                        Select Photos
                    </Button>

                    <p>or drag photos here</p>
                </div>
            </div>



            {/* description  */}
            <div>
                <p className='text-primary font-semibold text-2xl mb-4'>Description</p>

                {/* title  */}
                <Label className={'mb-2'} htmlFor='title'>Title:</Label>
                <Input
                    className={'mb-6 rounded-md'}
                    id='title'
                    type='text'
                    placeHolder='Choose'
                />


                {/* title  */}
                <Label className={'mb-2'} htmlFor='description'>Description:</Label>
                <Textarea
                    className={'mb-6 bg-[#F5F6F7] min-h-30'}
                    id='description'
                    type='text'
                    placeHolder='Choose'
                />


                <div className='flex items-center gap-8 mb-6'>
                    {/* brand  */}
                    <div className='flex-1'>
                        <Label htmlFor='brand'>Brand Name</Label>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    id="brand"
                                    type="button"
                                    variant="outline"
                                    className={`w-full md:py-6 justify-between bg-[#F5F6F7] rounded-md px-3 border-white/20 text-left font-normal text-sm shadow-none hover:bg-[#F5F6F7] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring`}
                                >
                                    {selectedBrand}
                                    <ChevronDown className="h-4 w-4 opacity-50" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
                                <DropdownMenuItem onClick={() => setSelectedBrand("Iphone")}>
                                    Iphone
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setSelectedBrand("Nokia")}>
                                    Nokia
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setSelectedBrand("Samsung")}>
                                    Samsung
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>



                    <div className='flex-1'>
                        {/* specifications  */}
                        <Label htmlFor='spec'>Specifications:</Label>
                        <Input
                            className={'rounded-md'}
                            id='spec'
                            type='text'
                            placeHolder='Model name'
                        />
                    </div>



                    <div className='flex-1'>
                        {/* condition  */}
                        <Label htmlFor='condition'>Condition:</Label>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    id="condition"
                                    type="button"
                                    variant="outline"
                                    className={`w-full md:py-6 justify-between bg-[#F5F6F7] rounded-md px-3 border-white/20 text-left font-normal text-sm shadow-none hover:bg-[#F5F6F7] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring`}
                                >
                                    {selectedCondition}
                                    <ChevronDown className="h-4 w-4 opacity-50" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
                                <DropdownMenuItem onClick={() => setSelectedCondition("New")}>
                                    New
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setSelectedCondition("refurbished")}>
                                    refurbished
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setSelectedCondition("Second hand")}>
                                    Second hand
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>



            {/* Pricing options  */}
            <div>
                <p className='text-primary font-semibold text-2xl mb-4'>Pricing Options  </p>

                <div className='flex items-center gap-8'>
                    <div className='flex-1'>
                        {/* title  */}
                        <Label className={'mb-2'} htmlFor='price'>Price::</Label>
                        <Input
                            className={'mb-6 rounded-md'}
                            id='price'
                            type='text'
                            placeHolder='Choose'
                        />
                    </div>

                    <div className='flex-1'>
                        {/* discount  */}
                        <Label className={'mb-2'} htmlFor='discount'>Discounts: <span className='text-gray-400'>(Optional)</span></Label>
                        <Input
                            className={'mb-6 rounded-md'}
                            id='discount'
                            type='text'
                            placeHolder='Price'
                        />
                    </div>

                    <div className='flex-1'>
                        {/* discount percentage  */}
                        <Label className={'mb-2'} htmlFor='discountPercentage'>Discount PErcentages:</Label>
                        <Input
                            className={'mb-6 rounded-md'}
                            id='discountPercentages'
                            type='number'
                            placeHolder='%'
                        />
                    </div>
                </div>
            </div>



            {/* category selections  */}
            <div>
                <p className='text-primary font-semibold text-2xl mb-4'>Category Selection</p>

                <div>
                    <Label className={'mb-2'} htmlFor='category'>Categorize products:</Label>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                id="category"
                                type="button"
                                variant="outline"
                                className={`w-full md:py-6 justify-between bg-[#F5F6F7] rounded-md px-3 border-white/20 text-left font-normal text-sm shadow-none hover:bg-[#F5F6F7] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring`}
                            >
                                Choose
                                <ChevronDown className="h-4 w-4 opacity-50" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
                            <DropdownMenuItem>
                                Choose
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Choose
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Choose
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
};

export default NewListing;