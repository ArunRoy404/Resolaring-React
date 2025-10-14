import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { filterOptions } from '@/data/filterOptions';
import React, { useState } from 'react';
import { Link } from 'react-router';

const ProductsFilter = () => {
    const [sliderValue, setSliderValue] = useState(0)

    return (
        <div className='space-y-4'>


            <div>
                <p className='text-primary font-semibold text-3xl border-b pb-2'>
                    Manufacturer By
                </p>
                <ul className='flex flex-col p-8 space-y-4 text-lg text-[#6A7283]'>
                    {
                        filterOptions?.manufacturer?.map(filter => {
                            return (
                                <li>
                                    <Button
                                        variant={'link'}
                                        className={'p-0 text-[#6A7283]'}
                                    >
                                        {filter}
                                    </Button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>



            <div>
                <p className='text-primary font-semibold text-3xl border-b pb-2'>
                    Filter By
                </p>
                <ul className='flex flex-col p-8 space-y-4 text-lg text-[#6A7283]'>
                    <p className='text-bold text-primary text-lg'>
                        Product Type
                    </p>
                    {
                        filterOptions?.filterBy?.productType?.map(filter => {
                            return (
                                <li className='flex gap-2 items-center'>
                                    <Checkbox />
                                    {filter}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>


            <div>
                <p className='text-primary font-semibold text-3xl border-b pb-2'>
                    Price Range

                </p>
                <ul className='flex flex-col py-8 space-y-4 text-lg text-[#6A7283]'>
                    <p className='text-bold text-primary text-lg'>
                        Price: <span className='text-primary'>${sliderValue[0]} - ${sliderValue[1]}</span>
                    </p>
                    <Slider
                        defaultValue={[sliderValue, 650000]}
                        onValueChange={(newValue)=>setSliderValue(newValue)}
                        max={650000}
                        min={100}
                        step={1}
                        className=''
                    />
                </ul>
            </div>
        </div>
    );
};

export default ProductsFilter;