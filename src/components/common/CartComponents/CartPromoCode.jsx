import { Tags, FilePlus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button';


const CartPromoCode = () => {
    return (
        <div className='mt-3'>
            <p className='flex mb-4 items-center gap-2 text-primary cursor-pointer'>
                <Tags />
                <span className='underline'>Enter a promo code</span>
            </p>


            <div className='flex items-center justify-between'>
                <div className='relative'>
                    <Input placeHolder={'Promo Code'} />

                    <Button className={'absolute top-0 h-full right-0 bg-brand-primary text-white rounded-xl border border-brand-primary hover:text-primary hover:bg-white'} size={'lg'}>
                        Apply
                    </Button>
                </div>
                <div className='h-full'>
                    <Button className={'bg-brand-primary text-white rounded-xl border border-brand-primary hover:text-primary hover:bg-white py-6'} size={'lg'}>
                        <FilePlus />
                        Add a note
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CartPromoCode;