import React from 'react';
import { Button } from '../ui/button';
import { Globe } from 'lucide-react';

const ToggleLanguage = () => {
    return (
        <Button
            variant={'outline'}
            className={' bg-transparent text-white border-white md:py-6'}
        >
            <Globe />
            EN
        </Button>
    );
};

export default ToggleLanguage;