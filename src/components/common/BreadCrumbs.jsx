import React from 'react';
import { useLocation } from 'react-router';

const BreadCrumbs = () => {
    const { pathname } = useLocation()
    const pathSegments = pathname.split('/')

    return (
        <p className='text-white text-lg font-medium'>
            {
                "Home > "
            }
           {
            pathSegments.map((pathSegment, index)=>{
                let path = pathSegment
                if(index+1 !== pathSegments.length) path = path+ ' > '
                if(pathSegment){
                    return path
                }
            })
           }
        </p>
    );
};

export default BreadCrumbs;