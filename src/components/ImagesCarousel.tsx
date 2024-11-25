import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
function ImagesCarousel() {
    const images = ["/heroBanner.png", "/heroBanner2.png", "/heroBanner3.png"]
    return (
        <Carousel className="relative">
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index} className="w-full h-[70vh] md:h-[75vh] lg:h-[85vh]" style={{ background: `url(${image}) no-repeat center center`, backgroundSize: "cover" }}>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
        </Carousel>
    )
}

export default ImagesCarousel