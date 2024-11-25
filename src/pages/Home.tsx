import Courses from "@/components/Courses"
import GalleryCarousel from "@/components/Gallery"
import FactSection from "@/components/FactSection"
import Hero from "@/components/Hero"
import Offers from "@/components/Offers"
import Testimonials from "@/components/Testimonials"



const Home = () => {
  return (
    <>
      <section className="w-full flex flex-col">
        <Hero />
        <Offers />
        <FactSection />
        <Courses/>
        <GalleryCarousel/>
        <Testimonials/>
      </section>
    </>
  )
}

export default Home