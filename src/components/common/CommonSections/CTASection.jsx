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
                <h1 className='text-center text-white text-6xl font-semibold'>
                    Ready to Buy, Sell, or Recycle Solar Equipment?
                </h1>


                {/* cta  */}
                <p className='text-white text-2xl text-center mt-6 mb-12 '>
                    Sign up now and start contributing to a greener future.
                </p>

                {/* buttons  */}
                <div className='max-w-max mx-auto space-x-4'>
                    <Button
                        size={'lg'}
                        className={"hover:bg-white/40 hover:text-white"}
                    >
                        Become a Seller
                        <ArrowRight />
                    </Button>
                    <Button
                        size={'lg'}
                        variant={"outline"}
                        className={"bg-white/40 text-white border-none"}
                    >
                        Explore the Marketplace
                    </Button>
                </div>
            </div>

        </CommonSection>
    );
};

export default CTASection;