import DashboardHeader from '@/components/common/DashboardComponents/DashboardHeader';
import DashboardStats from '@/components/common/DashboardComponents/DashboardStats';
import DashboardTable from '@/components/common/DashboardComponents/DashboardTable';
import OrdersColumn from '@/components/common/DashboardComponents/OrdersColumn';
import React from 'react';
import { useLoaderData } from 'react-router';




const DashboardOverviewPage = () => {
    const ordersHistory = useLoaderData()


    return (
        <div>
            <DashboardStats />

            <DashboardHeader>
                Order History
            </DashboardHeader>

            <DashboardTable
                isPagination
                data={ordersHistory}
                columns={OrdersColumn}
            />
        </div>
    );
};

export default DashboardOverviewPage;