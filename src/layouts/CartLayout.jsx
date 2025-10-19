import NavBar from '@/shared/NavBar';
import TopBar from '@/shared/TopBar';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import AOS from 'aos';


const CartLayout = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });
    })


    return (
        <main>
            <TopBar />
            <NavBar />
            <Outlet />
        </main>
    );
};

export default CartLayout;