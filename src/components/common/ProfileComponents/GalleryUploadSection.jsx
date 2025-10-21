import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import EquipmentCardSecondary from '../EquipmentCardSecondary';
import ShareEquipmentDialog from '../GalleryComponents/ShareEquipmentDialog';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight } from 'lucide-react';


const filterOptions = [
    'Most Recent',
    'Most Liked',
    'Most Viewed',
]


const GalleryUploadSection = () => {
    const equipments = useLoaderData()
    const [selectedOption, setSelectedOption] = useState(filterOptions[0])
    const [openDialog, setOpenDialog] = useState(null)



    return (
        <div className='relative mt-6'>

            {/* sort by   */}
            <div className=" max-w-max ml-auto md:right-0 flex items-center gap-2 lg:gap-8">
                <div className='flex items-center gap-3'>
                    <p className="text-sm  lg:text-lg">
                        Sort By:
                    </p>

                    <Select
                        value={selectedOption}
                        onValueChange={(newValue) => setSelectedOption(newValue)}
                    >
                        <SelectTrigger className=" border-none text-[#6A7283] shadow-none text-sm lg:text-lg font-medium">
                            <SelectValue placeholder="Recommended" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {filterOptions?.map((item) => (
                                    <SelectItem key={item} value={item}>{item}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>




            {/* gallery grid  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 md:mt-7">
                {equipments.map((item) => (
                    <EquipmentCardSecondary setOpenDialog={setOpenDialog} key={item.id} equipment={item} />
                ))}
            </div>



            {/* View All Products */}
            <div className="mt-10 text-center">
                <Link
                    to={'/equipments'}
                >
                    <Button
                        size={'lg'}
                    >
                        View all
                        <ArrowRight />
                    </Button>
                </Link>
            </div>





            {/* for empty gallery  */}
            <div
                className='space-y-2 py-16 text-center max-w-[550px] mx-auto'
            >
                <h2 className='text-primary text-3xl'>
                    No Uploaded Items Yet
                </h2>

                <p className='text-gray-400'>
                    Start adding photos & videos to the Shared Gallery
                </p>

                <Button
                    className={'mt-4 bg-brand-primary text-white border border-brand-primary hover:text-brand-primary hover:bg-white'}
                >
                    Start Now
                </Button>
            </div>



            {/* dialog */}
            <ShareEquipmentDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
        </div>
    );
};

export default GalleryUploadSection;       