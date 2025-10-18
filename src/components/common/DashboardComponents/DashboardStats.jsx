import React from 'react';

const stats = [
    {
        label: 'total Listing',
        number: 14,
        prefix: '',
        suffix: ''
    },
    {
        label: 'Pending Orders',
        number: 3,
        prefix: '',
        suffix: ''
    },
    {
        label: 'Sales Revenue',
        number: 5000,
        prefix: '$',
        suffix: ''
    },
    {
        label: 'Profile Completion',
        number: 90,
        prefix: '',
        suffix: '% Done'
    },
]

const bg = [
    '#F8EFEC',
    '#FFF9E6',
    '#EBF7EF',
    '#FAEDFF',
]

const DashboardStats = () => {
    return (
        <div className='grid grid-cols-4 gap-6'>
            {
                stats?.map((stat, index) => {
                    return (
                        <div className='p-6 rounded-2xl'
                        style={{backgroundColor: bg[index]}}
                        >
                            <p className='text-[#6A7283] font-medium text-2xl'>{stat?.label}</p>
                            <p className='text-primary font-semibold text-3xl'>
                                {stat?.prefix}
                                {stat?.number}
                                {stat?.suffix}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default DashboardStats;