import React from "react";
import { Separator } from "@/components/ui/separator";
import CommonSection from "../common/CommonSection";
import CountUp from "react-countup";
import StatCard from "../common/StatCard";
import SectionHeading from "../common/SectionHeading";

const StatsSection = () => {
    const stats = [
        { number: "379", label: "GW", description: "Solar panel capacity installed each year worldwide" },
        { number: "78", label: "million tons", description: "Solar panels that will reach the end of their useful life before 2050" },
        { number: "25", label: "Years", description: "Average life of a solar panel" },
    ];

    return (
        <CommonSection>
            {/* Title */}
            <SectionHeading>
                Buy, Sell and Recycle
            </SectionHeading>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 text-center*:">
                {stats.map((stat, index) => (
                    <StatCard stat={stat} index={index} key={index} />
                ))}
            </div>
        </CommonSection>
    );
};

export default StatsSection;
