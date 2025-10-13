import React from 'react';

const MemberCard = ({ member, index }) => {
    console.log(index);
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={index * 200}
        >
            <div className='bg-[#F6F6FF] p-6 border-[1.5px] border-white hover:border-secondary rounded-2xl'>
                <div>
                    <img src={member?.image} alt="" />
                </div>

                <h1 className='mb-1 mt-4 text-primary font-semibold'>
                    {member?.name}
                </h1>

                <p className='text-[#6A7283]'>
                    {member?.designation}
                </p>
            </div>
        </div>
    );
};

export default MemberCard;