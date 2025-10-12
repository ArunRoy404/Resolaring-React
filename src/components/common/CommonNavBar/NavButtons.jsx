import { Button } from '@/components/ui/button';
import { ArrowRight, UserCircle } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const NavButtons = ({ variant }) => {
    if (variant === 'mobile') {
        return (
            <div className="flex flex-col gap-2 px-4 pb-4">
                <Button className="flex items-center gap-1 justify-center">
                    Become a Seller <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full">
                    <UserCircle className="h-5 w-5" />
                    Login
                </Button>
                <Button variant="ghost" className="flex items-center gap-2 justify-center">
                    Book Online
                </Button>
            </div>
        )
    }
    return (
        <div className="hidden md:flex items-center gap-3">
            <Link>
                <Button className="flex items-center gap-1">
                    Become a Seller <ArrowRight className="h-4 w-4" />
                </Button>
            </Link>
            <Link>
                <Button variant="outline">
                    <UserCircle className="h-5 w-5" />
                    Login
                </Button>
            </Link>
            <Link>
                <Button variant="ghost" className="flex items-center gap-2 justify-center">
                    Book Online
                </Button>
            </Link>
        </div>
    );
};

export default NavButtons;