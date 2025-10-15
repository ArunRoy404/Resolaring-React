import CartPayment from '@/components/common/CartComponents/CartPayment';
import CartTable from '@/components/common/CartComponents/CartTable';
import CommonSection from '@/components/common/CommonSection';

const CartPage = () => {
    return (
        <CommonSection>
            <div className='flex gap-13'>
                <CartTable />

                <CartPayment />
            </div>
        </CommonSection>
    );
};

export default CartPage;