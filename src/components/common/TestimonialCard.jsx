import { Star } from 'lucide-react';
import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className='bg-white rounded-[12px] p-8 group gap-8 flex flex-col-reverse md:grid md:grid-cols-3 hover:bg-primary transition-colors duration-500'>
            <div className='col-span-2'>
                {/* icons  */}
                <div className='flex items-center gap-1 mb-4'>
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} color='yellow-400' className="fill-yellow-400" />
                    ))}
                </div>

                {/* review  */}
                <p className='mb-2 text-primary group-hover:text-white  transition-colors duration-500 text-xs md:text-sm lg:text-base'>
                    {testimonial?.review}
                    <span className='text-secondary ml-2'>See More</span>
                </p>

                {/* name  */}
                <h2 className='mb-4 flex gap-2 items-center'>
                    <hr className='w-6 border-brand-primary border' />
                    <span className='font-semibold text-brand-primary md:text-base text-sm'> {testimonial?.userName}</span>
                </h2>

                {/* designation */}
                <p className='text-[#6A7283] text-xs md:text-base'>
                    {testimonial?.designation}
                </p>
            </div>
            <div >
                <img
                    className='rounded-2xl h-50 md:h-auto overflow-hidden'
                    src={testimonial?.userImage} alt={testimonial?.userName}
                />
            </div>
        </div>
    );
};

export default TestimonialCard;