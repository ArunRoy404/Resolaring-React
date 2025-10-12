import { createBrowserRouter } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/Home/HomePage";
import AuthenticationLayout from "@/layouts/AuthenticationLayout";
import SigninPage from "@/pages/Authentication/SigninPage";
import RegistrationPage from "@/pages/Authentication/RegistrationPage";

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
            }
        ]
    }
]);
export default router                 