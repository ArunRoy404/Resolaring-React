import { createBrowserRouter } from "react-router";
import mainRoutes from "./mainRoutes";
import authRoutes from "./authRoutes";
import cartRoutes from "./cartRoutes";
import checkoutRoutes from "./checkoutRoutes";
import dashboardRoutes from "./dashboardRoutes";

const router = createBrowserRouter([
    authRoutes,
    mainRoutes,
    cartRoutes,
    checkoutRoutes,
    dashboardRoutes
]);
export default router                 