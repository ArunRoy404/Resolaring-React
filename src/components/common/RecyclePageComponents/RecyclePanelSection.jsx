import React from 'react';
import CommonSection from '../CommonSection';
import SectionHeading from '../SectionHeading';
import { recycleData } from '@/data/recycleData';
import RecycleCard from '../RecycleCard';
const RecyclePanelSection = () => {
    return (
        <CommonSection>
            <SectionHeading>
                How are panels recycled?
            </SectionHeading>


            {/* container grid  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {recycleData.map((item, index) => (
                    <RecycleCard key={index} index={index} recycleInfo={item} />
                ))}
            </div>
        </CommonSection>
    );
};

export default RecyclePanelSection;