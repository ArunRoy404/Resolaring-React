import DashboardHeader from '@/components/common/DashboardComponents/DashboardHeader';
import DashboardListingsColumns from '@/components/common/DashboardComponents/DashboardListingsColumns';
import DashboardTable from '@/components/common/DashboardComponents/DashboardTable';
import React from 'react';
import { useLoaderData } from 'react-router';

const ManageListing = () => {

    const listings = useLoaderData()
    return (
        <div>
            <DashboardHeader>
                Listing
            </DashboardHeader>

            <DashboardTable columns={DashboardListingsColumns} data={listings} />
        </div>
    );
};

export default ManageListing;