import { Button } from '@/components/ui/button';
import React from 'react';

const GalleryUploadSection = () => {
    return (
        <div>


            {/* for empty gallery  */}
            <div
                className='space-y-2 py-16 text-center max-w-[550px] mx-auto'
            >
                <h2 className='text-primary text-3xl'>
                    No Uploaded Items Yet
                </h2>

                <p className='text-gray-400'>
                    Start adding photos & videos to the Shared Gallery
                </p>

                <Button
                    className={'mt-4 bg-brand-primary text-white border border-brand-primary hover:text-brand-primary hover:bg-white'}
                >
                    Start Now
                </Button>
            </div>
        </div>
    );
};

export default GalleryUploadSection;       