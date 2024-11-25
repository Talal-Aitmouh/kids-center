import Offer from "@/components/Offer"
import { IoffreProps } from "@/lib/Interfaces"
import { Apple, Bus, Globe, PaintbrushIcon, Palette, Pencil } from "lucide-react"
import SectionHeader from "./SectionHeader"

const offers: IoffreProps[] = [
  {
    title: "Healthy Food",
    description: "We provide nutritious meals to support children’s physical and mental development in a fun learning environment.",
    Icon: Apple,
    color: "green"
  },
  {
    title: "Painting Learning",
    description: "Children can explore their creativity through painting sessions with expert guidance and engaging activities.",
    Icon: Palette,
    color: "blue"
  },
  {
    title: "Bus Service",
    description: "Our safe and reliable bus service ensures children can commute comfortably to and from the center.",
    Icon: Bus,
    color: "red"
  },
  {
    title: "Multi-Language",
    description: "Kids can enhance their communication skills by learning multiple languages in a playful and interactive way.",
    Icon: Globe,
    color: "orange"
  },
  {
    title: "Color Match",
    description: "Interactive activities that improve color recognition and coordination for young learners.",
    Icon: PaintbrushIcon,
    color: "purple"
  },
  {
    title: "Sketching",
    description: "Kids can learn the basics of sketching to express their artistic ideas and boost their imagination.",
    Icon: Pencil,
    color: "yellow"
  }



]

const Offers = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <SectionHeader title="What We Offre"  description="Explore a wide range of services and activities designed to nurture your child's growth, creativity, and learning in a fun and safe environment."/>
      <div className="flex  flex-col md:flex-row md:flex-wrap  justify-between gap-y-2 gap-x-1 my-2 mx-4">
        {
          offers.map((offer, index) => {
            return <Offer key={index} {...offer} />
          })
        }
      </div>
    </div>
  )
}

export default Offers