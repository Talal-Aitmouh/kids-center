import Courses from "@/components/Courses"
import GalleryCarousel from "@/components/Gallery"
import FactSection from "@/components/FactSection"
import Hero from "@/components/Hero"
import Offers from "@/components/Offers"



const Home = () => {
  return (
    <>
      <section className="w-full flex flex-col">
        <Hero />
        <Offers />
        <Courses/>
        <GalleryCarousel/>
        <FactSection />
        <Courses />
      </section>
    </>
  )
}

export default Home