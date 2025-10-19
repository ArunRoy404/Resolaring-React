import { Button } from "@/components/ui/button";
import * as React from "react"
import { Link } from "react-router";
import OrderDetailsDialog from "../Dialog/OrderDetailsDialog";


const OrdersColumn = [
    {
        accessorKey: "id",
        header: () => <div className="text-white text-center">Order ID</div>,
        cell: ({ row }) => {
            return (
                <div className="capitalize text-center">{row?.original?.id}</div>
            )
        }
    },
    {
        accessorKey: "buyerName",
        header: () => <div className="text-white text-left">Buyer Name</div>,
        cell: ({ row }) => (
            <div className="flex items-center  gap-2">
                <img src={row?.original?.buyerImage} alt="" className="w-8 rounded-full" />
                <div className="capitalize text-center">{row?.original?.buyerName}</div>
            </div>
        ),
    },
    {
        accessorKey: "productName",
        header: () => <div className="text-white text-center">Product Name</div>,
        cell: ({ row }) => (
            <div className="capitalize text-center">{row?.original?.productName}</div>
        ),
    },
    {
        accessorKey: "orderDate",
        header: () => <div className="text-white text-center">Order Date</div>,
        cell: ({ row }) => {
            const date = new Date(row?.original?.orderDate)
            return (
                <div className="capitalize text-center">{date.toLocaleDateString('en-US')}</div>
            )
        }
    },
    {
        accessorKey: "status",
        header: () => <div className="text-white text-center">Product Name</div>,
        cell: ({ row }) => {
            const status = row?.original?.status
            return (
                <div className="text-center">
                    <Button
                        variant={'outline'}
                        className={`text-center w-[126px] 
                            ${status === 'pending' ? '!border-secondary text-secondary'
                                : status === 'shipped' ? "border-brand-primary text-brand-primary"
                                    : status === 'completed' ? 'border-green-600 text-green-600' : ''
                            }`}
                    >
                        {status}
                    </Button>
                </div>
            )
        }
    },
    {
        accessorKey: "action",
        header: () => <div className="text-white text-center">Action</div>,
        cell: () => <OrderDetailsDialog />
    },
]

export default OrdersColumn;         