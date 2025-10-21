import DashboardNavbar from '@/components/common/DashboardComponents/DashboardNavbar';
import DashboardSidebar from '@/components/common/DashboardComponents/DashboardSidebar';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router';


const DashboardLayout = () => {
    return (
        <div>
            <ScrollRestoration />
            <SidebarProvider>
                <DashboardSidebar />


                <SidebarInset>
                    {/* navbar  */}
                    <DashboardNavbar />

                    <div className='p-10 h-[calc(100vh-128px)] overflow-auto'>
                        {/* outlet  */}
                        <Outlet />
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>
    );
};

export default DashboardLayout;