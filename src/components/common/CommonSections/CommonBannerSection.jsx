import CommonSection from '../CommonSection';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';


const CommonBannerSection = ({ image, title, subtitle, button }) => {
    return (
        <CommonSection>

            {/* bg image  */}
            {
                !!image &&
                <img
                    src={image}
                    alt="Banner Background"
                    className="absolute inset-0 -z-[100] w-full h-full object-cover"
                />
            }

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071431] to-transparent"></div>

            {/* content  */}
            <div className='relative z-[100] max-w-[800px]'>
                {/* breadcrumb */}
                <p className='text-white text-lg font-medium'>
                    {'Home > Why Resolaring?'}
                </p>

                {/* title  */}
                <h1 className='text-white font-bold text-6xl mt-4 mb-3'>
                    {title}
                </h1>


                {/* cta  */}
                <p className='text-white text-lg mb-8'>
                    {subtitle}
                </p>


                {/* buttons  */}
                <div>
                    {
                        !!button &&
                        <Link to={button?.path}>
                            <Button
                                size={'lg'}
                                className={"hover:bg-white/40 py-6 hover:text-white"}
                            >
                                {button?.label}
                                <ArrowRight />
                            </Button>
                        </Link>
                    }
                </div>
            </div>

        </CommonSection>
    );
};
export default CommonBannerSection;