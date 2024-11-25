import { IpersonProps } from "@/lib/Interfaces"

const Teacher = ({name , image ,occupation}:IpersonProps) => {
  return (
    <div className="flex gap-2 items-start flex-1" >
        <img src={image} alt={name} className="h-[55px] w-[55px] rounded-full object-cover object-center" />
        <div className="text">
            <p className="font-bold">{name}</p>
            <p className="">{occupation}</p>
        </div>
    </div>
  )
}

export default Teacher