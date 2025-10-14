import { Button } from '@/components/ui/button';
import { ArrowRight, UserCircle } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const NavButtons = ({ variant }) => {
    if (variant === 'mobile') {
        return (
            <div className="flex flex-col gap-2 px-4 pb-4">
                <Link to={'/'} className='w-full'>
                    <Button className="flex items-center w-full gap-1">
                        Become a Seller <ArrowRight className="h-4 w-4" />
                    </Button>
                </Link>
                <Link to={'/auth/select-role'} className='w-full'>
                    <Button variant={"outline"} className="bg-transparent flex items-center w-full gap-1">
                        <UserCircle className="h-5 w-5" />
                        Login
                    </Button>
                </Link>
                <Link to={'/'} className='w-full'>
                    <Button variant="ghost" className="flex items-center gap-2 justify-center w-full">
                        Book Online
                    </Button>
                </Link>
            </div>
        )
    }
    return (
        <div className="hidden xl:flex items-center gap-3">
            <Link to={'/'}>
                <Button className="flex items-center gap-1">
                    Become a Seller <ArrowRight className="h-4 w-4" />
                </Button>
            </Link>
            <Link to={'/auth/select-role'}>
                <Button variant="outline" className={'bg-transparent'}>
                    <UserCircle className="h-5 w-5" />
                    Login
                </Button>
            </Link>
            <Link to={'/'}>
                <Button variant="ghost" className="flex items-center gap-2 justify-center">
                    Book Online
                </Button>
            </Link>
        </div>
    );
};

export default NavButtons;