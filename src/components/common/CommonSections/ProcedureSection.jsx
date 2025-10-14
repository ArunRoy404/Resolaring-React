import React from 'react';
import CommonSection from '../common/CommonSection';
import image from '@/assets/Images/procedureImage.svg'
import SectionHeading from '../common/SectionHeading';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { procedures } from '@/data/procedureData';
import ProcedureCard from '../common/ProcedureCard';

const ProcedureSection = () => {
    return (
        <CommonSection
            className='bg-background-secondary'
        >
            <div className='gap-12 grid grid-cols-3'>
                {/* image  */}
                <div className='h-full flex items-center'>
                    <img src={image} alt="" />
                </div>


                {/* procedure container */}
                <div className='col-span-2'>
                    <SectionHeading className={'text-left'}>
                        How Resolaring Works
                    </SectionHeading>


                    {/* procedures grid*/}
                    {/* features grid  */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-12">
                        {procedures.map((item, index) => (
                            <ProcedureCard
                                key={item?.label}
                                index={index}
                                procedure={item} />
                        ))}
                    </div>

                    <Button
                        size={'lg'}
                    >
                        Start Selling Today
                        <ArrowRight />
                    </Button>


                </div>
            </div>

        </CommonSection>
    );
};

export default ProcedureSection;