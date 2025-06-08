'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
//import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselSpacing() {
    return (
        <section className="mx-auto px-30">
            <h1 className="text-center text-4xl mb-10">Our Gallery</h1>
            <Carousel plugins={[ Autoplay({ delay: 2000 }) ]}>
                <CarouselContent className="-ml-1">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <img className="rounded-xl" src='test.jpg' alt='gallery item' />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}
