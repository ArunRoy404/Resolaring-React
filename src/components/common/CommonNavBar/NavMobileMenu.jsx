import React from 'react';
import { Link } from 'react-router';
import NavButtons from './NavButtons';

const NavMobileMenu = ({ navLinks, isOpen }) => {
    return (
        <div className={`${isOpen ? '' : ' h-0 overflow-hidden'} md:hidden border-t bg-background`}>
            <nav className="flex flex-col gap-2 px-4 py-3">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.href}
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>

            <NavButtons variant='mobile' />
        </div>
    );
};

export default NavMobileMenu;