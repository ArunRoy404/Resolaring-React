import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useLoaderData } from "react-router";
import CommonSection from "../CommonSection";
import SectionHeading from "../SectionHeading";
import { Button } from "@/components/ui/button";
import EquipmentCardSecondary from "../EquipmentCardSecondary";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ShareEquipment from "./ShareEquipmentDialog";
import DecorationSolar2 from "../Decoration/DecorationSolar2";
const filterOptions = [
    'Most Recent',
    'Most Liked',
    'Most Viewed',
]

const GallerySection = () => {
    const equipments = useLoaderData()
    const [selectedOption, setSelectedOption] = useState(filterOptions[0])
    const [openDialog, setOpenDialog] = useState(null)

    return (
        <CommonSection>
            {/* Section Title */}
            <SectionHeading className={"text-left relative"}>
                Anuncia els teus panells solars


                {/* sort by   */}
                <div className="absolute md:top-18  xl:top-0 md:right-0 flex items-center gap-2 lg:gap-8">
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

                    {/* add media button  */}
                    <Button
                        onClick={() => setOpenDialog('addMedia')}
                        className={'bg-brand-primary text-white hover:bg-brand-primary/70 text-xs lg:text-sm px-2 py-0 md:px-auto md:py-auto'}>
                        Add Media
                    </Button>

                </div>
            </SectionHeading>



            {/* Equipments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 md:mt-20">
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
                        View all products
                        <ArrowRight />
                    </Button>
                </Link>
            </div>

            {/* dialog */}
            <ShareEquipment openDialog={openDialog} setOpenDialog={setOpenDialog} />


            <DecorationSolar2 reverse />
        </CommonSection>
    );
};

export default GallerySection;