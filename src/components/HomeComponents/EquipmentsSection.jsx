import React from "react";
import CommonSection from "../common/CommonSection";
import SectionHeading from "../common/SectionHeading";
import { equipments } from "@/data/equipmentsData";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import EquipmentCardSecondary from "../common/EquipmentCardSecondary";

const EquipmentsSection = () => {

    return (
        <CommonSection
         className='bg-background-secondary'
        >
            {/* Section Title */}
            <SectionHeading className={"text-left"}>
                Buy, Sell and Recycle
            </SectionHeading>

            {/* Equipments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {equipments.map((item) => (
                    <EquipmentCardSecondary key={item.id} equipment={item} />
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
        </CommonSection>
    );
};
export default EquipmentsSection;
