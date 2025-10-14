import { createBrowserRouter } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/main/HomePage";
import AuthenticationLayout from "@/layouts/AuthenticationLayout";
import SigninPage from "@/pages/Authentication/SigninPage";
import RegistrationPage from "@/pages/Authentication/RegistrationPage";
import VerifyEmailPage from "@/pages/Authentication/VerifyEmailPage";
import VerifyCodePage from "@/pages/Authentication/VerifyCodePage";
import SetPasswordPage from "@/pages/Authentication/SetPasswordPage";
import SelectRolePage from "@/pages/Authentication/SelectRolePage";
import AboutPage from "@/pages/main/AboutPage";
import RecyclingPage from "@/pages/main/RecyclingPage";
import MarketplacePage from "@/pages/main/MarketplacePage";

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
                path:'/about',
                Component: AboutPage
            },
            {
                path:'/recycle',
                Component: RecyclingPage
            },
            {
                path:'/marketplace',
                Component: MarketplacePage
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