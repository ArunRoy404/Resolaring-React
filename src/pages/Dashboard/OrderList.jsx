import DashboardHeader from '@/components/common/DashboardComponents/DashboardHeader';
import DashboardTable from '@/components/common/DashboardComponents/DashboardTable';
import OrdersColumn from '@/components/common/DashboardComponents/OrdersColumn';
import React from 'react';
import { useLoaderData } from 'react-router';




const OrderList = () => {
    const ordersHistory = useLoaderData()


    return (
        <div>

            <DashboardHeader>
                List
            </DashboardHeader>

            <DashboardTable data={ordersHistory} columns={OrdersColumn} />
        </div>
    );
};

export default OrderList;