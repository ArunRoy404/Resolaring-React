import React from 'react';
import CommonSection from '../components/common/CommonSection';
import { footerData } from '@/data/footerData';
import FooterLinks from '../components/common/CommonFooter/FooterLinks';
import FooterAbout from '../components/common/CommonFooter/FooterAbout';
import ContactForm from '../components/common/CommonFooter/ContactForm';
import Copyright from '../components/common/CommonFooter/Copyright';


const Footer = () => {
    return (
        <footer className='text-[#C1C4CC]'>
            <CommonSection
                className="bg-primary"
            >

                {/* container  */}
                <div className='flex flex-col lg:flex-row justify-between md:gap-6 space-y-12'>

                    {/* About  */}
                    <FooterAbout footerData={footerData} />


                    {/* links column  */}
                    <FooterLinks links={footerData?.links} />


                    {/* COntact Form  */}
                    <ContactForm />
                </div>


                {/* copyright  */}
                <Copyright />
            </CommonSection>
        </footer>
    );
};

export default Footer;