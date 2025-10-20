import CartLayout from "@/layouts/CartLayout";
import CartPage from "@/pages/Cart/CartPage";


const cartRoutes = {
    path: '/cart',
    Component: CartLayout,
    children: [
        {
            index: true,
            Component: CartPage
        }
    ]
}

export default cartRoutes