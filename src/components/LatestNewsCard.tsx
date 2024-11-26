import { ILatestNewsCardProps } from "@/lib/Interfaces"
import { Calendar, Heart, MessageCircle } from "lucide-react"

function LatestNewsCard({image, like, title, description, date, comment}:ILatestNewsCardProps) {
  return (
    <div className="w-[90%] space-y-4 rounded flex flex-col border mx-auto md:w-[80%]">
        <img src={image} className="w-full h-[50%] object-cover rounded-t" alt="" />
        <div className="w-full h-10 px-3 flex items-center">
            <div className=" h-full flex items-center px-2 gap-2">
                <Calendar className="w-5 h-5" />
                <h1 className="font-bold text-sm">{date}</h1>
            </div>
            <div className="h-full flex items-center px-2 gap-2">
                <Heart />
                <h1 className="font-bold text-sm">{like}</h1>
                <MessageCircle />
                <h1 className="font-bold text-sm">{comment}</h1>
            </div>
        </div>
        <h1 className="text-lg px-3 font-bold">{title}</h1>
        <p className="px-3 pb-2">{description}</p>
    </div>
  )
}

export default LatestNewsCard