import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronDownIcon } from "lucide-react";
import OrderDetail from "./OrderDetail";

export function OrdersAccordion() {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
        >
            {
                [...new Array(6)].map((_, index) => {
                    return (
                        <AccordionItem value={`item-${index+1}`}>

                            {/* trigger  */}
                            <AccordionTrigger
                                icon={false}
                                className={'grid grid-cols-5'}
                            >
                                <p>Free Intro Meeting</p>
                                <p>Feb 15, 2025</p>
                                <p>#10001</p>
                                <p>Fulfilled</p>
                                <div className="flex items-center justify-between">
                                    <p>€0.00</p>
                                    <ChevronDownIcon
                                        className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
                                </div>
                            </AccordionTrigger>

                            {/* content  */}
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <OrderDetail />
                            </AccordionContent>
                        </AccordionItem>
                    )
                })
            }
        </Accordion>
    )
}

export default OrdersAccordion;