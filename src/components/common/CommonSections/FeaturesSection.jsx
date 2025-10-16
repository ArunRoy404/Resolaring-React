import React from 'react';
import CommonSection from '../CommonSection';
import SectionHeading from '../SectionHeading';
import { features } from '@/data/featuresData';
import FeatureCard from '../FeatureCard';
import DecorationSolar2 from '../Decoration/DecorationSolar2';

const FeaturesSection = () => {
    return (
        <CommonSection>
            <div className='z-20'>
                <SectionHeading>
                    Why Choose Resolaring?
                </SectionHeading>


                {/* features grid  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, index) => (
                        <FeatureCard key={item.label} index={index} feature={item} />
                    ))}
                </div>

            </div>
            <DecorationSolar2 reverse />
        </CommonSection>
    );
};

export default FeaturesSection;