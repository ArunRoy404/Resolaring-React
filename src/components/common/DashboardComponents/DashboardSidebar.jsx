import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar';
import React from 'react';
import Logo from '../Logo';
import { Button } from '@/components/ui/button';
import { ChartArea, Clipboard, ClipboardCheck, ClipboardClock, LogOut, UserPen } from 'lucide-react';
import { toast } from 'sonner';
import { NavLink } from 'react-router';

const navLink = [
    {
        icon: ChartArea,
        label: "Overview",
        path: "/dashboard",
    },
    {
        icon: Clipboard,
        label: "OveAdd New Listingrview",
        path: "/dashboard/add-listing",
    },
    {
        icon: ClipboardCheck,
        label: "Manage Listings",
        path: "/dashboard/manage-listing",
    },
    {
        icon: ClipboardClock,
        label: "Order List",
        path: "/dashboard/order-list",
    },
    {
        icon: UserPen,
        label: "Account Settings",
        path: "/dashboard/setting",
    },
]

const DashboardSidebar = () => {
    return (
        <Sidebar>
            {/* header  */}
            <SidebarHeader className={'bg-primary px-10 py-6'}>
                <Logo variant={'dashboard'} />
            </SidebarHeader>


            {/* nav link  */}
            <SidebarContent className={'bg-primary'} >
                {
                    navLink?.map(link => {
                        const { label, icon: Icon, path} = link
                        return (
                            <NavLink to={path}>
                                <button
                                    className={'pl-10 py-4 dashboard-navLink hover:bg-brand-primary w-full text-white text-sm  text-left flex items-center gap-2 cursor-pointer'}
                                >
                                    <Icon />
                                    {label}
                                </button>
                            </NavLink>
                        )
                    })
                }
            </SidebarContent>




            {/* footer  */}
            <SidebarFooter className={'bg-primary px-10 py-8'}>
                <button
                    onClick={() => toast.success("log out successful")}
                    className={'text-white !p-0  text-left flex items-center gap-2 cursor-pointer'}
                >
                    <LogOut />
                    Log Out
                </button>
            </SidebarFooter>
        </Sidebar>
    );
};

export default DashboardSidebar;