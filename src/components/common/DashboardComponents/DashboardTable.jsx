import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import DashboardPagination from "./DashboardPagination"
import { useEffect, useState } from "react"
import Loader from "../Loader"


export function DashboardTable({ data, columns }) {
    const [selectedData, setSelectedData] = useState([...data].slice(0, 10))
    const [pagination, setPagination] = useState({
        currentIndex: 0,
        pageSize: 10
    })
    const table = useReactTable({
        data: selectedData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    })
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        const pageSize = pagination.pageSize
        const currentIndex = pagination.currentIndex

        const startFrom = currentIndex * pageSize
        const end = startFrom + pageSize

        const newData = [...data].slice(startFrom, end)


        setIsLoading(true)
        setTimeout(() => {
            setSelectedData(newData)
            setIsLoading(false)
        }, [1000])


    }, [pagination, data])


    return (
        <div className="w-full">
            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader className={'bg-primary'} >
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isplaceHolder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>



                    <TableBody className={'relative'}>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>

                    {
                        isLoading &&
                        <div className="absolute h-full w-full top-0 flex items-center justify-center backdrop-blur-xs">
                            <Loader />
                        </div>
                    }
                </Table>

            </div>




            {/* pagination  */}
            <div className="py-8">
                <DashboardPagination
                    pagination={pagination}
                    setPagination={setPagination}
                    length={data.length}
                />
            </div>
        </div>
    )
}


export default DashboardTable;