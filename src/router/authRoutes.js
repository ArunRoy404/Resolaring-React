import AuthenticationLayout from "@/layouts/AuthenticationLayout";
import SigninPage from "@/pages/Authentication/SigninPage";
import RegistrationPage from "@/pages/Authentication/RegistrationPage";
import VerifyEmailPage from "@/pages/Authentication/VerifyEmailPage";
import VerifyCodePage from "@/pages/Authentication/VerifyCodePage";
import SetPasswordPage from "@/pages/Authentication/SetPasswordPage";
import SelectRolePage from "@/pages/Authentication/SelectRolePage";


const authRoutes = {
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

export default authRoutes