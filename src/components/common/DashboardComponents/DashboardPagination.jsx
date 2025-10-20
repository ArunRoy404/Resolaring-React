import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
} from "@/components/ui/pagination"
import { ChevronLeft, ChevronRight } from "lucide-react";

export function DashboardPagination({ setPagination, pagination, length }) {

    const { pageSize, currentIndex } = pagination
    const totalPage = Math.ceil(length / pageSize)
    const previousIndex = Math.max(0, currentIndex - 1)
    const nextIndex = Math.min(totalPage - 1, currentIndex + 1)

    const numberOfButtons = Math.min(4, totalPage)
    const startingButton = Math.max(0, currentIndex - 2)

    return (
        <Pagination className={'max-w-max mx-0 '}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationLink
                        onClick={() => setPagination({ ...pagination, currentIndex: previousIndex })}
                        className={'rounded border border-gray-300'}>
                        <ChevronLeft />
                    </PaginationLink>
                </PaginationItem>


                {
                    currentIndex > 2
                        ?
                        <PaginationItem>
                            <PaginationLink className={'rounded border border-gray-300'}>
                                ...
                            </PaginationLink>
                        </PaginationItem>
                        : <></>
                }



                {
                    [...new Array(numberOfButtons)].map((_, index) => {
                        const realIndex = startingButton + index

                        if (realIndex + 1 > totalPage) return <></>

                        return (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    onClick={() => setPagination({ ...pagination, currentIndex: realIndex })}
                                    className={`rounded border ${realIndex === currentIndex ? ' bg-brand-primary text-white border-brand-primary' : 'border-gray-300 '}`}
                                >
                                    {realIndex + 1}
                                </PaginationLink>
                            </PaginationItem>
                        )
                    })
                }



                {
                    totalPage - currentIndex - 1 > 1
                        ?
                        <PaginationItem>
                            <PaginationLink className={'rounded border border-gray-300'}>
                                ...
                            </PaginationLink>
                        </PaginationItem>


                        : <></>
                }


                <PaginationItem>
                    <PaginationLink
                        onClick={() => setPagination({ ...pagination, currentIndex: nextIndex })}
                        className={'rounded border border-gray-300'}
                    >
                        <ChevronRight />
                    </PaginationLink>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}


export default DashboardPagination;