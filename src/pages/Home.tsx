import Hero from "@/components/Hero"
import Offers from "@/components/Offers"



const Home = () => {
  return (
    <>
      <section className="w-full flex flex-col">
        <Hero />
        <Offers />
      </section>
    </>
  )
}

export default Home