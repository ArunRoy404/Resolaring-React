import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Outlet } from 'react-router';
import NavBar from '../shared/NavBar';
import Footer from '@/shared/Footer';
import TopBar from '@/shared/TopBar';

const MainLayout = () => {
        useEffect(() => {
            AOS.init({
                duration: 1000,
                once: false,
                offset: 100,
            });
        }, []);

        return (
            <main>
                <TopBar/>
                <NavBar />
                <Outlet />
                <Footer/>
            </main>
        );
    };

    export default MainLayout;