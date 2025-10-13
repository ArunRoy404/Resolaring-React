import React from "react";
import CommonSection from "../common/CommonSection";
import StatCard from "../common/StatCard";
import SectionHeading from "../common/SectionHeading";
import { stats } from "@/data/statData";

const StatsSection = () => {
    return (
        <CommonSection>
            {/* Title */}
            <SectionHeading>
                Buy, Sell and Recycle
            </SectionHeading>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-4 lg:gap-0 lg:grid-cols-3 text-center*:">
                {stats.map((stat, index) => (
                    <StatCard stat={stat} index={index} key={index} />
                ))}
            </div>
        </CommonSection>
    );
};

export default StatsSection;
