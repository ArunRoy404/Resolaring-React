import CheckoutLayout from "@/layouts/CheckoutLayout";
import CheckoutInfoPage from "@/pages/Checkout/CheckoutInfoPage";
import DeliveryAddressPage from "@/pages/Checkout/DeliveryAddressPage";
import DeliveryDetailsPage from "@/pages/Checkout/DeliveryDetailsPage";


const checkoutRoutes = {
    path: '/checkout',
    Component: CheckoutLayout,
    children: [
        {
            index: true,
            Component: CheckoutInfoPage
        },
        {
            path: 'delivery-address',
            Component: DeliveryAddressPage
        },
        {
            path: 'delivery-details',
            Component: DeliveryDetailsPage
        },
    ]
}

export default checkoutRoutes
