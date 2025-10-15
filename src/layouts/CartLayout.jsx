import NavBar from '@/shared/NavBar';
import TopBar from '@/shared/TopBar';
import React from 'react';
import { Outlet } from 'react-router';

const CartLayout = () => {
    return (
        <main>
            <TopBar />
            <NavBar />
            <Outlet />
        </main>
    );
};

export default CartLayout;