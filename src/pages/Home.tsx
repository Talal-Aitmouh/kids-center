import FaxtsPage from "@/components/FaxtsPage"
import Hero from "@/components/Hero"
import Offers from "@/components/Offers"



const Home = () => {
  return (
    <>
      <section className="w-full flex flex-col">
        <Hero />
        <Offers />
        <FaxtsPage />
      </section>
    </>
  )
}

export default Home