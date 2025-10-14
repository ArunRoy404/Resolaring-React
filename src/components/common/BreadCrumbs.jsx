import { cn } from '@/lib/utils';
import React from 'react';
import { useLocation } from 'react-router';

const BreadCrumbs = ({ className, currentPath }) => {
    const { pathname } = useLocation()
    const pathSegments = pathname.split('/')

    if(currentPath) {
        pathSegments[pathSegments.length-1] = currentPath
    }

    return (
        <p className={cn(
            'text-white text-lg font-medium',
            className
        )}>
            {
                "Home > "
            }
            {
                pathSegments.map((pathSegment, index) => {
                    let path = pathSegment
                    if (index + 1 !== pathSegments.length) path = path + ' > '
                    if (pathSegment) {
                        return path
                    }
                })
            }
        </p>
    );
};

export default BreadCrumbs;