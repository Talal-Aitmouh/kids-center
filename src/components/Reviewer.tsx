import { IpersonProps } from "@/lib/Interfaces"

const Reviewer = ({name , image ,occupation}:IpersonProps) => {
  return (
    <div className="flex gap-2 justify-between items-center  flex-1" >
        <div className="text">
            <p className="font-bold capitalize">{name}</p>
            <p className="text-primary font-bold capitalize">{occupation}</p>
        </div>
        <img src={image} alt={name} className="h-[55px] w-[55px] rounded-full object-cover object-center" />
    </div>
  )
}

export default Reviewer