import { Button } from '@/components/ui/button';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import { Send } from 'lucide-react';
import marketplaceImage from '@/assets/Images/marketplaceImage.svg'

import CommonSection from '../CommonSection';

const NewsletterSection = () => {
    return (
        <CommonSection>
            <div className='relative overflow-hidden bg-cover bg-center rounded-4xl py-16'
                style={{ backgroundImage: `url(${marketplaceImage})` }}
            >
                {/* bg color  */}
                <div className="absolute inset-0 bg-brand-primary opacity-60"></div>


                <div className='relative max-w-[800px] mx-auto px-4'
                >
                    <h1 className='text-white text-2xl md:text-3xl w-150 mx-auto lg:w-full xl:text-6xl md:text-center font-semibold'>
                        Join the community and post your panels
                    </h1>
                    <p className='text-white md:text-center text-sm xl:text-lg font-medium mt-4 mb-10'>
                        Subscribe Our Newsletter For Latest Updates
                    </p>

                    <div>
                        <InputGroup className={' lg:w-[800px] bg-white rounded-full py-6'}>
                            <InputGroupInput placeholder="Enter your email..." />
                            <InputGroupAddon align="inline-end">
                                <Button className={'text-black absolute right-2 text-sm'}>
                                    Send
                                    <Send className='size-4' />
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                </div>
            </div>
        </CommonSection>
    );
};

export default NewsletterSection;