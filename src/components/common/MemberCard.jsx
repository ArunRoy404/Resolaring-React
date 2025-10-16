import { Linkedin, Mail, Share2 } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import SkypeSvg from '../svg/SkypeSvg';

const MemberCard = ({ member, index }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={index * 200}
        >
            <div className='bg-[#F6F6FF] group p-3 md:p-6 border-[1.5px] border-white hover:border-secondary rounded-2xl'>

                <div className='relative'>
                    {/* image  */}
                    <img src={member?.image} className='w-full' alt="" />


                    {/* social icons  */}
                    <div className='bottom-4 right-4 absolute flex flex-col items-center gap-2'>
                        <Button size={'icon'} className={' w-7 h-7 md:w-9 md:h-9 bg-brand-primary text-white absolute group-hover:-translate-y-24 md:group-hover:-translate-y-33 transition-transform ease-in-out duration-300'}>
                            <SkypeSvg color='white' />
                        </Button>
                        <Button size={'icon'} className={' w-7 h-7 md:w-9 md:h-9 bg-brand-primary text-white absolute group-hover:-translate-y-16 md:group-hover:-translate-y-22 transition-transform ease-in-out duration-300'}>
                            <Mail />
                        </Button>
                        <Button size={'icon'} className={' w-7 h-7 md:w-9 md:h-9 bg-brand-primary text-white absolute group-hover:-translate-y-8 md:group-hover:-translate-y-11 transition-transform ease-in-out duration-300'}>
                            <Linkedin />
                        </Button>
                        <Button size={'icon'} className={'relative w-7 h-7 md:w-9 md:h-9 z-10 bg-brand-primary text-white '}>
                            <Share2 className='size-3 md:size-5'/>
                        </Button>
                    </div>

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