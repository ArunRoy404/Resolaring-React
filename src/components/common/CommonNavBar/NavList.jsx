import React from 'react';
import { NavLink } from 'react-router';

const NavList = ({navLinks}) => {
    return (
        <nav className="hidden xl:flex items-center gap-6">
            {navLinks?.map((link) => (
                <NavLink
                    key={link?.name}
                    to={link?.href}
                    className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                    {link?.name}
                </NavLink>
            ))}
        </nav>
    );
};

export default NavList;