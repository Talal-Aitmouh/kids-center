import { IcourseCardProps } from "@/lib/Interfaces"
import Teacher from "./Teacher"
import { Button } from "./ui/button"

const CourseCard = ({ title, description, category, image, price, teacher }: IcourseCardProps) => {
    return (
        <div className="shadow rounded-sm relative max-w-md basis-96 border flex flex-col items-stretch justify-stretch mx-auto cursor-pointer hover:scale-105 transition-all duration-150 ease-in-out">
            <div className="image overflow-hidden rounded-t-sm">
                <img src={image} alt={title} className="w-full" />
            </div>
            <div className=" absolute -right-3  px-3 py-2  bg-blue-900 top-8 shadow-md -z-10 rounded-b-lg ">{category}</div>
            <div className="category absolute -right-3 px-3 py-1  bg-sky-500 top-8 shadow-2xl ">{category}</div>
            <div className="price bg-blue-950 w-14 h-14 text-white text-xl font-semibold absolute right-4 top-[50%] grid place-items-center rounded-full">{price}</div>
            <div className="title text-xl font-semibold my-4 px-5">{title}</div>
            <div className="description w-full text-base leading-relaxed mb-4 px-5 ">{description} <span>Read More </span></div>
            <div className="px-5 mb-4 flex gap-2 justify-between">
                <Teacher {...teacher} />
                <Button variant={"default"} className="px-3 rounded-sm" >Apply</Button>
            </div>
        </div>
    )
}

export default CourseCard