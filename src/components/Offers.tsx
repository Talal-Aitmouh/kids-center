import Offer from "@/components/Offer"
import { IoffreProps } from "@/lib/Interfaces"
import { Bike, Bus, Car } from "lucide-react"

const offers:IoffreProps[]= [
    {
        title:"bus service",
        description:"hello from home page",
        Icon:Car,
        color:"red"
    },
    {
        title:"bus service",
        description:"hello from home page",
        Icon:Bus,
        color:"green"
      },
      {
        title:"bus service",
        description:"hello from home page",
        Icon:Bike,
        color:"yellow"
      },


]

const Offers = () => {
  return (
    <div className="flex  flex-col md:flex-row justify-between gap-5 mx-4">
    {
      offers.map((offer,index)=>{
        return <Offer key={index} {...offer}/>
      })
    }
    </div>
  )
}

export default Offers