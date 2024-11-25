import Courses from "@/components/Courses"
import GalleryCarousel from "@/components/Gallery"
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
      </section>
    </>
  )
}

export default Home