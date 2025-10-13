import React, { useState } from 'react';
import CommonSection from '../common/CommonSection';
import SectionHeading from '../common/SectionHeading';
import solarImage from "@/assets/Images/solarImage.svg"
import { TestimonialCarousal } from '../common/TestimonialCarousal';
import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const TestimonialSection = () => {
    const [api, setApi] = useState(null)

    return (
        <CommonSection>
            <img
                src={solarImage}
                alt="Banner Background"
                className="absolute inset-0 -z-[100] w-full h-full object-cover"
            />
            <SectionHeading
                className={'text-left relative'}
            >
                What Our Users Say


                {/* controls  */}
                <div className='space-x-4 absolute top-0 right-0'>
                    <Button
                        size={"icon"}
                        variant={'outline'}
                        onClick={() => api?.scrollPrev()}
                        className={'hover:border-white hover:bg-transparent hover:text-white text-black bg-secondary border-secondary'}
                    >
                        <ArrowLeft />
                    </Button>
                    <Button
                        size={"icon"}
                        variant={'outline'}
                        onClick={() => api?.scrollNext()}
                        className={'hover:border-white hover:bg-transparent hover:text-white text-black bg-secondary border-secondary'}
                    >
                        <ArrowRight />
                    </Button>
                </div>

            </SectionHeading>



            {/* carousal  */}
            <TestimonialCarousal setApi={setApi} />
        </CommonSection>
    );
};

export default TestimonialSection;