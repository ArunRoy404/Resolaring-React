import AboutImage from '@/assets/Images/AboutImage.svg'
import CommonSection from '../common/CommonSection';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const AboutBannerSection = () => {
    return (
        <CommonSection>
            <img
                src={AboutImage}
                alt="Banner Background"
                className="absolute inset-0 -z-[100] w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071431] to-transparent"></div>

            {/* content  */}
            <div className='relative z-[100]'>
                {/* breadcrumb */}
                <p className='text-white text-lg font-medium'>
                    {'Home > Why Resolaring?'}
                </p>

                {/* title  */}
                <h1 className='text-white font-bold text-6xl mt-4 mb-3'>
                    Reusing solar energy
                </h1>


                {/* cta  */}
                <p className='text-white text-lg mb-8'>
                    At Resolaring we are committed to giving photovoltaic panels a second life. We make agreements with suppliers and installers so that the panels do not end up in landfills.
                </p>

                {/* buttons  */}
                <div>
                    <Link to={'/marketplace'}>
                        <Button
                            size={'lg'}
                            className={"hover:bg-white/40 hover:text-white"}
                        >
                            Browse MarketPlace
                            <ArrowRight />
                        </Button>
                    </Link>
                </div>
            </div>

        </CommonSection>
    );
};

export default AboutBannerSection;