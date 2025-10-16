import React from 'react';
import CommonSection from '../CommonSection';
import SectionHeading from '../SectionHeading';
import { benefits } from '@/data/benefitsData';
import BenefitsCard from '../BenefitsCard';
import DecorationSolar2 from '../Decoration/DecorationSolar2';
import DecorationEllipse from '../Decoration/DecorationEllipse';

const BenefitsSection = () => {
    return (
        <CommonSection
            className={'bg-background-secondary'}
        >
            <div className='relative z-20'>
                <SectionHeading>
                    Benefits of Joining the Solar Revolution
                </SectionHeading>


                {/* benefits grid  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((item, index) => (
                        <BenefitsCard key={item.label} index={index} benefit={item} />
                    ))}
                </div>
            </div>


            <DecorationEllipse className='absolute -top-1/2 left-1/2 -translate-x-1/2 ' />
            <DecorationSolar2 />
        </CommonSection>
    );
};

export default BenefitsSection;