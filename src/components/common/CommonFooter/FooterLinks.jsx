import React from 'react';
import { Link } from 'react-router';

const FooterLinks = ({links}) => {
    return (
        <div>
            <p className='text-white  font-semibold text-lg mb-5'>Quick Link</p>
            <ul className='space-y-3'>
                {
                    links.map((link, index) => (
                        <li key={index}>
                            <Link to={link?.link}>
                                {link?.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default FooterLinks;