import React from 'react';
import Logo from '../Logo';
import { Link } from 'react-router';
import ToggleLanguage from '../ToggleLanguage';


const FooterAbout = ({ footerData }) => {
    return (
        <>
            {/* about column */}
            <div className='lg:min-w-[600]'>
                <Logo variant={'secondary'} />

                {/* description */}
                <p className='mt-6 mb-10 w-full md:max-w-[508px]'>
                    {footerData?.description}
                </p>

                {/* support links  */}
                <div>
                    <p className='text-white  font-semibold text-lg mb-4'>Support</p>

                    <ul className='space-y-2'>
                        <li>{footerData?.support?.email}</li>
                        <li>{footerData?.support?.phone}</li>
                        <li>{footerData?.support?.location}</li>
                    </ul>
                </div>


                {/* button and links  */}
                <div className='flex items-center gap-10 mt-4'>
                    <ToggleLanguage />

                    {/* social links  */}
                    <div>
                        <ul className='flex gap-4 '>
                            {
                                footerData.socialLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link?.link}>
                                            <img src={link?.icon} />
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterAbout;