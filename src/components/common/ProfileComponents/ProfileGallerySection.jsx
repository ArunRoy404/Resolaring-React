import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import GalleryTab from './GalleryTab';

const ProfileGallerySection = () => {
    return (
        <div className=' py-12'>
            <div className='space-y-8'>

                {/* heading  */}
                <div className='border-b w-full pb-12'>
                    <h1
                        className="text-primary font-semibold text-3xl"
                    >
                        Shared Gallery
                    </h1>
                    <p
                        className='text-[#6A7283] '
                    >
                        View photos you uploaded, photos you were tagged in and more.
                    </p>
                </div>


                <GalleryTab />
            </div>
        </div>
    );
};
export default ProfileGallerySection;