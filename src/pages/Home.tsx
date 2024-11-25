import Courses from "@/components/Courses"
import Hero from "@/components/Hero"
import Offers from "@/components/Offers"



const Home = () => {
  return (
    <>
      <section className="w-full flex flex-col">
        <Hero />
        <Offers />
        <Courses/>
      </section>
    </>
  )
}

export default Home