import { createBrowserRouter } from "react-router";
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
                Component: GalleryPage
            },
            {
                path: '/equipments/:id',
                Component: EquipmentDetails,
                loader: () => fetch('/equipments.json')
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
    }
]);
export default router                 