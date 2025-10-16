import React from "react";
import CommonSection from "../common/CommonSection";
import SectionHeading from "../common/SectionHeading";
import { equipments } from "@/data/equipmentsData";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import EquipmentCardSecondary from "../common/EquipmentCardSecondary";
import DecorationEllipse from "../common/Decoration/DecorationEllipse";
import DecorationSolar1 from "../common/Decoration/DecorationSolar1";
import EquipmentCard from "../common/EquipmentCard";

const EquipmentsSection = () => {

    return (
        <CommonSection
            className='bg-background-secondary'
        >
            {/* Section Title */}
            <SectionHeading className={"text-left"}>
                Buy, Sell and Recycle
            </SectionHeading>

            <div className="relative z-20">
                {/* Equipments Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8">
                    {equipments.map((item) => (
                        <EquipmentCard key={item.id} equipment={item} />
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
            </div>

            <DecorationEllipse className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2' />
            <DecorationEllipse className='absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2' />
            <DecorationSolar1 />
        </CommonSection>
    );
};
export default EquipmentsSection;
