import { ItestimonialProps } from "@/lib/Interfaces"
import Reviewer from "./Reviewer"







const Testimonial = ({review,reviewr}:ItestimonialProps) => {
  return (
    <div className="bg-background/95  hover:scale-105 transition-all duration-300 ease-in-out my-4 rounded max-w-xs border flex flex-col justify-between cursor-pointer shadow">
        <p className="px-4 py-4 font-medium leading-relaxed">
            {review}
        </p>
        <div className="border-t flex items-center px-4 py-4">
                <Reviewer {...reviewr} />
        </div>
    </div>
  )
}

export default Testimonial