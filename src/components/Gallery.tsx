import * as React from "react"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeader from "./SectionHeader"

const images = [
  "/gallery-01.jpg",
  "/gallery-02.jpg",
  "/gallery-03.jpg",
  "/gallery-04.jpg",
  "/gallery-05.jpg",
]

export default function GalleryCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [
    Autoplay({ delay: 4000, stopOnInteraction: true })
  ])
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
      })
    }
  }, [emblaApi])

  return (
    <div className="w-full py-8 sm:py-12 ">
      <div className="container mx-auto ">
      <SectionHeader title="Our Gallery" description="Discover the moments that inspire us. Browse through our curated collection showcasing creativity, beauty, and innovation." />
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {images.map((src, index) => (
                <div key={index} className="flex">
                  <div
                    className={`relative w-[280px] sm:w-[340px] md:w-[390px] ${
                      index === selectedIndex ? 'z-10' : ''
                    }`}
                  >
                    <div
                      className={`relative w-full h-full overflow-hidden ${
                        index === selectedIndex ? 'border-[12px] sm:border-[16px] md:border-[20px] border-[#7AC143]  z-10 ' : ''
                      }`}
                    >
                      <img
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        className="object-cover w-full aspect-square"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full h-16 sm:h-20 md:h-24 flex justify-center items-center bg-[#7AC143]" >
            <div className="mt-4 sm:mt-6 md:mt-8 flex justify-center gap-3 sm:gap-4">
              <button
                onClick={scrollPrev}
                className="relative z-20 p-1.5 sm:p-2 border-2 border-white bg-[#7AC143] text-white hover:bg-white hover:text-[#7AC143] transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={scrollNext}
                className="relative z-20 p-1.5 sm:p-2 border-2 border-white bg-[#7AC143] text-white hover:bg-white hover:text-[#7AC143] transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

