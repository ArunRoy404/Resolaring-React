import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/shared/NavBar/NavBar';

const MainLayout = () => {
    return (
        <main>
            <NavBar/>
            <Outlet />
        </main>
    );
};

export default MainLayout;