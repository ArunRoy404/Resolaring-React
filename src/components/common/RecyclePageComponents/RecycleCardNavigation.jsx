import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';


const RecycleCardNavigation = ({image}) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={1200}
            className='h-full'
        >
            <div className='h-full relative rounded-2xl overflow-hidden flex items-center justify-center flex-col text-center bg-cover bg-center opa'
                style={{ backgroundImage: `url(${image})` }}
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
    );
};

export default RecycleCardNavigation;