import React from 'react';

const DashboardHeader = ({ children }) => {
    return (
        <h1 className='text-primary font-semibold text-4xl py-6'>
            {children}
        </h1>
    );
};

export default DashboardHeader;