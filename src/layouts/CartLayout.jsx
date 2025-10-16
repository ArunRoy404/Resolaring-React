import NavBar from '@/shared/NavBar';
import TopBar from '@/shared/TopBar';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import AOS from 'aos';
import Lenis from 'lenis';


const CartLayout = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });

        const lenis = new Lenis({
            autoRaf: true,
        });

        return () => {
            lenis.destroy()
        }
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