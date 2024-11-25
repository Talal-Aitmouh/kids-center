import Courses from "@/components/Courses"
import Hero from "@/components/Hero"
import Offers from "@/components/Offers"
import Testimonials from "@/components/Testimonials"



const Home = () => {
  return (
    <>
      <section className="w-full flex flex-col">
        <Hero />
        <Offers />
        <Courses />
        <Testimonials />
      </section>
    </>
  )
}

export default Home