import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/Landing/HomePage";
import AuthenticationLayout from "@/layouts/AuthenticationLayout";
import SigninPage from "@/pages/Authentication/SigninPage";
import RegistrationPage from "@/pages/Authentication/RegistrationPage";
import VerifyEmailPage from "@/pages/Authentication/VerifyEmailPage";
import VerifyCodePage from "@/pages/Authentication/VerifyCodePage";
import SetPasswordPage from "@/pages/Authentication/SetPasswordPage";
import SelectRolePage from "@/pages/Authentication/SelectRolePage";
import AboutPage from "@/pages/Landing/AboutPage";
import RecyclingPage from "@/pages/Landing/RecyclingPage";
import MarketplacePage from "@/pages/Landing/MarketplacePage";
import GalleryPage from "@/pages/Landing/GalleryPage";
import EquipmentDetails from "@/pages/Landing/EquipmentDetails";
import ReviewPage from "@/pages/Landing/ReviewPage";
import SupportPage from "@/pages/Landing/SupportPage";
import CartLayout from "@/layouts/CartLayout";
import CartPage from "@/pages/Cart/CartPage";
import CheckoutLayout from "@/layouts/CheckoutLayout";
import CheckoutInfoPage from "@/pages/Checkout/CheckoutInfoPage";
import DeliveryAddressPage from "@/pages/Checkout/DeliveryAddressPage";
import DeliveryDetailsPage from "@/pages/Checkout/DeliveryDetailsPage";
import AccountPage from "@/pages/Landing/AccountPage";
import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardOverviewPage from "@/pages/Dashboard/DashboardOverviewPage";
import NewListing from "@/pages/Dashboard/NewListing";
import WithdrawPage from "@/pages/Dashboard/WithdrawPage";
import ManageListing from "@/pages/Dashboard/ManageListing";
import OrderList from "@/pages/Dashboard/OrderList";
import AccountSetting from "@/pages/Dashboard/AccountSetting";
import OrdersPage from "@/pages/Landing/OrdersPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: '/about',
                Component: AboutPage
            },
            {
                path: '/recycle',
                Component: RecyclingPage
            },
            {
                path: '/marketplace',
                Component: MarketplacePage
            },
            {
                path: '/gallery',
                Component: GalleryPage,
                loader: () => fetch('/equipments.json')
            },
            {
                path: '/gallery/review/:id',
                Component: ReviewPage,
                loader: () => fetch('/equipments.json')
            },
            {
                path: '/equipments/:id',
                Component: EquipmentDetails,
                loader: () => fetch('/equipments.json')
            },
            {
                path: '/support',
                Component: SupportPage,
            },
            {
                path: '/account',
                Component: AccountPage,
            },
            {
                path: '/orders',
                Component: OrdersPage,
            },
        ]
    },
    {
        path: '/auth',
        Component: AuthenticationLayout,
        children: [
            {
                path: 'select-role',
                Component: SelectRolePage,
            },
            {
                path: 'signin',
                Component: SigninPage,
            },
            {
                path: 'signup',
                Component: RegistrationPage,
            },
            {
                path: 'verify-email',
                Component: VerifyEmailPage,
            },
            {
                path: 'verify-otp',
                Component: VerifyCodePage,
            },
            {
                path: 'set-password',
                Component: SetPasswordPage,
            },
        ]
    },
    {
        path: '/cart',
        Component: CartLayout,
        children: [
            {
                index: true,
                Component: CartPage
            }
        ]
    },
    {
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
    },
    {
        path: '/dashboard',
        Component: DashboardLayout,
        children: [
            {
                index: true,
                element: <Navigate to={'/dashboard/overview'} />,
            },
            {
                path: 'overview',
                Component: DashboardOverviewPage,
                loader: () => fetch('/orders.json')
            },
            {
                path: 'order-list',
                Component: OrderList,
                loader: () => fetch('/orders.json')
            },
            {
                path: 'add-listing',
                Component: NewListing,
            },
            {
                path: 'withdraw',
                Component: WithdrawPage,
                loader: () => fetch('/earningList.json')
            },
            {
                path: 'manage-listing',
                Component: ManageListing,
                loader: () => fetch('/listings.json')
            },
            {
                path: 'setting',
                Component: AccountSetting,
            },
        ]
    },
]);
export default router                 