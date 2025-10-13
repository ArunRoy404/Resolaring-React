import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { testimonials } from "@/data/testimonialData"
import TestimonialCard from "./TestimonialCard"

export function TestimonialCarousal({ setApi }) {
    return (
        <Carousel
            setApi={setApi}
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full"
        >
            <CarouselContent>
                {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className=" lg:basis-1/2">
                        <TestimonialCard testimonial={testimonial} />
                    </CarouselItem>
                ))}
            </CarouselContent>

        </Carousel>
    )
}
