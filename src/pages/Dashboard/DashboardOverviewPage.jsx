import DashboardHeader from '@/components/common/DashboardComponents/DashboardHeader';
import DashboardPagination from '@/components/common/DashboardComponents/DashboardPagination';
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

            <DashboardTable data={ordersHistory} columns={OrdersColumn} />
        </div>
    );
};

export default DashboardOverviewPage;