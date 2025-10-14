import React from 'react';

const RecycleCard = ({ recycleInfo, index }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className='rounded-2xl'>
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
        </div>
    );
};

export default RecycleCard;