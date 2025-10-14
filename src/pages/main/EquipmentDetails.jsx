import BreadCrumbs from '@/components/common/BreadCrumbs';
import CommonSection from '@/components/common/CommonSection';
import FacebookSvg from '@/components/common/svg/FacebookSvg';
import LinkedinSvg from '@/components/common/svg/LinkedinSvg';
import PinterestSvg from '@/components/common/svg/PinterestSvg';
import WhatsappSvg from '@/components/common/svg/WhatsappSvg';
import XSvg from '@/components/common/svg/XSvg';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const EquipmentDetails = () => {
    const { id } = useParams()
    const allData = useLoaderData()
    const [equipment, setEquipment] = useState({})


    useEffect(() => {
        const data = allData.filter(item => {
            return item.id == id
        })
        setEquipment(data[0])
    }, [id, allData])


    return (
        <CommonSection>
            <BreadCrumbs
                className={'text-primary'}
                currentPath={equipment?.title}
            />

            <div className='grid grid-cols-2 gap-12 mt-6'>

                {/* images grid  */}
                <div className='grid grid-cols-2 gap-6'>
                    <div className='relative w-full h-[300px] col-span-2 rounded-2xl overflow-hidden' >
                        <img className='w-full' src={equipment?.image} alt={equipment?.title} />
                    </div>
                    <div className='relative w-full rounded-2xl overflow-hidden' >
                        <img className='w-full' src={equipment?.image} alt={equipment?.title} />
                    </div>
                    <div className='relative w-full rounded-2xl overflow-hidden' >
                        <img className='w-full' src={equipment?.image} alt={equipment?.title} />
                    </div>
                </div>


                {/* content  */}
                <div>
                    <Badge className={'p-2 px-4 bg-[#2FA75F52] text-primary font-bold'} >
                        New
                    </Badge>

                    <h1 className='text-primary font-semibold text-5xl mt-4 mb-2'>
                        {equipment?.title}
                    </h1>

                    <div className='space-y-4'>
                        <Badge className={'p-2 px-4 bg-[#F5F6F7] text-primary font-bold'} >
                            JA Solar
                        </Badge>
                        <Badge className={'p-2 px-4 bg-[#F5F6F7] text-primary font-bold'} >
                            Model Number
                        </Badge>
                    </div>

                    <p className='mt-4 mb-8 text-lg text-[#6A7283]'>
                        {equipment?.details}
                    </p>

                    <p className='mt-4 text-lg text-[#6A7283]'>
                        Excluding Sales Tax
                    </p>

                    <div className='flex items-center gap-10 mb-8'>
                        <p className='text-3xl line-through font-semibold text-[#6A7283]'>
                            55,00 €
                        </p>
                        <p className='text-4xl font-semibold text-primary]'>
                            50,00 €
                        </p>
                    </div>


                    <div className='max-w-max text-[#6A7283] mb-8'>
                        <p className='mb-2'>Quantity</p>
                        <Input
                            defaultValue={1}
                        />
                    </div>

                    <Button className={'w-full py-7'}>
                        Add to Cart
                        <ArrowRight />
                    </Button>

                    <div className='mt-8 flex items-center gap-3'>
                        <FacebookSvg />
                        <PinterestSvg />
                        <WhatsappSvg />
                        <LinkedinSvg />
                        <XSvg />
                    </div>
                </div>
            </div>

        </CommonSection>
    );
};

export default EquipmentDetails;