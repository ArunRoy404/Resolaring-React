import { Button } from "@/components/ui/button";
import * as React from "react"
import OrderDetailsDialog from "../Dialog/OrderDetailsDialog";


const WithdrawTableColumn = [
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
        accessorKey: "withdrawAmount",
        header: () => <div className="text-white text-center">Withdraw Amount</div>,
        cell: ({ row }) => (
                <div className="capitalize text-center">${row?.original?.withdrawAmount}</div>
        ),
    },
    {
        accessorKey: "requestDate",
        header: () => <div className="text-white text-center">Request Date</div>,
        cell: ({ row }) => {
            const date = new Date(row?.original?.requestDate)
            console.log(date);
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
export default WithdrawTableColumn;