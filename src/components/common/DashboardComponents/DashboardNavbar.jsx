import { SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';
import SearchBar from '../CommonTopBar/SearchBar';
import { Button } from '@/components/ui/button';
import { BellDot, PlusCircle } from 'lucide-react';
import avatar from "@/assets/Images/avatarBig.svg"

const DashboardNavbar = () => {
    return (
        <div className='flex items-center justify-between p-10'>
            <div className='flex items-center gap-2'>
                <SidebarTrigger className={'scale-150'} />
                <h1 className='text-primary text-4xl font-semibold'>Overview</h1>
            </div>


            <div className='flex items-center gap-2'>
                <SearchBar className={'py-5 bg-[#F5F6F7] mr-0'} />
                <Button 
                size={'lg'}
                >
                    Add Product
                    <PlusCircle />
                </Button>
                <Button variant={'icon'} className={'bg-transparent'}>
                    <BellDot/>
                </Button>
                <div className='flex items-center gap-2'>
                    <img className='w-10' src={avatar} alt="" />

                    <div>
                        <p className='text-primary'>John Doe</p>
                        <p className='text-gray-400'>Seller</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;