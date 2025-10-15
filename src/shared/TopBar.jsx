import React from 'react';
import HelpLogo from '../components/common/CommonTopBar/HelpLogo';
import SearchBar from '../components/common/CommonTopBar/SearchBar';
import CartButton from '../components/common/CommonTopBar/CartButton';
import ToggleLanguage from '../components/common/ToggleLanguage';

const TopBar = () => {
    return (
        <div className='py-8 bg-primary'>
            <div className='flex items-center container mx-auto px-4 justify-between'>
                <div className='flex items-center gap-12'>
                    <HelpLogo />
                    <SearchBar />
                </div>

                <div className='flex items-center gap-6'>
                    <ToggleLanguage/>
                    <CartButton />
                </div>
            </div>
        </div>
    );
};

export default TopBar;