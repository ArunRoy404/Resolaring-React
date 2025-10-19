import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
} from "@/components/ui/pagination"
import { ChevronLeft, ChevronRight } from "lucide-react";

export function DashboardPagination() {
    return (
        <Pagination className={'max-w-max mx-0 '}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationLink href="#" className={'rounded border border-gray-300'}>
                        <ChevronLeft />
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" className={'rounded border border-gray-300'}>
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" className={'rounded border border-gray-300'}>
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" isActive className={'rounded bg-brand-primary text-white border-brand-primary'}>
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" className={'rounded border border-gray-300'}>
                        4
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" className={'rounded border border-gray-300'}>
                        ...
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" className={'rounded border border-gray-300'}>
                        <ChevronRight />
                    </PaginationLink>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}


export default DashboardPagination;