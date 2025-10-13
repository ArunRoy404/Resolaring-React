import React from 'react';
import CommonSection from '../common/CommonSection';
import Logo from '../common/Logo';
import { footerData } from '@/data/footerData';
import { Button } from '../ui/button';
import { Globe } from 'lucide-react';
import { Link } from 'react-router';
import FooterLinks from '../common/CommonFooter/FooterLinks';

const Footer = () => {
    return (
        <footer className='text-[#C1C4CC]'>
            <CommonSection
                className="bg-primary"
            >

                {/* container  */}
                <div className='flex justify-between'>

                    {/* about column */}
                    <div>
                        <Logo variant={'secondary'} />

                        {/* description */}
                        <p className='mt-6 mb-10 max-w-[508px]'>
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
                            <Button
                                variant={'outline'}
                                className={' bg-transparent border-white'}
                            >
                                <Globe />
                                EN
                            </Button>

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


                    {/* links column  */}
               <FooterLinks links={footerData?.links}/>
                </div>
            </CommonSection>
        </footer>
    );
};

export default Footer;