import DashboardHeader from '@/components/common/DashboardComponents/DashboardHeader';
import DashboardTable from '@/components/common/DashboardComponents/DashboardTable';
import WithdrawTableColumn from '@/components/common/DashboardComponents/WithdrawTableColumn';
import { Button } from '@/components/ui/button';
import React from 'react';
import { useLoaderData } from 'react-router';

const WithdrawPage = () => {

    const earningData = useLoaderData()
    return (
        <div>
            <DashboardHeader>
                Earning list
            </DashboardHeader>

            <div className='p-6 bg-[#EBF7EF] rounded-2xl mb-8 space-y-6'>
                <p className='text-[#6A7283] font-medium text-2xl'>
                    Sales Revenue
                </p>
                <div className='flex justify-between items-center'>
                    <p className='text-3xl font-semibold'>$5000</p>
                    <Button
                    size={'lg'}
                    className={'text-white bg-brand-primary border border-brand-primary hover:text-black hover:bg-white'}
                    >
                        Withdraw amount
                    </Button>
                </div>
            </div>

            <DashboardTable columns={WithdrawTableColumn} data={earningData} />
        </div>
    );
};

export default WithdrawPage;