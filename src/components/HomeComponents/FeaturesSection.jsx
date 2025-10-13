import React from 'react';
import CommonSection from '../common/CommonSection';
import SectionHeading from '../common/SectionHeading';
import { features } from '@/data/featuresData';
import FeatureCard from '../common/FeatureCard';

const FeaturesSection = () => {
    return (
        <CommonSection>
            <SectionHeading>
                Why Choose Resolaring?
            </SectionHeading>


            {/* features grid  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((item, index) => (
                    <FeatureCard key={item.label} index={index} feature={item}/>
                ))}
            </div>
        </CommonSection>
    );
};

export default FeaturesSection;