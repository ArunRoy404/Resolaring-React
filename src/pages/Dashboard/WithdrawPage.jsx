import DashboardHeader from '@/components/common/DashboardComponents/DashboardHeader';
import DashboardTable from '@/components/common/DashboardComponents/DashboardTable';
import WithdrawTableColumn from '@/components/common/DashboardComponents/WithdrawTableColumn';
import React from 'react';
import { useLoaderData } from 'react-router';

const WithdrawPage = () => {

    const earningData = useLoaderData()
    return (
        <div>
            <DashboardHeader>
                Earning list
            </DashboardHeader>

            <DashboardTable columns={WithdrawTableColumn} data={earningData} />
        </div>
    );
};

export default WithdrawPage;