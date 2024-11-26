import Courses from "@/components/Courses"
import GalleryCarousel from "@/components/Gallery"
import FactSection from "@/components/FactSection"
import Hero from "@/components/Hero"
import Offers from "@/components/Offers"
import Testimonials from "@/components/Testimonials"
import LatestNews from "@/components/LatestNews"



const Home = () => {
  return (
    <>
      <section className="w-full flex flex-col overflow-x-hidden">
        <Hero />
        <Offers />
        <FactSection />
        <Courses />
        <GalleryCarousel />
        <Testimonials />
        <LatestNews />
      </section>
    </>
  )
}

export default Home