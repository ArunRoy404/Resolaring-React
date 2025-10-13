import React from 'react';
import CommonSection from '../common/CommonSection';
import SectionHeading from '../common/SectionHeading';
import FeatureCard from '../common/FeatureCard';
import { benefits } from '@/data/benefitsData';
import BenefitsCard from '../common/BenefitsCard';

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