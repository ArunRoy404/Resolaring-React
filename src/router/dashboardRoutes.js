import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardOverviewPage from "@/pages/Dashboard/DashboardOverviewPage";
import NewListing from "@/pages/Dashboard/NewListing";
import WithdrawPage from "@/pages/Dashboard/WithdrawPage";
import ManageListing from "@/pages/Dashboard/ManageListing";
import OrderList from "@/pages/Dashboard/OrderList";
import AccountSetting from "@/pages/Dashboard/AccountSetting";
import RedirectToOverview from "@/components/Redirect/RedirectToOverview";

const dashboardRoutes = {
    path: '/dashboard',
    Component: DashboardLayout,
    children: [
        {
            index: true,
            Component: RedirectToOverview,
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
}

export default dashboardRoutes