import React from 'react';
import CommonSection from '../CommonSection';
import CTAImage from "@/assets/Images/CTAImage.svg"
import { Button } from '../../ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
    return (
        <CommonSection>
            <img
                src={CTAImage}
                alt="Banner Background"
                className="absolute inset-0 -z-[100] w-full h-full object-cover"
            />
            <div
                className='max-w-[1000px] mx-auto'
            >

                {/* title  */}
                <h1 className='md:text-center text-white text-2xl md:text-6xl font-semibold'>
                    Ready to Buy, Sell, or Recycle Solar Equipment?
                </h1>


                {/* cta  */}
                <p className='md:text-center text-white text-sm md:text-2xl mt-3 mb-6 md::mt-6 md:mb-12 '>
                    Sign up now and start contributing to a greener future.
                </p>

                {/* buttons  */}
                <div className='md:max-w-max mx-auto space-x-4 space-y-1 w-full'>
                    <Button
                        size={'lg'}
                        className={"w-full md:w-auto hover:bg-white/40 hover:text-white"}
                    >
                        Become a Seller
                        <ArrowRight />
                    </Button>
                    <Button
                        size={'lg'}
                        variant={"outline"}
                        className={"w-full md:w-auto bg-white/40 text-white border-none"}
                    >
                        Explore the Marketplace
                    </Button>
                </div>
            </div>

        </CommonSection>
    );
};

export default CTASection;