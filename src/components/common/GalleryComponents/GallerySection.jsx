import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useLoaderData } from "react-router";
import CommonSection from "../CommonSection";
import SectionHeading from "../SectionHeading";
import { Button } from "@/components/ui/button";
import EquipmentCardSecondary from "../EquipmentCardSecondary";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ShareEquipment from "./ShareEquipmentDialog";
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
                <div className="absolute top-0 right-0 flex items-center gap-8">
                    <div className='flex items-center gap-3'>
                        <p className="text-lg">
                            Sort By:
                        </p>

                        <Select
                            value={selectedOption}
                            onValueChange={(newValue) => setSelectedOption(newValue)}
                        >
                            <SelectTrigger className=" border-none text-[#6A7283] shadow-none text-lg font-medium">
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
                    <Button className={'bg-brand-primary text-white hover:bg-brand-primary/70 text-sm'}>
                        Add Media
                    </Button>

                </div>
            </SectionHeading>



            {/* Equipments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </CommonSection>
    );
};

export default GallerySection;