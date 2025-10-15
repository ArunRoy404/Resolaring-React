import FacebookSvg from '@/components/svg/FacebookSvg';
import XSvg from '@/components/svg/XSvg';
import { Facebook, Instagram, Link } from 'lucide-react';
import React from 'react';
import { toast } from 'sonner';

const ShareDialogContent = ({ setOpenDialog }) => {
    return (
        <div className='w-full p-10 flex flex-col items-center gap-10'>
            <p className='text-3xl font-bold'>
                Share
            </p>

            <div className='flex gap-15'>
                <Facebook
                    onClick={() => {
                        setOpenDialog(false)
                        toast.success("Successfully shared.")
                    }}
                    className='cursor-pointer'
                    size={50} />
                <XSvg
                    onClick={() => {
                        setOpenDialog(false)
                        toast.success("Successfully shared.")
                    }}
                    className='cursor-pointer'
                    size={50} />
                <Instagram
                    onClick={() => {
                        setOpenDialog(false)
                        toast.success("Successfully shared.")
                    }}
                    className='cursor-pointer'
                    size={50} />
                <Link
                    onClick={() => {
                        setOpenDialog(false)
                        toast.success("Successfully shared.")
                    }}
                    className='cursor-pointer'
                    size={50} />
            </div>
        </div>
    );
};

export default ShareDialogContent;