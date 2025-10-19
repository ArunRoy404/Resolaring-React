import { Button } from "@/components/ui/button";
import * as React from "react"
import { Link } from "react-router";
import OrderDetailsDialog from "../Dialog/OrderDetailsDialog";
import EquipmentSelect from "../GalleryComponents/EquipmentSelect";
import ListingSelect from "./ListingSelect";


const DashboardListingsColumns = [
    {
        accessorKey: "productImage",
        header: () => <div className="text-white text-center">Product Image</div>,
        cell: ({ row }) => {
            return (
                <img src={row?.original?.productImage} alt="" className="w-[112px] rounded" />
            )
        }
    },
    {
        accessorKey: "title",
        header: () => <div className="text-white text-center">Title</div>,
        cell: ({ row }) => (
            <div className="capitalize text-center">{row?.original?.title}</div>
        ),
    },
    {
        accessorKey: "price",
        header: () => <div className="text-white text-center">Price</div>,
        cell: ({ row }) => (
            <div className="capitalize text-center">{row?.original?.price}</div>
        ),
    },
    {
        accessorKey: "status",
        header: () => <div className="text-white text-center">Status</div>,
        cell: ({ row }) => {
            const status = row?.original?.status
            return (
                <div className="text-center">
                    <Button
                        variant={'outline'}
                        className={`text-center w-[126px] text-white 
                            ${status === 'pending' ? '!border-secondary bg-secondary hover:bg-white'
                                : status === 'active' ? "border-green-600 bg-green-600 hover:bg-white hover:border-green-600" : ''
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
        cell: () => <ListingSelect />
    },
]

export default DashboardListingsColumns;