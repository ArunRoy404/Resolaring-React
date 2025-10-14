import React from 'react';
import CommonSection from '../CommonSection';
import SectionHeading from '../SectionHeading';
import { recycleData } from '@/data/recycleData';
import RecycleCard from '../RecycleCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import recycleNavigationImage from '@/assets/Images/recycleNavigationImage.svg'

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


                {/* navigation button container  */}
                <div
                    data-aos="fade-up"
                    data-aos-delay={1200}
                >
                    <div className='h-full relative rounded-2xl overflow-hidden flex items-center justify-center flex-col text-center bg-cover bg-center opa'
                        style={{ backgroundImage: `url(${recycleNavigationImage})` }}
                    >

                        {/* bg color  */}
                        <div className="absolute inset-0 bg-brand-primary opacity-60"></div>

                        <div className='relative space-y-12'>
                            <h2 className='text-white font-semibold text-4xl'>
                                Ready to Buy, Sell, or Recycle Solar Equipment?
                            </h2>

                            <Link to='/marketplace'>
                                <Button
                                    size={'lg'}
                                    className={"hover:bg-white/40 py-6 hover:text-white"}
                                >
                                    Browse marketplace
                                    <ArrowRight />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </CommonSection>
    );
};

export default RecyclePanelSection;