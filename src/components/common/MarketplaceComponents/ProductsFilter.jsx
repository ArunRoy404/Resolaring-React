import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { filterOptions } from '@/data/filterOptions';
import React, { useState } from 'react';

const ProductsFilter = () => {
    const [sliderValue, setSliderValue] = useState([100, 650000])

    return (
        <div className='space-y-4'>

            {/* manufacturer  */}
            <div>
                <p className='text-primary font-semibold  lg:text-3xl border-b pb-2'>
                    Manufacturer By
                </p>
                <ul className='flex flex-col p-2 lg:p-8 space-y-1 text-sm lg:text-lg text-[#6A7283]'>
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


            {/* filter  */}
            <div>
                <p className='text-primary font-semibold lg:0text-3xl border-b pb-2'>
                    Filter By
                </p>
                <ul className='flex flex-col p-2 lg:p-8 space-y-2 text-sm lg:text-lg text-[#6A7283]'>
                    <p className='text-bold text-primary text-lg'>
                        Product Type
                    </p>
                    {
                        filterOptions?.filterBy?.productType?.map(filter => {
                            return (
                                <li className='flex gap-2 items-center'>
                                    <Checkbox  />
                                    {filter}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>


            {/* price range  */}
            <div>
                <p className='text-primary font-semibold lg:text-3xl border-b pb-2'>
                    Price Range

                </p>
                <ul className='flex flex-col py-8 space-y-4 text-lg text-[#6A7283]'>
                    <p className='text-bold text-primary text-lg'>
                        Price: <span className='text-primary'>${sliderValue[0]} - ${sliderValue[1]}</span>
                    </p>
                    <Slider
                        defaultValue={[sliderValue[0], sliderValue[1]]}
                        onValueChange={(newValue) => setSliderValue(newValue)}
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