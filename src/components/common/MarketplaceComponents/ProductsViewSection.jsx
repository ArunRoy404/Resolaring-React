import React from 'react';
import SectionHeading from '../SectionHeading';
import CommonSection from '../CommonSection';
import SearchBar from '../CommonTopBar/SearchBar';

const ProductsViewSection = () => {
    return (
        <CommonSection>
            <SectionHeading className={'text-left relative'}>
                Your market for solar panels
                <div className="absolute top-0 right-0">
                    <SearchBar className={"bg-[#F5F6F7]"} />
                </div>
            </SectionHeading>



        </CommonSection>
    );
};

export default ProductsViewSection;