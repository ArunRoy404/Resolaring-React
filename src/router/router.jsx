import { createBrowserRouter } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/Home/HomePage";
import AuthenticationLayout from "@/layouts/AuthenticationLayout";
import SigninPage from "@/pages/Authentication/SigninPage";
import RegistrationPage from "@/pages/Authentication/RegistrationPage";
import VerifyEmailPage from "@/pages/Authentication/VerifyEmailPage";
import VerifyCodePage from "@/pages/Authentication/VerifyCodePage";
import SetPasswordPage from "@/pages/Authentication/SetPasswordPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage
            }
        ]
    },
    {
        path: '/',
        Component: AuthenticationLayout,
        children: [
            {
                path: '/signin',
                Component: SigninPage,
            },
            {
                path: '/signup',
                Component: RegistrationPage,
            },
            {
                path: '/verify-email',
                Component: VerifyEmailPage,
            },
            {
                path: '/verify-otp',
                Component: VerifyCodePage,
            },
            {
                path: '/set-password',
                Component: SetPasswordPage,
            },
        ]
    }
]);
export default router                 