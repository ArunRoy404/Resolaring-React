import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/Landing/HomePage";
import AboutPage from "@/pages/Landing/AboutPage";
import RecyclingPage from "@/pages/Landing/RecyclingPage";
import MarketplacePage from "@/pages/Landing/MarketplacePage";
import GalleryPage from "@/pages/Landing/GalleryPage";
import EquipmentDetails from "@/pages/Landing/EquipmentDetails";
import ReviewPage from "@/pages/Landing/ReviewPage";
import SupportPage from "@/pages/Landing/SupportPage";
import AccountPage from "@/pages/Landing/AccountPage";
import OrdersPage from "@/pages/Landing/OrdersPage";
import ProfilePage from "@/pages/Landing/ProfilePage";
import BookingPage from "@/pages/Landing/BookingPage";

const mainRoutes = {
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
        {
            path: '/profile',
            Component: ProfilePage,
            loader: () => fetch('/equipments.json')
        },
        {
            path: '/bookings',
            Component: BookingPage,
        },
    ]
}

export default mainRoutes