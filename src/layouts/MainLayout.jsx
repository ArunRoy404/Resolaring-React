import React, { useEffect } from 'react';
import AOS from "aos";
import { Outlet } from 'react-router';
import NavBar from '../components/shared/NavBar';

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
                <NavBar />
                <Outlet />
            </main>
        );
    };

    export default MainLayout;