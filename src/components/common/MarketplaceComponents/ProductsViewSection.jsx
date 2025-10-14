import React from 'react';
import SectionHeading from '../SectionHeading';
import CommonSection from '../CommonSection';
import SearchBar from '../CommonTopBar/SearchBar';
import { equipments } from '@/data/equipmentsData';
import EquipmentCard from '../EquipmentCard';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ProductsFilter from './ProductsFilter';

const ProductsViewSection = () => {
    return (
        <CommonSection>
            <SectionHeading className={'text-left relative'}>
                Your market for solar panels
                <div className="absolute top-0 right-0">
                    <SearchBar className={"bg-[#F5F6F7]"} />
                </div>
            </SectionHeading>


            <div>
                <div className='flex gap-6'>
                    {/* filters  */}
                    <div className='p-6'>
                        <ProductsFilter />
                    </div>


                    {/* Equipments Grid*/}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* equipments grid  */}
                        {equipments.map((item) => (
                            <EquipmentCard key={item.id} equipment={item} />
                        ))}
                    </div>
                </div>



                {/* View All Products */}
                <div className="mt-10 text-center">
                    <Link
                        to={'/equipments'}
                    >
                        <Button
                            size={'lg'}
                        >
                            View all products
                            <ArrowRight />
                        </Button>
                    </Link>
                </div>
            </div>
        </CommonSection>
    );
};

export default ProductsViewSection;