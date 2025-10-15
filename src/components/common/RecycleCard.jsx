import React from 'react';
import RecycleCardNavigation from './RecyclePageComponents/RecycleCardNavigation';

const RecycleCard = ({ recycleInfo, index }) => {
    return (
        <div className='group h-full'>
            <div
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className='rounded-2xl overflow-hidden relative h-full'>
                <img src={recycleInfo?.image} alt="" className='w-full' />

                {/* details  */}
                <div className='p-6 space-y-4'>
                    <h2 className='text-primary font-semibold text-3xl'>
                        {recycleInfo?.title}
                    </h2>
                    <p className='text-primary'>
                        {recycleInfo?.description}
                    </p>
                </div>


                {/* navigation overlay  */}
                <div className='absolute group-hover:translate-y-0 top-0 translate-y-full h-full transition-transform ease-in-out duration-300'>
                    <RecycleCardNavigation image={recycleInfo?.image} />
                </div>
            </div>
        </div>
    );
};

export default RecycleCard;