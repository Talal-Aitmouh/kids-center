import { useCallback, useEffect, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { type EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

function InfiniteCarousel() {
    const images = ["/heroBanner.png", "/heroBanner2.png", "/heroBanner3.png"]
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on('select', onSelect)
        }
    }, [emblaApi, onSelect])

    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    )

    // Custom wrap function
    const wrapIndex = (index: number, length: number) => {
        return ((index % length) + length) % length
    }

    return (
        <Carousel
            ref={emblaRef}
            className="relative w-full"
            opts={{
                align: 'start',
                loop: true,
            }}
        >
            <CarouselContent>
                {[...images, ...images].map((image, index) => (
                    <CarouselItem key={index} className="w-full h-[70vh] md:h-[75vh] lg:h-[85vh]">
                        <div
                            className="w-full h-full bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious
                className="absolute left-2 top-1/2 bg-primary rounded-md border-none hover:bg-primary/80 -translate-y-1/2 z-10"
            />
            <CarouselNext
                className="absolute right-2 top-1/2 bg-primary rounded-md border-none hover:bg-primary/80 -translate-y-1/2 z-10"
            />
            <div className="absolute bottom-4 left-1/2  transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === wrapIndex(selectedIndex, images.length) ? 'bg-white' : 'bg-white/50'
                            }`}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div>
        </Carousel>
    )
}

export default InfiniteCarousel

