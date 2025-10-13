import React from 'react';

const ProcedureCard = ({ procedure, index }) => {
    return (
        <div
            className='bg-white p-6 rounded-2xl'
        data-aos="fade-up"
        data-aos-delay={index * 200}
        >
            <div>
                <img src={procedure?.icon} alt="" />
            </div>
            <h1 className='mt-8 mb-4 text-primary font-semibold text-2xl'>
                {procedure?.label}
                </h1>
            <p
            className='text-[#6A7283]'
            >
                {procedure?.description}

            </p>
        </div>
    );
};

export default ProcedureCard;