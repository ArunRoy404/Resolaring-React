import { Button } from '@/components/ui/button';
import React from 'react';

const GalleryLikeSection = () => {
    return (
        <div>
            {/* for no likes */}
            <div
                className='space-y-2 py-16 text-center max-w-[550px] mx-auto'
            >
                <h2 className='text-primary text-3xl'>
                    No Liked Items Yet
                </h2>

                <p className='text-gray-400'>
                    Start liking your favorite photos & videos in the Shared Gallery
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

export default GalleryLikeSection;