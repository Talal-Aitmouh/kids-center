import { IteachersCard } from "@/lib/Interfaces"
import { Mail, Phone, Share2 } from "lucide-react"

function TeachersCard({job, name, image, tel, mail}:IteachersCard) {
    return (
        <div className="w-[95%] h-[40vh] mb-2 md:basis-1/2 border flex md:w-auto lg:flex-col md:h-[25vh] lg:h-auto">
            <div className="relative w-[50%] h-full flex md:w-full">
                <img src={image} className="w-full h-full object-cover" alt="" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary flex items-center justify-center">
                    <Share2 className="text-white" size={40} />
                </div>
            </div>
            <div className="flex w-[50%] flex-col p-4 h-full md:w-full">
                <p className="font-bold test-xs">{job}</p>
                <h1 className="text-xl font-bold">{name}</h1>
                <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eligendi?
                </p>
                <div className="w-full h-full flex-col flex justify-end gap-3 md:mt-2">
                    <div className="flex gap-2 h-[30%] items-center">
                        <Phone className="text-primary" />
                        <h1>{tel}</h1>
                    </div>
                    <div className="flex h-[30%] gap-2 items-center">
                        <Mail className="text-primary" />
                        <h1 className="text-sm">{mail}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeachersCard