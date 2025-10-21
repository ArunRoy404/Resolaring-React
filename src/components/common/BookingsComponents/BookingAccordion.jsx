import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import BookingHeading from "./BookingHeading";
import BookingDetails from "./BookingDetails";

export function BookingAccordion({ variant }) {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
        >
            {
                [...new Array(3)].map((_, index) => {
                    return (
                        <AccordionItem value={`item-${index + 1}`}
                            className={'border-b-2'}
                        >

                            {/* trigger  */}
                            <AccordionTrigger>
                                <BookingHeading variant={variant} />
                            </AccordionTrigger>

                            {/* content  */}
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <BookingDetails />
                            </AccordionContent>
                        </AccordionItem>
                    )
                })
            }
        </Accordion>
    )
}
export default BookingAccordion;