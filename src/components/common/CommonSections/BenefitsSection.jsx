import React from 'react';
import CommonSection from '../CommonSection';
import SectionHeading from '../SectionHeading';
import FeatureCard from '../FeatureCard';
import { benefits } from '@/data/benefitsData';
import BenefitsCard from '../BenefitsCard';

const BenefitsSection = () => {
    return (
        <CommonSection
            className={'bg-background-secondary'}
        >
            <SectionHeading>
                Benefits of Joining the Solar Revolution
            </SectionHeading>


            {/* benefits grid  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((item, index) => (
                    <BenefitsCard key={item.label} index={index} benefit={item} />
                ))}
            </div>
        </CommonSection>
    );
};

export default BenefitsSection;